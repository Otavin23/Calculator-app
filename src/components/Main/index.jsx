import React, { useContext } from "react";
import { CreateContext } from "../../context";
import * as S from "./style";

const Main = () => {
  const { Click, number,DeletNumber,ResetNumber,ResultNumber} = useContext(CreateContext);

  return (
    <S.MainFundo>
      <S.Container>
        <header>
          <div className="text-logo">
            <h1>calc</h1>
          </div>
          <div className="theme">123</div>
        </header>
        <div className="result">
          <div className="container-result">
            <h2>{number}</h2>
          </div>
        </div>
        <div className="context">
          <div className="container-context">
            <div>
              <S.ButtonCalc onClick={Click} value="7">
                7
              </S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="8">
                8
              </S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="9">9</S.ButtonCalc>
              <S.ButtonDelReset onClick={DeletNumber} >del</S.ButtonDelReset>
            </div>
            <div>
              <S.ButtonCalc onClick={Click} value="4">4</S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="5">5</S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="6">6</S.ButtonCalc>
              <S.ButtonCalc>+</S.ButtonCalc>
            </div>
            <div>
              <S.ButtonCalc onClick={Click} value="1">1</S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="2">2</S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="3">3</S.ButtonCalc>
              <S.ButtonCalc>-</S.ButtonCalc>
            </div>
            <div>
              <S.ButtonCalc>.</S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="0">0</S.ButtonCalc>
              <S.ButtonCalc>/</S.ButtonCalc>
              <S.ButtonCalc onClick={Click} value="x">x</S.ButtonCalc>
            </div>
            <div>
              <S.buttonReset onClick={ResetNumber}>reset</S.buttonReset>
              <S.ButtonResult onClick={ResultNumber}>=</S.ButtonResult>
            </div>
          </div>
        </div>
      </S.Container>
    </S.MainFundo>
  );
};
export default Main;
