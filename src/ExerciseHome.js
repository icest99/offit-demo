import React from 'react'
import {Link} from 'react-router-dom';
import Navbar1 from './Navbar1';

export default function ExerciseHome() {
    return (
        <div class="absolute w-screen h-screen max-h-screen flex flex-col">
            <Navbar1/>

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
