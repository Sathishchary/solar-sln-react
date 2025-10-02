import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Sun, Zap, Battery, Droplet, ChevronRight, Award, Users, Briefcase, DollarSign, Settings, Package, ShoppingBag, Send, Link, CheckCircle, Clock } from 'lucide-react';

const Modal = ({ title, isOpen, onClose, children, positionClass = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-[100]">
      <div className={`bg-white rounded-xl p-6 md:p-8 shadow-2xl w-full max-w-md transition-all duration-300 ${positionClass}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const RequestDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setTimeout(() => {
      console.log('Demo Request Submitted:', formData);
      setSubmissionStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      setTimeout(() => {
        onClose();
        setSubmissionStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <Modal
      title="Request a Demo"
      isOpen={isOpen}
      onClose={onClose}
      positionClass="fixed top-20 right-4 md:right-10 max-w-sm"
    >
      {submissionStatus === 'success' ? (
        <div className="text-center py-10">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-700">Your request is submitted!</p>
          <p className="text-gray-500">We will get back to you soon.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleDemoSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            disabled={submissionStatus === 'submitting'}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold disabled:bg-green-400 flex items-center justify-center"
          >
            {submissionStatus === 'submitting' ? (
              <span className="flex items-center"><Clock className="w-5 h-5 mr-2 animate-spin" /> Submitting...</span>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>
      )}
    </Modal>
  );
};

const HomeSection = ({ scrollToSection }) => (
  <section className="pt-24 pb-16 relative min-h-screen-minus-header overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/solar-farm-sunset.jpeg"
        alt="Solar Farm"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-green-900/85"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Powering Kurnool & Hyderabad with <span className="text-green-300">Clean Solar Energy</span>
          </h2>
          <p className="text-lg text-gray-100 mb-8 drop-shadow">
            With over **10 years of expertise**, delivering sustainable and reliable solar solutions across Telangana, Andhra Pradesh, and Bangalore.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('products')} className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition flex items-center font-semibold">
              Explore Products <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button onClick={() => scrollToSection('dealer')} className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold">
              Become a Dealer
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <Sun className="w-32 h-32 text-yellow-300 mx-auto mb-6 drop-shadow-lg" />
            <div className="grid grid-cols-3 gap-4 text-white text-center">
              {[
                { count: '10+', label: 'Years Experience' },
                { count: '5000+', label: 'Panels Installed' },
                { count: '3+', label: 'States Served' },
              ].map((stat, index) => (
                <div key={index} className="p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold whitespace-nowrap">{stat.count}</div>
                  <div className="text-xs mt-1 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutUsSection = () => (
  <section className="py-16 md:py-24 bg-white min-h-screen">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">About SLN Enterprises</h3>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h4 className="text-2xl font-bold text-green-600 mb-4">Our Story: A Decade of Sustainable Power</h4>
          <p className="text-gray-700 mb-6 leading-relaxed">
            SLN Enterprises has been at the forefront of the solar revolution for over a decade. Since our inception, we have been committed to delivering **reliable, high-quality solar solutions** that empower homes and businesses across Telangana, Andhra Pradesh, and Karnataka. As an authorized dealer, we ensure every installation meets the highest industry standards.
          </p>
          <h4 className="text-2xl font-bold text-blue-600 mb-4">Mission & Vision</h4>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <Sun className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              **Mission:** To make solar energy accessible, affordable, and impactful for every customer, contributing significantly to energy independence and a greener environment.
            </p>
            <p className="flex items-start">
              <Award className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              **Vision:** To be the leading and most trusted solar solution provider in South India, recognized for our commitment to quality, customer service, and environmental stewardship.
            </p>
          </div>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-4 text-gray-800">Certifications & Partnerships</h4>
          <p className="text-sm text-gray-600 mb-4">Proudly partnered with and certified by leading global solar manufacturers.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
              <Award className="w-6 h-6 text-yellow-500" />
              <span className="font-semibold text-gray-700">Authorized Channel Partner</span>
            </div>
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
              <Users className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-gray-700">ISO 9001 Compliant</span>
            </div>
            <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
              <Briefcase className="w-6 h-6 text-red-500" />
              <span className="font-semibold text-gray-700">Top Brand Dealer Status</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold mb-4">Meet the Founder</h4>
          <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">
            [Founder Photo]
          </div>
          <p className="font-semibold text-lg text-gray-800">Eravelli Saikumar</p>
          <p className="text-green-600">Managing Director, SLN Enterprises</p>
      </div>
    </div>
  </section>
);

const ProductsSection = () => {
  const products = [
    { name: 'Solar Panels', icon: Sun, color: 'green', desc: 'High-efficiency Monocrystalline & Polycrystalline Modules with 25-year warranty.', specs: ['Wattage: 400W - 600W', 'Technology: PERC/Half-Cut', 'Efficiency: Up to 22%'] },
    { name: 'Inverters', icon: Zap, color: 'blue', desc: 'Grid-tied and hybrid inverters for seamless power conversion and monitoring.', specs: ['Type: String/Micro Inverters', 'Capacity: 1kW - 100kW', 'Features: WiFi Monitoring'] },
    { name: 'Batteries', icon: Battery, color: 'yellow', desc: 'Deep-cycle Lithium-ion and robust Lead-Acid batteries for reliable backup power.', specs: ['Type: LiFePO4 / Tubular', 'Capacity: 100Ah - 500Ah', 'Lifespan: 10+ Years'] },
    { name: 'Solar Water Heaters', icon: Droplet, color: 'cyan', desc: 'Evacuated Tube Collector (ETC) systems for year-round hot water savings.', specs: ['Capacity: 100 LPD - 500 LPD', 'Tank Material: Stainless Steel', 'Insulation: PUF'] },
    { name: 'Off-grid Systems', icon: Settings, color: 'purple', desc: 'Complete power solutions for remote locations with no access to the utility grid.', specs: ['Includes: Panels, Batteries, Inverter, Wiring', 'Ideal for: Farms, Remote Homes', 'Key Benefit: Total Energy Independence'] },
    { name: 'On-grid Systems', icon: DollarSign, color: 'red', desc: 'Grid-tied systems designed for maximum ROI through net-metering benefits.', specs: ['Includes: Panels, Grid-Tied Inverter', 'Ideal for: Urban Homes, Commercial Buildings', 'Key Benefit: Lowest Payback Period'] },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const ProductDetailModal = () => {
    if (!selectedProduct) return null;

    return (
      <Modal
        title={selectedProduct.name}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        positionClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg"
      >
        <div className="space-y-4">
          <p className="text-lg text-gray-600 border-b pb-3">{selectedProduct.desc}</p>
          <h5 className="font-bold text-gray-700">Key Specifications:</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            {selectedProduct.specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
          <div className="flex justify-end pt-4 space-x-3">
            <button className={`bg-${selectedProduct.color}-600 text-white px-4 py-2 rounded-lg hover:bg-${selectedProduct.color}-700 transition flex items-center font-semibold`}>
              <Link className="w-5 h-5 mr-2" /> Download Brochure
            </button>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Our Solar Products</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-green-600 hover:shadow-2xl transition duration-300">
                <div className={`bg-${product.color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 text-${product.color}-600`} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h4>
                <p className="text-gray-600 mb-4 h-16 line-clamp-3">{product.desc}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-green-600 font-semibold hover:text-green-800 transition flex items-center"
                >
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            );
          })}
        </div>
        <ProductDetailModal />
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: 'Solar Installation', icon: Zap, color: 'green', desc: 'Professional, certified installation of residential, commercial, and industrial solar systems. We handle all planning and execution.' },
    { title: 'Maintenance & AMC', icon: Settings, color: 'blue', desc: 'Annual Maintenance Contracts (AMC) and periodic check-ups to ensure your system maintains peak efficiency and longevity.' },
    { title: 'Solar Consultancy', icon: Award, color: 'yellow', desc: 'Expert guidance on system size, financial feasibility (ROI), government subsidies, and optimal design for your location.' },
    { title: 'Dealer Support', icon: Briefcase, color: 'red', desc: 'Dedicated technical and sales support for our authorized dealer network, including training and marketing materials.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Our Comprehensive Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-gray-50 border-t-4 border-green-500 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
                <Icon className={`w-10 h-10 text-${service.color}-600 mb-3`} />
                <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    { city: 'Kurnool', installations: '1200+', capacity: '1.5 MW+', caseStudy: 'Residential housing colony achieved 80% power bill reduction.' },
    { city: 'Hyderabad', installations: '2500+', capacity: '3.0 MW+', caseStudy: 'Commercial rooftop installation for a major IT park with zero downtime.' },
    { city: 'Andhra Pradesh (AP)', installations: '1500+', capacity: '2.0 MW+', caseStudy: 'Successful implementation of solar solutions for various small and medium enterprises (SME).' },
    { city: 'Karnataka (Bangalore)', installations: '800+', capacity: '1.0 MW+', caseStudy: 'Remote farm electrification project providing 24/7 power access.' },
  ];
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Completed Projects Gallery</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-xl border-b-4 border-blue-500">
              <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white mr-2" />
                <span className="text-2xl font-bold text-white">{project.city}</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 text-gray-800">{project.city} Case Study</h4>
                <p className="text-sm text-gray-600 mb-4 italic">"{project.caseStudy}"</p>
                <div className="flex justify-between text-sm font-semibold text-gray-700 pt-2 border-t border-gray-100">
                  <span><Package className="w-4 h-4 inline mr-1 text-green-600" /> {project.installations} Installs</span>
                  <span><Zap className="w-4 h-4 inline mr-1 text-blue-600" /> {project.capacity} Capacity</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Customer Testimonial</h4>
            <blockquote className="italic text-lg text-gray-600 max-w-3xl mx-auto">
                "SLN Enterprises provided an excellent on-grid solution. Our electricity bill has dropped to almost zero! Professional service and outstanding follow-up support."
            </blockquote>
            <p className="mt-2 font-semibold text-green-600">- Mrs. L. Rao, Jubilee Hills, Hyderabad</p>
        </div>
      </div>
    </section>
  );
};

const DealerOpportunitySection = ({ scrollToSection }) => (
  <section className="py-16 md:py-24 bg-white min-h-screen">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Dealer / Business Opportunity</h3>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="p-8 bg-blue-50 rounded-xl shadow-xl">
          <h4 className="text-2xl font-bold text-blue-600 mb-6">Benefits of Partnering with SLN</h4>
          <ul className="space-y-4">
            {[
              { icon: DollarSign, text: 'High Margin Products: Access premium solar products at competitive dealer pricing.' },
              { icon: Award, text: 'Authorized Dealer Status: Official certification and branding support from SLN Enterprises.' },
              { icon: Briefcase, text: 'Comprehensive Training: Full technical, sales, and installation training for your team.' },
              { icon: Users, text: 'Marketing & Lead Support: Receive marketing collateral and qualified leads in your territory.' },
              { icon: Phone, text: 'Dedicated Support: Direct access to our expert technical support team.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start space-x-3 text-gray-700">
                  <Icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Join as an Authorized Dealer</h4>
          <p className="text-gray-600 mb-6">Take the next step in the renewable energy market. Fill out the form below to begin your inquiry.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="text" placeholder="Contact Person Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="email" placeholder="Business Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <textarea placeholder="Service Area / Current Business Profile" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" /> Submit Dealer Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Get in Touch with SLN</h3>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h4 className="text-2xl font-bold text-green-600">Head Office Details</h4>

          <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-lg">Hyderabad Office</p>
              <p className="text-gray-600 text-sm">Flat 606, Adithya Enclave, Beside Ameerpet Metro Station, Ameerpet, Hyderabad - 500038</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-lg">Kurnool Office</p>
              <p className="text-gray-600 text-sm">H. No. 12-32, Ashok Nagar, Near Sai Baba Temple, Kurnool, Andhra Pradesh - 518001</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Call Us / WhatsApp</p>
                <p className="text-gray-600 font-mono">77939 37979</p>
                <p className="text-gray-600 font-mono">94942 42942</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">contact@slnenterprises.com</p>
                <p className="text-gray-600 text-sm italic">Contact: Eravelli Saikumar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-xl">
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h4>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <textarea placeholder="Your Message or Inquiry Details" rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" /> Submit Inquiry
            </button>
          </form>
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-3 text-gray-800">Find Us on the Map</h4>
            <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 border border-gray-300">
              [Google Map Embed Placeholder]
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function SLNSolarWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const pages = {
    home: <HomeSection scrollToSection={setActiveSection} />,
    about: <AboutUsSection />,
    products: <ProductsSection />,
    services: <ServicesSection />,
    projects: <ProjectsSection />,
    dealer: <DealerOpportunitySection scrollToSection={setActiveSection} />,
    contact: <ContactSection />,
  };

  const menuItems = [
    { name: 'Home', section: 'home' },
    { name: 'About Us', section: 'about' },
    { name: 'Products', section: 'products' },
    { name: 'Services', section: 'services' },
    { name: 'Projects', section: 'projects' },
    { name: 'Dealer Opportunity', section: 'dealer' },
    { name: 'Contact', section: 'contact' },
  ];

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderActivePage = () => {
    return pages[activeSection] || pages.home;
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        .font-inter { font-family: 'Inter', sans-serif; }
        .min-h-screen-minus-header {
            min-height: calc(100vh - 6rem);
        }
      `}</style>
      <RequestDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />

      <header className="fixed top-0 w-full bg-white shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => handleNavigation('home')} className="flex items-center space-x-2 focus:outline-none">
              <img src="/sln-logo.png" alt="SLN Enterprises Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">SLN Enterprises</h1>
                <p className="text-xs text-gray-600">Solar Solutions</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map(item => (
                <button
                  key={item.section}
                  onClick={() => handleNavigation(item.section)}
                  className={`text-gray-700 hover:text-green-600 transition font-medium ${activeSection === item.section ? 'text-green-600 border-b-2 border-green-600 pb-1' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              <button onClick={() => setIsDemoModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md font-semibold flex items-center">
                Request Demo
              </button>
              <button onClick={() => handleNavigation('contact')} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md font-semibold">
                Get Free Quote
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition">
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
              {menuItems.map(item => (
                <button
                  key={item.section}
                  onClick={() => handleNavigation(item.section)}
                  className={`block w-full text-left text-gray-700 hover:text-green-600 py-2 px-3 rounded-lg ${activeSection === item.section ? 'bg-green-50 text-green-600 font-semibold' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              <button onClick={() => handleNavigation('contact')} className="block w-full text-left bg-green-600 text-white px-4 py-2 rounded-lg mt-2 font-semibold">
                Get Free Quote
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        {renderActivePage()}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-8 border-b border-gray-800 pb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/sln-logo.png" alt="SLN Enterprises Logo" className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-bold text-lg">SLN Enterprises</h4>
                  <p className="text-sm text-gray-400">Solar Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Building a brighter and greener future with clean solar energy.</p>
              <button onClick={() => setIsDemoModalOpen(true)} className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition shadow-md font-semibold flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" /> Request Demo
              </button>
            </div>

            <div>
              <h5 className="font-bold mb-4 border-l-4 border-green-500 pl-3">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {menuItems.map(item => (
                    <li key={item.section}><button onClick={() => handleNavigation(item.section)} className="hover:text-white transition">{item.name}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 border-l-4 border-green-500 pl-3">Contact Details</h5>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-green-500" /> Hyderabad & Kurnool, India</p>
                <p className="flex items-center"><Phone className="w-4 h-4 mr-3 text-green-500" /> 77939 37979 / 94942 42942</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-3 text-green-500" /> contact@slnenterprises.com</p>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 border-l-4 border-green-500 pl-3">Service Areas</h5>
              <p className="text-gray-400 text-sm">Telangana | Andhra Pradesh | Karnataka</p>
              <p className="text-gray-400 text-sm mt-2">Kurnool • Hyderabad • Bangalore</p>
              <button onClick={() => handleNavigation('dealer')} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md font-semibold text-sm">
                Join Our Dealer Network
              </button>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 SLN Enterprises. All rights reserved. | Powered by Renewable Energy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
