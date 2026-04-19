# 🚀 Release Board V1 - Gestión profesional de configuración y secretos

## 🧭 Propósito

Este proyecto es una aplicación web mínima desarrollada con **React + Vite** cuyo objetivo es demostrar prácticas profesionales de:

- Gestión de configuración mediante variables de entorno  
- Separación entre configuración y secretos  
- Validación automática de variables requeridas  
- Integración continua (CI)  
- Despliegue en GitHub Pages  
- Flujo controlado de cambios entre entornos  

Este proyecto forma parte de una actividad académica orientada a simular un entorno real de desarrollo.

## 🧱 Tecnologías utilizadas

- React  
- Vite  
- TypeScript  
- Node.js  
- GitHub Actions  
- GitHub Pages  
- dotenv  

## ⚙️ Configuración vs Secretos

### 🔹 Configuración (no sensible)

Son parámetros que pueden cambiar entre entornos sin representar riesgo:

- VITE_APP_NAME  
- VITE_PORT  
- VITE_NODE_ENV  
- VITE_LOG_LEVEL  
- VITE_FEATURE_X_ENABLED  
- VITE_PUBLIC_ENVIRONMENT  
- VITE_PUBLIC_VERSION  

Estas variables pueden ser usadas por la aplicación y mostradas en la interfaz.

### 🔴 Secretos (sensibles)

Son datos que **NO deben almacenarse en el repositorio ni exponerse**:

- DB_PASSWORD  
- API_KEY  
- JWT_SECRET  

En este proyecto son simulados y se usan únicamente para validar buenas prácticas.

## 📦 Variables requeridas

### Variables públicas (VITE_*)

```env
VITE_APP_NAME=Release Board V1
VITE_PORT=5173
VITE_NODE_ENV=development
VITE_LOG_LEVEL=debug
VITE_FEATURE_X_ENABLED=true
VITE_PUBLIC_ENVIRONMENT=local
VITE_PUBLIC_VERSION=dev-local
```

### 🔐 Secretos simulados

```env
DB_PASSWORD=change_me_password
API_KEY=change_me_api_key
JWT_SECRET=change_me_jwt_secret
```

## 📄 Archivo `.env.example`

Este archivo contiene la plantilla de configuración sin datos sensibles.

Sirve como referencia para que cualquier desarrollador pueda configurar su entorno local.

## 🛠️ Configuración local

### 1. Clonar repositorio

```bash
git clone <URL_DEL_REPO>
cd deploy-v1-pages
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

Copiar el archivo `.env.example`:

```bash
cp .env.example .env
```

En Windows, copiar manualmente el archivo desde el explorador.

## ▶️ Ejecución del proyecto

```bash
npm run dev
```

Abrir en el navegador:
http://localhost:5173


## ✅ Validación de configuración

Este proyecto incluye un script que valida todas las variables requeridas.

Ejecutar:

```bash
npm run validate:env
```

### Resultado esperado
```bash
✅ Environment validation passed.
```

### En caso de error
La aplicación fallará con mensajes como:
```bash
❌ Missing required environment variable: JWT_SECRET
```


Esto garantiza que el sistema no arranque con configuración inválida.

## 🏗️ Build del proyecto

```bash
npm run build
```

## 🔒 Seguridad aplicada

- No se almacenan secretos en el código fuente  
- `.env` está excluido del repositorio  
- Se usa `.env.example` como plantilla segura  
- Validación automática de variables obligatorias  
- Los secretos no se exponen en la interfaz  
- Los secretos no son utilizados por la aplicación frontend, únicamente se validan para simular un entorno real sin exponer información sensible.

## 🚀 Integración continua (CI)

El proyecto utiliza **GitHub Actions** para:

- Instalar dependencias  
- Validar variables de entorno 
- Ejecutar validación de variables con `npm run validate:env` 
- Ejecutar el build  
- Desplegar el entorno staging en GitHub Pages  

## 🌿 Flujo de trabajo

El repositorio utiliza las siguientes ramas:

- `develop`: desarrollo e integración  
- `staging`: entorno desplegado  

### Flujo:
```bash
feature → develop → staging
```


## 🔁 Simulación de cambio profesional

Para esta actividad se simula un cambio controlado de configuración, por ejemplo:

- Rotación de `API_KEY`  
- Cambio de `JWT_SECRET`  
- Modificación de `VITE_PORT`  
- Activación/desactivación de `VITE_FEATURE_X_ENABLED`  

Este cambio debe documentarse mediante:

- commit  
- pull request  
- revisión  
- merge  
- ejecución de pipeline  

## 📁 Estructura del proyecto
```bash
.
├─ .github/
│ └─ workflows/
├─ scripts/
│ └─ validate-env.mjs
├─ src/
│ └─ config.ts
├─ .env.example
├─ .gitignore
├─ README.md
└─ package.json
```


## ⚠️ Qué NO debe subirse al repositorio

- `.env`  
- `.env.local`  
- credenciales reales  
- API keys reales  
- contraseñas reales  

## 🎯 Conclusión

Este proyecto demuestra cómo manejar configuración y secretos de forma profesional, asegurando:

- separación de responsabilidades  
- seguridad básica  
- validación temprana  
- automatización  
- trazabilidad de cambios  

Estas prácticas son fundamentales en entornos reales de desarrollo y despliegue.