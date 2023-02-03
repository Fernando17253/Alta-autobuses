import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/unnamed.png"
import '../../assets/styles/Login.css'

function LoginNuevo() {

const [doselemento, setDoselemento] = useState ({username: '', password: ''})

/*const handlerClick = (e)=>{
e.preventDefault();
setDescription  ({msn:doselemento});
}*/

const handlerChange = (e) =>{
setDoselemento ({...doselemento,username:e.target.value})
}

const handlerChangepassword = (e) =>{
setDoselemento ({...doselemento,password:e.target.value})
}

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
                usuario: newForm.get("user"),
                contrasenia: newForm.get("pass"),
            })
        };

        fetch("http://34.225.239.102/api/iniciar", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
                navigate("/altaautobus")
            });
       
    };

    return (
        <div className="formulario1">
        <div className="formulario">
            
            

                <div className="logos">
            <img src={Logo} alt="Logo" height="100px" />
</div>

<div className="furmulario3">
<form ref={form}>

            <input type="text" name="user" placeholder="usuario" value={doselemento.username} onChange={handlerChange}/>
            <input type="password" name="pass" placeholder="contraseña" value={doselemento.password} onChange={handlerChangepassword} />
            
            
            <Link to="/altaautobus">
            <button  onClick={handlerClick}>Iniciar Sesion</button>
            </Link> 

            <Link to="/register">
                <button >Regitrarme</button>
            </Link>

            </form>
            </div>
            </div>
        </div>
        
        
     );
}

export default LoginNuevo;

