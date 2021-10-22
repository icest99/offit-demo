import React from 'react';
import {Link} from 'react-router-dom';

export default function GameHome() {
    return (
        <div class="absolute w-screen h-screen max-h-screen flex flex-col">
            <div class="rounded-b-lg pb-5 pt-5" style={{backgroundColor:"#F5F5FF"}}>
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

            <div class="flex flex-col flex-auto">
                <div class="flex h-1/4 w-5/6 bg-red-1 rounded-r-3xl h-20">
                    <h1 class="self-center text-4xl text-white ml-10 my-auto">
                        Choose Your <br/> Mode
                    </h1>
                </div>

                <Link to="Gacha1" class="flex h-1/5 w-4/6 m-auto mb-4 rounded-3xl bg-yellow-1 shadow-dark">
                        <h1 class="font-prompt-l text-4xl text-white m-auto"> Game </h1>
                </Link>

                <Link to="#" class="flex h-1/5 w-4/6 m-auto rounded-3xl bg-orange-1 shadow-dark mb-28">
                        <h1 class="font-prompt-l text-4xl text-white m-auto"> Exercise </h1>
                </Link>

            </div> 
        </div>
    )
}
