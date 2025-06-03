import { ProfileCard } from '@components/Card';
import { Section, SectionTitle } from '@components/Section';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import api from '@/api';

const CenteredCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding-top: 60px;
  max-width: 1024px;
  gap: 24px;
  margin: 0 auto;
`;

export default function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/users');
        setUsers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setUsers([]);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Users | Ratelo</title>
      </Helmet>

      <Section id="users">
        <SectionTitle></SectionTitle>
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
              />
            );
          })}
        </CenteredCardList>
      </Section>
    </>
  );
}
  