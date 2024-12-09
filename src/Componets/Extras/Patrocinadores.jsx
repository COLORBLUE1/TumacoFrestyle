import React from "react";
import { imgpruebas, Logo } from "../../assets/Files/imagenes";
import styled from "styled-components";

const SectionMain = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 50px;
    h2 {
      color: #fff;
      font-family: Roboto;
    }
    ul {
      width: 500px;
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
      li {
        color: #fff;
        width: 600px;
        text-align: center;
        font-family: Roboto;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
`;

const Patrocinadores = () => {
  return (
    <SectionMain>
      <div>
        <h2>PATROCINADORES</h2>
        <ul>
          <li>
            <img src={imgpruebas} alt="" />
          </li>
          <li>
            <img src={imgpruebas} alt="" />
          </li>
          <li>
            <img src={imgpruebas} alt="" />
          </li>
          <li>
            <img src={imgpruebas} alt="" />
          </li>
        </ul>
      </div>
    </SectionMain>
  );
};

export default Patrocinadores;
