import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.route';
import Home from './components/home/home.component';
import CustomerPage from './routes/customer-page/customer-page.component';
import TaskCenter from './routes/task-center/task-center.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home/>}/>
        <Route path='/customer-page/*' element={<CustomerPage/>}/>
        <Route path='/task-center' element={<TaskCenter/>} />
      </Route>


    </Routes>



  );
}

export default App;
