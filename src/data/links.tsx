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
  Gamepad,
  Gamepad2,
  Coffee,
  Trophy,
  Dribbble,
  MessageCircleMore,
  Facebook,
  Puzzle,
  ToyBrick,
  Tv,
  Rocket,
  NotebookTabs,
  CalendarDays,
  Brush,
  PackageOpen,
  Map,
  Palette,
  Microscope
} from 'lucide-react';
import { QuickLink } from '@/types';

export const quickLinks: QuickLink[] = [
  {
    title: "Instagram",
    description: "Comparte momentos con fotos y videos",
    url: "https://instagram.com",
    icon: <Instagram className="h-6 w-6" />, 
    category: "Social Media",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "WhatsApp Web",
    description: "Comunicación sencilla desde tu navegador",
    url: "https://web.whatsapp.com",
    icon: <MessageCircleMore className="h-6 w-6" />, 
    category: "Social Media",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Facebook",
    description: "Conéctate con amigos y familia",
    url: "https://facebook.com",
    icon: <Facebook className="h-6 w-6" />, 
    category: "Social Media",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Vedoque Mecanografía",
    description: "Practica mecanografía de forma interactiva",
    url: "https://www.vedoque.com/html5/mecanografia/mecanografia1/",
    icon: <Keyboard className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Kahoot Community",
    description: "Explora y crea juegos educativos",
    url: "https://kahoot.com/community/study/",
    icon: <GraduationCap className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Kahoot Creator",
    description: "Crea tus propios cuestionarios",
    url: "https://create.kahoot.it/channel/6684b87b-da93-433f-a9be-9229e4bbf21b",
    icon: <GraduationCap className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Arasaac",
    description: "Herramientas y pictogramas educativos",
    url: "https://old.arasaac.org/herramientas.php",
    icon: <Brain className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-green-400 to-green-500"
  },
  {
    title: "Atlas GIS",
    description: "Explora mapas interactivos",
    url: "https://www.arcgis.com/apps/instant/atlas/index.html?appid=0cd1cdee853c413a84bfe4b9a6931f0d",
    icon: <Map className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "NASA Space Place",
    description: "Aprende sobre el espacio de forma interactiva",
    url: "https://spaceplace.nasa.gov/",
    icon: <Rocket className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-gray-500 to-gray-600"
  },
  {
    title: "Toy Theater",
    description: "Juegos interactivos educativos",
    url: "https://toytheater.com/",
    icon: <Brain className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Vedoque",
    description: "Recursos educativos interactivos",
    url: "https://www.vedoque.com/",
    icon: <Brain className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Educaplay",
    description: "Actividades educativas personalizables",
    url: "https://es.educaplay.com/",
    icon: <Brain className="h-6 w-6" />, 
    category: "Aprendizaje",
    color: "from-green-400 to-green-500"
  },
  {
    title: "YouTube",
    description: "Plataforma de videos más popular del mundo",
    url: "https://youtube.com",
    icon: <Youtube className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Vedoque Sudoku",
    description: "Sudokus interactivos educativos",
    url: "https://www.vedoque.com/juegos/sudoku/",
    icon: <Brain className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Sesame Street Games",
    description: "Juegos educativos y accesibles",
    url: "https://www.sesamestreet.org/games",
    icon: <Tv className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-gray-500 to-gray-600"
  },
  {
    title: "Jigsaw Planet",
    description: "Puzzles interactivos",
    url: "https://www.jigsawplanet.com/",
    icon: <Puzzle className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Rebrickable",
    description: "Instrucciones y modelos de LEGO",
    url: "https://rebrickable.com/",
    icon: <ToyBrick className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-red-400 to-red-500"
  },
  {
    title: "LaCartoons",
    description: "Series y caricaturas online",
    url: "https://www.lacartoons.com/",
    icon: <Tv className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Play Classic Games",
    description: "Juega clásicos en línea",
    url: "https://playclassic.games/games/",
    icon: <Gamepad className="h-6 w-6" />, 
    category: "Entretenimiento",
    color: "from-gray-700 to-gray-800"
  },
  {
    title: "LaLiga",
    description: "Calendario de partidos de LaLiga",
    url: "https://www.laliga.com/laliga-easports/calendario",
    icon: <Trophy className="h-6 w-6" />, 
    category: "Deportes",
    color: "from-red-500 to-red-600"
  },
  {
    title: "ACB",
    description: "Calendario de la liga de baloncesto",
    url: "https://www.acb.com/calendario/",
    icon: <Dribbble className="h-6 w-6" />, 
    category: "Deportes",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "UEFA Champions League",
    description: "Calendario de partidos",
    url: "https://www.uefa.com/uefachampionsleague/",
    icon: <Trophy className="h-6 w-6" />, 
    category: "Deportes",
    color: "from-indigo-500 to-indigo-600"
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
    title: "StoryWeaver",
    description: "Cuentos interactivos en español",
    url: "https://storyweaver.org.in/es/lists/?language=Spanish",
    icon: <BookOpen className="h-6 w-6" />, 
    category: "Conocimiento",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Google Arts & Culture",
    description: "Explora cultura y arte mundial",
    url: "https://artsandculture.google.com/",
    icon: <Palette className="h-6 w-6" />, 
    category: "Conocimiento",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "Europeana",
    description: "Colección cultural europea",
    url: "https://www.europeana.eu/es",
    icon: <Microscope className="h-6 w-6" />, 
    category: "Conocimiento",
    color: "from-gray-700 to-gray-800"
  },
  {
    title: "NASA Image Library",
    description: "Imágenes y recursos espaciales",
    url: "https://images.nasa.gov/",
    icon: <Rocket className="h-6 w-6" />, 
    category: "Conocimiento",
    color: "from-gray-400 to-gray-500"
  },
  {
    title: "Google Keep",
    description: "Notas rápidas y organizadas",
    url: "https://keep.google.com/",
    icon: <NotebookTabs className="h-6 w-6" />, 
    category: "Productividad",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Google Calendar",
    description: "Planifica tus días",
    url: "https://calendar.google.com/",
    icon: <CalendarDays className="h-6 w-6" />, 
    category: "Productividad",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Pixlr",
    description: "Editor de imágenes online",
    url: "https://pixlr.com/es/editor/",
    icon: <Brush className="h-6 w-6" />, 
    category: "Productividad",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Sumo Paint",
    description: "Pintura y edición gráfica",
    url: "https://paint.sumo.app/?lang=es",
    icon: <Brush className="h-6 w-6" />, 
    category: "Productividad",
    color: "from-red-400 to-red-500"
  },
  {
    title: "Sumo Apps",
    description: "Herramientas creativas online",
    url: "https://sumo.app/es",
    icon: <PackageOpen className="h-6 w-6" />, 
    category: "Productividad",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Sumo Pixel",
    description: "Herramientas creativas online",
    url: "https://pixel.sumo.app/?lang=es",
    icon: <Brush className="h-6 w-6" />, 
    category: "Productividad",
    color: "from-gray-400 to-gray-500"
  }
];

export const categories = [
  { name: "Social Media", icon: <Hash className="h-5 w-5" /> },
  { name: "Aprendizaje", icon: <GraduationCap className="h-5 w-5" /> },
  { name: "Entretenimiento", icon: <Gamepad2 className="h-5 w-5" /> },
  { name: "Deportes", icon: <Trophy className="h-5 w-5" /> },
  { name: "Conocimiento", icon: <Brain className="h-5 w-5" /> },
  { name: "Productividad", icon: <Coffee className="h-5 w-5" /> }
];
