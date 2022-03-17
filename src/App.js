import React from 'react';
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import TopBar from './components/TopBar/TopBar'
import Content from './Content'

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <Content />
          </div>
        </div> 
        <Footer />
      </div>  
    </div>
    

  );
}

export default App;
