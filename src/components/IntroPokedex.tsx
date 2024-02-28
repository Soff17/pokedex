import React from 'react';
import { Stats } from '../models/Stats';

interface StatsProps{
    stats: Stats;
}

export default function IntroPokedex(props:StatsProps) {
  return (
    <>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-2 gap-y-8 px-2 py-6 sm:px-3 sm:py-8 lg:max-w-7xl lg:grid-cols-1 lg:px-2">
            <div className="rounded overflow-hidden bg-white p-6">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="bg-white-100 p-5 pt-8">
                            {props.stats.stats.map((stat)=>{
                                const progressBarWidth = `${stat.base_stat}%`;
                                return(
                                    <div className="stat">
                                        <div className="stat-title text-gray-500 text-left">{stat.stat.name}</div>
                                        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600">
                                            <div className="h-2 bg-orange-500 rounded-full" style={{ width: progressBarWidth }}></div>
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
