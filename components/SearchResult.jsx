import Link from "next/link";

export default function SearchResult({results, term, CloseSearchResults})
 {
   return (
     <div className="absolute left-0  top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
        <p className="!text-lg">
          <span className="font-bold">{term}</span>
        </p>

        <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
           {
              results.map(result => (
                <li 
                  key={result.id}
                  className="transition-all hover:text-emerald-600"
                  onClick={(e) => CloseSearchResults(e)}
                >
                  <Link href={`/docs/${result.id}`}>
                    {result.title}
                  </Link>
                </li>
              ))
           }
        </ul>
     </div>
   );
 };
 