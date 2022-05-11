import React, { useEffect, useState } from "react";
import { SpanContainer } from "./AnsweredAsks.style";
import { Container } from "./InstructorDashboard.style";
import {
  AskBody,
  AskButton,
  AskFormButton,
  CreateAskContainer,
  SelectContainer,
} from "./UserDashboard.style";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import AsksContainer from "../components/asksContainer/asksContainer";
import Profile from "../components/profile/profile";
import TitleContainer from "../components/titleContainer/titleContainer";
import { useAsks } from "../providers/AsksProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const createAskSchema = yup.object().shape({
  ask_body: yup.string().required(),
  ask_theme: yup.string().required(),
  ask_sub_theme: yup.string().required(),
});

export default function UserDashboard() {
  const [createNewAsk, setCreateNewAsk] = useState(false);
  const [theme, setTheme] = useState("");
  const [subTheme, setsubTheme] = useState("");
  const [askBody, setAskBody] = useState("");
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("@ask_demo:user")) || "";

  const { loadAsks, asks, createAsk, setAsks } = useAsks();
  const { handleSubmit } = useForm();

  useEffect(() => {
    setAsks(loadAsks(user));
  }, []);

  const handleCreateAsk = () => {
    setCreateNewAsk(!createNewAsk);
  };

  const onSubmitFunction = async () => {
    const data = {
      ask_theme: theme,
      ask_sub_theme: subTheme,
      ask_body: askBody,
    };
    await createAsk(data, user);
    const newAsks = await loadAsks(user);
    setAsks(newAsks);
    setTheme("");
    setsubTheme("");
    setAskBody("");
  };

  const handleNavigate = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <Profile />
      <div className="title-ask-container">
        <TitleContainer />
        <AskButton onClick={handleCreateAsk}>Fazer pergunta</AskButton>
        {createNewAsk && (
          <CreateAskContainer onSubmit={handleSubmit(onSubmitFunction)}>
            <SelectContainer>
              <label htmlFor="ask_theme">Assunto: </label>
              <select
                name="ask_theme"
                onChange={(e) => setTheme(e.target.value)}
                value={theme}
              >
                <option>Selecione</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JS</option>
              </select>
            </SelectContainer>
            <SelectContainer>
              <label htmlFor="ask_sub_theme">Tema: </label>
              <select
                name="ask_sub_theme"
                onChange={(e) => setsubTheme(e.target.value)}
                value={subTheme}
              >
                <option>Selecione</option>
                {theme === "html" && (
                  <>
                    <option value="semantic">Semântica</option>
                    <option value="tags">Tags</option>
                    <option value="meta-tags">Meta-tags</option>
                    <option value="other">Outros</option>
                  </>
                )}
                {theme === "css" && (
                  <>
                    <option value="position">Posicionamento</option>
                    <option value="selectors">Seletores</option>
                    <option value="pseudo-classes">Pseudo Classes</option>
                    <option value="pseudo-element">Pseudo Elementos</option>
                    <option value="other">Outro</option>
                  </>
                )}
                {theme === "js" && (
                  <>
                    <option value="variables">Variáveis</option>
                    <option value="operators">Oepradores</option>
                    <option value="functions">Funções</option>
                    <option value="condictionals">Condicionais</option>
                    <option value="arrays">Arrays</option>
                    <option value="objects">Objetos</option>
                    <option value="methods">Métodos</option>
                    <option value="dom">DOM</option>
                    <option value="other">Outros</option>
                  </>
                )}
              </select>
            </SelectContainer>
            <AskBody
              name="ask_body"
              id="ask_body"
              cols={30}
              rows={10}
              onChange={(e) => setAskBody(e.target.value)}
              value={askBody}
            ></AskBody>
            <AskFormButton type="submit">Fazer Pergunta</AskFormButton>
          </CreateAskContainer>
        )}
        <AsksContainer />
      </div>
      <span onClick={() => handleNavigate("/redFlagAsks")}>redflag</span>
      <span onClick={() => handleNavigate("/answeredAsks")}>answered</span>
      <span onClick={() => handleNavigate("/demoAdm")}>instructor</span>
    </Container>
  );
}
