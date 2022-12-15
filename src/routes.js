import { HomePage } from "./pages/home-page";
import { Wedding } from "./pages/wedding";

const routes = [
    // TO-DO change home-page route to Home-page
    {
        path: "/",
        component: <HomePage />,
    },
    {
        path: "home-page",
        component: <HomePage />
    },
    {
        path: "/wedding",
        component: <Wedding />,
    }
]

export default routes