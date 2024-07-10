import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Main = (props) => {
    const [attendees, setAttendees] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:8000/api/attendees')
            .then(res => {
                console.log(res.data)
                setAttendees(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const goToUpdate = (attendeeID) => {
        console.log(attendeeID)
        navigate("/attendees/" + attendeeID + "/edit")
    }



    const deleteAttendee = (deleteID) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar esta información? Haz click en "Okay" para continuar o en " Cancelar " para detener la acción.`)) {
            axios.delete('http://localhost:8000/api/attendees/' + deleteID)
                .then(res => {
                    console.log('delete succefull', res.data)
                    setAttendees(attendees.filter((attendee) => attendee._id !== deleteID))
                })
                .catch(err => console.log(err))
        }
    }
    //  total number of attendees
    const totalAttendees = attendees.length;

    //  total number of children
    const children = attendees.filter(attendee => attendee.edad >= 5 && attendee.edad <= 12);
    const childrenCount = children.length;

    // total number of adults
    const adults = attendees.filter(attendee => attendee.edad >= 13 && attendee.edad <= 100);
    const adultsCount = adults.length;

    // total number of guests
    const totalInvitados = attendees.filter(attendee => attendee.invitado).length;



    return (
        <div className='mainBox'>
            <div>
                {/* <Link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px", padding: "25px" }} viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </Link> */}
            </div>
            <h2>Registro de Asistencia</h2>
            <div className='wrapper'>
                <div className='totalContainer'>
                    <p>Total:</p>
                    <p>{totalAttendees}</p>
                </div>
                <div id='attendesCount'>
                    <div className='attendesCountByGroups'>
                        <p>Niños<span style={{ fontSize: "14px" }}>(5-12)</span></p>
                        <p>Adultos<span style={{ fontSize: "14px" }}>(13-100)</span></p>
                        <p>Invitados</p>
                    </div>
                    <div className='attendesCountByGroups'>
                        <p>{childrenCount}</p>
                        <p>{adultsCount}</p>
                        <p>{totalInvitados}</p>
                    </div>
                </div>
            </div>
            <div className='mainTableContent'>
                <div class='mainTableDb'>
                        <p>Nombre Completo</p>
                        <p>Edad</p>
                        <p>Iglesia</p>
                        <p>invitado</p>
                        <p></p>
                </div>
                {
                    attendees.map((oneAttendee) => {
                        return (
                            <div key={oneAttendee._id} >
                                <div class='mainTableDb'>
                                    <p>{oneAttendee.nombre} {oneAttendee.apellido}</p>
                                    <p>{oneAttendee.edad}</p>
                                    <p>{oneAttendee.iglesia}</p>
                                    <p>{oneAttendee.invitado ? "SI" : "NO"}</p>
                                    <div style={{display:"flex", gap:"6px"}}>
                                    <p><button id='EditBtn' onClick={() => goToUpdate(oneAttendee._id)}>Edit</button></p>
                                    <p><button id='DeleteBtn' onClick={() => deleteAttendee(oneAttendee._id)}>Delete</button></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main