
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Navbar from './componets/Navbar';

import PageContainer from './containers/PageContainer';
import { useSelector } from 'react-redux';
import Card from './componets/Card';

function App() {

  const {drawer}=useSelector(state=>state.drawer)
console.log(drawer,"drawer");
  return (
    <div className="App">
      <PageContainer>
     <BrowserRouter>
     <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='details/:id' element={<Details/>} />
      </Routes>
      {drawer===true&& <Card/>}
     
     </BrowserRouter>
     </PageContainer>
    </div>
  );
}

export default App;
