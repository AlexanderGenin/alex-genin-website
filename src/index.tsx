import App from "./App";
import "./sass/index.scss";
import emailjs from "@emailjs/browser";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

emailjs.init("user_oRPv1dJnDLBAMwWX114I8");

root.render(<App />);
