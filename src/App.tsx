import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {
  AboutPage,
  CalculatorPage,
  ContactPage,
  DealerPage,
  HomePage,
  NotFoundPage,
  ProductsPage,
  ProjectsPage,
  QuotePage,
  ServicesPage
} from './pages';

export default function SLNSolarWebsite() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/dealer" element={<DealerPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
