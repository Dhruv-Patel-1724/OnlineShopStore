import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.jsx";
import { FilterContextProvider } from "./Context/FilterContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../src/Context/ProductContacts.jsx";
import { CartProvider } from "./Context/Cart_context.jsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
console.log("DOMAIN:", domain);
console.log("CLIENT:", clientId);
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    //  domain="dev-7ic2l1i0ffmr4y63.us.auth0.com"
    //     clientId="ub5UboZMHNGdnLeAoE510huKMWOooGfy"
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <BrowserRouter>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </BrowserRouter>
  </Auth0Provider>,
);
