import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Store } from "@tauri-apps/plugin-store";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import { setMode } from "./store/themeSlice";


async function bootstrap() {
  // read Tauri Store
  const tauriStore = await Store.load("settings.json");
  const savedTheme = await tauriStore.get<string>("theme");

  if (savedTheme) {
    store.dispatch(setMode(savedTheme));
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
