import React from 'react';
import { validate } from "./rut"
export default function MiValidador(params) {
    
    const [rutIngresado, setRutIngresado] = React.useState(params.valor);

    const [clave, setClave] = React.useState("");

    

    const change = (e)=>{
        setRutIngresado(e.target.value)
    }
    const onChangePassword = (e)=>{
        setClave(e.target.value);
    }

     if(clave === "Bolano12") 
     return <img src="https://image.shutterstock.com/image-vector/emoji-emoticon-pulling-his-finger-600w-1607332054.jpg"
            alt="ojito"
            width="100"
            height="100" /> 

     return  (<div>
        <input type="text" value={rutIngresado} onChange={change}  />
       { validate(rutIngresado) && 
           <input type="password"  value={clave} onChange={onChangePassword}  />
           
       }
       </div>)
}