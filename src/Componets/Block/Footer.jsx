import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/Files/imagenes";

const SectionMain = styled.section`
  background: url("../src/assets/Files/BG-pelicula-sucia.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const ContenedorFooter = styled.section`
    display: grid
;
    justify-content: center;
    align-items: center;
    padding: 20px;
    justify-items: center;
}
  a{
  color: #fff;
  text-decoration: none;
  }


  div{
  display:flex;
  gap: 10px;

  a{
  font-family:Roboto;
  }
  }

  ul{
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    li{
  
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <SectionMain>
      <ContenedorFooter>
        <div>
          <a href="">Politica de cookies</a>
          <hr />
          <a href="">Aviso legal</a>
        </div>

        <ul>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </ContenedorFooter>
    </SectionMain>
  );
};

export default Footer;
