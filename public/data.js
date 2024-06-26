const data = {
start: `
<div id="navbar" class="fade-out-active"></div>
<div id="dymanicDomContainer" class="container custom-container mt-5">
    <div id="inicio" class="card mb-4">
        <div class="card-body text-center">
            <h1 class="card-title">Gonzalo Lobos</h1>
            <p class="card-text lead">Ecommerce | Project Management | Web Development</p>
            <button id="startButton" type="button" class="btn btn-primary">Entrar</button>
        </div>
    </div>
</div>
<div id="nav" class="container custom-container mt-5"></div>`,

navBar: `<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container custom-container">
        <a class="navbar-brand" id="aboutMe" href="#">Gonzalo Lobos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" id="aboutMe" href="#">¿Quien Soy?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="experience" href="#">Experiencia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="education" href="#">Estudios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="skills" href="#">Habilidades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`,
aboutMe: `<div id="informacion-personal" class="card ">
    <div class="card-body">
        <h1 class="card-title">¿Quién Soy?</h1>
        <p class="card-text">Soy Gonzalo Lobos, Ingeniero Comercial con experiencia en Comercio Electrónico y Desarrollo
            Web. He trabajado en equipos de Ecommerce, desarrollando campañas, mejorando la experiencia del cliente y
            analizando el comportamiento de los usuarios para ofrecer soluciones efectivas. Mi conocimiento en
            Desarrollo Web, Diseño y Gestión de equipos ha permitido impulsar proyectos de Comercio Electrónico con un
            enfoque en la rentabilidad.</p>
        <p class="card-text">Estoy interesado en canales digitales, mejorando la Experiencia de Usuario mediante la
            planificación, implementación y análisis de resultados.</p>
        <div class="d-grid gap-2 col-6 mx-auto"><button id="experience" class="btn btn-primary"
                type="button">Experiencia</button></div>
    </div>
</div>`,
experience: `<div class="card">
    <div class="card-body">
        <h2>Estudios</h2>
        <div class="mb-4">
            <h4>Especialista en Merchandising Ecommerce</h4>
            <p><strong>Nestlé Nespresso SA</strong> · Jornada completa</p>
            <p>Dic. 2021 - Actualidad · 2 años</p>
            <p>Región Metropolitana de Santiago, Chile · Híbrido</p>
            <ul>
                <li>Liderar la estrategia de Ecommerce de nespresso.com, asegurando una correcta experiencia de compra y
                    procesos de activación de campañas en el sitio web y la app.</li>
                <li>Implementación de mejoras UX/UI en plataformas digitales de Nespresso.</li>
                <li>Monitoreo del proceso de compra en Nespresso.cl para asegurar su correcta realización de acuerdo al
                    customer journey establecido.</li>
                <li>Desarrollar e implementar campañas online como Cyber Day, Cyber Monday y Black Friday, lideradas por
                    el equipo de Ecommerce.</li>
                <li>Seguimiento de KPIs (sesiones, impresiones, compras, entre otros) a través de Google Analytics.</li>
                <li>Implementación de acciones para mejorar el posicionamiento orgánico (SEO) del sitio web de
                    Nespresso.cl.</li>
            </ul>
            <p class="card-text">Aptitudes: Desarrollo web · Comercio electrónico · Gestión de proyectos · Diseño web
            </p>
            <div class="d-grid gap-2 col-6 mx-auto"><button id="education" class="btn btn-primary"
                    type="button">Educación</button></div>
        </div>
    </div>`,
    education: `<div class="card">
        <div class="card-body">
            <h2>Educación</h2>
            <div class="mb-4">
                <h4>Magíster en Psicología Organizacional</h4>
                <p><strong>Universidad Adolfo Ibáñez</strong></p>
                <p>Mar. 2016 - Mar. 2017</p>
            </div>
            <div class="mb-4">
                <h4>Ingeniería Comercial, Mención en Administración de Empresas</h4>
                <p><strong>Universidad Adolfo Ibáñez</strong></p>
                <p>2011 - 2015</p>
            </div>
            <div class="mb-4">
                <h4>Técnico en Fotografía Publicitaria</h4>
                <p><strong>Instituto Profesional ARCOS</strong></p>
                <p>2018 - 2020</p>
                <div class="d-grid gap-2 col-6 mx-auto"><button id="skills" class="btn btn-primary"
                        type="button">Habilidades</button></div>
            </div>
        </div>`,
        skills: `<div class="card">
            <div class="card-body">
                <h2>Habilidades</h2>
                <p class="card-text"><strong>Inglés:</strong> Medio</p>
                <p class="card-text"><strong>Desarrollo Web:</strong> HTML, CSS, JS</p>
                <p class="card-text"><strong>Diseño:</strong> Photoshop, Illustrator, Lightroom, Capture One</p>
                <p class="card-text"><strong>Negocios y Organización:</strong> Gestión de proyectos, Análisis de
                    negocios, Planificación estratégica</p>
                <div class="d-grid gap-2 col-6 mx-auto"><button id="contact" class="btn btn-primary"
                        type="button">Contacto</button></div>
            </div>
        </div>`,
        contact: `<div class="card">
            <div class="card-body">
                <h2>Contacto</h2>
                <p class="card-text"><strong>Correo Electrónico:</strong> gonzalo.lobos.ramirez@gmail.com</p>
                <p class="card-text"><strong>Teléfono:</strong> +569 659 610 86</p>
                <a href="https://wa.me/56965961086" target="_blank" class="btn btn-primary">WhatsApp</a>
                <button type="button" class="btn btn-primary"
                    onclick="window.open('https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/', '_blank')">LinkedIn</button>
                <div class="d-grid gap-2 col-6 mx-auto"><button id="aboutMe" class="btn btn-primary"
                        type="button">¿Quien Soy?</button></div>
            </div>
        </div>`,
        };

        export default data;