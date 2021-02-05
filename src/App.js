import './App.css';
import { Header, UserCard, InputCard }  from './Components';

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


function App(){
    return (
      
      <>
        <Header navLinks = {headerLinks} />
        <main>
          <UserCard />          
        </main>
      </>
      
    );
}

export default App;
