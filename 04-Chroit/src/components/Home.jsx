import "./Home.css";
import Producto from "./Producto.jsx";

import totePurple from "../assets/totePurple.png";
import toteWhite from "../assets/toteWhite.png";

function Home() {
  return (
    <>
        {/* SECCION-SHOP */}
        <section className="container my-5">
        <h2 className="productos-title text-center">PRODUCTOS</h2>

            <div className="row g-5">

                <div className="col-12 col-md-4">
                <Producto
                    imagen={totePurple}
                    nombre="TOTE BAG"
                    precio="$000.000"
                
                />
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={toteWhite}
                    nombre="TOTE BAG"
                    precio="$000.000"
                
                />
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={totePurple}
                    nombre="TOTE BAG"
                    precio="$000.000"
                />
                </div>

                <div className="col-12 col-md-4">
                
                <Producto
                    imagen={toteWhite}
                    nombre="TOTE BAG"
                    precio="$000.000"
                    />
                    
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={totePurple}
                    nombre="TOTE BAG"
                    precio="$000.000"
                />
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={toteWhite}
                    nombre="TOTE BAG"
                    precio="$000.000"
                    textoBoton="verde"
                />
                </div>

            </div>

        </section>

        {/* SECCION-CREADORAS */}
        <section className="team-section container">

        <h2 className="team-title text-center">NUESTRO EQUIPO DE TRABAJO</h2>

            <div className="team-grid">

                {/* SALOME */}
                <div className="team-card">
                <img src="../src/assets/salome.png" alt="integrante" className="team-avatar" />

                <h3>Salome</h3>

                <div className="team-role">
                    <i className="bi bi-pencil"></i>
                    <span>Ilustradora</span>
                </div>

                <p>
                    una de las creadoras de CHROIT, y mi esencia está en lo visual.
                    <br/><br/>
                    Como la mente gráfica del equipo, me apasiona transformar ideas en mundos visuales que hablen por sí solos.
                    <br/><br/>
                    Mi inspiración nace de una verdad que siempre ha estado presente: las civilizaciones antiguas son el origen de todo. 
                    Aunque pasen mil años, su sabiduría y simbolismo siguen siendo pilares fundamentales de nuestra historia.
                </p>
                </div>

                {/* MARIANA */}
                <div className=" team-card">
                <img src="../src/assets/mariana.png" alt="integrante" className="team-avatar" />

                <h3>Mariana</h3>

                <div className="team-role">
                    <i className="bi bi-pencil"></i>
                    <span>Editora</span>
                </div>

                <p>
                    una de las creadoras de CHROIT, y mi esencia está en la Edición.
                    <br/><br/>
                    Soy la voz silenciosa detrás de cada palabra. Me aseguro de que la historia fluya, que cada diálogo tenga sentido y que cada emoción llegue con fuerza.
                    <br/><br/>
                    En un mundo donde el lector elige su camino, mi trabajo es que todos los caminos tengan alma, coherencia y poder narrativo.
                    No solo corrijo errores. Doy forma a lo que emociona, conecta y permanece.
                </p>
                </div>

                {/* PAULINA */}
                <div className="team-card">
                <img src="../src/assets/paulina.png" alt="integrante" className="team-avatar" />

                <h3>Paulina</h3>

                <div className="team-role">
                    <i className="bi bi-pencil"></i>
                    <span>Guionista</span>
                </div>

                <p>
                    una de las creadoras de CHROIT, y mi esencia está en los Guiones.
                    <br/><br/>
                    Mi trabajo es construir el mundo, dar vida a los personajes y escribir las decisiones que el lector podrá tomar.  
                    No solo cuento una historia, creo caminos posibles, con emociones reales y consecuencias distintas.
                    <br/><br/>
                    Cada diálogo, cada silencio y cada giro está pensado para que el lector no solo lea, sino sienta que es parte de la historia.
                </p>
                </div>

            </div>

        </section>

        <section className="mensaje-section container">

            <div className="mensaje-box">
                <p>
                En Sombras del Despertar, nuestro enfoque es claro: demostrar que lo ancestral y lo tecnológico no son opuestos, sino dos fuerzas que, juntas, pueden contar historias poderosas.
                De nuestra parte, buscamos ese equilibrio: memoria y evolución conviviendo en un mismo universo.
                </p>
            </div>

        </section>

        <footer class="footer">
            <div class="footer-container">
                <h1>CONTÁCTANOS</h1>

                <div class="datos">
                <h3>DATOS</h3>
                <p>Cel: 3004456982</p>
                <p>Correo: chroitmsp@gmail.com</p>

                <label>INGRESA AQUÍ TU CORREO:</label>
                <input type="email" placeholder="tu-email@correo.com"></input>
                </div>

                <div class="redes">
                <h3>REDES</h3>

                <div class="iconos">
                    <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-twitter-x"></i></a>
                </div>
                </div>

            </div>
        </footer>

    </>
  );
}

export default Home;
