import { ClientComponentOne } from "@/components/client-componet-one";
import { ServerComponentOne } from "@/components/server-component-one";
// import { ServerComponentOne } from "@/components/server-component-one";

export default function Interleaving(){
    return (
      <>
        <h1>Interleaving page</h1>
        {/* <ServerComponentOne/> */}
        <ClientComponentOne>
            <ServerComponentOne/>
        </ClientComponentOne>
      </>
    );
}