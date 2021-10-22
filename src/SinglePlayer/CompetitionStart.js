import React from 'react';
import {Link} from 'react-router-dom';
import Navbar1 from '../Navbar1';

export default function CompetitionStart() {
    return (
        <div class="absolute w-screen h-screen max-h-screen flex flex-col">
            <Navbar1/>

            <div class="flex flex-col flex-auto">
                <div class="flex h-1/4 w-5/6 bg-red-1 rounded-r-3xl">
                    <h1 class="self-center text-4xl text-white ml-10 my-auto">
                        Competition <br/> Invitation
                    </h1>
                </div>

                <div class="mx-auto object-center h-1/5 w-2/5 my-auto">
                    <img src=".\image\playerbox.png">
                    </img>
                </div>

                <div class="mx-auto h-1/5 w-2/5  my-auto">
                    <img src=".\image\playerbox2.png">
                    </img>
                </div>

                <div class="my-auto">
                    <Link class="mx-auto h-12 w-28 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <p class="mx-auto my-auto">Start</p>
                    </Link>
                </div>

            </div>
        </div>

    )
}
