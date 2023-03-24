import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component';
import Home from './components/Home/home.component';
import CustomerPage from './routes/CustomerPage/customerPage.component';
import TaskRoute from './routes/TaskRoute/taskRoute.component';
import LogInPage from './routes/LogInPage/logInPage.component';
import { useSelector } from 'react-redux';
import { selectLoggedUser } from './store/users/users.selector';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home/>}/>
        <Route path='/customer-page/*' element={<CustomerPage/>}/>
        <Route path='/task-center/*' element={<TaskRoute/>}/>
      </Route>
        <Route path='/log-in-page' element={<LogInPage/>}/>
    </Routes>
  );
}

export default App;
