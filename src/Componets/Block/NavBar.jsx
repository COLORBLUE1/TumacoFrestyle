import React from "react";
import { Logo } from "../../assets/Files/imagenes";
import styled from "styled-components";
import "../../assets/Style/Font.css";

const NavB = styled.nav`
  align-items: center;
  height: 50px;
  width: 80vw;
  margin: auto;
  color: #fff;
  font-family: roboto;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: auto;
    position: fixed;
    width: 80vw;
    z-index: 999;
    background: linear-gradient(177deg, #0c1d0e, #00000003);
    padding: 10px;
    border-radius: 0 0 50px 50px;

    li {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.5s ease-in-out;

        &:hover {
          color: #95ff00;
        }
      }
    }
  }

  .Logo {
    img {
      height: 50px;
      cursor: pointer;
    }
  }

  .li_items {
    display: flex;
    gap: 30px;
    cursor: pointer;

    .Boton {
      width: 100px;
      height: 30px;
      padding: 2px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 1px #fff solid;
      transition: all 0.5s ease-in-out;

      p {
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        background-color: #fff;
        cursor: pointer;
        color: #000;
      }
    }
  }
`;

const NavBar = () => {
  return (
    <NavB>
      <ul>
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="li_items">
          <li>
            <a href="#" id="SectionTwe">
              EVENTOS
            </a>
          </li>
          <li>
            <a href="#">SOBRE NOSOTROS</a>
          </li>
          <li>
            <a href="#">CONTACTOS</a>
          </li>

          <div className="Boton">
            <p>INGRESAR</p>
          </div>
        </div>
      </ul>
    </NavB>
  );
};

export default NavBar;
