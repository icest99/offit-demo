import React from 'react'
import {Link} from 'react-router-dom';

export default function MultiCompetitionInv() {
    return (
            <div class="h-100 flex flex-col">
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

                <div class="flex flex-col flex-auto mb-10">
                    <div class="flex h-1/4 w-5/6 bg-red-1 rounded-r-3xl h-20">
                        <h1 class="self-center text-4xl text-white ml-10 my-auto">
                            Competition <br/> Invitation
                        </h1>
                    </div>

                </div>

                <div class="flex flex-col overflow-hidden -mb-10">
                    <div
                        class="flex"
                    >
                        <div
                        class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                        >
                        <div class="pr-2">
                            <img class="w-auto h-4/6 max-w-xs overflow-hidden" src=".\image\playercard1.png"></img>
                        </div>
                        <div class="pr-2">
                            <img class="w-auto h-4/6 max-w-xs overflow-hidden" src=".\image\playercard1.png"></img>
                        </div>
                        <div class="pr-2">
                            <img class="w-auto h-4/6 max-w-xs overflow-hidden" src=".\image\playercard2.png"></img>
                        </div>
                        <div class="pr-2">
                            <img class="w-auto h-4/6 max-w-xs overflow-hidden" src=".\image\playercard2.png"></img>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col overflow-hidden -mb-10">
                    <div
                        class="flex"
                    >
                        <div
                        class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                        >
                        <div class="pr-2">
                            <img class="w-auto pr-2 h-4/6 max-w-xs overflow-hidden" src=".\image\playercard2.png"></img>
                        </div>
 
                            <img class="w-auto  pr-2 h-4/6 max-w-xs overflow-hidden" src=".\image\playercard2.png"></img>

 
                            <img class="w-auto pr-2 h-4/6 max-w-xs overflow-hidden" src=".\image\playercard1.png"></img>

 
                            <img class="w-auto pr-2 h-4/6 max-w-xs overflow-hidden" src=".\image\playercard1.png"></img>

                        </div>
                    </div>
                </div>

                <Link to="MultiCompetitionStart" class=" mx-auto mt-5 h-12 w-28 bg-red-1 rounded-2xl text-white text-2xl flex">
                        <p class="mx-auto my-auto">Ready</p>
                    </Link>
            </div>
    )
}
