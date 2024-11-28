'use client';

import { useEffect } from "react";


export default function Error({error, reset})
 {
   useEffect(() =>
    {
      console.error(error);
    }, [error])
   return (
     <div className="flex justify-center">
        <div>
          <h2 className="mb-5 text-center">Something went Wrong!</h2>
          <h2 className="mb-5 text-center">{error?.message}</h2>
          <div className="flex justify-center">
            <button className="inline-flex justify-center rounded-3xl bg-slate-900 px-4 py-3 text-lg font-bold text-white hover:bg-slate-700 " onClick={ () => reset()}>
              Try Again
            </button>
          </div>
        </div>
     </div>
   );
 };
