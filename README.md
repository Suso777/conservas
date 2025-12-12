
# 🐬 Mar i Ría 


<div align="center">
  <img src="assets/img/index/logo.png" alt="logo" width="400" />
</div>
Mar i Ría es un proyecto de página web de comercio electrónico  **(e-commerce)** centrado en la venta y promoción de conservas artesanales de alta calidad. El objetivo es ofrecer una experiencia de usuario limpia, informativa y atractiva, destacando la tradición y calidad de los productos.

# 💻🖥📱 DEMO EN VIVO 🛑

[MAR I RÍA](https://github.com/Suso777/conservas)

## 💻 Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

— HTML5: Estructura semántica del contenido.

— CSS3: Estilos y presentación visual.

— JavaScript (ES6+): Funcionalidad, manipulación del DOM y, crucialmente, la inyección de componentes.

— [Bootstrap / Tailwind CSS]: (Eligir la quese aplique) 

## ✨ Caractristicas Principales  

El proyecto Mar i Ría cumple con los siguientes requisitos funcionales y de arquitectura:

📄**Páginas Principales:** El sitio incluye páginas como index.html (Inicio), contacto.html y sobreNosotros.html.

💻**Estructura Semántica:** Todas las páginas están construidas con las etiquetas semánticas header, main y footer.

📌**Componentes Inyectados (JS):** El HEADER y el FOOTER son inyectados dinámicamente usando JavaScript. Esto asegura que solo se deba modificar un archivo (header.js y footer.js o similar) para actualizar estos componentes en todo el sitio, siguiendo el principio DRY (Don't Repeat Yourself).

🖥**Diseño Responsive:** La interfaz se adapta correctamente a diferentes tamaños de pantalla (móviles, tablets, escritorio) gracias al uso de [Bootstrap / Tailwind CSS].

☎📞**Formulario de Contacto:** La página de contacto incluye un formulario funcional para la comunicación con los usuarios.

👨‍👩‍👧‍👦🐬**Página "Sobre Nosotros":** Detalla la información del equipo creador del proyecto.

📁**Clean Code y Estructura:** Se ha aplicado una metodología de Clean Code y una organización de carpetas clara y modular.

# 📁Estructura de Carpetas aplicando CLEAN CODE 

📁MariRia.com/
|
├── 📄index.html

├── 📁assets/                  
│   ├── 📁css/
│   │   ├── 📄global.css
│   │   ├── 📄index.css

│   │   └── 📁components/      
│   │       ├── 📄header.css
│   │       └── 📄footer.css
│   │       ├── 📄contact.css
│   │       └── 📄aboutUs.css

│   ├── 📁js/
│   │   ├── 📄global.js
│   │   ├── 📄index.js

│   │   └── 📁components/
│   │       ├──📄 header.js
│   │       └──📄footer.js
│   │       ├──📄contact.css
│   │       └──📄aboutUs.css

│   └── 📁img/
│       ├── 📁index/
│       ├── 📁shared/       
│       └── 📁products

├──📁html/                 
│   ├──📄header.html
│   ├──📄footer.html
│   ├──📄products.html
│   ├──📄aboutUs.html
|   └──📄contact.html


└── 📄README.md


### 💻Instalación y Ejecución Local
Para poner en marcha el sitio web de Mar i Ría en máquina local, siguir estos sencillos pasos:

⚙️ Requisitos Previos
Asegúrate de tener instalado lo siguiente en tu sistema:
**Git:** Necesario para clonar el repositorio de código.
**Navegador Web Moderno: (Chrome, Firefox, Edge, Safari) para visualizar la página.**

1. Clonar el Repositorio de Mar i Ría
Abre tu terminal (o línea de comandos) y ejecuta el siguiente comando para descargar una copia local del proyecto:

Bash
git clone https://github.com/Suso777/conservas.git
Luego, navega al directorio del proyecto:

Bash
cd Conservas

2. Ejecutar el Sitio Web
Dado que Mar i Ría es un proyecto de frontend puro (HTML, CSS y JavaScript), la forma más simple de ejecutarlo es abrir el archivo principal:
Método Rápido (Recomendado para testing local): Simplemente abre la carpeta del proyecto y haz doble clic sobre el archivo index.html. Se abrirá en tu navegador predeterminado.
Método con Servidor Local (Recomendado para desarrollo): Si deseas que todas las inyecciones de JavaScript funcionen sin problemas, usa una extensión como Live Server de VS Code, o un servidor simple de Node

¡Listo! Con esto, el sitio de Mar i Ría estará funcionando y listo para ser explorado.

### 📄 LICENSE

Copyright <2025> <DREAM DEVELOPERS>

Por la presente se concede permiso, sin cargo, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para tratar el Software sin restricción, incluyendo sin limitación los derechos para usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y para permitir que las personas a quienes se les proporciona el Software lo hagan, sujeto a las siguientes condiciones:

El aviso de derechos de autor anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO, ENTRE OTRAS, LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN VIRTUD DE UNA ACCIÓN CONTRACTUAL, EXTRACONTRACTUAL O DE OTRO TIPO, QUE SURJA DE, SE DERIVE DE O EN RELACIÓN CON EL SOFTWARE O EL USO U OTRAS RELACIONES CON EL SOFTWARE.

## 📝 Historial de Desarrollo (Metodología Scrum)

Este proyecto fue desarrollado bajo la metodología **Scrum**, con Dailys diarias de 15 minutos enfocadas en la inspección y adaptación. Los siguientes informes resumen el progreso, los impedimentos y las decisiones clave del equipo **DREAM DEVELOPERS** (Product Owner: Suso Suárez, Scrum Master: Melissa Gómez, Developers: Héctor Santos, Xavier Piñeiro).

### Día 1: LUNES - Inicio y Configuración

El enfoque inicial fue la **puesta en marcha de la infraestructura** y la organización del equipo.

* **Hitos:** Asignación de roles, creación del repositorio central en GitHub, clonación local y establecimiento del tablero Kanban en Git Projects.


### Día 2: MARTES - Definición del proyecto, y distribución de las primeras tareas  de desarrollo. 
* **Decisión Clave:** Se definió el nombre del proyecto como **"Mar i Ría"** (conservas).
* **Asignación:** Se distribuyeron las primeras tareas de desarrollo (Header, Footer, Contactos y Sobre Nosotros).

### Día 3: MIERCOLES - autocorrección y rigor ténico del equipo.  
Jornada marcada por la **detección y corrección de un error técnico** crucial en el control de versiones.

* **Incidencia:** El Developer Héctor detectó que las ramas de trabajo se creaban erróneamente a partir de la rama `main` en lugar de `dev`.
* **Resolución:** El equipo optó por **eliminar y recrear todas las ramas** para garantizar la correcta segregación del código.
* **Riesgo Identificado:** Se reportó que, si bien el error se corrigió, persiste la **confusión** en el manejo avanzado de Git Branch.

### Día 4: JUEVES - Avance Técnico y Ausencia del Product Owner

Día enfocado en el avance de las tareas de desarrollo a pesar de la ausencia del Product Owner por motivos de conexión.

* **Avance:** Se continuó con las tareas asignadas (`products`, `aboutUs`, `estilos generales`). La Scrum Master se incorporó activamente al desarrollo asumiendo la tarea de `aboutUs`.
* **Riesgo Adicional:** Se identificó la necesidad de refuerzo en el manejo de **JSON** (visto en clase), uniéndose al Git Branch como prioridad de capacitación.

### Día 5: VIERENES - Auto-Crítica y Prioridad de Refuerzo

Jornada de introspección y planificación para resolver los bloqueos técnicos.

* **Madurez del Equipo:** El Developer Xavier sugirió la necesidad de ser más **autocríticos** y priorizar la Daily Scrum.
* **Impedimento Activo:** La reunión de apoyo con JM (para Git Branch y JSON) no se concretó, manteniendo la necesidad de **sesiones de refuerzo** como el impedimento principal para el futuro del proyecto.
* **Avance:** El equipo comenzó a trabajar la estructura de carpetas aplicando principios de **Clean Code**.

### Día 6: MARTES - Mitigación de Riesgos y Preparación de *Merge*

El foco se movió a la finalización de las funcionalidades.

* **Riesgo Mitigado:** El Developer Xavier reportó una pérdida momentánea de datos en una rama, pero fue **resuelta al instante** gracias a una copia de seguridad local.
* **Hito Cercano:** Se planificó la **fusión (*merge*) de todas las ramas a la rama `dev` para el Día 7**, consolidando el primer conjunto de *features*.
* **Auditoría:** La Scrum Master se reunió con JM para la **monitorización y auditoría** del proceso de las Dailys.

### Día 7: MIERCOLES- Revisión Final antes del *Merge*

El equipo se enfoca en la calidad antes de la integración mayor.

* **Ajustes Finales:** Se realizaron modificaciones al HTML y el CSS (a cargo de Xavier) para asegurar la consistencia.
* **Control de Calidad:** La Scrum Master presentó la **muestra final** de las funcionalidades.
* **Plan:** La **fusión definitiva** de las *features* se pospuso para mañana (Día 8) para asegurar una calidad óptima en los últimos retoques.

### Día 7:  *Merge*

El equipo se enfoca en la calidad antes de la integración mayor.

* **Ajustes Finales:** Se realizaron modificaciones al HTML y el CSS (a cargo de Xavier) para asegurar la consistencia.
* **Control de Calidad:** La Scrum Master presentó la **muestra final** de las funcionalidades.
* **Plan:** La **fusión definitiva** de las *features* se pospuso para mañana (Día 8) para asegurar una calidad óptima en los últimos retoques.







# 📝 Autoría
Este proyecto ha sido desarrollado por:

## EQUIPO DREAM DEVELOPERS 

<div align="center">
  <img src="assets/img/index/developers.png" alt="logo" width="100" />
</div>

👨HECTOR SANTOS.

👩MELISSA GÓMEZ´.

👨SUSO SUÁREZ.

👨XAVIER PIÑEIRO.
