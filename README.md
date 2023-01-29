## Resolución de Prueba técnica Gestor SR – Desarrollador .NET

# __Parte 1__

---

* __*Diagrama de arquitectura de la solución (Basada en la nube de Azure)*__.

![Architecture, Aplicacion Web](/assets/images/Architecture.png)

### Flujo de trabajo

+ **Aplicación web** . Una aplicación (SPA o SSR) moderna típica podría incluir un sitio web y una o varias web API web de RESTful. Los clientes del explorador podrían consumir una API web mediante AJAX, y también las aplicaciones nativas o las aplicaciones del lado servidor podrían consumirla. Para conocer las consideraciones sobre el diseño de las API web, consulte la guía de diseño de API.

+ **Front Door**. Front Door es un equilibrador de carga de nivel 7. En esta arquitectura, enruta las solicitudes HTTP al front-end web. Front Door proporciona también un firewall de aplicaciones web (WAF) que protege la aplicación contra puntos vulnerables de la seguridad comunes. Front Door también se usa con una solución Content Delivery Network (CDN) en este diseño.

+ **Aplicación de función**. Use Function Apps para ejecutar tareas en segundo plano.

+ **Cola**. En la arquitectura que se muestra aquí, la aplicación pone en cola las tareas en segundo plano mediante la colocación de un mensaje en una cola de Azure Service Bus.

+ **Caché**. Almacene datos parcialmente estáticos en Azure Cache for Redis

+ **Almacenamiento de datos**. Use Azure SQL Database con datos relacionales. Para datos no relacionales, se debe considerar la posibilidad de usar Azure Cosmos DB.

+ **Azure DNS**. Azure DNS es un servicio de hospedaje para dominios DNS que permite resolver nombres mediante la infraestructura de Microsoft Azure. Al hospedar dominios en Azure, puede administrar los registros DNS con las mismas credenciales, API, herramientas y facturación que con los demás servicios de Azure.

---

* __*Modelo entidad relación.*__

![Architecture, Aplicacion Web](/assets/images/Diagrama1.png)

---

* __*Tecnologías, lenguajes de programación y frameworks a utilizar y justificación de la selección de cada uno.*__


- __*Frontend*__
    - **Vuejs** (Framework de javascript progresivo) eligiria esta opcion ya que el proyecto es pequeño y por ser progresivo voy gestionando las librerias que necesito, ademas en tiempos de ejecucion del DOM virtual son de 20 KB min+gzip, ultrarapido con esfuerzos minimos de optimizacion.<br>
    En React, todo es solo JavaScript. Las estructuras HTML no solo se expresan a través de JSX, las tendencias recientes también tienden a colocar la administración de CSS dentro de JavaScript también. Este enfoque tiene sus propios beneficios, pero también conlleva varias ventajas y desventajas que pueden no parecer rentables para todos los desarrolladores.<br>
    En Vue, las dependencias de un componente se rastrean automáticamente durante su renderizado, por lo que el sistema sabe con precisión qué componentes realmente necesitan volver a renderizarse cuando cambia el estado. Se puede considerar que cada componente tiene shouldComponentUpdate implementado automáticamente, sin las advertencias del componente anidado.<br>
    MobX se ha vuelto bastante popular en la comunidad de React y, de hecho, utiliza un sistema de reactividad casi idéntico al de Vue. Hasta cierto punto, el flujo de trabajo de React + MobX se puede considerar como un Vue más detallado, por lo que si está usando esa combinación y la está disfrutando, saltar a Vue es probablemente el siguiente paso lógico.<br>
    Angular esencialmente requiere el uso de TypeScript, dado que casi toda su documentación y recursos de aprendizaje están basados ​​en TypeScript. TypeScript tiene sus ventajas: la verificación de tipos estáticos puede ser muy útil para aplicaciones a gran escala y puede suponer un gran aumento de la productividad para los desarrolladores con experiencia en Java y C#.<br>
    Sin embargo, no todos quieren usar TypeScript. En muchos casos de uso de menor escala, la introducción de un sistema de tipos puede generar más gastos generales que ganancias de productividad.<br>
    Vue también ofrece escritura oficial y decorador oficial para aquellos que deseen usar TypeScript con Vue.<br>
    Las versiones recientes de Angular, con compilación AOT y agitación de árboles, han podido reducir su tamaño considerablemente. Sin embargo, un proyecto completo de Vue 2 con Vuex + Vue Router incluido (~30 KB comprimidos con gzip) sigue siendo significativamente más liviano que una aplicación compilada AOT lista para usar y generada por angular-cli (~65 KB comprimidos con gzip).    


    - **Tailwindcss** (Framework de css) tiene mucha popularidad, excelente aceptacion y una comunidad y documentacion genial. Te olvidaras de utilizar metodologia BEM para el nombrado de clases en css ya que tiene clases de utilerias first class. 

    - State Management (Vuex) libreria oficial de administracion de estados
    - **spa** (single page application) elegiria un spa puesto que no se necesita SEO para el desarrollo de esta app web y en caso de necesitarlo con libreria oficial de vue podria escalar la app para que se comporte con Server side render (SSR) 
    - **vou-router** library libreria oficial de gestion de rutas
