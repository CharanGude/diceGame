import './App.css'

import React, {useState} from 'react';
import Dice from '../src/components/Dice';
import Result from '../src/components/Result';
import MatchCount from '../src/components/MatchCount';

export default function  App(){
    const [N1,setN1] = useState(0);
    const [N2,setN2] = useState(0);
    const [count,setCount] = useState(0);

    function generateRandom1(){
        setN1(Math.ceil(Math.random()*6));
    }
    function generateRandom2(){
        setN2(Math.ceil(Math.random()*6));
        setCount((prev) => prev+1);
    }
    return (
        <main className="main">
            <div className='container'>
              <div className='dicecontainer'>
                <div className='dice'>
                    <Dice randomnumber={N1} />
                  <div className='play'>
                    <p className='player1'>Player 1</p>
                    <button onClick={generateRandom1}>Play</button>
                    </div>
                  </div>
                <div className='dice'>
                    <Dice randomnumber={N2} />
                  <div className='play'>
                    <p className='player2'>Player 2</p>
                    <button onClick={generateRandom2}>Play</button>
                </div>
                  </div>
                </div>
                <div className='result'>
                    <Result p1={N1} p2={N2} />
                </div>
                <div className='matchcount'>
                    <MatchCount n={count} />
                </div>
            </div>
        </main>
    )
}
