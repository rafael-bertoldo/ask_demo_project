// import { asks } from "../../providers/asks";
import { Container } from "./asksContainer.style";
import { FiEdit2 } from "react-icons/fi";
import { useAsks } from "../../providers/AsksProvider";
import { useState } from "react";
import {
  AskBody,
  AskFormButton,
  CreateAskContainer,
  SelectContainer,
} from "../../pages/UserDashboard.style";
import { useForm } from "react-hook-form";

export default function AsksContainer() {
  const [editModal, setEditModal] = useState(false);
  const [theme, setTheme] = useState("");
  const [subTheme, setsubTheme] = useState("");
  const [askBody, setAskBody] = useState("");
  const [askId, setAskId] = useState("");
  const user = JSON.parse(localStorage.getItem("@ask_demo:user")) || "";
  const { asks, editAsk, setAsks, loadAsks } = useAsks();
  const { handleSubmit } = useForm();

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  const onSubmitEdit = async () => {
    const data = {
      ask_theme: theme,
      ask_sub_theme: subTheme,
      ask_body: askBody,
    };
    editAsk(askId, data, user);
    const newAsks = await loadAsks(user);
    setAsks(newAsks);
    setTheme("");
    setsubTheme("");
    setAskBody("");
    setAskId("");
    setEditModal(false);
  };

  const handleAskId = (id) => {
    setAskId(id);
  };
  return (
    <Container>
      <ul className="question-list">
        {asks?.map((ask, index) => {
          if (ask.ask.ask_status === "pending") {
            return (
              <li key={index} className="question-container">
                {ask.user.user_email === user?.user_email && (
                  <span onClick={handleEditModal}>
                    <FiEdit2 className="update-span" />
                  </span>
                )}
                {editModal && (
                  <CreateAskContainer onSubmit={handleSubmit(onSubmitEdit)}>
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
                            <option value="pseudo-classes">
                              Pseudo Classes
                            </option>
                            <option value="pseudo-element">
                              Pseudo Elementos
                            </option>
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
                    <AskFormButton
                      onClick={() => handleAskId(ask.ask.ask_id)}
                      type="submit"
                    >
                      Editar Pergunta
                    </AskFormButton>
                  </CreateAskContainer>
                )}
                <h3>Pergunta feita pelo team {ask.user.user_mentor}</h3>
                <span className="question-date">{ask.ask.createdAt}</span>
                <p>{ask.ask.ask_body}</p>
              </li>
            );
          }
        })}
      </ul>
    </Container>
  );
}
