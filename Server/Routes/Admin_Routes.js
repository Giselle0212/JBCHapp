const Admin = require('../Controllers/Admin_Controller');

module.exports = (app) =>{
    app.get('/api/Admin', Admin.findAll);
    app.post('/api/Admin', Admin.create);
    app.get('/api/Admin/:id', Admin.findOne);
    app.post('/api/Admin/login', Admin.login);
    app.post('/admin/forgot', Admin.requestPasswordReset);
    app.post('/api/admin/reset', Admin.resetPassword);
}
