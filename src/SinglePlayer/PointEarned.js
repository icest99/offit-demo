import React from 'react';
import {Link} from 'react-router-dom';

export default function PointEarned() {
    return (
        <div class="absolute w-screen h-full flex flex-col">
            <div class="rounded-b-lg pb-5 pt-5" style={{ backgroundColor: "#F5F5FF" }}>
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
                <div class="flex h-1/4 w-5/6 bg-purple-1 rounded-r-3xl h-20">
                    <h1 class="text-4xl text-white ml-10 my-auto">
                        Point <br/> Earned
                    </h1>
                </div>

                {/* Daily-Check-up Card */}
                <div class="flex flex-col w-4/5 border-8 rounded-3xlshadow-lg overflow-hidden m-auto pb-10" style={{backgroundColor:"#FFFAF6", borderColor:"#FBBC04"}}>

                    <div class="m-auto pt-12 text-center" style={{color:"#FBBC04"}}>
                        <p class="text-xl">Congratulation</p>
                        <h2 class="text-4xl">You earned</h2>
                        <h1 class=" text-7xl">95</h1>
                        <h2 class="text-4xl">Points</h2>
                    </div>

                    <Link to="Ranking" class="m-auto mt-20 h-12 px-8 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <p class="mx-auto my-auto">See your rank</p>
                    </Link>

                </div>
            </div>

        </div>
    )
}
