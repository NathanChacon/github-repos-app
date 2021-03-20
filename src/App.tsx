import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom"
import './styles/utils.css'
import './styles/theme.css'
import './styles/blocks.css'
import Home from './views/Home/Home'
import UserDetails from './views/UserDetails/UserDetails'
import NotFoundPage from './views/NotFoundPage/NotFoundPage'

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
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404"/>
      </Switch>
    </Router>
  )
}

export default App
