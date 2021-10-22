import React from 'react';
import {Link} from 'react-router-dom';
import Navbar1 from '../Navbar1';

export default function Competition() {
    return (
        <div class="absolute w-screen h-screen max-h-screen flex flex-col">
            <Navbar1/>

            <div class="flex flex-col flex-auto">
                <div class="flex h-1/4 w-5/6 bg-orange-1 rounded-r-3xl h-20">
                    <h1 class="self-center text-4xl text-white ml-10 my-auto">
                        Choose Your <br/> Mode
                    </h1>
                </div>

                <Link to="YourGoal" class="flex h-1/5 w-4/6 m-auto rounded-3xl bg-yellow-1 filter shadow-lg">
                        <h1 class="font-prompt-l text-4xl text-white m-auto"> กระโดดตบ </h1>
                </Link>

                <Link to="Multiplayer" class="flex h-1/5 w-4/6 mx-auto rounded-3xl bg-yellow-1 shadow-dark filter shadow-lg">
                        <h1 class="font-prompt-l text-4xl text-white m-auto"> เดินถ่ายรูป </h1>
                </Link>

                <Link to="Multiplayer" class="flex h-14 w-60 m-auto rounded-3xl bg-red-1 shadow-dark filter shadow-lg">
                        <h1 class="font-prompt-l text-2xl text-white m-auto"> Join Friend </h1>
                </Link>
            </div> 
        </div>
    )
}
