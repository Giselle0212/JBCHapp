const Admin= require('../Models/Admin_Model');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');


module.exports = {
    findAll: (req, res) =>{
        Admin.find()
        .then(allDaAdmins => {
            res.json(allDaAdmins)
        })
        .catch(err => res.json(err))
    },
    create: async (req, res) => {
        const { name, password, email } = req.body;

        // Check if name is provided
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        // Check if password is provided and has a minimum length of 6 characters
        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Password is required and should be at least 6 characters long' });
        }

        // Check if the email is already in use
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ error: 'Email is already in use' });
        }

        // If all checks pass, hash the password and create the admin
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newAdmin = new Admin({
                name,
                email,
                password: hashedPassword
            });

            await newAdmin.save();

            console.log('Server success');
            res.json(newAdmin);
        } catch (err) {
            console.error('Server error', err);
            res.status(500).json({ error: 'Server error' });
        }
    },
    findOne: (req,res) => {
        Admin.findById(req.params.id)
        .then(oneAdmin => res.json(oneAdmin))
        .catch(err => res.json(err))
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Find admin by email
            const admin = await Admin.findOne({ email });

            if (!admin) {
                return res.status(404).json({ error: 'Admin not found' });
            }

            // Compare passwords
            const isMatch = await bcrypt.compare(password, admin.password);

            if (!isMatch) {
                return res.status(401).json({ error: 'Incorrect password' });
            }

            // Passwords match, login successful
            res.status(200).json({ message: 'Login successful', admin });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Server error. Please try again.' });
        }
    },
    
    requestPasswordReset: async (req, res) => {
        const { email } = req.body;

        try {
            // Generate reset token and expiry time
            const resetToken = crypto.randomBytes(20).toString('hex');
            const resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

            // Find admin by email and update reset token
            const admin = await Admin.findOneAndUpdate(
                { email },
                { resetToken, resetTokenExpiry },
                { new: true }
            );

            if (!admin) {
                return res.status(404).json({ error: 'Admin not found' });
            }

            // Send password reset email
            const mailOptions = {
                from: 'your_email@gmail.com',
                to: email,
                subject: 'Password Reset Request',
                html: `
                    <p>You are receiving this email because you (or someone else) has requested the reset of the password for your account.</p>
                    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
                    <p><a href="http://localhost:3000/reset/${resetToken}">Reset Password</a></p>
                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
                `
            };

            await transporter.sendMail(mailOptions);
            res.json({ message: 'Password reset email sent' });

        } catch (error) {
            console.error('Password reset error:', error);
            res.status(500).json({ error: 'Server error. Please try again.' });
        }
    },
    resetPassword: async (req, res) => {
        const { token, password } = req.body;

        try {
            // Find admin by reset token and check if token is valid
            const admin = await Admin.findOne({
                resetToken: token,
                resetTokenExpiry: { $gt: Date.now() }
            });

            if (!admin) {
                return res.status(400).json({ error: 'Invalid or expired token' });
            }

            // Update password and clear reset token fields
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            admin.password = hashedPassword;
            admin.resetToken = undefined;
            admin.resetTokenExpiry = undefined;

            await admin.save();

            res.json({ message: 'Password reset successful' });

        } catch (error) {
            console.error('Password reset error:', error);
            res.status(500).json({ error: 'Server error. Please try again.' });
        }
    }

}