import { useState } from "react";
import Evolucion from './Evolucion';
import Movimientos from './Movimientos';

import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react";

import { Stats } from '../models/Stats';
import { Moves } from '../models/Moves';

interface StatsProps{
    stats: Stats;
}

interface StatsMoves{
    moves: Moves;
}

export default function IntroPokedex(props: StatsProps & StatsMoves) {
const [fillActive, setFillActive] = useState("tab1");

const handleFillClick = (value: string) => {
    if (value === fillActive) {
    return;
    }
    setFillActive(value);
};
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-2 gap-y-8 px-2 py-6 sm:px-3 sm:py-8 lg:max-w-7xl lg:grid-cols-1 lg:px-2 ">
        <div className="rounded overflow-hidden shadow-lg bg-white p-6">
            <TETabs fill>
                <TETabsItem
                onClick={() => handleFillClick("tab1")}
                active={fillActive === "tab1"}
                >
                Perfil
                </TETabsItem>
                <TETabsItem
                onClick={() => handleFillClick("tab2")}
                active={fillActive === "tab2"}
                >
                Evolucion
                </TETabsItem>
                <TETabsItem
                onClick={() => handleFillClick("tab3")}
                active={fillActive === "tab3"}
                >
                Movimientos
                </TETabsItem>
            </TETabs>

            <TETabsContent>
                <TETabsPane show={fillActive === "tab1"}>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Altura: 0.5 metros
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Peso: 0.5 metros
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 pt-5">
                    {props.stats.abilities.map((ability)=>{
                        return(
                            <div>
                                <span key={ability.ability.name} className="bg-blue-200 text-white-800 py-1 px-3 rounded-full text-sm">{ability.ability.name}</span>
                            </div>
                        )
                    })}
                </div>
                </TETabsPane>
                <TETabsPane show={fillActive === "tab2"}>
                    <div className="grid grid-cols-12 gap-4">
                        <Evolucion label="Wartortle" level="Nivel 16." image="https://i.etsystatic.com/20838977/r/il/339ad8/4339839591/il_fullxfull.4339839591_3iog.jpg"></Evolucion>
                        <Evolucion label="Blastoise" level="Nivel 36" image="https://i.pinimg.com/736x/27/8a/81/278a81da06402041a98a6693246d6dbe.jpg"></Evolucion>
                    </div>
                </TETabsPane>
                <TETabsPane show={fillActive === "tab3"}>
                    <div className="grid grid-cols-12 gap-4">
                        {props.moves.moves.map((move)=>{
                            return(
                                <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-2">
                                    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <a href="#!" className="flex justify-center items-center">
                                            <img
                                                className="rounded-t-lg h-32 w-auto"
                                                src="https://elcomercio.pe/resizer/Qza4JVGg8H6goxvVNuhk677tFVU=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/47IUF66OWRBMRFAW7XYJ2QCU7Y.jpg"
                                                alt=""
                                            />
                                        </a>
                                        <div className="p-6">
                                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" key={move.move.name}>
                                                {move.move.name}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </TETabsPane>
            </TETabsContent>
        </div>
    </div>
  );
};
