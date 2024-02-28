interface EvolutionProps{
    label?: string;
}

export default function EvolucionCard(props:EvolutionProps) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
        <div className="text-center">
            <svg className="mx-auto mb-4 w-32 rounded-full h-6 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.6 3.2a1 1 0 0 0-1.6 1 3.5 3.5 0 0 1-.8 3.6c-.6.8-4 5.6-1 10.7A7.7 7.7 0 0 0 12 22a8 8 0 0 0 7-3.8 7.8 7.8 0 0 0 .6-6.5 8.7 8.7 0 0 0-2.6-4 1 1 0 0 0-1.6.7 10 10 0 0 1-.8 3.4 9.9 9.9 0 0 0-2.2-5.5A14.4 14.4 0 0 0 9 3.5l-.4-.3Z"/>
            </svg>
            <h5 className="mb-2 text-xl font-medium leading-tight">{props.label}</h5>
        </div>
    </div>
  );
};

