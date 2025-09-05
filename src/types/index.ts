
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  documentation: {
    introduction: string;
    images?: string[];
  };
}


export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Yucca',
    description: 'A full-featured e-commerce website built with Next.js and Stripe.',
    imageUrl: '/yuccamain.jpg',
    imageHint: 'online store',
    link: 'yucca2.vercel.app',
    documentation: {
        introduction: "Yucca is a modern e-commerce platform that demonstrates a complete shopping experience, from browsing products to completing a purchase with Stripe.",
        images: [
          '/yucca2.jpg',
          '/yucca1.jpg',
          '/yucca.jpg',
        ]
    }
  },
  {
    id: 'project-2',
    title: 'Wireless Scoreboard',
    description: 'A wireless scoreboard project involves creating an electronic system where a controller wirelessly updates the game score and other data on a display, typically using an ESP32. The system includes a microcontroller, display screen, and power supply, offering flexibility and portability for various sports and events.',
    imageUrl: '/Project showcase.jpg',
    imageHint: 'task board',
    link: 'NO LINK',
    documentation: {
        introduction: "A wireless scoreboard is an innovative system that allows real-time score updates and game data to be displayed without the need for physical wires. By utilizing wireless communication technologies like ESP32, the scoreboard can be controlled remotely, offering flexibility, portability, and ease of setup for various sports and events.",
        images: [
          '/wireless scoreboard.jpg',
        ]
    }
  },
  {
    id: 'project-3',
    title: 'UV Cabinet',
    description: 'A UV cabinet is a device that uses ultraviolet (UV) light to disinfect and sterilize items such as tools, equipment, or personal items. It effectively kills bacteria, viruses, and other pathogens, ensuring a hygienic environment without the use of chemicals.',
    imageUrl: '/uvcabinet.jpg',
    imageHint: 'personal website',
    link: 'NO LINK',
    documentation: {
        introduction: "A UV cabinet is a sanitation device that uses ultraviolet light to disinfect and sterilize objects, providing a chemical-free method to eliminate harmful pathogens. It's commonly used in healthcare, laboratories, and other settings where cleanliness and hygiene are critical.",
        images: [
            '/uvcabinet1.jpg',
        ]
            
        

    }
  },
    {
    id: 'project-4',
    title: 'Mawala System',
    description: 'A dynamic flood control system is an adaptive infrastructure designed to manage and mitigate flood risks by adjusting in real-time to changing water levels and environmental conditions. It uses sensors, smart technology, and automated barriers to efficiently regulate water flow and prevent flooding, offering a flexible and responsive solution.',
    imageUrl: '/project showsace3.jpeg',
    imageHint: 'food app',
    link: 'mawalasystem.atwebpages.com',
    documentation: {
        introduction: "A dynamic flood control system is an advanced solution that uses real-time data and automated technology to manage flood risks. By adjusting to changing conditions, it helps protect areas from flooding, ensuring more effective and responsive water management.",

        images: [
            '/mawalasystem.jpeg',
            '/mawalasystem1.jpeg',
            '/mawalasystem2.jpeg',
        ]
    }
  },
  {
    id: 'project-5',
    title: 'Smart PPE',
    description: 'Smart PPE includes sensors and wearables that monitor health, detect hazards, and provide alerts, helping to prevent accidents and improve safety in hazardous work environments.',
    imageUrl: '/project showcase2.jpg',
    imageHint: 'weather forecast',
    link: 'smartppe.atwebpages.com',
    documentation: {
        introduction: "Smart PPE (Personal Protective Equipment) integrates advanced technology into traditional safety gear to enhance worker protection in real-time.",
        images: [
          '/smartppe.jpg',
          '/smartppe1.jpg',
          '/smartppe3.jpg',
          '/smartppe4.jpeg',
        ]
    }
  },
  {
    id: 'project-6',
    title: 'Smart Eyeglasses',
    description: 'These glasses feature built-in displays, cameras, and sensors, allowing users to access information, take photos, or navigate, all while keeping their hands free for other tasks.',
    imageUrl: '/project showcase1.jpg',
    imageHint: 'writing blog',
    link: 'smarteyeglasses.atwebpages.com',
    documentation: {
        introduction: "Smart eyeglasses are wearable devices that combine traditional eyewear with advanced technology to provide hands-free functionality.",
        images: [
          '/smarteyeglasses.jpg',
          '/smarteyeglasses1.jpg',
        ]
    }
  },
  {
    id: 'project-7',
    title: 'Lumi Track',
    description: 'This platform uses artificial intelligence to learn user preferences, control lighting, heating, and appliances, and track energy consumption in real-time, helping reduce costs and improve efficiency.',
    imageUrl: '/lumitrack.jpeg',
    imageHint: 'cooking recipe',
    link: 'lumitrack.atwebpages.com',
    documentation: {
      introduction: 'An AI-driven smart home platform enables remote control of home devices while optimizing energy usage through intelligent automation.',
      images: [
        '/lumitrack1.jpeg',
        '/lumitrack2.jpeg',
        '/lumitrack3.jpeg',
      
      ]
    },
  },
  {
    id: 'project-8',
    title: 'Fitness Tracker',
    description: 'Track your workouts and monitor your progress.',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    imageHint: 'fitness workout',
    link: 'https://example.com/project-8',
    documentation: {
      introduction: 'Your personal fitness companion.',
      images: ['https://picsum.photos/800/600?random=8_1', 'https://picsum.photos/800/600?random=8_2'],
    },
  },
  {
    id: 'project-9',
    title: 'Movie Watchlist',
    description: 'Create and manage your personal movie watchlist.',
    imageUrl: 'https://picsum.photos/600/400?random=9',
    imageHint: 'movie theater',
    link: 'https://example.com/project-9',
    documentation: {
      introduction: 'Never forget a movie to watch again.',
      images: ['https://picsum.photos/800/600?random=9_1', 'https://picsum.photos/800/600?random=9_2'],
    },
  },
  {
    id: 'project-10',
    title: 'Personal Finance Manager',
    description: 'A tool to manage your budget and expenses.',
    imageUrl: 'https://picsum.photos/600/400?random=10',
    imageHint: 'finance chart',
    link: 'https://example.com/project-10',
    documentation: {
      introduction: 'Take control of your finances.',
      images: ['https://picsum.photos/800/600?random=10_1', 'https://picsum.photos/800/600?random=10_2'],
    },
  },
  {
    id: 'project-11',
    title: 'Travel Planner',
    description: 'Plan your next adventure with this travel planner app.',
    imageUrl: 'https://picsum.photos/600/400?random=11',
    imageHint: 'travel map',
    link: 'https://example.com/project-11',
    documentation: {
      introduction: 'Plan your trips seamlessly.',
      images: ['https://picsum.photos/800/600?random=11_1', 'https://picsum.photos/800/600?random=11_2'],
    },
  },
  {
    id: 'project-12',
    title: 'Real-time Chat App',
    description: 'A real-time chat application using WebSockets.',
    imageUrl: 'https://picsum.photos/600/400?random=12',
    imageHint: 'chat bubbles',
    link: 'https://example.com/project-12',
    documentation: {
      introduction: 'Connect with people in real-time.',
      images: ['https://picsum.photos/800/600?random=12_1', 'https://picsum.photos/800/600?random=12_2'],
    },
  },
  {
    id: 'project-13',
    title: 'Music Player',
    description: 'A simple music player with playlist functionality.',
    imageUrl: 'https://picsum.photos/600/400?random=13',
    imageHint: 'music notes',
    link: 'https://example.com/project-13',
    documentation: {
      introduction: 'Your favorite tunes, one click away.',
      images: ['https://picsum.photos/800/600?random=13_1', 'https://picsum.photos/800/600?random=13_2'],
    },
  },
  {
    id: 'project-14',
    title: 'Online Code Editor',
    description: 'A browser-based code editor for HTML, CSS, and JavaScript.',
    imageUrl: 'https://picsum.photos/600/400?random=14',
    imageHint: 'code editor',
    link: 'https://example.com/project-14',
    documentation: {
      introduction: 'Code on the go.',
      images: ['https://picsum.photos/800/600?random=14_1', 'https://picsum.photos/800/600?random=14_2'],
    },
  },
  {
    id: 'project-15',
    title: 'Social Media Dashboard',
    description: 'Manage all your social media accounts in one place.',
    imageUrl: 'https://picsum.photos/600/400?random=15',
    imageHint: 'social media',
    link: 'https://example.com/project-15',
    documentation: {
      introduction: 'Your social media command center.',
      images: ['https://picsum.photos/800/600?random=15_1', 'https://picsum.photos/800/600?random=15_2'],
    },
  },
  {
    id: 'project-16',
    title: 'E-Learning Platform',
    description: 'A platform for online courses and tutorials.',
    imageUrl: 'https://picsum.photos/600/400?random=16',
    imageHint: 'online learning',
    link: 'https://example.com/project-16',
    documentation: {
      introduction: 'Learn new skills online.',
      images: ['https://picsum.photos/800/600?random=16_1', 'https://picsum.photos/800/600?random=16_2'],
    },
  },
  {
    id: 'project-17',
    title: 'Job Board',
    description: 'A platform for posting and finding job opportunities.',
    imageUrl: 'https://picsum.photos/600/400?random=17',
    imageHint: 'job search',
    link: 'https://example.com/project-17',
    documentation: {
      introduction: 'Find your next career move.',
      images: ['https://picsum.photos/800/600?random=17_1', 'https://picsum.photos/800/600?random=17_2'],
    },
  },
  {
    id: 'project-18',
    title: 'Real Estate Listings',
    description: 'A site for browsing and listing properties for sale or rent.',
    imageUrl: 'https://picsum.photos/600/400?random=18',
    imageHint: 'real estate',
    link: 'https://example.com/project-18',
    documentation: {
      introduction: 'Your dream home is a click away.',
      images: ['https://picsum.photos/800/600?random=18_1', 'https://picsum.photos/800/600?random=18_2'],
    },
  },
  {
    id: 'project-19',
    title: 'Appointment Booking System',
    description: 'A system for scheduling and managing appointments.',
    imageUrl: 'https://picsum.photos/600/400?random=19',
    imageHint: 'calendar appointment',
    link: 'https://example.com/project-19',
    documentation: {
      introduction: 'Effortless appointment scheduling.',
      images: ['https://picsum.photos/800/600?random=19_1', 'https://picsum.photos/800/600?random=19_2'],
    },
  },
  {
    id: 'project-20',
    title: 'Event Management Platform',
    description: 'Plan, promote, and manage events of all sizes.',
    imageUrl: 'https://picsum.photos/600/400?random=20',
    imageHint: 'event management',
    link: 'https://example.com/project-20',
    documentation: {
      introduction: 'The ultimate tool for event organizers.',
      images: ['https://picsum.photos/800/600?random=20_1', 'https://picsum.photos/800/600?random=20_2'],
    },
  },
];


export const getProjects = () => projects;

export const getProjectById = (id: string) => {
    return projects.find(p => p.id === id);
}
