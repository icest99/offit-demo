import React from 'react';
import {Link} from 'react-router-dom';
import Navbar1 from './Navbar1';

export default function HomeNav() {
    return (
        <div class="w-full h-screen">

            <div class="rounded-b-lg py-2" style={{backgroundColor:"#F5F5FF"}}>
                <ul class="flex justify-between">
                    <li class="mr-2">
                        <ul class="flex justify-between ml-10">
                            <li class="mr-2">
                                <Link class="inline-block rounded" to="#">
                                    <img class="h-16" src=".\image\home-icon1.png"></img>
                                </Link>
                            </li>
                            <li class="mr-2">
                                <a class="inline-block" href="#">
                                    <img class= "h-16" src=".\image\home-icon2.png"></img>
                                </a>
                            </li>
                            <li class="mr-2">
                                <Link class="inline-block text-gray-400 cursor-not-allowed" to="Profile">
                                    <img class="h-16" src=".\image\home-icon3.png"></img>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="">
                        <a class="inline-block" href="#">
                            <img class="h-16 relative z-10" src=".\image\home-icon4.png"></img>
                        </a>
                    </li>
                </ul>
            </div>

            {/* header */}
            <div class="flex h-1/4 w-5/6 bg-yellow-1 rounded-r-3xl shadow-md">
                    <h1 class="self-center text-6xl text-white ml-10 my-auto">
                        Hello A!
                    </h1>
                </div>

            
            {/* checklist icon */}
            <div class="absolute right-16 top-80">
                <Link to="Checklist">
                    <img class="h-20" src=".\image\checkup-icon.png"></img>
                </Link>
            </div>

            {/* avatar */}
            <div class="flex">
                <img class="h-32 m-auto my-16" src=".\image\avatar.png"></img>
            </div>


            {/* Bottom Menu */}
            <section id="bottom-navigation" class="absolute my-auto bottom-0 -inset-x-0 shadow">
                    <div id="tabs" class="flex justify-center mb-5">
                        <Link to="ExerciseHome" class="inline-block mr-3">
                            <img class=" max-h-32" src=".\image\home-bot1.png"></img>
                        </Link>
                        <Link to="ConsultHome" class="inline-block mr-3">
                            <img class="max-h-32" src=".\image\home-bot2.png"></img>
                        </Link>
                        <Link to="ProgramHome" class="inline-block ">
                            <img class="max-h-32" src=".\image\home-bot3.png"></img>
                        </Link>
                    </div>
                </section>

            {/* <div class="flex justify-center max-h-10 absolute -bottom-full">
                <a class="inline-block max-h-10" href="#">
                    <img class="max-h-40" src=".\image\home-bot1.png"></img>
                </a>
                <a class="inline-block" href="#">
                    <img class="max-h-40" src=".\image\home-bot2.png"></img>
                </a>
                <a class="inline-block" href="#">
                    <img class="max-h-40" src=".\image\home-bot3.png"></img>
                </a>
            </div> */}
        
        </div>
    )
}
