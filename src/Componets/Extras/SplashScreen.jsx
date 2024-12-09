import styled from "styled-components";
import { imgpruebas } from "../../assets/Files/imagenes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "animate.css";

const Pantalla = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Figura = styled.figure`
  transition: all 1s ease-in-out;
  img {
    width: 400px;
    -webkit-box-shadow: 0px 0px 67px -1px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 0px 0px 67px -1px rgba(0, 0, 0, 0.71);
    box-shadow: 0px 0px 67px -1px rgba(0, 0, 0, 0.71);
  }

  &:hover {
    scale: 1.1;
  }
`;
function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/Landing");
    }, 3000);

    return () => clearTimeout(time);
  }, [navigate]);

  return (
    <Pantalla>
      <Figura>
        <img
          className="animate__animated animate__flash"
          src={imgpruebas}
          alt=""
        />
      </Figura>
    </Pantalla>
  );
}

export default SplashScreen;
