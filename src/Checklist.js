import React from 'react';
import {Link} from 'react-router-dom';

export default function Checklist() {
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
                <div class="flex h-1/4 w-5/6 bg-green-1 rounded-r-3xl h-20">
                    <h1 class="self-center text-4xl text-white ml-10 my-auto">
                        Daily <br /> Check-up
                    </h1>
                </div>

                {/* Daily-Check-up Card */}
                <div class="flex flex-col w-4/5 border-8 rounded-3xl border-green-3 bg-green-2 shadow-lg overflow-hidden m-auto pb-10">
                    <div class="justify-around flex flex-row items-baseline">
                        <h1 class="text-3xl mt-2" style={{color:"#3E721D"}}>Rate your pain</h1>
                    </div>
                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"/>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> No pain</span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> Endurableable very mild</span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> Mild (endurable over 30 mins.) </span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> painful (endurable max. 30 mins.)</span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> too painful (unendurable)</span>
                    </label>
                </div>


                {/* ================================== */}
                {/* ================================== */}
                {/* ================================== */}

                <div class="flex flex-col w-4/5 border-8 rounded-3xl border-green-3 bg-green-2 shadow-lg overflow-hidden m-auto pb-10">
                    <div class="justify-around flex flex-row items-baseline">
                        <h1 class="text-3xl mt-2" style={{color:"#3E721D"}}>Daily life effect</h1>
                    </div>
                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"/>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> No pain</span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> Endurableable very mild</span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> Mild (endurable over 30 mins.) </span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> painful (endurable max. 30 mins.)</span>
                    </label>

                    <label class="custom-label flex mt-2 ml-3">
                        <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                            <input type="checkbox" class="hidden"></input>
                            <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                        </div>
                        <span class="select-none"> too painful (unendurable)</span>
                    </label>
                </div>
            </div>

            

        </div>
    )
}
