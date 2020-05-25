import React from 'react';
import { Header } from '../header/Header';
import { Section } from '../section/Section';

// donetodo: здесь нужно сделать импорт Footer из '../footer/Footer'

import {Footer} from '../footer/Footer';

// donetodo: здесь нужно сделать импорт usersList из '../../constants'

import {usersList} from '../../constants';

// donetodo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import {UserCard} from '../user-card/UserCard';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/react.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      {/*  donetodo: здесь нужно использовать Footer по аналогии с Header */}
        {usersList.map(value => {
            return (
                <UserCard user={value}/>
            )
        })}
      {/*  donetodo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}


      <Section label="Users List">test</Section>
    </div>
  );
}

export default App;
