import React from "react";
import NavBar from "../Block/NavBar";
import Footer from "../Block/Footer";
import styled from "styled-components";
import Cards from "../Block/Cards";
import SobreNosotros from "../Extras/SobreNosotros";
import Patrocinadores from "../Extras/Patrocinadores";

const SectionMain = styled.section`
  background: url("../src/assets/Files/BG-pelicula-sucia.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
`;

const SectionOne = styled.section`
  transition: all 1s ease-in-out;
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100vh;
  paddign: 30px;
  padding: 20px;
  .textoInial {
    color: #fff;
    text-align: center;
    position: relative;
    h1 {
      //150px
      font-size: clamp(4.375rem, 0.804rem + 9.524vw, 9.375rem);
      font-family: Roboto;
      margin: 0;
    }
    span {
      position: absolute;
      // 180px
      font-size: clamp(4.375rem, -0.536rem + 13.095vw, 11.25rem);
      font-family: under;
      left: 50%;
      transform: translateX(-50%);
      top: 80px;
      color: #95ff00;
    }
  }
`;
const SectionTwe = styled.section`
  transition: all 1s ease-in-out;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 70px;
  height: 100vh;
  paddign: 30px;
  padding: 20px;
  .textoInial {
    color: #fff;
    text-align: center;
    position: relative;
    h1 {
      //150px
      font-size: clamp(4.375rem, 0.804rem + 9.524vw, 9.375rem);
      font-family: Roboto;
      margin: 0;
    }
    span {
      position: absolute;
      // 180px
      font-size: clamp(4.375rem, -0.536rem + 13.095vw, 11.25rem);
      font-family: under;
      left: 50%;
      transform: translateX(-50%);
      top: 80px;
      color: #95ff00;
    }
  }
`;

const MainLanding = () => {
  return (
    <>
      <SectionMain>
        <NavBar />

        <SectionOne>
          <div className="textoInial">
            <h1>Tumaco es</h1>
            <span>Frestyle</span>
          </div>
        </SectionOne>
        <SectionTwe>
          {/* <div className="textoInial">
          <h1>Tumaco es</h1>
          <span>Frestyle</span>
        </div> */}

          <Cards />
        </SectionTwe>

        <SobreNosotros />
        <Patrocinadores />
        <Footer />
      </SectionMain>
    </>
  );
};

export default MainLanding;
