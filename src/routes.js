import { Counter } from "./components/Counter";
import { Fetch } from "./components/Fetch";
import { Input } from "./components/Input";
import { LocalStorage } from "./components/LocalStorage";
import { Logger } from "./components/Logger";

let routes = [
    {path:"/logger" , element:<Logger />},
    {path:"/counter" , element:<Counter />},
    {path:"/fetch" , element:<Fetch />},
    {path:"/localstorage" , element:<LocalStorage />},
    {path:"/input" , element:<Input />},
];
export default routes