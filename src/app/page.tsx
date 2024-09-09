"use client"

import { Input } from "postcss";
import { FormEvent } from "react";
import { useState } from "react";
import Inpute from "./components/input";
import ButtonOk from "./components/input/Button";
import { useRef } from "react";
import Game from "./jogo/page";

function TicTacToe() {
  return (
    <div className="">
      <Game />
    </div>
  );
}

export default function Home() {




  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#242A76] to-[#095F91] flex items-center justify-center p-10" >
      <div className=" w-full h-full     rounded-xl  flex flex-col relative ">
        <div className="isolate aspect-video w-full h-full rounded-xl shadow-lg ring-1 ring-black/5 bg-white/10 backdrop-blur-md ">
          <div className="font-mine  flex justify-center m-5 text-center  ">
            <div className=" w-1/3 p-3  animate-bounce rounded-lg bg-[#011126]">
              <h1 className="text-4xl animate-pulse">TIC TAC TOE</h1>
            </div>
          </div>
          <Game />
        </div>
      </div>
    </div>
  );
}