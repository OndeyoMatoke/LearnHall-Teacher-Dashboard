
import './App.css';
import ContentPage from './Components/ContentPage/ContentPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';


function App() {
  return (
    <div className='Application'>
      <Header/>
        <div className='SideContent'>
          <SideBar/>
          <ContentPage/>
        </div>
      <Footer/>
     
    </div>
  );
}

export default App;
