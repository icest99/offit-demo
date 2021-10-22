import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar1() {
    return (
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
    )
}
