export interface Pokemon{
    id:number;
    name:string;
    height:number;
    abilities:Ability[];
    sprites:{
        other:{
            'official-artwork':{
                front_default:string;
            }
        }
    }
    stats:Stat[];
}

interface Ability{
    ability:{
        name:string;
        url:string;
    }
}

interface Stat{
    base_stat:number;
    stat:{
        name: string;
        url: string;
    }
}