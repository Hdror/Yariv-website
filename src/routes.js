import { HomePage } from "./pages/home-page";
import { Wedding } from "./pages/wedding";

const routes = [
    {
        path: "/",
        component: <HomePage />,
    },
    {
        path: "/wedding",
        component: <Wedding />,
    }
]

export default routes