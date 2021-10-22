import React from 'react'
import {Link} from 'react-router-dom';

export default function StartCall() {
    return (
        <div class="absolute w-screen h-full flex flex-col">
            <div class="rounded-b-lg">
                    <ul class="flex justify-end">
                        <li class="relative">
                            <a class="" href="#">
                                <img class=" max-h-28 top-0 z-20" src=".\image\circles.png"></img>
                            </a>
                        </li>
                    </ul>
            </div>
    
            <div class="flex flex-col">
                <div class="flex w-3/5 mx-auto">
                    <img src=".\image\Versus.png"></img>
                </div>

                {/* Daily-Check-up Card */}
                <div class=" flex flex-col  w-4/5 h-2/6 border-8 rounded-3xl border-red-1 shadow-lg overflow-hidden mx-auto mb-8" style={{backgroundColor:"#FFFAF6"}}>

                    <div class="m-auto">
                        <img class=" w-2/3 m-auto mt-3" src=".\image\Dance1.png"></img>
                    </div>
                </div>

                <div class="flex flex-col w-4/5 border-8 rounded-3xl border-red-1 shadow-lg overflow-hidden m-auto" style={{backgroundColor:"#FFFAF6"}}>

                    <div class="m-auto object-contain">
                        <img class="w-2/3 m-auto mt-3"src=".\image\Dance2.png"></img>
                    </div>
                </div>
            </div>

            <div class="flex inline-block px-14 mt-5">
                <img src class="w-5/12" src=".\image\Timer.png"></img>
                <Link class="mx-auto my-3 mr-12 w-1/4 px-4 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <img src=".\image\Stop.png"></img>
                    </Link>
            </div>
        </div>
    )
}
