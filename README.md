# Movieverse

Movieverse es una aplicación web interactiva que actúa como un catálogo de películas, diseñada para brindar una experiencia fluida y enriquecida a los usuarios. Construida con **Angular**, esta aplicación se conecta a la API de The Movie Database (TMDb) para obtener información actualizada sobre las películas más populares, así como sus detalles. Los usuarios pueden realizar búsquedas, aplicar filtros y navegar fácilmente entre las diferentes secciones de la aplicación.


## Descripción

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.10 y está diseñado para mostrar una lista de películas, permitir la búsqueda, filtrado por género y actor, y ver detalles específicos de cada película.

## Funcionalidades principales:
Catálogo de Películas:

La página principal muestra un listado de películas populares con su título, fecha de lanzamiento, sinopsis y una imagen de portada.
El diseño es adaptable y está optimizado para diferentes tamaños de pantalla.
Búsqueda de Películas:

Los usuarios pueden buscar películas escribiendo el nombre parcial o completo en el campo de búsqueda.
El listado se actualiza en tiempo real mientras escriben.
Filtrar Películas:

Por Género: Usa un menú desplegable para seleccionar un género específico y filtrar las películas.
Por Actor: Usa un menú desplegable para seleccionar un actor específico y ver películas donde aparece.
Películas Populares: Un botón dedicado permite filtrar las películas más vistas y mejor calificadas.
Detalles de la Película:

Al hacer clic en el botón Ver Detalles de cualquier película, el usuario es dirigido a una página con información ampliada: resumen, géneros, fecha de lanzamiento y calificación.
Incluye un botón para regresar al catálogo.
Paginación:

Navega entre páginas para explorar más películas usando los botones Siguiente y Anterior.


---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org) (Versión recomendada: LTS)
- [Angular CLI](https://angular.io/cli)

---

## Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/Jaqueline120170/proyectoAngular.git
    ```

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd movieverse
    ```

3. **Instala las dependencias:**
    Asegúrate de tener las dependencias necesarias instaladas:
    ```bash
    npm install
    ```

---

4. ## Ejecutar el Proyecto

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

```bash
ng serve
```
---

5. ## Cómo Probar las Funciones

1. Iniciar la Aplicación
Abre tu navegador y ve a http://localhost:4200/.
2. Explorar el Catálogo
En la página inicial, explora las películas mostradas.
Observa la información básica: título, fecha y resumen.
3. Buscar Películas
En la barra de búsqueda, escribe el nombre de una película (por ejemplo, "Inception").
Comprueba cómo los resultados se filtran en tiempo real según lo que escribas.
4. Filtrar Películas
Por Género:
Selecciona un género del menú desplegable de Filtrar por Género (por ejemplo, "Acción").
Observa cómo el catálogo se actualiza mostrando solo las películas correspondientes al género seleccionado.
Por Actor:
Selecciona un actor del menú desplegable de Filtrar por Actor (por ejemplo, "Leonardo DiCaprio").
Verifica que el listado de películas se limite a aquellas en las que aparece ese actor.
Películas Populares:
Haz clic en el botón Películas Populares.
Examina las películas con las mejores calificaciones y mayor popularidad.
5. Ver Detalles
En el catálogo, haz clic en el botón Ver Detalles de cualquier película.
Asegúrate de que se muestre una página detallada con:
Imagen de portada.
Resumen.
Géneros.
Fecha de lanzamiento.
Calificación.
Utiliza el botón Volver al Catálogo para regresar.
6. Probar la Paginación
Usa los botones Siguiente y Anterior en la parte inferior de la página para navegar entre diferentes páginas del catálogo.
Observa cómo el listado cambia para mostrar nuevas películas.
