import React from 'react';
import { Stats } from '../models/Stats';

interface StatsProps{
    stats: Stats;
}

export default function IntroPokedex(props:StatsProps) {
  return (
    <>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-2 gap-y-8 px-2 py-6 sm:px-3 sm:py-8 lg:max-w-7xl lg:grid-cols-1 lg:px-2">
            <div className="rounded overflow-hidden shadow-lg bg-white p-6">
                <div className="flex justify-between">
                    <div className="text-xl text-gray-700 font-bold">#001</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xl text-gray-700 font-bold">Squirtle</div>
                    <div className="text-xl text-gray-700 font-bold">
                    <div className="types flex justify-end">
                        <span className="bg-blue-200 text-white-800 py-1 px-3 rounded-full text-sm">Agua</span>
                        <span className="bg-green-200 text-white-800 py-1 px-3 rounded-full text-sm ml-2">Tortuga</span>
                    </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/2 px-4 lg:order-last md:order-last">
                                <div className="bg-
                                white-200 p-5">
                                    <a href="#!" className="flex justify-center items-center">
                                        <img
                                        className="rounded-t-lg" style={{ width: '250px', height: '250px' }}
                                        src="https://pm1.aminoapps.com/6159/3ef6c4a73a478bb9c7de0bcd6bab6c085bbc2923_hq.jpg"
                                        alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                    <div className="w-full sm:w-1/2 px-4 lg:order-first md:order-first">
                        <div className="bg-white-100 p-5 pt-8">
                            {props.stats.stats.map((stat)=>{
                                return(
                                    <div className="stat">
                                        <div className="stat-title text-gray-500 text-left">{stat.stat.name}</div>
                                        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600">
                                            <div className="h-2 bg-red-200 rounded-full" style={{ width: "21%" }}></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
