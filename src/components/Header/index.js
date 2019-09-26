import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import history from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  const {
    location: { pathname },
    goBack
  } = history;

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
          {pathname !== '/dashboard' && (
            <button type="button" onClick={goBack}>
              <MdArrowBack size={36} />
              Voltar
            </button>
          )}
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
            <button onClick={handleLogOut} type="button">
              Log out
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
