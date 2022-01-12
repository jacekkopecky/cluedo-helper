import React from 'react';

import Button from './Button';
import { getImage } from '../images';

import './App.css';

const PLAYERS = [
  'Col. Mustard (yellow)',
  'Miss Scarlett (red)',
  'Mr Green',
  'Mrs Peacock (blue)',
  'Dr Orchid (light purple)',
  'Prof. Plum (dark violet)',
];

const TOY_CHEST = 'Toy Chest';

const TOYS = [
  'T. rex',
  'Race Car',
  'Teddy Bear',
  'Mr Potato Head',
  'Xylophone',
  'Ball',
  TOY_CHEST,
];

const FURNITURE = [
  'Pool Table',
  'Desk',
  'Chair',
  'Piano',
  'Plant',
  'Dining Table',
];

const TIMES = [
  '11:00',
  '12:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
];

type HasMap = Record<string, string>;

export default function App(): JSX.Element {
  const [crossedItems, setCrossedItems] = React.useState<string[]>([]);
  const [lastSelectedPlayer, setLastSelectedPlayer] = React.useState('');
  const [playerHasToy, setPlayerHasToy] = React.useState<HasMap>({});

  return (
    <main>
      <header>
        <h1>Cluedo junior helper</h1>
        <button onClick={reset}>reset</button>
      </header>

      <section className="players">
        {renderButtons(PLAYERS)}
        {Boolean(lastSelectedPlayer) && (
          <div className="overlay">
            What toy did {lastSelectedPlayer} have?
            <button onClick={deselectLastSelected}>cancel</button>
          </div>
        )}
        <div className="none" />
      </section>
      <section>
        {renderButtons(TOYS, !lastSelectedPlayer)}
      </section>
      <section>
        {renderButtons(FURNITURE)}
        <div className="none" />
      </section>
      <section>
        {renderButtons(TIMES)}
      </section>
    </main>
  );

  // todo randomize these orders somehow
  function renderButtons(arr: string[], disabled?: boolean) {
    return arr.map((str) => (
      <Button
        key={str}
        text={str}
        isSet={isSet(str)}
        setSet={setItem}
        image={getImage(str)}
        extraClass={playerHasToy[str] === TOY_CHEST ? 'whodunit' : ''}
        disabled={disabled}
      />
    ));
  }

  function isSet(str: string) {
    return crossedItems.includes(str);
  }

  function setItem(text: string, set: boolean) {
    if (set) {
      if (PLAYERS.includes(lastSelectedPlayer) && TOYS.includes(text)) {
        setPlayerHasToy({
          ...playerHasToy,
          [lastSelectedPlayer]: text,
          [text]: lastSelectedPlayer,
        });
        setLastSelectedPlayer('');
      }

      if (PLAYERS.includes(text)) setLastSelectedPlayer(text);

      if (!isSet(text)) setCrossedItems([...crossedItems, text]);
    }

    if (!set) {
      if (playerHasToy[text]) {
        setCrossedItems(items => items.filter((str) => str !== playerHasToy[text]));
        playerHasToy[playerHasToy[text]] = '';
        playerHasToy[text] = '';
      }

      if (lastSelectedPlayer === text) setLastSelectedPlayer('');

      setCrossedItems(items => items.filter((str) => str !== text));
    }
  }

  function deselectLastSelected() {
    setItem(lastSelectedPlayer, false);
  }

  function reset() {
    setCrossedItems([]);
    setLastSelectedPlayer('');
    setPlayerHasToy({});
  }
}
