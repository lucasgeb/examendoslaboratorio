import { Link } from "react-router-dom";
import '../css/App.css';

const NoEncontrada = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p> Como sabemos que no te leerás esto salvo
            haciendo clic en alguna página que no existe(y
            todas nuestras páginas existen),podemos
            permitirnos el lujo de escribir cualquier cosa.
            Por ejemplo:el dulce de leche está
            sobrevalorado.</p>
            <Link to="/" className="btn btn-outline-dark">
                Inicio
            </Link>
        </div>
    );
};

export default NoEncontrada;
