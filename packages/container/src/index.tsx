import * as React from "react"; //TODOEgemen: delete it

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <App name="Egemen App" />
  </StrictMode>
);
