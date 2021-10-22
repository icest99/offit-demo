import React from 'react';
import {Link} from 'react-router-dom';

export default function MultiPlaying() {
    return (
        <div class="absolute w-screen h-full flex flex-col overflow-hidden">
            <div class="rounded-b-lg">
                    <ul class="flex justify-end">
                        <li class="relative">
                            <a class="" href="#">
                                <img class=" max-h-28 top-0 z-20" src=".\image\circles.png"></img>
                            </a>
                        </li>
                    </ul>
            </div>

            <img class="-mt-24 mx-auto"src=".\image\MultiPlay.png"></img>

            <div class="flex inline-block px-14 mt-5">
                <img src class="w-5/12" src=".\image\Timer.png"></img>
                <Link to="PointEarned" class="mx-auto my-3 mr-12 w-1/4 px-4 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <img src=".\image\Stop.png"></img>
                    </Link>
            </div>
        </div>
    )
}
