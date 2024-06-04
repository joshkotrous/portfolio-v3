import { ViteReactSSG } from "vite-react-ssg";
import { routesWithLayout } from "./App.js";

export const createRoot = ViteReactSSG({ routes: routesWithLayout });
