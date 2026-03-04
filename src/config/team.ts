export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;      
    bgImage: string;    
    socials: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      email?: string;
      website?: string;
      instagram?: string;
    };
}
  
export const teamMembers: TeamMember[] = [
    {
      name: "Segharan Lanang Hidayat.",
      role: "Full Stack Developer",
      image: "/sung.png",
      bgImage: "/back.png",
      bio: "Developer Gabut yang sedang mengembangkan aplikasi dan website menggunakan Next.js dengan passion dalam menciptakan pengalaman digital yang inovatif.",
      socials: {
        github: "https://github.com/Hugzinxxx",
        linkedin: "https://www.linkedin.com/in/segaran-lanang-hidayat-4532893a9/",
        instagram: "https://www.instagram.com/hugzinxx",
        email: "reresadsad@gmail.com",
        website: "https://hugzin.my.id"
      }
    },
    {
      name: "Muhammad Athar Aydin Fahrulloh",
      role: "Fullstack Developer",
      image: "/sung.png",
      bgImage: "/back.png",
      bio: "Siswa SMKN 8 Malang yang berfokus pada App & Web Development.",
      socials: {
        instagram: "https://instagram.com/atharfahrulloh",
        email: "athar.fahrulloh@gmail.com"
      }
    },
    {
      name: "Muhammad Fahri Baadila (AKA Aria)",
      role: "Full Stack Developer",
      image: "/sung.png",
      bgImage: "/back.png",
      bio: "Orang yang belajar semaunya saat gabut",
      socials: {
        github: "https://github.com/Dirma-dayo",
        linkedin: "https://www.linkedin.com/in/fahri-baadila-603982291/",
        instagram: "https://www.instagram.com/arianeechan/",
        email: "fahribaadila3d@gmail.com",
        website: "https://aria-nee.vercel.app/"
      }
    }
];
