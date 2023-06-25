import React from "react";

export default function WinnerText({ nameWinner }) {
  return (
    <p>
      {nameWinner === "Draw"
        ? "No winner, it is a draw!"
        : `The winner is ${nameWinner}`}
    </p>
  );
}
