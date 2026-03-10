import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./context/user.context";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
);
