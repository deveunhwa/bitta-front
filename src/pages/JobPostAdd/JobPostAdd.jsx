import { useState } from 'react';
import axios from 'axios';
import './jobPostAdd.css';
import NavBar from '../NavBar.jsx';

function JobPostAddForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        payStatus: 'PAID',
        workCategory: 'FEATURE_FILM',
        auditionDate: '',
        startDate: '',
        endDate: '',
        closeDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 서버로 데이터 전송
        axios.post('http://localhost:8080/api/v1/job-post', formData)
            .then(response => {
                console.log('Job Post Created:', response.data);
                // 성공 메시지 출력 또는 페이지 이동
                alert('Job Post successfully created!');
            })
            .catch(error => {
                console.error('Error creating job post:', error);
                alert('Failed to create Job Post.');
            });
    };

    return (
        <div>
            <NavBar />
            <div className="post-container">
                <div className="inner">
                    <h2>오디션 / 캐스팅 공고 등록</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>작품 제목 :</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>작품 설명 :</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>촬영 지역 :</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>급여 방식 :</label>
                            <select
                                name="payStatus"
                                value={formData.payStatus}
                                onChange={handleChange}
                                required
                            >
                                <option value="PAID">유급</option>
                                <option value="FREE">무급</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>작품 카테고리 :</label>
                            <select
                                name="workCategory"
                                value={formData.workCategory}
                                onChange={handleChange}
                                required
                            >
                                <option value="FEATURE_FILM">장편 영화</option>
                                <option value="SHORT_FILM">단편 영화</option>
                                <option value="FEATURE_WEBDRAMA">장편 웹드라마</option>
                                <option value="SHORT_WEBDRAMA">단편 웹드라마</option>
                                <option value="MUSIC_VIDEO">뮤직비디오</option>
                                <option value="COMMERCIAL">광고</option>
                                <option value="DOCUMENTARY">다큐멘터리</option>
                                <option value="PHOTOGRAPHY">사진 촬영</option>
                                <option value="COVER_MODEL">표지 모델</option>
                                <option value="SNAPSHOT">스냅샷</option>
                                <option value="PHOTO_SHOOT">화보 촬영</option>
                                <option value="FASHION_FILM">패션 사진</option>
                                <option value="VLOG">브이로그</option>
                                <option value="INTERVIEW">인터뷰</option>
                                <option value="EVENT_VIDEO">행사 영상</option>
                                <option value="YOUTUBE">유튜브 섭외</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>오디션 일자 :</label>
                            <input
                                type="datetime-local"
                                name="auditionDate"
                                value={formData.auditionDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>촬영 시작 일자 :</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>촬영 종료 일자 :</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>모집 마감 일자 :</label>
                            <input
                                type="date"
                                name="closeDate"
                                value={formData.closeDate}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">작성 완료</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default JobPostAddForm;
