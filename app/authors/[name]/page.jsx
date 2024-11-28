import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

export default function AuthorsPage({params: {name}})
 {
   const docs = getDocuments();
   const matchedDocs = getDocumentsByAuthor(docs, name);
   return (
     <div>
        <ContentDisplay id = {matchedDocs[0].id} />
     </div>
   );
 };
