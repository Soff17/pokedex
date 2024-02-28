export interface Moves{
    id:number;
    name:string;
    moves:Move[];
    held_items:Item[];
}

interface Move{
    move:{
        name: string;
        url: string;
    }
}

interface Item{
    item:{
        name: string;
        url: string;
    }
}