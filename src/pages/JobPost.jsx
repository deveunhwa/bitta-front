// Jobpost.js
import {useEffect, useState} from 'react';
import './jobpost.css';
import NavBar from "./NavBar";
import axios from 'axios';
import {Link} from "react-router-dom";

function Jobpost() {

    const [jobPosts, setJobPosts] = useState([

        {
            id: 1,
            title: "더미 게시물 제목 1",
            description: "이것은 CSS 테스트용 더미 게시물입니다.",
            location: "서울",
            payStatus: "유급",
            category: "영화",
            auditionDate: "2024-11-10",
            startDate: "2024-11-15",
            endDate: "2024-11-20"
        },
        {
            id: 2,
            title: "더미 게시물 제목 2",
            description: "다른 게시물의 CSS 스타일 테스트용입니다.",
            location: "부산",
            payStatus: "무급",
            category: "광고",
            auditionDate: "2024-11-11",
            startDate: "2024-11-16",
            endDate: "2024-11-21"
        }
    ]);

    useEffect(() => {
        // API 요청
        axios.get('http://localhost:8080/api/v1/job-post')
            .then(response => {
                // JSON에서 content 배열만 추출하여 상태에 저장
                setJobPosts(response.data.content);
            })
            .catch(error => console.error("데이터를 불러오는 중 오류 발생:", error));
    }, []);

    console.log(jobPosts);



    return (
        <div className="qwer">
            <NavBar></NavBar>
            <div className="post-container">
                <div className="wrapper">
                    <div className="inner">
                        <div className="contents">
                            <div className="dummy-height"></div>
                            {jobPosts && jobPosts.map((i) => (
                                <div className="dill-box-type" key={i.id}>
                                    <div className="dill-box-warp">
                                        <div className="top-cont">
                                            <div className="main-ctext">
                                                <div className="camera-category">📷</div>
                                                <div className="post-title">| {i.title || '제목 없음'}</div>
                                                <span className="post-explane">{i.description || '설명이 없습니다'}</span>
                                            </div>
                                            <div className="img-area">
                                                <img src={i.media?.filename || '/images/herin.png'} alt="Post" />
                                            </div>
                                        </div>
                                        <ul className="dill-list-box">
                                            <li className="list-item">
                                                <div className="cal-text">📆 {i.auditionDate || '날짜 없음'}</div>
                                                <a className="dill-list">
                                                    <div className="post-name">
                                                        <div className="main-name">{i.member?.nickname || '사용자'} 감독님</div>
                                                        <div className="phistory">경력 {i.member?.experience || '정보 없음'}</div>
                                                        <div className="post-price">
                                                            {i.payStatus === 'PAID' ? '💸 협상 문의' : '💸 상호 무페이'}
                                                        </div>
                                                    </div>
                                                    <div className="postbtn">
                                                        <div className="btn_group1">
                                                            <button className="btn_res type03">지원하기</button>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="sinner scroll_p">
                            <div className="res_form">
                                <h2 className="title">구인구직 설정</h2>
                                <div className="cont">
                                    <a className="ico-place" style={{ cursor: 'pointer' }}>
                                        나의 구인 게시글
                                        <Link to="/add-job-post" className="btn_edit">게시물 추가</Link>
                                    </a>
                                </div>
                                <div className="cont">
                                    <a className="ico-date">
                                        10.25(금) 11:00 ~ 10.27(일) 15:00
                                        <button className="btn_edit">수정</button>
                                    </a>
                                </div>
                                <div className="btn_group">
                                    <button className="btnx type02">재검색</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Post Container end */}
        </div>
    );
}

export default Jobpost;