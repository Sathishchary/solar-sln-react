import { useState } from 'react'
import './App.css'

function App() {
  const [monthlyBill, setMonthlyBill] = useState('')
  const [roofArea, setRoofArea] = useState('')
  const [sunlightHours, setSunlightHours] = useState('5')
  const [results, setResults] = useState(null)

  const calculateSolar = () => {
    if (!monthlyBill || !roofArea || !sunlightHours) {
      alert('Please fill in all fields')
      return
    }

    const avgElectricityCost = 0.13 // $0.13 per kWh average
    const monthlyUsage = parseFloat(monthlyBill) / avgElectricityCost
    const yearlyUsage = monthlyUsage * 12

    const panelWattage = 350 // 350W per panel
    const systemLoss = 0.14 // 14% system loss
    const dailySunlight = parseFloat(sunlightHours)
    
    const numberOfPanels = Math.ceil(yearlyUsage / (panelWattage * dailySunlight * 365 * (1 - systemLoss) / 1000))
    const systemSize = (numberOfPanels * panelWattage) / 1000
    const installationCost = systemSize * 2500 // $2500 per kW average
    const yearlySavings = yearlyUsage * avgElectricityCost
    const paybackPeriod = (installationCost / yearlySavings).toFixed(1)
    const co2Offset = (yearlyUsage * 0.92 / 2000).toFixed(2) // metric tons of CO2

    setResults({
      yearlyUsage: yearlyUsage.toFixed(0),
      numberOfPanels,
      systemSize: systemSize.toFixed(2),
      installationCost: installationCost.toFixed(0),
      yearlySavings: yearlySavings.toFixed(0),
      paybackPeriod,
      co2Offset,
      twentyYearSavings: (yearlySavings * 20 - installationCost).toFixed(0)
    })
  }

  return (
    <div className="container">
      <header>
        <h1>☀️ Solar Energy Calculator</h1>
        <p>Calculate your solar panel savings and environmental impact</p>
      </header>

      <div className="calculator-section">
        <h2>Enter Your Information</h2>
        
        <div className="input-group">
          <label htmlFor="monthlyBill">Average Monthly Electric Bill ($)</label>
          <input
            id="monthlyBill"
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(e.target.value)}
            placeholder="e.g., 150"
          />
        </div>

        <div className="input-group">
          <label htmlFor="roofArea">Available Roof Area (sq ft)</label>
          <input
            id="roofArea"
            type="number"
            value={roofArea}
            onChange={(e) => setRoofArea(e.target.value)}
            placeholder="e.g., 500"
          />
        </div>

        <div className="input-group">
          <label htmlFor="sunlightHours">Average Daily Sunlight Hours</label>
          <input
            id="sunlightHours"
            type="number"
            value={sunlightHours}
            onChange={(e) => setSunlightHours(e.target.value)}
            placeholder="e.g., 5"
            step="0.5"
          />
        </div>

        <button className="calculate-btn" onClick={calculateSolar}>
          Calculate Solar Potential
        </button>
      </div>

      {results && (
        <div className="results-section">
          <h2>Your Solar Energy Analysis</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <h3>Yearly Energy Usage</h3>
              <p className="result-value">{results.yearlyUsage} kWh</p>
            </div>

            <div className="result-card">
              <h3>Number of Panels Needed</h3>
              <p className="result-value">{results.numberOfPanels}</p>
            </div>

            <div className="result-card">
              <h3>System Size</h3>
              <p className="result-value">{results.systemSize} kW</p>
            </div>

            <div className="result-card">
              <h3>Estimated Installation Cost</h3>
              <p className="result-value">${parseInt(results.installationCost).toLocaleString()}</p>
            </div>

            <div className="result-card highlight">
              <h3>Yearly Savings</h3>
              <p className="result-value">${parseInt(results.yearlySavings).toLocaleString()}</p>
            </div>

            <div className="result-card highlight">
              <h3>Payback Period</h3>
              <p className="result-value">{results.paybackPeriod} years</p>
            </div>

            <div className="result-card highlight">
              <h3>20-Year Net Savings</h3>
              <p className="result-value">${parseInt(results.twentyYearSavings).toLocaleString()}</p>
            </div>

            <div className="result-card environmental">
              <h3>Annual CO₂ Offset</h3>
              <p className="result-value">{results.co2Offset} metric tons</p>
              <p className="result-subtext">Equivalent to planting {Math.floor(results.co2Offset * 16)} trees</p>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>* Calculations are estimates based on average values. Actual results may vary based on location, system efficiency, and local electricity rates.</p>
      </footer>
    </div>
  )
}

export default App
