import "bootstrap/dist/css/bootstrap.min.css";
import './components/styles.css'
import { Header } from "./components/Header";
import routes from "./routes";
import {useRoutes} from 'react-router-dom'
function App() {
  let router = useRoutes(routes)
  return (
    <div>
      <Header />
      {router}
      
    </div>
  );
}

export default App;
