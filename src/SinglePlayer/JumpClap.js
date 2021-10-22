import React from 'react';
import {Link} from 'react-router-dom';
import Navbar1 from '../Navbar1';

export default function JumpClap() {
    return (
        <div class="absolute w-screen h-screen max-h-screen flex flex-col">
            <Navbar1/>

            <div class="flex flex-col flex-auto">
                <div class="flex h-1/4 w-5/6 bg-red-1 rounded-r-3xl">
                    <h1 class="self-center text-4xl text-white ml-10 my-auto">
                        Competition <br/> Invitation
                    </h1>
                </div>

                <div class="mx-auto h-1/5 w-2/5 mt-12 my-auto">
                    <img src=".\image\playerbox.png">
                    </img>
                </div>

                <div class="my-auto px-24">
                        <textarea class="border-2 border-red-1 text-center rounded-xl outline-none form-textarea block w-full text-xl py-2 placeholder-red-1" rows="1"  placeholder="#Enter Your Code"></textarea>
                    </div>

                <div class="my-auto">
                    <Link to="CompetitionStart" class="mx-auto h-12 w-28 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <p class="mx-auto my-auto">Start</p>
                    </Link>
                </div>

            </div> 
        </div>

    )
}
