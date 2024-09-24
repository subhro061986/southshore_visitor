import logo from './logo.svg';
import './App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppRouter from './AppRouter';
import { AuthProvider } from './Context/Authcontext';
import { UserProvider } from './Context/Usercontext';

const App=()=> {
  return (
    <AuthProvider>
      <UserProvider>
          <AppRouter/> 
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
