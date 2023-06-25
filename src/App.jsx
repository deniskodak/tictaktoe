import React, { useEffect, useState } from "react";

import PlayersInfoContext from "./context";
import PageSection from "./components/pageSection";
import GameSection from "./components/gameSection";
import GameScoreInfo from "./components/scoreInfoBox";
import ModalContainer from "./components/modal";
import NamesForm from "./components/namesForm";
import WinnerText from "./components/winnerText";

const initialInfoObj = {
  x: { name: "Player 1", score: 0 },
  o: { name: "Player 2", score: 0 },
  winner: null,
};

function App() {
  const [playersInfo, setPlayersInfo] = useState(initialInfoObj);
  const [showName, setShowName] = useState(true);
  const [showWinner, setShowWinner] = useState(false);

  function closeModal() {
    setShowName(false);
  }

  useEffect(() => {
    if (playersInfo.winner) {
      setShowWinner((prevState) => !prevState);

      setTimeout(() => {
        setShowWinner((prevState) => !prevState);
        setPlayersInfo((prevState) => ({ ...prevState, winner: null }));
      }, 1300);
    }
  }, [playersInfo.winner]);

  return (
    <div className="App">
      <PlayersInfoContext.Provider value={{ playersInfo, setPlayersInfo }}>
        <PageSection>
          <ModalContainer isShown={showName} onClose={closeModal}>
            <NamesForm onClose={closeModal} />
          </ModalContainer>

          <ModalContainer isShown={showWinner} onClose={closeModal}>
            <WinnerText nameWinner={playersInfo.winner} />
          </ModalContainer>

          <GameSection />
          <GameScoreInfo />
        </PageSection>
      </PlayersInfoContext.Provider>
    </div>
  );
}

export default App;