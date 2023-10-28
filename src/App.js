import logo from './logo.svg';
import './App.css';
import routes from './routes/Index';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
       <Switch>
          {routes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                exact={true}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
    </div>
  );
}

export default App;
