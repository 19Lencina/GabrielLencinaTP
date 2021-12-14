const Perfil = () => {
    return(
<div>
<body>
<section className="form-register">
    <h4>Iniciar sesion</h4>
   <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
   <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña"/>
   <a className="botons" href="pagina.html">Iniciar</a> 
<p>No tengo cuenta:<a className="link" href="index.html"> Registrarme</a></p>
</section>
</body>
</div>
);
}

export default  Perfil