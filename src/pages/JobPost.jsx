// Jobpost.js
import {useEffect, useState} from 'react';
import './jobpost.css';
import NavBar from "./NavBar";
import axios from 'axios';
import {Link} from "react-router-dom";

function Jobpost() {

    const [jobPosts, setJobPosts] = useState([]);

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
        <div>
            <NavBar></NavBar>
            <div className="post-container">z
                <div className="inner">
                    <div className="contents">
                        <div className="dummy-height"></div>
                        {jobPosts && jobPosts.map((i, index) => (
                            <div className="dill-box-type" key={index}>
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
                                            <div className="cal-text">📆 10월 20일</div>
                                            <a className="dill-list">
                                                <div className="post-name">
                                                    <div className="main-name">{i.member?.nickname || '사용자'} 감독님</div>
                                                    <div className="phistory">경력 2년</div>
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
                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="sinner scroll_p">
                            <div className="res_form">
                                <h2 className="title">구인구직 설정</h2>
                                <div className="cont">
                                    <a className="ico-place" style={{ cursor: 'pointer' }}>
                                        나의 구인 게시글
                                        <button href="/JobPost-detail" className="btn_edit">펼쳐보기</button>
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
                                <div className="btn_group">
                                    <Link to="/add-job-post">
                                        <button className="btnx type03">게시물 추가</button>
                                    </Link>
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