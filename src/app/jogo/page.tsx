"use client"
import { Circle, X } from "phosphor-react"
import { useState } from "react"

export default function Home() {

    const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""])

    const [use, setUse] = useState("x")

    function setMarker(i: number) {
        if (table[i]) return
        table[i] = use
        setUse(use == "x" ? "o" : "x")
        checkGame();
    }

    function checkGame() {
        if (table[0] == table[1] && table[1] == table[2] && table[0] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
        if (table[3] == table[4] && table[4] == table[5] && table[3] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }

        if (table[6] == table[7] && table[7] == table[8] && table[6] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
        if (table[0] == table[3] && table[3] == table[6] && table[0] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
        if (table[1] == table[4] && table[4] == table[7] && table[1] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
        if (table[2] == table[5] && table[5] == table[8] && table[2] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
        if (table[2] == table[4] && table[4] == table[6] && table[2] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
        if (table[0] == table[4] && table[4] == table[8] && table[0] != "") {
            if (use == "x") {
                alert("O xis Ganhou"); return
            }
            else { return alert("O o Ganhou"); }
        }
    }

    function mountIcon(player: string) {
        return player === 'x' ? <X size={82} color="#161e2f" weight="bold" /> : <Circle size={82} color="#161e2f" weight="bold" />
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center  ">
            <div className="bg-[#d9d9d9] w-96 h-96 rounded-t-lg rounded-b-lg">

                <div className="w-full flex"> {/* Linha 1 */}
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-r-2 border-b-2"
                        onClick={() => setMarker(0)}>{table[0] !== '' ? mountIcon(table[0]) : ''}
                    </div>
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-b-2"
                        onClick={() => setMarker(1)}>{table[1] !== '' ? mountIcon(table[1]) : ''}
                    </div>
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-l-2 border-b-2"
                        onClick={() => setMarker(2)}>{table[2] !== '' ? mountIcon(table[2]) : ''}
                    </div>
                </div>

                <div className="w-full flex"> {/* Linha 2 */}
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-r-2 border-b-2 "
                        onClick={() => setMarker(3)}>{table[3] !== '' ? mountIcon(table[3]) : ''}
                    </div>
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-r-2 border-b-2"
                        onClick={() => setMarker(4)}>{table[4] !== '' ? mountIcon(table[4]) : ''}
                    </div>
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-b-2"
                        onClick={() => setMarker(5)}>{table[5] !== '' ? mountIcon(table[5]) : ''}
                    </div>
                </div>

                <div className="w-full flex"> {/* Linha 3 */}
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-r-2 "
                        onClick={() => setMarker(6)}>{table[6] !== '' ? mountIcon(table[6]) : ''}
                    </div> {/* Quadro 1 */}
                    <div className="w-full flex items-center justify-center h-32  "
                        onClick={() => setMarker(7)}>{table[7] !== '' ? mountIcon(table[7]) : ''}
                    </div>
                    <div className="w-full flex items-center justify-center h-32 border-[#161e2f] border-l-2 "
                        onClick={() => setMarker(8)}>{table[8] !== '' ? mountIcon(table[8]) : ''}
                    </div>
                </div>

            </div>
        </div>
    );
}