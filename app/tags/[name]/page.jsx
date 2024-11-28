import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

export default function TagsPage({params: {name}})
 {
   const docs = getDocuments();
   const matchedDocs = getDocumentsByTag(docs, name);
   return (
     <div>
        <ContentDisplay id = {matchedDocs[0].id} />
     </div>
   );
 };
