import "./styles.css";
import { appConfig } from "./config";

const notes = [
  "Pipeline de calidad activo",
  "Promoción controlada de develop a staging",
  "Despliegue de staging en GitHub Pages",
  "Cambio visible desde develop"
];

export default function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Laboratorio 1 · Despliegue con GitHub</p>
        <h1>{appConfig.appName}</h1>
        <p className="hero-copy">
          Aplicación mínima para practicar pipeline, despliegue y promoción entre entornos.
        </p>
      </section>

      <section className="grid">
        <article className="card card-accent">
          <h2>Entorno actual</h2>
          <p className="badge">{appConfig.publicEnvironment}</p>
          <p>Este valor cambia en cada build y nos ayuda a verificar qué entorno estamos viendo.</p>
        </article>

        <article className="card">
          <h2>Versión visible</h2>
          <p className="mono">{appConfig.publicVersion}</p>
          <p>Usaremos el SHA corto del commit para identificar qué versión llegó a staging.</p>
        </article>

        <article className="card">
          <h2>Configuración cargada</h2>
          <ul>
            <li>NODE_ENV: {appConfig.nodeEnv}</li>
            <li>PORT: {appConfig.port}</li>
            <li>LOG_LEVEL: {appConfig.logLevel}</li>
            <li>
              FEATURE_X_ENABLED: {appConfig.featureXEnabled ? "true" : "false"}
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>Qué estamos practicando</h2>
          <ul>
            {notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}