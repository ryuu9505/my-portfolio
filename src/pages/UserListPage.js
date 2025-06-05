import { ProfileCard } from '@components/Card';
import { Section } from '@components/Section'
import React, { useEffect, useRef,useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import api from '@/api';
import BasicHeader from '@/components/BasicHeader';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import Logo from '@/components/Logo';


const CenteredCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding-top: 20px;
  max-width: 1024px;
  gap: 24px;
  margin: 0 auto;
`;

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastId, setLastId] = useState(null);
  const loadingRef = useRef(false);

  const fetchUsers = async (cursor) => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    setLoading(true);
    try {
      const params = { pageSize: 20 };
      if (cursor) params.lastId = cursor;
      const res = await api.get('/users/cursor', { params });
      const newUsers = res.data.content || res.data;
      setUsers(prev => [...prev, ...newUsers]);
      setHasMore(!res.data.last);
      if (newUsers.length > 0) setLastId(newUsers[newUsers.length - 1].id);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    fetchUsers(null);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      ) {
        if (!loadingRef.current && hasMore) fetchUsers(lastId);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMore, lastId]);

  useEffect(() => {
    if (
      !loading &&
      hasMore &&
      document.body.offsetHeight <= window.innerHeight
    ) {
      fetchUsers(lastId);
    }
  }, [loading, hasMore, lastId]);

  if (users.length === 0 && loading) return <Loading />;

  return (
    <>  
      <BasicHeader />
      <Helmet>
        <title>Users | Ratelo</title>
      </Helmet>
      <Logo />
      <Section id="users" padding="0px 20px 100px 20px">
        <CenteredCardList>
          {users.map((user) => {
            const companyLogos = Array.isArray(user.careers)
              ? user.careers.slice(0, 3).map(career => career.company?.logo).filter(Boolean)
              : [];
            return (
              <ProfileCard
                key={user.id || user._id || user.name}
                profileImage={user.profileImage}
                name={user.name}
                username={user.username || user.id || user._id}
                bio={user.bio || ''}
                companyLogos={companyLogos}
                userType={user.userType}
              />
            );
          })}
          {loading && users.length > 0 && <Loading marginTop="80px" height="10px"/>}
        </CenteredCardList>
        
        {!hasMore && <div style={{textAlign: 'center', fontSize: '1.2rem', fontWeight: '300', padding: '80px 0px 40px 0px'}}>All users loaded</div>}
      </Section>
      <Footer />
    </>
  );
}
  