// Home.js
import './jobpost.css';
import NavBar from "./NavBar";
import axios from "axios";

console.log("jobpost.css loaded");

function Home() {

    return (
        <div>
            <NavBar/>
            <div className="flex justify-center items-center min-h-screen p-4">
                {/* 첫 번째 세로로 긴 블록 */}
                <img
                    src="src/img/main1.png"
                    className="flex-shrink-0 w-[400px] h-[800px] flex items-center justify-center text-white text-2xl rounded-lg">
                </img>

                {/* 두 번째, 세 번째 블록 컨테이너 */}
                <div className="flex flex-col w-1/3 h-[75vh] space-y-4 ml-4">
                    {/* 두 번째 블록 */}
                    <img src="src/img/main2.png"
                         className="flex-1 flex items-center justify-center text-white text-2xl rounded-lg">
                    </img>

                    {/* 세 번째 블록 */}
                    <img src="src/img/main3.jpg"
                         className="flex-1 flex items-center justify-center text-white text-2xl rounded-lg">
                    </img>
                </div>
            </div>

        </div>
    );
}

export default Home;