
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
    title: 'Know Your Food Pal',
    description: 'A user-friendly app that helps you understand the nutritional content and health impact of the foods you eat.',
    imageUrl: '/knowyourfoodpal.jpeg',
    imageHint: 'food pal',
    link: 'know-your-food-opal.vercel.app',
    documentation: {
      introduction: 'Your personal fitness companion.',
      images: ['/knowyourfoodpal1.jpeg',
               '/knowyourpad2.jpeg'],
    },
  },
  {
    id: 'project-9',
    title: 'IDeal RFID',
    description: 'An innovative RFID-based system that enhances tracking, monitoring, and inventory management through fast and accurate identification of tagged items.',
    imageUrl: '/image/ideal.jpg',
    imageHint: 'ideal RFID',
    link: 'i-deal.vercel.app',
    documentation: {
      introduction: 'IDeal RFID leverages modern technology to automate attendance, providing accurate, real-time data for students and faculty.',
      images: ['/image/ideal1.jpg', 
              '/image/ideal2.jpg'],
    },
  },
  {
    id: 'project-10',
    title: 'Personal Finance Manager',
    description: 'A smart monitoring tool that helps users easily track and manage their blood glucose levels in real time.',
    imageUrl: '/gluco.jpg',
    imageHint: 'glucose track',
    link: 'glucotrack-47958.web.app',
    documentation: {
      introduction: 'User-friendly system designed to help individuals monitor and maintain healthy blood glucose levels with ease.',
      images: ['/gluco1.jpg', 
               '/gluco2.jpg',
               '/gluco3.jpg',
               '/gluco4.jpg',
               '/gluco5.jpg'],
    },
  },
  {
    id: 'project-11',
    title: 'Flood Water Sensor',
    description: 'A device that monitors water levels in real time and alerts users to potential flooding risks.',
    imageUrl: '/flood sensor.jpg',
    imageHint: 'flood sensor',
    link: 'floodwatersensor.atwebpages.com',
    documentation: {
      introduction: 'A device designed to detect rising water levels and provide early warnings to help prevent flood-related damage.',
      images: ['/flood sensor 1.jpeg', 
               '/flood sensor 2.jpeg',
              'public/flood sensor 3.jpeg'],
    },
  },
  {
    id: 'project-12',
    title: 'Flood Watch',
    description: 'A system that continuously monitors weather patterns and water levels to detect and alert communities about possible flood threats.',
    imageUrl: '/floodwatch.jpg',
    imageHint: 'flood watch',
    link: 'floodwatch.atwebpages.com',
    documentation: {
      introduction: 'A monitoring system designed to track weather conditions and water levels to provide early warnings of potential flooding.',
      images: ['/floodwatch 1.jpg'],
    },
  },
  {
    id: 'project-13',
    title: 'Ferti Drop',
    description: 'Unlock the full potential of your crops with intelligent, real-time nutrient monitoring.',
    imageUrl:'/fertidrop.jpg',
    imageHint: 'ferti drop',
    link: 'ferti-drop.vercel.app',
    documentation: {
      introduction: 'Unlock the full potential of your crops with intelligent, real-time nutrient monitoring.',
      images: ['/fertidrop1.jpg',
               '/fertidrop2.jpg',
              '/fertidrop3.jpg'],
    },
  },
  {
    id: 'project-14',
    title: 'Drain Sentry',
    description: 'Sewer Monitoring System',
    imageUrl: '/drainsentry.jpeg',
    imageHint: 'code editor',
    link: 'drainsentry.web.app',
    documentation: {
      introduction: 'Sewer Monitoring System',
      images: ['/drainsentry1.jpg',
               '/drainsentry2.jpg',
               '/drainsentry3.jpg',
               '/drainsentry4.jpg',
               '/drainsentry5.jpg'],
    },
  },
  {
    id: 'project-15',
    title: 'Calcu Consulting',
    description: 'For All Recruitment Needs',
    imageUrl: '/calcu.jpg',
    imageHint: 'calcu consulting',
    link: 'calcu-consulting.vercel.com',
    documentation: {
      introduction: 'For All Recruitment Needs',
      images: ['/calcu1.jpg'],
    },
  },
  {
    id: 'project-16',
    title: 'Biowaste Cabinet',
    description: 'Secure storage unit designed to safely contain and manage biological waste to prevent contamination and ensure proper disposal.',
    imageUrl: '/biowaste.jpeg',
    imageHint: 'bio waste',
    link: '',
    documentation: {
      introduction: 'Secure storage unit designed to safely contain and manage biological waste to prevent contamination and ensure proper disposal.',
      images: ['/biowaste1.jpeg'],
    },
  },
  {
    id: 'project-17',
    title: 'Eco Vend',
    description: 'EcoVend rewards you for recycling. Simply deposit your plastic bottles into our smart reverse vending machine and earn points.',
    imageUrl: '/audentia.jpg',
    imageHint: 'eco vend',
    link: 'audentia.vercel.app',
    documentation: {
      introduction: 'Turn Your Trash into Treasure',
      images: ['/audentia1.jpg',
               '/audentia2.jpg'],
    },
  },
  {
    id: 'project-18',
    title: 'Aqua Byte',
    description: 'Tech-Powered Feeding and Water Analysis.',
    imageUrl: '/aqua.jpg',
    imageHint: 'aqua bite',
    link: 'Aquabyte.atwebpages.com',
    documentation: {
      introduction: 'Tech-Powered Feeding and Water Analysis.',
      images: ['/aqua1.jpg',
               '/aqua2.jpg',
               '/aqua3.jpg',
               '/aqua4.jpg',
              '/aqua5.jpg'],
    },
  },
  // {
  //   id: 'project-19',
  //   title: 'Appointment Booking System',
  //   description: 'A system for scheduling and managing appointments.',
  //   imageUrl: 'https://picsum.photos/600/400?random=19',
  //   imageHint: 'calendar appointment',
  //   link: 'https://example.com/project-19',
  //   documentation: {
  //     introduction: 'Effortless appointment scheduling.',
  //     images: ['https://picsum.photos/800/600?random=19_1', 'https://picsum.photos/800/600?random=19_2'],
  //   },
  // },
  // {
  //   id: 'project-20',
  //   title: 'Event Management Platform',
  //   description: 'Plan, promote, and manage events of all sizes.',
  //   imageUrl: 'https://picsum.photos/600/400?random=20',
  //   imageHint: 'event management',
  //   link: 'https://example.com/project-20',
  //   documentation: {
  //     introduction: 'The ultimate tool for event organizers.',
  //     images: ['https://picsum.photos/800/600?random=20_1', 'https://picsum.photos/800/600?random=20_2'],
  //   },
  // },
];


export const getProjects = () => projects;

export const getProjectById = (id: string) => {
    return projects.find(p => p.id === id);
}
