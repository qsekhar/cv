"use client"
import {Divider} from "@nextui-org/divider";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        name: "Wifi Software",
        description:
            "A management platform for a public WiFi provider, using Django REST Framework and React.js. The Django REST Framework handles the backend, offering a robust, secure, and scalable API for managing user data, network settings, and service analytics. Next.js powers the frontend, providing a dynamic, responsive, and user-friendly interface. This platform allows administrators to efficiently oversee and manage public WiFi networks, offering features such as user authentication, real-time network monitoring, and detailed usage reports. App.B-Connect.co.uk ensures a seamless and efficient management experience for both providers and users.",
        urls: ["https://app.b-connect.co.uk"],
        year: '2024',
        location: "London, United Kingdom",
    },
    {
        name: "Net Zero Now",
        description:
            "A sophisticated web application using Laravel and Vue.js. The Laravel framework powers the backend, ensuring secure and efficient server-side operations, while Vue.js provides a dynamic and interactive frontend experience. NetZeroNow.org is designed to support environmental sustainability initiatives, offering users tools and resources to contribute to achieving net-zero carbon emissions. The platform is intuitive, responsive, and scalable, making it a valuable resource for individuals and organizations committed to environmental responsibility.",
        urls: ["https://netzeronow.org"],
        year: '2024',
        location: "London, United Kingdom",
    },
    {
        name: "Medical Exams Sites",
        description:
            " Five advanced medical exam preparation websites, leveraging Laravel for the API and backend, and Angular for the frontend. These platforms enable medical students to prepare for their exams in real-time, offering a vast database of questions. The Laravel framework ensures a secure and scalable backend, handling all server-side operations efficiently. Meanwhile, Angular provides a responsive and interactive user interface, allowing students to access practice exams, track their progress, and receive instant feedback. These websites are designed to facilitate effective study and preparation for medical students",
        urls: [
            "https://mrcemexamprep.net",
            "https://frcrexamprep.co.uk",
            "https://mrcgpexamprep.co.uk",
            "https://plabprep.co.uk",
            "https://anatomyprep.co.uk",
        ],
        year: "2017 - 2024",
        location: "London, United Kingdom",
    },
    {
        name: "E-commerce",
        description:
            "An e-commerce platform using PrestaShop, specifically designed for selling wire stripper machines. PrestaShop powers the backend, ensuring a robust, secure, and scalable environment for managing products, orders, and customer interactions. The site features a user-friendly interface, making it easy for customers to browse, select, and purchase high-quality wire stripper machines. RedDogZone.com offers a seamless shopping experience, complete with detailed product descriptions, secure payment options, and efficient customer service, catering to both individual and industrial needs.",
        urls: [
            "https://www.bluedogwirestripper.com/",
            "https://reddogzone.com/",
        ],
        year: "2015 - 2017",
        location: "Ontario, Canada",
    },
    {
        name: "Hotel booking system",
        description:
            "A web application using core PHP. This platform is designed to connect users with nature houses and vacation rentals, offering a seamless and intuitive experience for finding and booking unique accommodations. The core PHP backend ensures robust performance and efficient handling of server-side operations, while delivering a responsive and user-friendly interface. Natuurhuisje.nl caters to nature enthusiasts, providing a comprehensive database of rental properties that promote sustainable tourism and eco-friendly travel.",
        urls: ["https://www.natuurhuisje.nl"],
        year: "2012 - 2014",
        location: "Netherland",
    },
];

export default function Projects() {
    const [ activeTab, setActivetab ] = useState(1);

    function handleTabChange(index) {
        setActivetab(index);
    }


    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col sm:flex-row gap-6 mb-4">
                <div className="w-full md:w-1/4 dottedBorder">
                    {
                        projects.map((project, index) => (
                            <>
                              <div key={project.name} className={ [ 'projectTab', 'my-2','cursor-pointer', activeTab === index ? 'active' : ''].join(' ')  } onClick={() => handleTabChange(index)}>
                                <h4>{project.name}</h4>
                                <p className="text-sm opacity-90">{project.year} | {project.location}</p>
                              </div>


                              <div className="block md:hidden">
                                <div key={project.name} className={activeTab === index ? "block" : "hidden"}>
                                  <ul className="">
                                      { 
                                        project.urls.map(url => (
                                            <li key={url}>
                                                <a
                                                    className="hover:underline text-sm text-primary font-bold opacity-90 underline-offset-1 decoration-primary"
                                                    href={url}
                                                    target="_blank"
                                                    rel="nofollow"
                                                >
                                                    {url}
                                                </a>
                                            </li>
                                        ))
                                      }
                                  </ul>
                                  <p>{project.description}</p>
                                </div>
                              </div>

                              <Divider orientation="horizontal" className="bg-primary opacity-50 h-[2px] last:hidden"/>
                            </>
                            
                        ))
                    }
                </div>

                <div 
                
                  className="w-full md:w-3/4 dottedBorder hidden md:flex flex-col justify-center">
                    {
                        projects.map((project, index) => (
                            <motion.div 
                              animate={ activeTab === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0} }                           
                              transition={{ duration: 0.3 }}
                              key={project.name} 
                            >
                                <ul className="">
                                    { 
                                      project.urls.map(url => (
                                          <li key={url}>
                                              <a
                                                  className="hover:underline text-sm text-primary font-bold opacity-90 underline-offset-1 decoration-primary"
                                                  href={url}
                                                  target="_blank"
                                                  rel="nofollow"
                                              >
                                                  {url}
                                              </a>
                                          </li>
                                      ))
                                    }
                                </ul>
                                <p>{project.description}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
