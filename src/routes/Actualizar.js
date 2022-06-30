import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar  from '../components/Navbar';
import '../css/App.css';

function Actualizar() {
  const [producto, setProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [aroma, setAroma] = useState("");
  const [precio, setPrecio] = useState("");
  const [ID, setID] = useState(null);
  const sendDataToAPI = () => {
    // e.PreventDefault();
    axios
      .put(`http://localhost:5000/productos/${ID}`, {
        producto,
        marca,
        aroma,
        precio,
      })
      .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));

    console.warn(producto, marca, aroma, precio);

    console.log(producto);
    console.log(marca);
    console.log(aroma);
    console.log(precio);
  };

  useEffect(() => {
    setProducto(localStorage.getItem("´producto"));
    setMarca(localStorage.getItem("marca"));
    setAroma(localStorage.getItem("aroma"));
    setPrecio(localStorage.getItem("precio"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
      <div className="contentBox">
      <Navbar/>
      <div className="formBox">
        <h2> Modificar el producto elegido</h2>

        <form>
          <div className="inputBox">
            <span> Producto </span>
            <input
              name="nombreproducto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Ingresar producto"
            />
          </div>

          <div className="inputBox">
            <span> Marca </span>
            <input
              name="nombremarca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              placeholder="Ingresar marca"
            />
          </div>

          <div className="inputBox">
            <span> Aroma </span>
            <input
              name="nombrearoma"
              value={aroma}
              onChange={(e) => setAroma(e.target.value)}
              placeholder="Ingresar aroma"
            />
          </div>

          <div className="inputBox">
            <span> Precio </span>
            <input
              name="nombreprecio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingresar precio"
            />
          </div>


          <div className="inputBox">
            <Link to="/crear">
              <input
                type="button"
                onClick={sendDataToAPI}
                value="Actualizar"
                className="update"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Actualizar;
