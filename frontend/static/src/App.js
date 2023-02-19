import './App.css';
import Userview from './components/userview';
import RegistrationView from './components/registrationview';
import LoginView from './components/loginview';
function App() {
  return (
    <div>
      <div>
        login page
        <LoginView />
        
      </div>

      <div>
        register page
        <RegistrationView />
      </div>

      <div>
        user page
        <Userview />
      </div>
      
    </div>

  );
}

export default App;
