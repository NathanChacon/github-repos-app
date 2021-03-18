import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './styles/utils.css'
import './styles/theme.css'
import './styles/blocks.css'
import Home from './views/Home/Home'
import UserDetails from './views/UserDetails/UserDetais'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/user/:userName'>
          <UserDetails></UserDetails>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
