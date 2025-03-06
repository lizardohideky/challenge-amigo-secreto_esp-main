Amigo Secreto - Sorteador
Un simple pero elegante sorteador de Amigo Secreto que permite añadir nombres de participantes y seleccionar aleatoriamente a uno de ellos como "amigo secreto".

Descripción
Esta aplicación web permite a los usuarios:

Añadir nombres de amigos o participantes a una lista
Eliminar participantes que se hayan añadido por error
Realizar un sorteo aleatorio para seleccionar a un único "amigo secreto"
Visualizar una animación durante el sorteo para mayor interactividad

El proyecto está construido con tecnologías web estándar (HTML, CSS y JavaScript) sin dependencias externas, lo que lo hace fácil de implementar y usar en cualquier navegador moderno.
Características

Interfaz intuitiva: Diseño simple y fácil de usar
Validación de datos: No permite nombres duplicados o vacíos
Animación interactiva: Efecto visual durante el sorteo
Diseño responsive: Se adapta a diferentes tamaños de pantalla
Accesibilidad: Incluye atributos ARIA para mejor accesibilidad

Instalación

Clona este repositorio:
Copygit clone https://github.com/tuusuario/amigo-secreto.git

Abre el archivo index.html en tu navegador.

¡No se requiere ninguna configuración adicional!
Uso

Ingresa el nombre de un participante en el campo de texto
Haz clic en "Añadir" o presiona Enter para agregarlo a la lista
Repite el proceso hasta tener todos los participantes (mínimo 2)
Haz clic en "Sortear amigo" para realizar el sorteo
¡Disfruta de la animación y descubre quién es el amigo secreto!

Estructura del proyecto
Copyamigo-secreto/
│
├── index.html          # Estructura HTML principal
├── style.css           # Estilos CSS
├── app.js              # Lógica JavaScript
│
└── assets/             # Recursos gráficos
    ├── amigo-secreto.png
    └── play_circle_outline.png
Personalización
Puedes personalizar fácilmente el proyecto modificando:

CSS: Cambia colores, fuentes y estilos en el archivo style.css
Animaciones: Modifica las animaciones de sorteo en la función agregarEstilosCelebracion() del archivo app.js
Imágenes: Reemplaza las imágenes en la carpeta assets manteniendo los mismos nombres

Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

Haz un fork del repositorio
Crea una rama para tu función (git checkout -b feature/nueva-funcion)
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva función')
Sube los cambios (git push origin feature/nueva-funcion)
Abre un Pull Request

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
Autor
Hideky Lizardo
