
import './App.css';
import ContentPage from './Components/ContentPage/ContentPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routes from './Components/Routes/Routes';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div>
      <Header/>
        <div>
          <SideBar/>
          <ContentPage/>
        </div>
      <Footer/>
     
    </div>
  );
}

export default App;