- __*Backend*__
    - AdonisJS (Marco de trabajo web con todas las funciones de Node.js) utilizado para crear API server.<br>
    arquitectura MVC (model view controller).
    Familiarizado con Node.js y la programación asincrónica en general. Supongamos que proviene de un lenguaje de subprocesos como PHP o Ruby. En ese caso, recomendamos informarse sobre el bucle de eventos de Node.js y comprender en qué se diferencia de un entorno de subprocesos y porque los servidores basados en nodejs son mas rapidos.
    El marco está escrito en TypeScript y la aplicación que creará con AdonisJS también estará en TypeScript.<br>
    ORM listo para ser usado, La capa de modelos de datos de Lucid hace que sea muy fácil realizar operaciones CRUD, administrar relaciones entre modelos y definir enlaces de ciclo de vida.<br>
    AdonisJS viene con un sistema de autenticación completo para autenticar a los usuarios de su aplicación mediante sesiones, autenticación básica o tokens API.
    AdonisJS tiene soporte listo para usar para las test, y no es necesario instalar ningún paquete de terceros para el mismo. Simplemente ejecute la prueba del as del nodo y sucederá la magia.<br>
    AdonisJS es uno de los pocos marcos de Node.js (si no el único) con soporte de primera clase para bases de datos SQL. Lucid potencia la capa de datos del marco y debe instalar el paquete por separado.<br>
    Soporte para múltiples bases de datos SQL. PostgreSQL, MySQL, MSSQL, MariaDB y SQLite.
    Generador de consultas construido sobre Knex.js, Modelos de datos basados ​​en Active Record, Sistema de migraciones, Fábricas de modelos y sembradores de bases de datos

- __*Mobile*__
     - React Native (Marco de trabajo para desarrollo aplicaciones mobiles cruzada) ventajas de utilizarlo es que esta escrito en Javascript, escribe codigo 1 vez y en cualquier lugar y si se ha trabajado con react la curva de aprendizaje sera casi minima el codigo generado se puede exportar a codigo nativo de IOS y android posee Fast Refresh y lo mejor es que es soportado y desarrollado por facebook, se escribe en Javascript y renderizado a codigo nativo.<br>
    
- __*Database*__
    MSSQL Server: Por la arquitectura de la app basada en la nube de azure seria muy recomendado utilizar el gestor de bases de datos de microsoft encajaria perfecto en la infraestructura.

---

* __*Metodología de desarrollo.*__
    Utilizaria scrum ya que es un proceso para llevar tareas en conjunto de forma regular y en equipo. Apoyandome con un software como Jira para gestion de tareas, tickets entre otras.

---

* __*Descripción de las buenas prácticas metodológicas que pueden agilizar el proceso de desarrollo, para la entrega de software de calidad en los diferentes ambientes.*__
    - usar Principio SOLID 
    - Conventional Commits: Una especificación para agregar significado legible por humanos y máquinas para enviar mensajes
    - revision de codigo cruzado para aprobacion de pull request al server de staging 
    - Dont repet your self: Utilizar programacion orientada a objetos
    - metodologia MV(Modelo Vista) VM(Vista Modelo) para el frontend 
    - Para el backend utilizar MVC (Modelo Vista Controlador) ya el framework provee la arquitectura.
---

* __*Infraestructura y plataformas necesaria para soportar el desarrollo.*__

    Git para el versionamiento del codigo, manejar 3 ramas develop, staging y production
    2 servidores virtuales de staging y produccion con IIS (internet information service) para el despliegue de la app aprovechando la infraestrucctura azure cloud.
    1 servidor con mssql server para el dominio de la app.

    en el laptop o pc del developer se debe contar con node instalado utilizando nvm para moverse con libertad y administrar versiones de nodejs y un administrador de dependencias de node como npm o yarn. Yarn es mas recomendable ya que tiene mejor gestion de las librerias de nodejs.

---

* __*Posibles riesgos que pueden materializarse en la ejecución del proyecto y cómo mitigarlos.*__

    se debe tener en cuenta todas las recomendaciones de infraestructura para los temas de seguridad. Listo a continuacion lo que se debe tener en cuenta con la seguridad de Azure app Service:

    - Los recursos de aplicación estén protegidos de los recursos de Azure de otros clientes.
    - Las instancias de máquina virtual y el software en tiempo de ejecución se actualicen periódicamente para abordar puntos vulnerables recién detectados.
    - La comunicación de secretos (por ejemplo, cadenas de conexión) entre su aplicación y otros recursos de Azure (por ejemplo, SQL Database) permanezca dentro de Azure y no cruce ningún límite de la red. Los secretos siempre se cifren al guardarlos.
    - Todas las comunicaciones que se realicen con las características de conectividad de App Service, como la conexión híbrida, se cifren.
    - Todas las conexiones con herramientas de administración remota como Azure PowerShell, la CLI de Azure, los SDK de Azure o las API REST, se cifren.
    - La administración ininterrumpida de amenazas proteja la infraestructura y la plataforma frente a malware, ataques por denegación de servicio distribuido (DDoS), ataques de tipo "Man in the middle" (MITM) y otras amenazas.

---

* __*Otros elementos que considere necesarios para este proyecto.*__
    para las notificaciones sms a telefonos moviles en caso de no contar con un servicio en azure cloud se podria contar con nexmo y utilizar la api para envio de sms con un plan de suscripcion empresarial. 
