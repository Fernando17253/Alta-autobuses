import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/FormRegister.css'
import Logo from "../../assets/img/unnamed.png"
import '../../assets/styles/Autobus.css'

function AutobusAdo() {

    const navigate = useNavigate()

    const form = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(form.current);
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                clave: newForm.get("id"),
                placa: newForm.get("placa"),
                numasientos: newForm.get("asientos"),
                fecha: newForm.get("fecha"),
                tipo: newForm.get("tipo"),
                nombre: newForm.get("nombre"),
                licencia: newForm.get("licencia")
            })
        };

        fetch("http://34.225.239.102/api/autobus/register", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
                navigate("/")
            });
       
    };

    return (
    <div id="formulario1">
        <div id="formulario">

            <div>
            <img src={Logo} alt="Logo" height="150vh" width="150vw"/>
            </div>

            <form ref={form}>

                <input type="text" name="id" placeholder="Clave Autobus"></input>
                <input type="text" name="placa" placeholder="Placa Autobus"></input>
            
                <input type="text" name="asientos" placeholder="Numero de asientos"></input>
                <input type="date" name="fecha" placeholder="Fecha de alta"></input>
            
                <select name="tipo" className="options">
                    <option >Tipo</option>
                    <option >Lujo</option>
                    <option >Turismo</option>
                </select>
                 
                <input type="text" name="nombre" placeholder="Nombre del Chofer" ></input>
                <input type="text" name="licencia" placeholder="Numero de licencia"></input>
           
            <button onClick={handlerClick}> Alta de autobus</button>

            </form>
            </div>
        </div>
    );
}

export default AutobusAdo;