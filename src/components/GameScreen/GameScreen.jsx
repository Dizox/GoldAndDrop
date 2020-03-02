import React from 'react';
import './GameScreen.css';
import { GameArea } from '../GameArea/GameArea'
import { BottomBar } from '../BottomBar/BottomBar'

export function GameScreen() {
  return (
    <div className="GameScreen">
      <div className="GameScreen__wrapper">
        <GameArea />
        <BottomBar />
      </div>
    </div>
  );
}

