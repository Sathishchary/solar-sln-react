# Solar SLN React - Component Structure

This project has been refactored to use a modular component structure for better maintainability and organization.

## Component Architecture

The main `App.tsx` file now imports individual components from the `components/` folder:

### New Components Structure:

```
src/
├── App.tsx (Main application with navigation and layout)
└── components/
    ├── Modal.tsx (Reusable modal component)
    ├── RequestDemoModalApp.tsx (Demo request modal)
    ├── HomeSection.tsx (Hero/landing section)
    ├── AboutUsSection.tsx (About company section)
    ├── ProductsSection.tsx (Solar products display)
    ├── ServicesSection.tsx (Services offered)
    ├── ProjectsSection.tsx (Completed projects showcase)
    ├── DealerOpportunitySection.tsx (Dealer partnership)
    ├── ContactSection.tsx (Contact information and form)
    ├── Footer.tsx (Legacy footer component)
    ├── HeroSection.tsx (Legacy hero component)
    ├── Navbar.tsx (Legacy navbar component)
    └── RequestDemoModal.tsx (Legacy demo modal)
```

### Key Benefits:

1. **Modular Architecture**: Each section is now a separate component for better maintainability
2. **Reusability**: Components can be easily reused across different pages
3. **TypeScript Support**: Proper TypeScript interfaces for component props
4. **Clean Imports**: Clear separation of concerns with individual component files
5. **Better Code Organization**: Easier to locate and modify specific sections

### Component Props:

- `HomeSection`: Accepts `scrollToSection` function for navigation
- `Modal`: Generic modal component with title, content, and positioning
- `RequestDemoModalApp`: Handles demo request form with submission states
- Other section components are self-contained with no required props

### Usage:

The main App component handles:
- Navigation state management
- Active section tracking
- Modal state control
- Page rendering logic

Each section component is responsible for:
- Its own internal state
- Rendering its specific content
- Handling section-specific interactions

## Running the Application

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or next available port).

## Development Notes

- All new components follow TypeScript best practices
- Components are designed to be self-contained and reusable
- The original functionality remains unchanged, just better organized
- Legacy components are maintained for backward compatibility