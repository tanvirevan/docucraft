import ContentDisplay from "@/components/ContentDisplay";

export default function contentPage({params: {contentId}})
 {
   return (
     <div>
        <ContentDisplay id = {contentId}/>
     </div>
   );
 };
