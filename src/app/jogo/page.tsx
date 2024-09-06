"use client"
import { Circle, X } from "phosphor-react"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Inpute from "../components/input";
import ButtonOk from "../components/input/Button";
import { FormEvent } from "react";



export default function Game() {

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);


    const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""])

    const [use, setUse] = useState("x")

    const { getValues, formState, register } = useForm<FormData>({

    });


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }
    const [ticTac, setTicTac] = useState(false);

    // const handleClick = () => {
    //     setTicTac(!ticTac);
    // }

    console.log(getValues())

    function setMarker(i: number) {
        if (table[i]) return
        table[i] = use
        setUse(use == "x" ? "o" : "x")
        checkGame();
    }

    const resetTable = () => {
        setTable(["", "", "", "", "", "", "", "", ""])
    }

    const router = useRouter();


    console.log("p1: ", p1)
    console.log("p2: ", p2)

    function checkGame() {
        if (table[0] == table[1] && table[1] == table[2] && table[0] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                // alert(name1 + " Win");
                 return 
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1) }
        }
        if (table[3] == table[4] && table[4] == table[5] && table[3] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1); }
        }

        if (table[6] == table[7] && table[7] == table[8] && table[6] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1); }
        }
        if (table[0] == table[3] && table[3] == table[6] && table[0] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1); }
        }
        if (table[1] == table[4] && table[4] == table[7] && table[1] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"); }
        }
        if (table[2] == table[5] && table[5] == table[8] && table[2] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1); }
        }
        if (table[2] == table[4] && table[4] == table[6] && table[2] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1); }
        }
        if (table[0] == table[4] && table[4] == table[8] && table[0] != "") {
            if (use == "x") {
                setP1(p1 + 1)
                alert(name1 + " Win"); return
            }
            else { return alert(name2 + " Win"), setP2(p2 + 1); }
        }
    }

    function mountIcon(player: string) {
        return player === 'x' ? <X size={82} color="#161e2f" weight="bold" /> : <Circle size={82} color="#161e2f" weight="bold" />
    }
    // function mountIcon5(player: string) {
    //     return player === 'x' ? <X size={82} color="#161e2f" weight="bold" /> : <Circle size={82} color="#161e2f" weight="bold" />
    // }

    function mountMarkerClass() {
        if (table[0] === table[1] && table[1] === table[2] && table[0]) {
            return "absolute top-[15%]  w-full h-2 bg-[#242A76] rounded-xl opacity-65"
        }
        if (table[3] === table[4] && table[4] === table[5] && table[3]) {
            return "absolute top-[49%]  w-full h-2 bg-[#242A76] rounded-xl opacity-65"
        }
        
        if (table[6] === table[7] && table[7] === table[8] && table[6]) {
            return "absolute top-[82%]  w-full h-2 bg-[#242A76] rounded-xl opacity-65"
        }
        if (table[0] === table[3] && table[3] === table[6] && table[0]) {
            return "absolute right-[83%] h-full w-2 bg-[#242A76] rounded-xl opacity-65"
        }
        if (table[1] === table[4] && table[4] === table[7] && table[1]) {
            return "absolute right-[49%] h-full w-2 bg-[#242A76] rounded-xl opacity-65"
        }
        if (table[2] === table[5] && table[5] === table[8] && table[2]) {
            return "absolute right-[16%] h-full w-2 bg-[#242A76] rounded-xl opacity-65"
        }
        if (table[0] === table[4] && table[4] === table[8] && table[0]) {
            return "absolute top-[50%] left-[50%] rounded-xl opacity-65 w-full h-2 bg-[#242A76] transform -translate-x-1/2 -translate-y-1/2 rotate-45";
        }
        if (table[2] === table[4] && table[4] === table[6] && table[2]) {
            return "absolute top-[50%] left-[50%] rounded-xl opacity-65 w-full h-2 bg-[#242A76] transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]";
        }

        return "opacity-0"
    }

    return (

        <div className="flex items-center justify-center flex-col">
            <div className="flex justify-center items-center m-5 space-x-2">
                <form onSubmit={handleSubmit} className="text-black">
                    <div className="space-x-32">
                        <Inpute className="text-center h-9 rounded-xl" type="text" placeholder="Player 1" onChange={(event) => setName1(event.target.value)} />
                        <Inpute className="text-center h-9 rounded-xl" type="text" placeholder="Player 2" onChange={(event) => setName2(event.target.value)} />
                    </div>
                    <div className="justify-center items-center flex text-4xl  ">
                        <ButtonOk onClick={resetTable} className="m-5 bg-white rounded h-12 w-full">Clear</ButtonOk>
                    </div>
                </form>
            </div>

            <div className="bg-[#ffff] w-96 h-96 rounded-t-lg rounded-b-lg relative">
                <div className={mountMarkerClass()} />


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

                <div className="items-center justify-center flex mt-9 space-x-9 flex-row">

                    <div className="">
                        <div className="bg-white w-56 h-16 rounded-xl text-black text-center justify-center items-center text-3xl flex"><h1>{name1}</h1></div>
                        <div className="flex justify-center mt-5 mb-5 text-5xl">
                            {p1}
                        </div>
                    </div>

                    <h1 className="text-6xl font-extrabold">X</h1>
                    <div>
                        <div className="bg-white w-56 h-16 rounded-xl text-black text-center justify-center items-center text-3xl flex"><h1>{name2}</h1></div>
                        <div className="flex justify-center mt-5 mb-5 text-5xl">
                            {p2}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}