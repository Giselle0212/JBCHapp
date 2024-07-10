import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Update = (props) => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [iglesia, setIglesia] = useState('')
    const [edad, setEdad] = useState('')
    const [invitado, setInvitado] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:8000/api/attendees/' + id)
            .then(res => {
                console.log(res.data)
                setNombre(res.data.nombre)
                setApellido(res.data.apellido)
                setIglesia(res.data.iglesia)
                setEdad(res.data.edad)
                setInvitado(res.data.invitado)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])


    const updateAttendee = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/attendees/' + id, { nombre, apellido, iglesia, edad, invitado })
            .then(res => {
                console.log(" client sucess")
                console.log(res.data)
                navigate('/main')
            })
            .catch(err => {
                console.log(' client error ')
                console.log(err)

            })

    }


    return (
        <div>
            <form onSubmit={updateAttendee}>
                <div className="formContainer" >
                    <div className="container1">
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" onChange={e => setNombre(e.target.value)} value={nombre} placeholder="Nombre" />
                        </div>
                        <div>
                            <label htmlFor="">Apellido</label>
                            <input type="text" onChange={e => setApellido(e.target.value)} value={apellido} placeholder="Apellido" />
                        </div>
                    </div>

                    <div className="container2">
                        <div>
                            <label htmlFor="">Iglesia</label>
                            <select id="iglesia" onChange={(e) => setIglesia(e.target.value)} value={iglesia} required>
                                <option value="Santo Domingo">Santo Domingo</option>
                                <option value="La Canela">La Canela</option>
                                <option value="New Jersey">New Jersey</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Edad</label>
                            <input type="number" onChange={e => setEdad(e.target.value)} value={edad} placeholder="Edad" style={{ "-webkit-appearance": "none", "-moz-appearance": "textfield" }} />
                        </div>
                    </div>
                    <div>
                        <div className="checkboxInput">
                            <input type="checkbox" onChange={e => setInvitado(e.target.checked)} checked={invitado} />
                            <label htmlFor="">Invitado?</label>
                        </div>
                        <p style={{ color: "rgba(117, 117, 117, 1)", fontSize: "14px", paddingLeft: "1vh" }}>Si usted ha sido invitado/a, por favor marque esta casilla.</p>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button id="RegistrationBtn">Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default Update