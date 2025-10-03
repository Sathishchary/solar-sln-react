import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeSection from '../components/HomeSection';
import { ROUTES } from '../utils/routes';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const scrollToSection = (section: string) => {
        // Navigate to the appropriate route
        switch (section) {
            case 'products':
                navigate(ROUTES.PRODUCTS);
                break;
            case 'services':
                navigate(ROUTES.SERVICES);
                break;
            case 'projects':
                navigate(ROUTES.PROJECTS);
                break;
            case 'dealer':
                navigate(ROUTES.DEALER);
                break;
            case 'contact':
                navigate(ROUTES.CONTACT);
                break;
            case 'about':
                navigate(ROUTES.ABOUT);
                break;
            default:
                navigate(ROUTES.HOME);
        }
    };

    return (
        <div>
            <HomeSection scrollToSection={scrollToSection} />
        </div>
    );
};

export default HomePage;