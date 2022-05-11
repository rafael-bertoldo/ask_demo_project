import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAsks } from "../providers/AsksProvider";
import { Container } from "./InstructorDashboard.style";
import Profile from "../components/profile/profile";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { SpanContainer } from "./AnsweredAsks.style";

export default function InstructorDashboard() {
  const user = JSON.parse(localStorage.getItem("@ask_demo:user")) || "";

  const { asks, setAsks, loadAsks, checkAsk, redflagAsk } = useAsks();
  const history = useHistory();

  useEffect(() => {
    setAsks(loadAsks(user));
  }, []);

  return (
    <Container>
      <Profile />
      <section className="title-ask-container">
        <ul className="question-list">
          {asks?.map((ask, index) => {
            if (ask.ask.ask_status === "pending") {
              return (
                <li key={index} className="question-container">
                  <>
                    <SpanContainer>
                      <span onClick={() => checkAsk(ask.ask.ask_id, user)}>
                        <FiCheckCircle className="check-span" />
                      </span>
                      <span onClick={() => redflagAsk(ask.ask.ask_id, user)}>
                        <FiXCircle className="delete-span" />
                      </span>
                    </SpanContainer>
                    <h3>Pergunta feita pelo team {ask.user.user_mentor}</h3>
                    <span className="question-date">{ask.createdAt}</span>
                    <p>{ask.ask.ask_body}</p>
                  </>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </Container>
  );
}
