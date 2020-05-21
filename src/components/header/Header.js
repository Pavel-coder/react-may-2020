import React from 'react';
import Logo from '../../assets/react.png';
// import { UserInfo } from '../userInfo/UserInfo';
import { links } from '../../constants';

import './Header.scss';

export const Header = () => {
  return (
    <header className="may-header navbar">
      <img className="may-header-logo" alt="app logo" src={Logo} />

      <div className="may-header-links-wrapper">
            {links.map((item,index) =>{
                return (
                    <div key={index} className="nav-item">
                    <a href={item.url}  className="may-header-links-wrapper-link nav-link">{item.name}</a>
                        </div>
                )
            })}
      </div>

    {/*  /!*<UserInfo />*!/*/}

    </header>
  );
      };
