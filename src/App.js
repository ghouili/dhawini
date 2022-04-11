import './App.css';
import { useContext } from 'react';

import { MainContext } from './Hooks/Context/MainContext';

import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import MainRoute from './Routes/MainRoute';

function App() {

  const { side_show } = useContext(MainContext);

  return (
    <>
      <NavBar />
      
      <main>
        <SideBar />

        <div className={side_show ? 'Main_content active' : 'Main_content'}>
          <MainRoute />
        </div>
      </main>

    </>
  );
}

export default App;
