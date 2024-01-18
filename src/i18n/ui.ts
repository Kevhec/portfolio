type Language = keyof typeof languages;

type UITranslations = {
  [key: string]: string;
};

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
    'intro.greet': "Hey! it's",
    'intro.name': 'Kevin Henao',
    'intro.introduction.1': 'Frontend Developer',
    'intro.introduction.2': 'Aspiring Accessibility Advocate',
    'intro.introduction.3': 'Learning Enthusiast',
    'intro.getintouch': 'Get in touch',
    'intro.getintouch.subject': "Hey! let's work together",
    'intro.getintouch.message': 'Your awesome message goes here',
    'intro.linkedinlabel': 'My Linkedin',
    'intro.githublabel': 'My Linkedin',
    'about.1': "I'm a 23-year-old developer. ",
    'about.2': 'I love sharing what I know. ',
    'about.3': "That's why I started working on the frontend to create a blog, a platform to share science and provide educational resources for everyone, ",
    'about.4': 'no matter their ages or disabilities. ',
    'about.5': 'Along the way, ',
    'about.6': 'I discovered a passion for web development',
    'about.7': 'The constant learning opportunities captivated me. I am driven by the ambition of applying newfound knowledge',
    'about.8': 'to enhance the web and make it a more user-friendly space',
  },
  es: {
    'intro.greet': '¡Hey! aquí',
    'intro.introduction.1': 'Desarrollador Frontend',
    'intro.introduction.2': 'Aspirante a defensor de la accesibilidad',
    'intro.introduction.3': 'Entusiasta del aprendizaje',
    'intro.getintouch': 'Contactar',
    'intro.getintouch.subject': "¡Hey! Trabajemos juntos",
    'intro.getintouch.message': 'Tu increíble mensaje va aquí',
    'intro.linkedinlabel': 'Mi Linkedin',
    'intro.githublabel': 'My Linkedin',
    'about.1': 'Soy un desarrollador de 23 años. ',
    'about.2': 'Amo compartir mis conocimientos. ',
    'about.3': 'Por esta razón empecé a trabajar en la creación de un blog, una plataforma para compartir ciencia y proveer recursos educativos para todos, ',
    'about.4': 'sin importar sus edades o discapacidades. ',
    'about.5': 'En el camino, ',
    'about.6': 'descrubrí una gran pasión por el desarrollo web. ',
    'about.7': 'Las constantes oportunidades de aprendizaje me cautivaron. Me muevo por la ambición de aplicar nuevos conocimientos ',
    'about.8': 'para mejorar la web y hacerla un lugar más amigable con el usuario.',
  },
} as const;
