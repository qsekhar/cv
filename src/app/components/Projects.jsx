import Image from 'next/image';

export default function Projects(){
    return (
        <div className="flex flex-col">

            <div className="w-full flex flex-col sm:flex-row gap-6 mb-4">
                <div className='w-full sm:w-1/4'>
                    <h4>Wifi Software</h4>
                    <ul className='list-disc ml-4'>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://app.b-connect.co.uk/" target="_blank">app.b-connect.co.uk</a></li>
                        
                    </ul>
                </div>
                <div className='w-full sm:w-3/4'>
                    <h4>2024 | London</h4>
                    <p>
                        A management platform for a public WiFi provider, using Django REST Framework and React.js. The Django REST Framework handles the backend, offering a robust, secure, and scalable API for managing user data, network settings, and service analytics. Next.js powers the frontend, providing a dynamic, responsive, and user-friendly interface. This platform allows administrators to efficiently oversee and manage public WiFi networks, offering features such as user authentication, real-time network monitoring, and detailed usage reports. App.B-Connect.co.uk ensures a seamless and efficient management experience for both providers and users.
                    </p>
                </div>
            </div>
            
            <div className="w-full flex flex-col sm:flex-row gap-6 mb-4">
                <div className='w-full sm:w-1/4'>
                    <h4>Net Zero Now</h4>
                    <ul className='list-disc ml-4'>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://netzeronow.org/" target="_blank">netzeronow.org</a></li>
                        
                    </ul>
                </div>
                <div className='w-full sm:w-3/4'>
                    <h4>2024 | London</h4>
                    <p>
                        A sophisticated web application using Laravel and Vue.js. The Laravel framework powers the backend, ensuring secure and efficient server-side operations, while Vue.js provides a dynamic and interactive frontend experience. NetZeroNow.org is designed to support environmental sustainability initiatives, offering users tools and resources to contribute to achieving net-zero carbon emissions. The platform is intuitive, responsive, and scalable, making it a valuable resource for individuals and organizations committed to environmental responsibility.
                    </p>
                </div>
            </div>


            <div className="w-full flex flex-col sm:flex-row gap-6 mb-4">
                <div className='w-full sm:w-1/4'>
                    <h4>Medical Exams Sites</h4>
                    <ul className='list-disc ml-4'>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://mrcemexamprep.net" target="_blank">mrcemexamprep.net</a></li>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://frcrexamprep.co.uk" target="_blank">frcrexamprep.co.uk</a></li>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://mrcgpexamprep.co.uk" target="_blank">mrcgpexamprep.co.uk</a></li>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://plabprep.co.uk" target="_blank">plabprep.co.uk</a></li>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary'  href='https://anatomyprep.co.uk' target='_blank'>anatomyprep.co.uk</a></li>
                    </ul>
                </div>
                <div className='w-full sm:w-3/4'>
                    <h4>2017 - 2024 | London</h4>
                    <p>
                        Five advanced medical exam preparation websites, leveraging Laravel for the API and backend, and Angular for the frontend. These platforms enable medical students to prepare for their exams in real-time, offering a vast database of questions. The Laravel framework ensures a secure and scalable backend, handling all server-side operations efficiently. Meanwhile, Angular provides a responsive and interactive user interface, allowing students to access practice exams, track their progress, and receive instant feedback. These websites are designed to facilitate effective study and preparation for medical students
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-6 mb-4">
                <div className='w-full sm:w-1/4'>
                    <h4>E-commerce</h4>
                    <ul className='list-disc ml-4'>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://www.bluedogwirestripper.com/" target="_blank">bluedogwirestripper.com</a></li>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://reddogzone.com/" target="_blank">reddogzone.com</a></li>
                    </ul>

                </div>
                <div className='w-full sm:w-3/4'>
                    <h4>2015 - 2017 | Canada</h4>
                    <p>
                    An e-commerce platform using PrestaShop, specifically designed for selling wire stripper machines. PrestaShop powers the backend, ensuring a robust, secure, and scalable environment for managing products, orders, and customer interactions. The site features a user-friendly interface, making it easy for customers to browse, select, and purchase high-quality wire stripper machines. RedDogZone.com offers a seamless shopping experience, complete with detailed product descriptions, secure payment options, and efficient customer service, catering to both individual and industrial needs.
                    </p>
                </div>
            </div>


            <div className="w-full flex flex-col sm:flex-row gap-6 mb-4">
                <div className='w-full sm:w-1/4'>
                    <h4>Hotel booking system</h4>
                    <ul className='list-disc ml-4'>
                        <li><a className='hover:underline text-lg underline-offset-1 decoration-primary' href="https://www.natuurhuisje.nl" target="_blank">natuurhuisje.nl</a></li>
                    </ul>

                </div>
                <div className='w-full sm:w-3/4'>
                    <h4>2012 - 2014 | Netherland</h4>
                    <p>
                    A web application using core PHP. This platform is designed to connect users with nature houses and vacation rentals, offering a seamless and intuitive experience for finding and booking unique accommodations. The core PHP backend ensures robust performance and efficient handling of server-side operations, while delivering a responsive and user-friendly interface. Natuurhuisje.nl caters to nature enthusiasts, providing a comprehensive database of rental properties that promote sustainable tourism and eco-friendly travel.
                    </p>
                </div>
            </div>

            

        </div>
    )
}