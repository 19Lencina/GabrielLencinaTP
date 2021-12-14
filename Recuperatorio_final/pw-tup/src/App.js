import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Courses from './components/Courses';
import Profile from './components/Profile';
import Pagina from './components/Pagina';
function App() {
  return (
    <Router>
      <div>
      <h1>Bienvenidos al churasco</h1>
    <ul class="menu">
        <li><a class="link" href="https://www.instagram.com/carniceraelchurrasco/">Instagram</a></li>
        <li><a class="link" href="https://www.facebook.com/Carniceriaelchurrasco">facebook</a></li>
        <li><a class="link" href="Accesorios.html">Accesorios</a></li>
        <li><a class="link" href=" https://api.whatsapp.com/send/?phone=5493412794670&text&app_absent=0">Whatsapp</a></li>
    </ul>
        <nav>
          <ul>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
            <li>
              <Link to="/pagina">Pagina</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/courses">
            <Courses/>
          </Route>
          <Route path="/profile">
              <Profile/>
          </Route>   
          <Route path="/pagina">
              <Pagina/>
          </Route>   
        </Switch>
      </div>
    </Router>
  )
}
export default App;