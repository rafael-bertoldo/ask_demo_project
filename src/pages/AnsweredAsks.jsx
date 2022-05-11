import React, { useEffect, useState } from "react";
import { Container } from "./InstructorDashboard.style";
import { FiXCircle } from "react-icons/fi";
import { SpanContainer } from "./AnsweredAsks.style";
import Profile from "../components/profile/profile";
import { useAsks } from "../providers/AsksProvider";
import { Container as AskMainContainer } from "../components/asksContainer/asksContainer.style";

export default function AnsweredAsks() {
  const user = JSON.parse(localStorage.getItem("@ask_demo:user")) || "";

  const [showPerfil, setShowPerfil] = useState(false);
  const { asks, loadAsks, setAsks, deleteAsks } = useAsks();

  useEffect(() => {
    setAsks(loadAsks(user));
  }, []);

  const handlePerfil = () => {
    setShowPerfil(!showPerfil);
  };
  return (
    <Container>
      <Profile />
      <AskMainContainer className="title-ask-container">
        <ul className="question-list">
          {asks?.map((ask) => {
            if (ask.ask.ask_status === "answered") {
              return (
                <li className="question-container">
                  <>
                    <SpanContainer>
                      <span onClick={() => deleteAsks(ask.ask.ask_id, user)}>
                        <FiXCircle className="delete-span" />
                      </span>
                    </SpanContainer>
                    <h3>Pergunta feita por {ask.user.user_name}</h3>
                    <h3>Facilitador {ask.user.user_mentor}</h3>
                    <span className="question-date">{ask.ask.createdAt}</span>
                    <p>{ask.ask.ask_body}</p>
                  </>
                </li>
              );
            }
          })}
        </ul>
      </AskMainContainer>
    </Container>
  );
}
