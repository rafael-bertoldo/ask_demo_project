import React from "react";
import AsksContainer from "../components/asksContainer/asksContainer";
import TitleContainer from "../components/titleContainer/titleContainer";
import { Container } from "./InstructorDashboard.style";
import {
  Button,
  FormContainer,
  InputContainer,
  LoginContainer,
  Message,
} from "./Home.styles";
import logo from "../assets/logoKenzie.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const signInSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Home() {
  const history = useHistory();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const { signIn } = useAuth();

  const handleSignIn = (data) => {
    signIn(data);

    history.push("/dashboard");
  };
  return (
    <Container>
      <LoginContainer>
        <img src={logo} alt="logo kenzie" />
        <h3>Para fazer uma pergunta, faça login</h3>
        <FormContainer onSubmit={handleSubmit(handleSignIn)}>
          <InputContainer>
            <label htmlFor="email">Email:</label>
            {errors.email && <span>{errors.email?.message}</span>}
            <input type="text" id="name" {...register("email")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Senha:</label>
            <input type="text" id="password" {...register("password")} />
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </FormContainer>
        <Message>
          Ainda não possui conta? <span>Cadastre-se</span>
        </Message>
      </LoginContainer>
      <div className="title-ask-container">
        <TitleContainer />
        <AsksContainer />
      </div>
    </Container>
  );
}
