# Proyecto de Evaluación: Aplicación Web con IA y Desarrollo Web

## Descripción

El propósito de esta evaluación es desarrollar una aplicación web funcional que combine tecnologías en inteligencia artificial y desarrollo web. El proyecto tiene como objetivo utilizar Large Language Models (LLMs), como Gemini o OpenAI, e integrará una base de datos SQL (PostgreSQL o MySQL) para el almacenamiento y manejo de datos. La aplicación se implementará utilizando Node.js y Express para el backend, y React para la interfaz de usuario. Adicionalmente, se incorporará una librería para RAG (Retrieval-Augmented Generation), como Nearbyy, para mejorar la capacidad de recuperación y generación de información de la aplicación.

## Características

1. **Integración de LLMs**:
    - Implementación y configuración de modelos de lenguaje avanzados (Gemini o OpenAI) para el procesamiento y generación de texto.

2. **Base de Datos SQL**:
    - Configuración y gestión de una base de datos SQL (PostgreSQL o MySQL) para almacenar datos relevantes.

3. **Backend con Node.js y Express**:
    - Desarrollo de un servidor backend con Node.js y Express para manejar las solicitudes y respuestas de la aplicación.
    - Comunicación entre el backend, la base de datos y los modelos de lenguaje.

4. **Frontend con React**:
    - Desarrollo de una interfaz de usuario interactiva con React.

5. **Integración de RAG con Nearbyy**:
    - Implementación de la librería Nearbyy para mejorar la recuperación y generación de información contextualizada.

## Requisitos del Proyecto

### Implementación

1. **Dashboard**:
    - Mostrar una lista de usuarios.

2. **Register**:
    - Formulario de registro de usuario con al menos 6 campos.
    - Guardar el registro en la base de datos al hacer clic en "Registrar".

3. **Users**:
    - Mostrar la información del usuario seleccionado.
    - Formulario para la descripción y preescripción.
    - Generar preescripción usando una API de Gemini o OpenAI y popular el campo de preescripción. Este campo debe ser editable.
    - Guardar la preescripción en la base de datos.
    - Visualizar la información actualizada.
    - Sección de input para preguntas y respuestas contextualizadas usando RAG.

## Estructura del Proyecto

### Backend

La carpeta `backend` contiene todo el código relacionado con el servidor y la lógica de negocio. Esto incluye la configuración de la base de datos, controladores para manejar las solicitudes y respuestas, y las rutas que definen los endpoints de la API. También incluye un archivo de configuración para las variables de entorno y dependencias necesarias.

#### Estructura

- `config/db.js`: Configuración de la conexión a la base de datos.
- `controllers`: Controladores que manejan la lógica de negocio para diferentes rutas (chat, descripción, feedback, RAG, usuarios).
- `models`: Modelos que interactúan directamente con la base de datos para realizar operaciones CRUD.
- `routes`: Definición de las rutas de la API.
- `index.js`: Configuración y arranque del

servidor Express.

### Frontend

La carpeta `frontend` contiene todo el código relacionado con la interfaz de usuario. Utiliza React para crear una experiencia interactiva y dinámica. La estructura del frontend incluye componentes compartidos, vistas específicas para diferentes páginas (Dashboard, Register, Users), y estilos para asegurar una apariencia consistente.

#### Estructura

- `src/shared/Header.jsx`: Componente del encabezado que incluye navegación y barra de búsqueda.
- `src/views/dashboard/Dashboard.jsx`: Componente que muestra una lista de usuarios registrados.
- `src/views/dashboard/components/Card.jsx`: Componente de tarjeta para mostrar información del usuario en el dashboard.
- `src/views/register/Register.jsx`: Página de registro que incluye un formulario de registro de usuarios.
- `src/views/register/components/Form.jsx`: Componente del formulario de registro de usuarios.
- `src/views/users/Users.jsx`: Página que muestra la información detallada del usuario seleccionado.
- `src/views/users/components`: Componentes específicos para la vista de usuarios, incluyendo secciones de tarjeta, descripción, formulario, RAG, y feedback.
- `src/App.jsx`: Configuración de rutas de la aplicación.
- `src/index.css`: Estilos globales para la aplicación.
- `src/main.jsx`: Punto de entrada de la aplicación React.

## Requisitos

### Prerrequisitos

- Node.js
- PostgreSQL o MySQL

### Instalación

1. Clonar el repositorio:

    ```sh
    git clone https://github.com/usuario/proyecto-web.git
    cd proyecto-web
    ```

2. Configurar las variables de entorno:

    Crear un archivo `.env` en la carpeta `backend` con las siguientes variables:

    ```env
    OPENAI_API_KEY=tu_clave_api_de_openai
    NEARBYY_API_KEY=tu_clave_api_de_nearbyy
    ```

3. Instalar dependencias del backend:

    ```sh
    cd backend
    npm install
    ```

4. Instalar dependencias del frontend:

    ```sh
    cd ../frontend
    npm install
    ```

### Ejecución

1. Iniciar el servidor backend:

    ```sh
    cd backend
    node index.js
    ```

2. Iniciar la aplicación frontend:

    ```sh
    cd ../frontend
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:3000`.

## Uso

### Dashboard

- Muestra una lista de usuarios registrados.
- Permite la búsqueda de usuarios.

### Register

- Permite registrar nuevos usuarios con un formulario que incluye al menos 6 campos.

### Users

- Muestra la información del usuario seleccionado.
- Incluye un formulario para agregar descripciones y preescripciones.
- Permite generar preescripciones usando la API de OpenAI.
- Permite guardar preescripciones en la base de datos.
- Incluye una sección de chat interactivo para preguntas y respuestas usando RAG.
