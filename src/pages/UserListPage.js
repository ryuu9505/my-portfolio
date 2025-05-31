import { ProfileCard } from '@components/Card';
import { Section, SectionTitle } from '@components/Section';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from '@/api';

const CenteredCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  min-height: 80vh;
  padding-top: 60px;
  gap: 24px;
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
    <Section id="users">
      <SectionTitle>Users</SectionTitle>
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
  );
}
  