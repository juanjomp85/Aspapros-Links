import { 
  Youtube, 
  Instagram, 
  Keyboard, 
  GraduationCap,
  Music,
  BookOpen,
  Brain,
  Code,
  Mail,
  Hash,
  Gamepad2,
  Coffee
} from 'lucide-react';
import { QuickLink } from '@/types';

export const quickLinks: QuickLink[] = [
  {
    title: "YouTube",
    description: "Plataforma de videos más popular del mundo",
    url: "https://youtube.com",
    icon: <Youtube className="h-6 w-6" />,
    category: "Social Media",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Instagram",
    description: "Comparte momentos con fotos y videos",
    url: "https://instagram.com",
    icon: <Instagram className="h-6 w-6" />,
    category: "Social Media",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "MonkeyType",
    description: "Mejora tu velocidad de escritura",
    url: "https://monkeytype.com",
    icon: <Keyboard className="h-6 w-6" />,
    category: "Aprendizaje",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Coursera",
    description: "Cursos online de universidades top",
    url: "https://coursera.org",
    icon: <GraduationCap className="h-6 w-6" />,
    category: "Aprendizaje",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Spotify",
    description: "Música para todos los momentos",
    url: "https://spotify.com",
    icon: <Music className="h-6 w-6" />,
    category: "Entretenimiento",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Wikipedia",
    description: "La enciclopedia libre",
    url: "https://wikipedia.org",
    icon: <BookOpen className="h-6 w-6" />,
    category: "Conocimiento",
    color: "from-gray-500 to-gray-600"
  },
  {
    title: "Duolingo",
    description: "Aprende idiomas gratis",
    url: "https://duolingo.com",
    icon: <Brain className="h-6 w-6" />,
    category: "Aprendizaje",
    color: "from-green-400 to-green-500"
  },
  {
    title: "FreeCodeCamp",
    description: "Aprende a programar gratis",
    url: "https://freecodecamp.org",
    icon: <Code className="h-6 w-6" />,
    category: "Aprendizaje",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Gmail",
    description: "Gestiona tu correo electrónico",
    url: "https://gmail.com",
    icon: <Mail className="h-6 w-6" />,
    category: "Productividad",
    color: "from-red-400 to-red-500"
  }
];

export const categories = [
  { name: "Social Media", icon: <Hash className="h-5 w-5" /> },
  { name: "Aprendizaje", icon: <GraduationCap className="h-5 w-5" /> },
  { name: "Entretenimiento", icon: <Gamepad2 className="h-5 w-5" /> },
  { name: "Conocimiento", icon: <Brain className="h-5 w-5" /> },
  { name: "Productividad", icon: <Coffee className="h-5 w-5" /> }
];