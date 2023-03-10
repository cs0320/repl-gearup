import { useState } from "react";

interface InputBoxProps {
  history: string[];
  setHistory: (data: string[]) => void;
}

export default function InputBox(props: InputBoxProps) {
  // TODO: Add a state variable for the textbox contents

  /**
   * Handles the submit button being clicked or the enter key being pressed!
   * You may want to make this function more sophisticated to add real
   * command logic, but for now it just adds the text to the history box.
   */
  function handleSubmit() {
    // TODO: Add the text from the textbox to the history
    // Hint: You can use the spread operator (...) to add to an array
    // TODO: Clear the textbox
  }

  return (
    <div className="repl-input">
      {/* TODO: Make this input box sync with the state variable */}
      <input type="text" className="repl-command-box" />
      {/* TODO: Make this button call handleSubmit when clicked */}
      <button className="repl-button">Submit</button>
    </div>
  );
}
