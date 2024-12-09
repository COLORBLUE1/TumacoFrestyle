import React from "react";
import { imgpruebas, Logo } from "../../assets/Files/imagenes";
import styled from "styled-components";

const SectionMain = styled.section`
  .oneSection {
    height: 50vh;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 50px;
    img {
      height: 200px;
      width: 350px;
    }
    p {
      color: #fff;
      width: 600px;
      text-align: center;
      font-family: Roboto;
    }
  }

  .twoSection {
    height: 100vh;
    justify-content: center;
    align-items: center;

    div {
      display: grid;
      justify-items: center;
      align-items: center;
      figure {
        img {
          width: 200px;
          height: 200px;
          border-radius: 100%;
        }
      }
      span {
        display: grid;
        justify-items: center;

        strong {
          color: #fff;
          font-size: 40px;
          font-family: under;
        }
          a{
             color: #c2c2c2;
          font-size: 12px;
          font-family: Roboto;
          }
        p {
          color: #c2c2c2;
          font-size: 15px;
          font-family: Roboto;
        }
      }
    }
  }
`;

const SobreNosotros = () => {
  return (
    <SectionMain>
      <div class="oneSection">
        <img src={Logo} alt="" />
        <p>
          Bienvenidos a la comunidad de freestyle en Tumaco, Nariño. Creada por
          Abel, conocido como Colorblue, nuestra página es el lugar donde
          celebramos el talento local. Aquí encontrarás información sobre los
          próximos eventos y batallas en vivo. Únete a nosotros y vive la
          energía del freestyle en cada esquina de Tumaco. ¡Siente el ritmo!
        </p>
      </div>

      <div class="twoSection">
        <div>
          <figure>
            <img src={imgpruebas} alt="" />
          </figure>
          <span>
            <strong>Camilo sol</strong>
            <a href="#">AKA - @ColorBlue</a>
            <p>Front End Developer - Desing UX/IU</p>
          </span>
        </div>
        <div>
          <figure>
            <img src={imgpruebas} alt="" />
          </figure>
          <span>
            <strong>Samir</strong>
            <a href="#">AKA - @ColorBlue</a>
            <p>Organizador</p>
          </span>
        </div>
      </div>
    </SectionMain>
  );
};

export default SobreNosotros;
