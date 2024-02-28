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
                Habilidades
                </TETabsItem>
                <TETabsItem
                onClick={() => handleFillClick("tab2")}
                active={fillActive === "tab2"}
                >
                Accesorios
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 pt-5">
                    {props.stats.abilities.map((ability)=>{
                        return(
                            <div>
                                <div className="flex flex-row items-center">
                                <span key={ability.ability.name} className="bg-orange-500 text-white py-1 px-3 rounded-full text-sm">{ability.ability.name}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </TETabsPane>
                <TETabsPane show={fillActive === "tab2"}>
                    <div className="grid grid-cols-12 gap-4">
                        {props.moves.held_items.map((item)=>{
                            return(
                                <Evolucion key={item.item.name} label={item.item.name}></Evolucion>
                            )
                        })}
                    </div>
                </TETabsPane>
                <TETabsPane show={fillActive === "tab3"}>
                    <div className="grid grid-cols-12 gap-4">
                        {props.moves.moves.map((move)=>{
                            return(
                                <Movimientos label={move.move.name} image="https://m.media-amazon.com/images/I/51I3Xrl9keL._AC_UF1000,1000_QL80_.jpg"></Movimientos>
                            )
                        })}
                    </div>
                </TETabsPane>
            </TETabsContent>
        </div>
    </div>
  );
};
