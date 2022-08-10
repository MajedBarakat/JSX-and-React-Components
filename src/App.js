import './Component/Profile/FullName'
import './App.css';
import { Address } from './Component/Profile/Address.js';
//import { slh } from './Component/Profile/Address.js';
//import { majid } from './Component/Profile/Address.js';
import FullName  from './Component/Profile/FullName.js';
import  {ProfilePhoto}  from './Component/Profile/ProfilePhoto';

function App() {
  return (
    
    <div>
      <FullName/>
      <ProfilePhoto/>
      <Address/>
    </div>
  );
}

export default App;
