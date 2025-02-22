type Language = keyof typeof languages;

interface UITranslations {
  [key: string]: string;
}

type UI = {
  [lang in Language]: Partial<UITranslations>;
};

export const showDefaultLang = true;

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui: UI = {
  en: {
    'home.title': 'KevHec - Frontend developer',
    'langselect.label': 'Select language',
    'project.name.construelectricjv': 'ConstruelectricJV',
    'project.name.ejepets': 'Ejepets',
    'intro.greet': "Hey! it's",
    'intro.name': 'Kevin Henao',
    'intro.introduction.1': 'Frontend Developer',
    'intro.introduction.2': 'Aspiring Accessibility Advocate',
    'intro.introduction.3': 'Learning Enthusiast',
    'intro.getInTouch': 'Get in touch',
    'intro.getInTouch.subject': "Hey! let's work together",
    'intro.getInTouch.message': 'Your awesome message goes here',
    'intro.linkedIn.label': 'My LinkedIn',
    'intro.github.label': 'My LinkedIn',
    'about.1': "I'm a 25-year-old developer. ",
    'about.2': 'I love sharing what I know. ',
    'about.3': "That's why I started working on the frontend to create a blog, a platform to share science and provide educational resources for everyone, ",
    'about.4': 'no matter their ages or disabilities. ',
    'about.5': 'Along the way, ',
    'about.6': 'I discovered a passion for web development',
    'about.7': 'The constant learning opportunities captivated me. I am driven by the ambition of applying newfound knowledge',
    'about.8': 'to enhance the web and make it a more user-friendly space',
    'projects.mainCarousel.aria': 'Projects showcase carousel',
    'projects.mainCarousel.thumbnail.construelectricjv': 'Go to ConstruelectricJV slide',
    'projects.showcaseGallery.aria': 'Project gallery for',
    'project.goBack': 'Go to previous page',
    'project.clientLabel': 'Client',
    'project.personalLabel': 'Personal',
    'project.galleryHeading': 'Gallery',
    'project.context.aria': 'Small currently selected project context',
    'projects.heading': "What I've worked on",
    'projects.seeProjectLabel': 'See project',
    'technologies.heading': 'Technologies',
    'footer.heading': 'Send me an email!',
    'SEO.title': 'Kevhec - Frontend developer',
    'SEO.description': "Passionate Frontend Developer in Colombia, creating websites with modern technologies. Let's collaborate for a user-centric, high-performance web experience!",
  },
  es: {
    'home.title': 'KevHec - Desarrollador frontend',
    'langselect.label': 'Seleccionar idioma',
    'intro.greet': '¡Hey! aquí',
    'intro.introduction.1': 'Desarrollador Frontend',
    'intro.introduction.2': 'Aspirante a defensor de la accesibilidad',
    'intro.introduction.3': 'Entusiasta del aprendizaje',
    'intro.getInTouch': 'Contactar',
    'intro.getInTouch.subject': '¡Hey! Trabajemos juntos',
    'intro.getInTouch.message': 'Tu increíble mensaje va aquí',
    'intro.linkedIn.label': 'Mi LinkedIn',
    'intro.github.label': 'My LinkedIn',
    'about.1': 'Soy un desarrollador de 25 años. ',
    'about.2': 'Amo compartir mis conocimientos. ',
    'about.3': 'Por esta razón empecé a trabajar en la creación de un blog, una plataforma para compartir ciencia y proveer recursos educativos para todos, ',
    'about.4': 'sin importar sus edades o discapacidades. ',
    'about.5': 'En el camino, ',
    'about.6': 'descubrí una gran pasión por el desarrollo web. ',
    'about.7': 'Las constantes oportunidades de aprendizaje me cautivaron. Me muevo por la ambición de aplicar nuevos conocimientos ',
    'about.8': 'para mejorar la web y hacerla un lugar más amigable con el usuario.',
    'project.context.aria': 'Pequeño contexto sobre el proyecto seleccionado actualmente',
    'projects.mainCarousel.aria': 'Carrusel de exhibición de proyectos',
    'projects.mainCarousel.thumbnail.construelectricjv': 'Ir a la diapositiva de ConstruelectricJV',
    'projects.showcaseGallery.aria': 'Galería del proyecto',
    'project.goBack': 'Ir a la página anterior',
    'project.clientLabel': 'Cliente',
    'projects.heading': 'Mis proyectos',
    'projects.seeProjectLabel': 'Ver proyecto',
    'project.galleryHeading': 'Galería',
    'technologies.heading': 'Tecnologías',
    'footer.heading': '¡Envíame un Email!',
    'SEO.title': 'Kevhec - Desarrollador frontend',
    'SEO.description': 'Desarrollador Frontend Colombiano, creando sitios web con tecnologías modernas. !Colaboremos en crear experiencias web centradas en el usuario y de alto rendimiento!',
  },
} as const;
