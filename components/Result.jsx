import { useState,useEffect } from "react";
export default function Result(props) {
    const p1 = props.p1;
    const p2 = props.p2;
    const [P1wins,setP1wins] = useState(0);
    const [P2wins,setP2wins] = useState(0);
    const [Res,setRes] = useState('Begin');
    useEffect(() => {getResult()},[p2]);
    function getResult(){
        if (p1>p2) {
            setRes("Player 1 wins");
            setP1wins((prev) => prev+1);
        }
        else if (p2>p1) {
            setRes("Player 2 wins");
            setP2wins((prev) => prev+1);
        }
        else{
            setRes("Its's a Draw...");
        }
    }
    return (
        <div className="res">
            <p className="res">{Res}</p>
            <p className="p1wins">Player 1 wins: {P1wins}</p>
            <p className="p2wins">Player 2 wins: {P2wins}</p>
        </div>
    )
}