import React from 'react'
import {Link} from 'react-router-dom';

export default function StartTrack() {
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
                <div class="flex h-1/4 w-5/6 bg-red-1 rounded-r-3xl h-20">
                    <h1 class="text-4xl text-white ml-10 my-auto">
                        Your <br /> Mission
                    </h1>
                </div>

                {/* Daily-Check-up Card */}
                <div class="flex flex-col w-4/5 border-8 rounded-3xl border-red-1 shadow-lg overflow-hidden m-auto pb-10" style={{backgroundColor:"#FFFAF6"}}>
                    <div class="justify-around flex flex-row items-baseline mb-5 mt-2">
                        <h1 class="text-3xl mt-2" style={{color:"#FF8A83"}}>Mission Detail</h1>
                    </div>

                    <div class="px-10">
                        <textarea class="border-2 border-red-1 text-center rounded-xl outline-none form-textarea block w-full text-xl py-2 text-red-1" rows="1" value="20 mins. exercise"></textarea>
                    </div>

                    <div class="px-10 mt-6">
                        <textarea class="border-2 border-red-1 text-center rounded-xl outline-none form-textarea block w-full text-xl py-4 text-red-1"
                        rows="4" value="complete this mission by doing any form of exercise for 20 mins."></textarea>
                    </div>

                    <Link class="mx-auto mt-5 h-12 w-28 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <p class="mx-auto my-auto">Start</p>
                    </Link>

                </div>
            </div>

        </div>
    )
}
