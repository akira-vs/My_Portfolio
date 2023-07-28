import {
    backend,
    creator,
    web,
    animate,
    Blender,
    Davinci_Resolve,
    Illustrator, 
    Lightroom, 
    Nuke_Foundation,
    Photoshop, 
    figma,
    shopify,
    Akira,
    amit,
    Jader,
    Rings, 
    dp,   
    Obito,
    Moon,
    Eren,
    Samdesh,
    Vikas,
    Nandini,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Graphic Designer",
      icon: web,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title:"2D Animation",
      icon: creator,
    },
    {
      title:"3D Modelling",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Blender",
      icon: Blender,
    },
    {
      name: "Illustrator ",
      icon: Illustrator,
    },
    {
      name: "Photoshop ",
      icon: Photoshop,
    },
    {
      name: "Animate",
      icon: animate,
    },
    {
      name: "Nuke Foundation",
      icon: Nuke_Foundation,
    },
    {
      name: "lightroom",
      icon: Lightroom,
    },
    {
      name: "Davinci Resolve",
      icon: Davinci_Resolve,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Graphic Designer",
      company_name: "Brandinhance",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "January 2022  - Feburary 2022",
      points: [
        "Created visually appealing and impactful graphic designs, including posters, banners, and Instagram posts, for social media campaigns.",
        "Designed eye-catching graphics for various social media platforms, including Facebook, Instagram, and Twitter, resulting in increased user engagement and brand visibility.",
        "Developed visually appealing and informative banners for websites, effectively conveying the brand's message and attracting a wider audience.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Great job on the graphic design! The visuals are visually appealing and capture the essence of our brand perfectly. Your attention to detail and creativity are commendable. Keep up the excellent work!",
      name: "Nandini",
      designation: "Software Engineer",
      company: "ST Microelectronics",
      image: Nandini,
    },
    {
      testimonial:
        "Fantastic work as a graphic designer! The designs you created exceeded our expectations. The use of color, typography, and layout is spot-on. We appreciate your professionalism and ability to deliver exceptional results. Well done!",
      name: "Samdesh",
      designation: "Manager",
      company: "Brandinhance",
      image: Samdesh,
    }
  ];
  
  const projects = [
    {
      name: "Akira Profile",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: Akira,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Toon art",
      description:
        "",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: Jader,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Akatsuki Rings",
      tags: [
        {
          name: "Blender",
          color: "green-text-gradient",
        },
      ],
      image: Rings,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Kaneki",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: amit,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Flowers",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: dp,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Obito",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
      ],
      image: Obito,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Moon",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: Moon,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
    {
      name: "Eren",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
      image: Eren,
      source_code_link: "https://instagram.com/manfred_vs?igshid=MzRlODBiNWFlZA==",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };