import avatar from "../../assets/78-786207_user-avatar-png-user-avatar-icon-png-transparent-removebg-preview.png";
import logo from "../../assets/logoKenzie.png";
import { useState } from "react";
import {
  ContentContainer,
  EditButton,
  ImageContainer,
  LogoFigure,
  MainContainer,
  ProfileInfo,
} from "./profile.style";

export default function Profile() {
  const [showPerfil, setShowPerfil] = useState(false);
  const user = JSON.parse(localStorage.getItem("@ask_demo:user")) || "";

  const handlePerfil = () => {
    setShowPerfil(!showPerfil);
  };
  return (
    <MainContainer>
      <LogoFigure>
        <img src={logo} alt="logo kenzie academy Brasil" />
      </LogoFigure>
      <ContentContainer>
        <h2>Bem vindo {user?.user_name}</h2>
        <span onClick={handlePerfil}>Perfil</span>
        {showPerfil && (
          <ProfileInfo>
            {user?.user_avatar === "" ? (
              <ImageContainer>
                <img src={avatar} />
                <span>edit</span>
              </ImageContainer>
            ) : (
              <ImageContainer>
                <img src={user?.user_avatar} />
                <span>trocar foto</span>
              </ImageContainer>
            )}
            <p>Nome: {user?.user_name}</p>
            <p>Email: {user?.user_email}</p>
            <p>Genero: {user?.user_gender}</p>
            <p>Atribuição: {user?.user_profile}</p>
            <EditButton>editar informações</EditButton>
          </ProfileInfo>
        )}
      </ContentContainer>
    </MainContainer>
  );
}
