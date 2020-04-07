import React, { useState } from "react";
import Sentiment from "sentiment";

import { PageWrapper } from "../../App.styles";

const sentiment = new Sentiment();

const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const inputResult = sentiment.analyze(inputText);
  console.log(inputResult);

  return (
    <>
      Say Something: <input value={inputText} onChange={handleChange} />
      {inputResult.score === -4 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(180deg, #000000, #630101, #000000)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === -3 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(225deg, #000000, #ff7200, #000000)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === -2 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(140deg, #000000, #d29a2a, #000000)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === -1 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #000000, #fbf869, #000000)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 0 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #000000, #ffffff)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 1 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #fffed0, #fbf869)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 2 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #fbc05d, #d29a2a)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 3 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #ff7200, #fda91e)",
            }}
          ></PageWrapper>
        </>
      ) : null}
      {inputResult.score === 4 ? (
        <>
          <PageWrapper
            style={{
              position: "absolute",
              minWidth: "100%",
              zIndex: -1,
              background: "linear-gradient(270deg, #fd9c9c, #fd5252)",
            }}
          ></PageWrapper>
        </>
      ) : null}
    </>
  );
};

export default Home;

// -4 fuck
// -3 abhor
// -2 ache
// -1 admit
// 0
// 1 jesus
// 2 ally
// 3 xoxo
// 4 xoxoxo
