import React from 'react';
import propTypes from 'prop-types';
import css from './Friends.module.css';

function Friends({ friends }) {
  const component = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={css.item}>
        <span className={`${css.isOnline} ${css[isOnline]}`}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
  return <ul className={css.friend_list}>{component}</ul>;
}

Friends.propTypes = {
  isOnline: propTypes.bool,
  avatar: propTypes.string,
  name: propTypes.string,
};

export default Friends;
