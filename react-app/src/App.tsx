import { useEffect, useState } from "react";
import Route from "./models/Routes";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/routes`)
    .then((data) => data.json())
    .then((data) => setRoutes(data))
  }, []);

  if (!routes.length)
   return (<div><h1>No connection to API service.</h1></div>);

  return (
    <div >
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            Rota: {route.title}
            <br />
            De: {route.title.split('->')[0]} ({route.startPosition.join(', ')})
            <br />
            Para: {route.title.split('->')[1]} ({route.endPosition.join(', ')})
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
