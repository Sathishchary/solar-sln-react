# Solar Energy Calculator

A React-based solar energy calculator that helps users estimate their potential savings and environmental impact from installing solar panels.

## Features

- **Solar Panel Cost Calculator**: Calculate installation costs based on energy usage and roof area
- **Savings Estimator**: Estimate yearly savings and payback period
- **Environmental Impact**: See your potential CO₂ reduction and equivalent tree planting
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sathishchary/solar-sln-react.git
cd solar-sln-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter your average monthly electric bill
2. Input your available roof area in square feet
3. Specify average daily sunlight hours for your location
4. Click "Calculate Solar Potential" to see your results

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 19
- Vite 7
- ESLint

## Calculations

The calculator uses the following assumptions:
- Average electricity cost: $0.13 per kWh
- Panel efficiency: 18%
- Panel wattage: 350W per panel
- System loss: 14%
- Installation cost: $2,500 per kW

*Note: These are estimates. Actual results may vary based on location, system efficiency, and local electricity rates.*

## License

This project is open source and available for educational purposes.
