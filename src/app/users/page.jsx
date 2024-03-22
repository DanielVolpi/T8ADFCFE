'use client';

import { BrowserRouter } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import getText from '@/services/getText';

const UserListing = React.lazy(() => import('@/components/UserListing'));
const MainHeaderLine = React.lazy(() => import('@/components/MainHeaderLine'));
const UsersContainer = React.lazy(() => import('@/components/UsersContainer'));

export default function Users() {
  const { userPageTitle } = getText();
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/users`);
        const json = await response.json();
        setListOfUsers(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = (userId) => {
    setListOfUsers(
      listOfUsers.filter((user) => {
        return user._id != userId;
      })
    );
  };

  return (
    <BrowserRouter>
      <UsersContainer>
        <MainHeaderLine text={userPageTitle} />
        {listOfUsers && listOfUsers.length > 0 && (
          <UserListing entries={listOfUsers} deleteCallback={deleteUser} />
        )}
      </UsersContainer>
    </BrowserRouter>
  );
}
