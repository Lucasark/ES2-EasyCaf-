import Paciente from "./components/Portal/Paciente"
import Home from "./components/Portal/Home"
import Exame from "./components/Portal/Exame"
import RealizarExame from "./components/Portal/RealizarExame"
import Analise from "./components/Portal/Analise"
import Resultados from "./components/Portal/Resultados"

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
        layout: "/portal"
    },
    {
        path: "/paciente",
        name: "paciente",
        component: Paciente,
        layout: "/portal"
    },
    {
        path: "/exame",
        name: "exame",
        component: Exame,
        layout: "/portal"
    },
    {
        path: "/RealizarExame",
        name: "Realizar Exame",
        component: RealizarExame,
        layout: "/portal"
    },
    {
        path: "/Analise",
        name: "Analise",
        component: Analise,
        layout: "/portal"
    },
    {
        path: "/Resultados",
        name: "Resultados",
        component: Resultados,
        layout: "/portal"
    }
    
];
export default routes;