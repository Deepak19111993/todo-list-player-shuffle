import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Player from "../Player/Player";
import TodoApp from "../TodoApp/TodoApp";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
};

export default Content;
