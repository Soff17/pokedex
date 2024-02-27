export interface Stats{
    id:number;
    name:string;
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

interface Stat{
    base_stat:number;
    stat:{
        name: string;
        url: string;
    }
}

interface Ability{
    ability:{
        name:string;
        url:string;
    }
}