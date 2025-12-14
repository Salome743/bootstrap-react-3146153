import "./Home.css";

function Home() {
    return (
        <>
<footer className="footer">
            <div className="footer-container">
                <h1>CONTÁCTANOS</h1>

                <div className="datos">
                <h3>DATOS</h3>
                <p>Cel: 3004456982</p>
                <p>Correo: chroitmsp@gmail.com</p>

                <label>INGRESA AQUÍ TU CORREO:</label>
                <input type="email" placeholder="tu-email@correo.com"></input>
                </div>

                <div className="redes">
                <h3>REDES</h3>

                <div className="iconos">
                    <a href="#" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="#" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="#" target="_blank"><i className="bi bi-twitter-x"></i></a>
                </div>
                </div>

            </div>
</footer>
        </>
    );
}

export default Home;