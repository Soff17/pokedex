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
}

interface Ability{
    ability:{
        name:string;
        url:string;
    }
}