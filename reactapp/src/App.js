
import {Route,Routes} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/qual';
import Home from './pages/home';
import TopAdvisors from './pages/news';
import ProfileManagementPage from './pages/profile';
import Adprof from './pages/advprof';
import Payment from './pages/payment';
import ProfileA from './pages/advdet';
import Sample from './pages/sample';
import Qualifiaction from './pages/qual';
import Notif from './pages/not';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/account' element={<Register/>} />
        <Route path='/q' element={<Qualifiaction/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/p' element={<Profile/>} />
        <Route path='/i' element={<TopAdvisors/>} />
        <Route path='/pro' element={<ProfileManagementPage/>} />
        <Route path='/i/ad' element={<Adprof/>}/>
        <Route path='/i/ad/po' element={<Payment/>}/>
        <Route path='/i/ad/pa' element={<ProfileA/>}/>
        <Route path='/not' element={<Notif/>} />
        
      </Routes>
    </div>
  );
}

export default App;
//Cannot read properties of undefined (reading 'user')?