import pgimg from "../imagenes/nalga14.jpg";
import pgim2 from "../imagenes/costilla.16.jpg";
import pgimg3 from "../imagenes/entrecot-15.jpg";
import pgimg4 from "../imagenes/asado.17.jpg";
const Pagina = () => {
    return(
    <div>
        <section>
    <center>
    <h2>Productos</h2>
    
    
    <h3>Nalga</h3>
    <img src={pgimg} className="card-img-top" alt="..."/>
    <h4 class="price">Precio por kilo:$850</h4>
    
    
    <h3>Costilla</h3>
    <img src={pgim2} className="card-img-top" alt="..."/>
    <h4 class="950">Precio por kilo:$950 </h4>
    

    <h3>Entrelot</h3>
    <img src={pgimg3} className="card-img-top" alt="..."/>
    <h4 class="price">Precio por kilo:$550</h4>
    
    
    <h2>Ofertas</h2>
    
    
    <h3>Asado</h3>
    <img src={pgimg4} className="card-img-top" alt="..."/>
    <h4 class="price">Precio por kilo:$750</h4>
    </center>
    </section> 
    </div>)
    }

    export default Pagina