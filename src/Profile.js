import React from 'react';
import {Link} from 'react-router-dom';

export default function Profile() {
    return (
        <div class="grid grid-rows-3">
            <div class="rounded-b-lg">
                    <ul class="flex justify-between">
                        <li class="mr-2 pb-5 pt-5">
                            <Link class="inline-block rounded" to="/">
                                <img class="h-14 relative z-10 pl-10 pt-5" src=".\image\Ex-Back.png"></img>
                            </Link>
                        </li>

                        <li class="relative">
                            <a class="" href="#">
                                <img class="h-36 top-0 z-20" src=".\image\circles.png"></img>
                            </a>
                        </li>
                    </ul>
            </div>

            <div class="flex justify-center">
                <div>
                <img src=".\image\avatar.png"></img>
                </div>
            </div>

            <div class="flex justify-center mt-12">
                <img class="max-h-32 max-w-100" src=".\image\Profile-Mra.png"></img>
            </div>

            
        
        </div>
    )
}
