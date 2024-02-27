import { Moves } from '../models/Moves';

interface MovesProps{
    moves: Moves;
}

interface MovimientosProps{
    label?: string;
    image?:string;
}

export default function MovimientosCard(props:MovesProps) {
  return (
    <>
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
    </>
  );
};
