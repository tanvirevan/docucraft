import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";
 const ContentDisplay = async ({id}) =>
 {
   const documentContent = await getDocumentContent(id);

   return (
      <article className="prose dark:prose-inver">
        <h1>{documentContent.title}</h1>
        <div>
          <span>Published on: {documentContent.date}</span> by {" "}
          <Link href={`/authors/${documentContent.author}`}>
            {documentContent.author}
          </Link> {" "}
          under the {" "}
          <Link href={`/categories/${documentContent.category}`}>
            {documentContent.category}
          </Link> {" "}
          category.
        </div>

        <div className="bg-none">
          {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </div>

        <div  
          className="lead"
          dangerouslySetInnerHTML={{__html: documentContent.contentHtml}}
        />
      </article>
   );
 };
export default ContentDisplay;

