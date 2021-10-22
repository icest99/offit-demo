import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Lost from './components/Lost.js'
import Playing from './components/Playing.js'
import Start from './components/Start.js'
import Won from './components/Won.js'
import End from './components/End.js'

export default function Gacha1() {

    // SWITCH
    const [game, setGame] = useState('start')

    const handleClick = (gameState) => {
        setGame(gameState)
        
        if (gameState == "won" && count != 0) {
            setCount(count - 1)
        };
        if (gameState == "won" && count == 1) {
            return setGame(0)
        };
        console.log(gameState)
    }

    // Counter
    const [count, setCount] = useState(3);

    return (
        <div class="absolute w-screen h-screen max-h-screen flex flex-col">
            <div class="rounded-b-lg py-2 " style={{backgroundColor:"#F5F5FF"}}>
                    <ul class="flex justify-between">
                        <li class="mr-2">
                            <Link class="inline-block rounded" to="/">
                                <img class="h-14 relative z-10 pl-10 pt-5" src=".\image\Ex-Back.png"></img>
                            </Link>
                        </li>
                        <li class="">
                            <a class="inline-block" href="#">
                                <img class="h-16 relative z-10" src=".\image\home-icon4.png"></img>
                            </a>
                        </li>
                    </ul>
                </div>

            <div class="shadow-md flex h-1/6 w-5/6 bg-yellow-1 rounded-r-3xl h-10">
                <h1 class="self-center text-4xl text-white ml-10">
                    Gacha <br/> Adventure
                </h1>
            </div>

            <div class="shadow-md absolute h-20 w-20 flex m-auto rounded-full top-1/3 left-2/3 bg-green-1">
            <p class="text-5xl text-white m-auto font-bold"> {count} </p>
            </div>

            {/* avatar */}
            <div class="flex justify-center mt-20 delay-1000 transition transform opacity-100">
                <img class=" h-40" src=".\image\avatar.png"></img>
            </div>
            

            <div class="flex flex-col">
                <div class="">
                    {(() => {
                        switch (game) {
                        case 'start':
                            return <Start handleClick={handleClick} />
                        case 'playing':
                            return <Playing handleClick={handleClick} />
                        case 'won':
                            return <Won handleClick={handleClick} />
                        case 'lost':
                            return <Lost handleClick={handleClick} />
                        case 0:
                            return <End handleClick={handleClick} />
                        default:
                            return null
                        }
                    })()}

                </div>
            </div>
            {/* <div className="button__wrapper">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div> */}

            {((n) => {
            console.log('Ok');
            })()}

        </div>
    )
}
