import React from 'react';
import './GameArea.css';
import { Inventory } from '../Inventory/Inventory'

export function GameArea() {
  return (
    <div className="GameArea">
      <Inventory />
    </div>
  );
}

