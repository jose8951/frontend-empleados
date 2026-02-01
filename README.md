# Formulariophp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Sistema de Gestión de Empleados - Angular & PHP

Este proyecto es una aplicación Full Stack que permite gestionar empleados, conectando un frontend moderno con una base de datos remota.

## 🚀 Enlace del Proyecto
- **URL en vivo:** [https://frontend-empleados-q5cq.onrender.com](https://frontend-empleados-q5cq.onrender.com)

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular 18 (Desplegado en **Render**).
* **Backend:** Scripts PHP (Alojados en **Hostinger**).
* **Base de Datos:** MySQL (Gestionada en **Hostinger**).

## 📂 Dónde está cada cosa
* `/src/app/componentes`: Contiene la lógica de las pantallas (Inicio, Listado, Datos).
* `/src/app/servicios`: El archivo `data.ts` que se comunica con la API de Hostinger.
* `/src/environments`: Configuración de las URLs de producción.

## 📝 Pasos Realizados para el Despliegue
1. **Configuración de API:** Se subieron los archivos PHP a Hostinger para servir los datos JSON.
2. **Build de Angular:** Se generó la carpeta de producción usando `ng build`.
3. **Repositorio:** Se subió el código a GitHub usando un **Personal Access Token** para autenticación segura.
4. **Hosting en Render:** Se conectó el repositorio y se configuró el directorio de publicación como `dist/formulariophp/browser`.
5. **Rutas:** Se añadió una regla de *Rewrite* (`/*` -> `/index.html`) para permitir la navegación de Angular.