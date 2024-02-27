export interface Moves{
    id:number;
    name:string;
    moves:Move[];
}

interface Move{
    move:{
        name: string;
        url: string;
    }
}