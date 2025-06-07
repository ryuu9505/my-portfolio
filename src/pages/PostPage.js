import Container from '@components/Container';
import { PostTitle } from '@components/Title';
import { PostImageContainer, ProjectContent, ProjectDescription } from '@styles/CommonStyles';
import { RoundedImage } from '@styles/ImageStyles';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import api from '@/api';
import Divider from '@/components/Divider';

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: '',
    author: { name: '' },
    createdAt: '',
    content: '',
    thumbnail: { url: '', altText: '' },
  });

  useEffect(() => {
    if (!postId) return;
    (async () => {
      try {
        const res = await api.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        setPost({
          title: '제목을 불러올 수 없음',
          author: { name: '알 수 없음' },
          createdAt: '',
          content: '내용을 불러올 수 없음',
          thumbnail: { url: '', altText: '' },
        });
      }
    })();
  }, [postId]);

  return (
    <>
    <Helmet>
      <title>{post.title} | UNBLIND</title>
    </Helmet>
    
    <Container maxWidth="1024px">
        <PostImageContainer style={{ marginBottom: 32 }}>
          {post.thumbnail?.url && (
            <RoundedImage src={post.thumbnail.url} alt={post.thumbnail.altText} style={
                { width: '100%', height: '100%', borderRadius: 16 }
            } />
          )}
        </PostImageContainer>
        <ProjectContent>
          <PostTitle>{post.title}</PostTitle>
          <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
            <span style={{ fontWeight: 500, fontSize: 20 }}>{post.user?.name}</span>
            <span style={{ color: '#aaa', fontSize: 20 }}>{post.createdAt?.slice(0, 10)}</span>
          </div>
          <Divider visible={true} margin="0" />
          <ProjectDescription style={{ marginTop: 24, whiteSpace: 'pre-line' }}>{post.content}</ProjectDescription>
        </ProjectContent>
    </Container>
    </>
  );
} 