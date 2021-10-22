import React from 'react'
import {Link} from 'react-router-dom';

export default function Ranking() {
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
                        Company <br/> Ranking
                    </h1>
                </div>

                <div class="px-16 my-auto">
                    <img src=".\image\Ranking.png"></img>
                </div>

            </div>
        </div>
    )
}
