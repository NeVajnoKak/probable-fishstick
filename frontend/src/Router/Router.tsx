import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatPages from "../Pages/ChatPages/ChatPages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children : [
            {path: "", element: <ChatPages/>}
        ]
    }   
])