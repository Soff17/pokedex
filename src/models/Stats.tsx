export interface Stats{
    id:number;
    name:string;
    base_stat:number;
    stats:Stat[];
}

interface Stat{
    stat:{
        name: string;
        url: string;
    }
}