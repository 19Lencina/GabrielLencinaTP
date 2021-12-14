import {useEffect, useState} from "react";
import { httpGet, httpPost } from "../utils/axion";
 
const axios = require("axios");

const Courses = () => {
     
    const [filtered,] = useState(false)
  const [courses, setCourses] = useState([])

  const [codigo, setCodico] = useState([])

  const fetchCourses = () => {
    httpGet('api/courses/')
      .then((res) => setCourses(res.data))
  }

  const createPagina = () => {
    httpPost('api/pagina/', {codigo: codigo})
      .then(fetchCourses)
  }

  useEffect(fetchCourses, []) 

    return (
    <div>
        <section class="form-register">
    <h4>Formulario Registro</h4>
    <input className="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
    <input className="controls" type="text" name="apellido" id="apellidos" placeholder="Ingrese su Apellido"/>
    <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
    <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña"/>
    <a className="botons" href="./Profile.js">Registrarme</a>
    <p>Estoy de acuerdo con:<a className="link" href="terminis.html"> Terminos y condiciones</a></p>
    <p><a className="link" href="iniciar.html">¿Ya tengo Cuenta?</a></p>
    </section>
    <form onCrear={createPagina}>
    <div className="create-mi">
  <div className="col-auto">
    <label for="inputPassword6" class="col-form-label">Codigo</label>
    <input value={codigo} onChange={(e) => setCodico(e.target.value)}/>
  </div>
  <div className="create-mi">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <button type="submit" class="">Crear</button>
  <div class="col-auto">
  <span id="passwordHelpInline" class="form-text">
    Cree su codigo
    </span>
  </div>
</div>
</form>
    </div>
    )
    }
 

    export default Courses