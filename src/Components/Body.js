import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css'; // Asegúrate de tener este archivo Body.css

function Body() {
  const mostrarMensaje = () => {
    const mensaje = "Eres fan de Rick and Morty";
    alert(mensaje);
  };

  const Personajes = [
    { id: 1, Nombre: "Rick Sanchez"},
    { id: 2, Nombre: "Morty Smith"},
    { id: 3, Nombre: "Summer Smith"},
    { id: 4, Nombre: "Beth Smith"}
  ];

  return (
    <div className="contenedor">
      <h2>Personajes</h2>
      {Personajes.map((p, index) => (
        <div className="personaje" key={index}>
          <p>
            ID: {p.id} / Nombre: <strong>{p.Nombre}</strong> 
          </p>
        </div>
      ))}

      <button className="btn btn-success" onClick={mostrarMensaje}>Muestrame</button>
    </div>
  );
}

export default Body;
