import { createRoot } from 'react-dom/client'

// VITE_ prefixed vars are bundled into the client code and visible in the browser.
const viteVar = import.meta.env.VITE_VAR

// Non-VITE_ vars are NOT exposed to client code by Vite — this is always undefined here.
const secretVar = import.meta.env.SECRET_VAR

// Intentional lint error: unused variable (no-unused-vars). Run `npm run lint`.
const unusedVar = 'delete me to fix the lint error'

// Intentional TypeScript error: string is not assignable to number. Run `npm run typecheck`.
const brokenType: number = 'delete me to fix the typescript error'

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Practice CICD</h1>
      <p>Mode: {import.meta.env.MODE}</p>
      <p>VITE_VAR (exposed to the client): {viteVar}</p>
      <p>SECRET_VAR (never exposed to the client): {String(secretVar)}</p>
      <p>brokenType: {brokenType}</p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
