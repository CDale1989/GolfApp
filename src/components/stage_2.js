import React, { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>The Winner is ...</h3>
        <div>{context.state.result}</div>
      </div>
      <div className="action_button" onClick={() => context.resetGame()}>
        START OVER
      </div>
      <div
        className="action_button btn_2"
        onClick={() => context.getNewLoser()}
      >
        GET NEW WINNER
      </div>
    </>
  );
};

export default Stage2;
