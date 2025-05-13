import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/navbar/Navbar";
import Rightnav from "./Shared/Rightnav";

 

const News = () => {

    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar>:</Navbar>

             <div className="grid grid-cols-4 gap-4 px-8">
                <div className="col-span-3 border border-red-500">
                    <p>News coming Soon</p>
                    {id}

                </div>

                <div className="col-span-1 border border-red-500 ">

                    <Rightnav></Rightnav>

                </div>

             </div>
        </div>
    );
};

export default News;