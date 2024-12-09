import React from "react";
import { imgpruebas } from "../../assets/Files/imagenes";
import styled from "styled-components";

const Card = styled.section`
  display: flex;
  gap: 50px;
  align-items: center;
  .Portada {
    img {
      width: 400px;
      height: 400px;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .ContenidoCards {
    display: grid
;
    gap: 0;
    h2 {
      color: #fff;
      font-family: roboto;
      font-size: 60px;
      margin: 20px 0;
    }

    p {
      font-size: 30px;
      width: 250px;
      color: rgba(255, 255, 255, 80%);
      font-family: roboto;
      margin: 15px 0;
    }
    strong {
      color: #95ff00;
      font-family: under;
      font-size: 25px;
    }
    .boton {
      width: 150px;
      height: 30px;
      padding: 2px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease-in-out;
     background-color: #207B25;
     top:10px;
   position:relative;

a{
  color: #fff;
     text-decoration:none;
     font-size:25px;
      font-family: under;

}

      &:hover {
        background-color: #34a63a;
        cursor: pointer;
        color: #000;
      }
    }

    }
  }
`;

const Cards = () => {
  return (
    <>
      <Card>
        <div className="Portada">
          <img src={imgpruebas} alt="portada" />
        </div>
        <div className="ContenidoCards">
          <h2>Plaza de frestyle </h2>
          <p>Parque colon 29 De diciembre 08:00 PM</p>
          <strong>Inscripción: Gratis</strong>
          <div className="boton">
            <a href="#">inscribirme</a>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Cards;
