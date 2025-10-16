import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const currentUrl = new URL(window.location.href);
const redirectParam = currentUrl.searchParams.get("redirect");

if (redirectParam) {
  currentUrl.searchParams.delete("redirect");
  const target = decodeURIComponent(redirectParam);
  const baseUrl = import.meta.env.BASE_URL;
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedTarget = target.startsWith("/") ? target : `/${target}`;
  const newUrl = `${normalizedBase}${normalizedTarget}`;
  window.history.replaceState(null, "", newUrl);
}

createRoot(document.getElementById("root")!).render(<App />);
