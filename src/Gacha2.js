import React from 'react'
import {Link} from 'react-router-dom';
import TestCount from './TestCount';

export default function Gacha2() {
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

            <div class="flex h-1/4 w-5/6 bg-yellow-1 rounded-r-3xl h-20">
                <h1 class="self-center text-4xl text-white ml-10 my-auto">
                    Gacha <br/> Adventure
                </h1>
            </div>

            {/* avatar */}
            <div class="flex justify-center py-10 my-auto">
                <img class="h-auto" src=".\image\avatar.png"></img>
            </div>
            <div class="mx-auto my-auto text-3xl">
                <TestCount/>
            </div>

            <Link to="Gacha3" class="mb-10 mx-auto mt-5 h-12 w-28 bg-red-1 rounded-2xl text-white text-2xl flex">
                <p class="mx-auto my-auto">End</p>
            </Link>

        </div>
    )
}
