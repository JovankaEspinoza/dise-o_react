
import jova from './fotos/jova.png';
import yo from './fotos/yo.jpeg';
function Integrantes() {
    return(
    <div >
        <h2>INTEGRANTES</h2>
        <section class="contenedor">
                
              
                <div class="contenedor-galeria">
    <img src= {jova} alt="Imagen1" ></img>
    <p>Jovanka Espinoza Cajas</p>
                            <p>jovespinoza@alumnos.uai.cl</p>
                            <a class="button" href="jovanka/new_j.html">sobre mi</a>
    </div>
    <div class="contenedor-galeria">
    <img src= {yo} alt="Imagen1" ></img>
    <p>Francisco Faba</p>
                            <p>ffba@alumnos.uai.cl</p>
                            <a class="button" href="francisco/Francisco.html">sobre mi</a>
  </div>

  

       
        </section>
    </div>
    );

}

export default Integrantes;