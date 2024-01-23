import MyClient from "./myclient"
import MyServer from "./myserver"

export default function ClientPage() {
    return <div>
        <h1>Client Page</h1>
        {/* <MyClient /> */}
        {/* Pass Server compoent as prop to Child Compoent */}
        <MyClient>
            <MyServer />
        </MyClient>
    </div>
}