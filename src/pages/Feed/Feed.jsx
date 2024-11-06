import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 추가합니다.
import "./Feed.css";
import samplePosts from "./samplePosts"; // Ensure this matches the file path

const Feed = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [posts, setPosts] = useState(samplePosts);

  return (
    <div className="feed">
      {/* 메인 페이지로 돌아가는 버튼 */}
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
      <div className="profile-section">
        <img
          className="profile-image"
          src="/docs/images/people/profile-picture-3.jpg" // 프로필 이미지
          alt="Profile"
        />
        <h2 className="nickname">닉네임</h2>
        <p className="bio">여기에 자기소개를 적으세요.</p>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img className="post-image" src={post.imageUrl} alt={post.title} />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;