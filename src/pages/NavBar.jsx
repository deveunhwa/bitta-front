import { useNavigate } from "react-router-dom";
import { getUsernameFromToken } from "./Test1.jsx"

import signup from "./Signup.jsx";

function NavBar() {


    if(localStorage.getItem('access') == null){
        var enable = true
    } else {
        var enable = false
    }

    console.log(enable);
    const navigate = useNavigate();


    function gofeed(){
        navigate('/feed');
    }

    function gologin(){
        navigate('/login');
    }

    function gosignup(){
        navigate('/signup');
    }

    var username = getUsernameFromToken();




    return (
        <div>
            <nav className="fixed top-0 w-full bg-white border-gray-200 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Bitta</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            {/*여기다가 히든*/}
                            <div className={`${enable ? 'hidden' : ''} flex items-center space-x-3 rtl:space-x-reverse`}>
                                {username}님 좋은 하루 되세요!__
                                <button
                                    type="button"
                                    onClick={gofeed}
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-10 rounded-full" src="src/img/profile.jpg"
                                         alt="user photo"/>
                                </button>

                            </div>
                            {/*여기 부분을 히든으로 바꿔줘야함!*/}
                            <div className={`${enable ? '' : 'hidden'}`}>
                                <button
                                    className="bg-green-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                                    onClick={gologin}
                                >
                                    로그인
                                </button>
                                {/* 회원가입 버튼 */}
                                <button
                                    className="bg-green-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                                    onClick={gosignup}
                                >

                                    회원가입
                                </button>
                            </div>


                        <div
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                            id="user-dropdown">
                            <div className="px-6 py-3">
                                <span className="block text-sm text-gray-900">Bonnie Green</span>
                                <span className="block text-sm text-gray-500 truncate">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-user"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">메인페이지</a>
                            </li>
                            <li>
                                <a href="/JobPost" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">구인 게시글</a>
                            </li>
                            <li>
                                <a href="/calendar1" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">나의 캘린더</a>
                            </li>
                            <li>
                                <a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">채팅</a>
                            </li>
                            <li>
                                <a href="/chating" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">구인요청확인</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="h-[100px]"/>
        </div>
    );
}

export default NavBar;