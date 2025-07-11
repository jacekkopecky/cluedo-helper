import * as React from 'react';

import './Button.css';

interface ButtonProps {
  text: string,
  isSet: boolean,
  setSet: (text: string, isSet: boolean) => void,
  extraClass?: string,
  disabled?: boolean,
  image?: string,
}

// how long to hold the button to switch it, in ms
// this must match the CSS in Button.css
const PRESS_DURATION = 1000;

export default function Button(props: ButtonProps): React.JSX.Element {
  const [startedPush, setStartedPush] = React.useState<number>();

  return (
    <div
      className={`Button ${props.isSet ? 'set' : ''} ${startedPush ? 'pushed' : ''} ${props.extraClass ?? ''}`}
      onMouseDown={pressMouse}
      onMouseUp={releaseMouse}
      onTouchStart={pressMouse}
      onTouchEnd={releaseMouse}
      onContextMenu={(e) => e.preventDefault()}
    >
      {props.image && <img src={props.image} alt={props.text} /> }
      <span>{props.text}</span>
    </div>
  );

  function pressMouse() {
    if (props.disabled) return;

    setStartedPush(Date.now());
  }

  function releaseMouse() {
    if (props.disabled) return;

    if (startedPush && startedPush < Date.now() - PRESS_DURATION) {
      props.setSet(props.text, !props.isSet);
    }
    setStartedPush(undefined);
  }
}
