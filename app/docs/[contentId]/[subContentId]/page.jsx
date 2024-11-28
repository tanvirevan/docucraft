import ContentDisplay from "@/components/ContentDisplay";

export default function subContentPage({params: {subContentId}})
 {
   return (
     <div>
        <ContentDisplay id = {subContentId}/>
     </div>
   );
 };
