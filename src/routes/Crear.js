import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import '../css/App.css';

function Create() {
  const [producto, setProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [aroma, setAroma] = useState("");
  const [precio, setPrecio] = useState("");



  const sendDataToAPI = () => {
    axios
      .post(`http://localhost:5000/productos`, {
        producto,
        marca,
        aroma,
        precio,
      })

      .then(() => {})
      .catch((err) => console.log(err));

    console.warn(producto, marca, aroma, precio);
    console.log(producto);
    console.log(marca);
    console.log(aroma);
    console.log(precio);
  };

  return (
    <>
    <Navbar/>
    <div className="contentBox">

      <div className="formBox">
        <h1> Ingresar un nuevo producto</h1>

        <form>
          <div className="inputBox">
            <span> Producto </span>
            <input
              name="nombreproducto"
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Ingresar producto"
            />
          </div>

          <div className="inputBox">
            <span> Marca </span>
            <input
              name="nombremarca"
              onChange={(e) => setMarca(e.target.value)}
              placeholder="Ingresar marca"
            />
          </div>

          <div className="inputBox">
            <span> Aroma </span>
            <input
              name="nombrearoma"
              onChange={(e) => setAroma(e.target.value)}
              placeholder="Ingresar aroma"
            />
          </div>

          <div className="inputBox">
            <span> Precio </span>
            <input
              name="nombreprecio"
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingresar precio"
            />
          </div>

          <div className="inputBox">
            <input type="button" value="Enviar" onClick={sendDataToAPI} />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Create;
