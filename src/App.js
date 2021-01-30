import { Component } from 'react';
import './App.css';
import index, { Header } from './Components/index';

const headerLinks = [
  {
    "id": 1,
    "title": "Ana Sayfa",
    "link": "/"
  },
  {
    "id": 2,
    "title": "Yazılar",
    "link": "/blog"
  },
  {
    "id": 3,
    "title": "Projeler",
    "link": "/projects"
  },
  {
    "id": 4,
    "title": "Hakkımda",
    "link": "/about"
  }
]

class App extends Component{
  render(){
    return (
      <>
        <Header navLinks ={headerLinks} />
      </>
    );
  }
}

export default App;
