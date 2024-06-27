# Tripleten web_project_around

## Nombre del proyecto: Página Web Around the US - Tripleten

### Descripción del proyecto: 

Página Web interactiva la cual consta de:

  * un encabezado con el logo del proyecto.

  * una sección de perfil en la cual se puede:

    * editar el nombre del usuario y la profesión a través de una ventana modal que se abre al dar click en el botón de editar (lápiz).

    * editar la foto del perfil del usuario a través de una ventana modal que se abre al dar click sobre el icono de editar (lápiz) que se muestra cuando el puntero del mouse se pone sbore la foto del perfil 

  * una sección con tarjetas interactivas de distintos lugares de los Estados Unidos, en las cuales se puede:

    * eliminar las tarjeta al accionar el botón de eliminar (basura)
    * dar like al accionar el botón de like (corazón)
    * abrir una ventana modal con la visualización de la imagen al dar click sobre la imagen de la tajeta; 
    
  * una sección con un botón para añadir mas tarjetas (+) que despliega una ventana modal con un formulario para agregar un nombre y un link de foto.

  * el pie de página.

  Los formularios de las ventanas modales cuentan con validación en tiempo real, que muestra los mensajes de error mientras que el usuario está completando los campos. Si alguno de los campos no esta completado correctamente el botón de guardar permanecerá desactivado. Una vez todos los campos esten llenos de la manera correcta, el botón de guardar cambia su estado y su estilo para quedar activo.

  La funcionalidad de la página se puede ver en el siguiente GIF:

![Image text](./src/images/gif_demostracion.gif)

  Se utilizan media Queries en las hojas de estilo para asegurar que la página sea responsiva a cualquier ancho de pantalla sin importar el dispositivo en el que se visualice. Así como se muestra en el siguiente GIF:

![Image text](./src/images/gif_media_queries.gif)
***

### Tecnologías:

  La página web esta diseñada con las siguientes tecnologías:

  * El Lenguaje de Marcado de Hipertexto **HTML** es el código que se utiliza para estructurar la página web y sus contenidos
  * Las hojas de estilo para los elementos de la página web estan escritos en **CSS**
  * El lenguaje de programación para escribir la lógica y funcionalidad de la páginaes  **Javascript**
  * El entorno de desarrollo utilizado es **NodeJS**
  * La página web se compila y empaqueta con **WebPack**

  Asimismo, se soporta la minificación de las hojas de estilo y transpilación de los scripts para navegadores más antiguos *(ver babel.config.js)*.

  Se codifican funciones asincronas de JavaScript mediante el uso de promises, para el consumo de la información de la api **https://around.nomoreparties.co/v1/web_es_11**, de la cual se consumen datos para inicializar el renderizadode las tarjetas, la información del usuario, y también enviar datos de tarjetas creadas por el usuario, la actualización de datos personales, y la actualización de los "me gusta" o "likes" que se agregan a cada tarjeta por los distintos usuarios.
***

### Organización:

  El proyecto está organizado siguiendo el principio de estructura de archivos jerárquica.

  Para la organización de los archivos CSS se utilizó la metodología BEM.

  Adicionalmente, los scripts han sido desarrollados utilizando la programación orientada a objetos (POO), mediante el uso de clases, herencia y polimorfismo.
***

### Despliegue en la web:
  La página web esta desplegada en Github Pages y se aloja en el siguiente link: **https://odontoana804.github.io/web_project_around/**
***

## Página Web diseñada por Ana María Vargas.
