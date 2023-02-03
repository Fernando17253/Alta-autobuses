import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/unnamed.png"
import '../../assets/styles/FormRegister.css'
import '../../assets/styles/Login.css'

function RegisterNuevo() {
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
                nombre: newForm.get("name"),
                usuario: newForm.get("user name"),
                correo: newForm.get("correo"),
                contrasenia: newForm.get("password"),
            })
        };

        fetch("http://34.225.239.102/api/registrar/usuario", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
                navigate("/")
            });
    }
    return ( 
       <div className="formulario1">
        <div className="formulario">

        

            <img src={Logo} alt="Logo" height="100px" />

            <form ref={form}>
            
            <input type="text" id="name" placeholder="Nombre" name="name"/> 
            
            <input type="text" placeholder="Correo" name="correo"/>
            
            <input type="text" placeholder="User name" name="user name"/>
            
            <input type="password" name="password" id="pass" placeholder="Contraseña"/>

            <Link to="/altaAutobus"><button onClick={handlerClick}>Registrarme</button></Link>

            </form>
            </div>
        </div>
     );
}

export default RegisterNuevo;