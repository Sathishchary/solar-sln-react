// Route constants
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    PRODUCTS: '/products',
    SERVICES: '/services',
    PROJECTS: '/projects',
    DEALER: '/dealer',
    CONTACT: '/contact',
    QUOTE: '/quote'
} as const;

// Menu configuration for navigation
export const MENU_ITEMS = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'About Us', path: ROUTES.ABOUT },
    { name: 'Products', path: ROUTES.PRODUCTS },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'Projects', path: ROUTES.PROJECTS },
    // { name: 'Get Quote', path: ROUTES.QUOTE },
    { name: 'Dealer Opportunity', path: ROUTES.DEALER },
    { name: 'Contact', path: ROUTES.CONTACT }
];

// Page titles for SEO and metadata
export const PAGE_TITLES = {
    [ROUTES.HOME]: 'SLN Enterprises - Solar Solutions Provider',
    [ROUTES.ABOUT]: 'About Us - SLN Enterprises',
    [ROUTES.PRODUCTS]: 'Solar Products - SLN Enterprises',
    [ROUTES.SERVICES]: 'Our Services - SLN Enterprises',
    [ROUTES.PROJECTS]: 'Our Projects - SLN Enterprises',
    [ROUTES.DEALER]: 'Dealer Opportunities - SLN Enterprises',
    [ROUTES.CONTACT]: 'Contact Us - SLN Enterprises',
} as const;

export type RouteType = typeof ROUTES[keyof typeof ROUTES];