import React, { useState } from "react";
import { motion } from "framer-motion";

// Placeholder for SignUpPage as it was imported but not defined
// function PlaceholderSignUpPage() {
//   return (
//     <section className="min-h-screen py-16 bg-gray-100 flex items-center justify-center">
//       <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md space-y-6 text-center">
//         <h3 className="text-3xl font-bold text-blue-600 mb-4">Sign Up</h3>
//         <p className="text-gray-700">Sorry for the inconvenience. This page is under construction.</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
//         >
//           Go Back
//         </button>
//       </div>
//     </section>
//   );
// }

function App() {
  const [page, setPage] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "opportunities", label: "Opportunities" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => setPage("home")}
          >
            ProcureHub
          </h1>
          <div className="space-x-6 flex md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`hover:text-blue-600 ${
                  page === link.id ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <motion.button
            onClick={() => setPage("signup")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Page Switching */}
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "opportunities" && <OpportunitiesPage />}
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "signup" && <PlaceholderSignUpPage />}


      {/* Footer */}
      <Footer />
      

      
    </div>
  );
}


/* ---------------- Home Page ---------------- */
function HomePage({ setPage }) {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Welcome to ProcureHub
          </motion.h2>
          <p className="text-lg text-gray-200 mb-4">
            A transparent and fair Bid Management Company for IT maintenances.
          </p>
          <motion.button
            onClick={() => setPage("opportunities")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-gray-100"
          >
            Explore Opportunities
          </motion.button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Transparency",
                desc: "All deals are tracked openly, ensuring fairness between small and large contractors.",
              },
              {
                title: "Equal Opportunity",
                desc: "Small businesses get the same chance as big ones without bias or hidden processes.",
              },
              {
                title: "Bribeless Deals",
                desc: "Built to eliminate corruption and enable purely merit-based contracts.",
              },
              {
                title: "Smart Contracts",
                desc: "Automated agreements powered by blockchain for secure and reliable execution.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Real-time insights into bids, projects, and contractor performance.",
              },
              {
                title: "Verified Contractors",
                desc: "All contractors are vetted and verified for quality and trustworthiness.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Post a Requirement",
                desc: "Organizations create procurement requests with full transparency.",
              },
              {
                step: "2",
                title: "Contractors Bid",
                desc: "Verified contractors place bids openly, without hidden costs.",
              },
              {
                step: "3",
                title: "Fair Selection",
                desc: "Smart algorithms and transparent evaluation ensure the best deal wins.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Join ProcureHub?</h3>
        <p className="mb-6">
          Sign up today and be part of the future of fair procurement.
        </p>
        <motion.button
          id="get-started-btn "
          onClick={() => setPage("signup")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-gray-100"
        >
          Get Started Now
        </motion.button>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">What People Say</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Ravi Kumar",
                feedback:
                  "ProcureHub helped us secure projects without middlemen. It’s a game-changer for small contractors!",
              },
              {
                name: "Neha Sharma",
                feedback:
                  "The transparency of the bidding process makes it easy to trust. Finally, a fair procurement system.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="italic mb-4">"{review.feedback}"</p>
                <h5 className="font-semibold text-blue-600">
                  - {review.name}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- Opportunities Page ---------------- */
function OpportunitiesPage() {
  const [viewProjects, setViewProjects] = useState(false);
  const [postProject, setPostProject] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: "Network Infrastructure Upgrade",
      domain: "Networking",
      companySize: "Enterprise",
      scale: "Large-Scale",
      budget: "$200,000",
      company: "TechCorp Ltd",
      desc: "Upgrade LAN/WAN for a multinational firm with 5000+ employees.",
    },
    {
      title: "Cloud Migration",
      domain: "Cloud",
      companySize: "Medium",
      scale: "Mid-Scale",
      budget: "$50,000",
      company: "SkyData Pvt Ltd",
      desc: "Migrate applications and data to AWS for a regional IT company.",
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    company: "",
    employees: "",
    budget: "",
    domain: "",
    scale: "",
    desc: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]); // Add new project to state
    setNewProject({
      title: "",
      company: "",
      employees: "",
      budget: "",
      domain: "",
      scale: "",
      desc: "",
    });
    setPostProject(false); // Hide form
    setViewProjects(true); // Show updated projects
  };

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Explore Opportunities</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contractors Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-blue-600">
              For Contractors
            </h4>
            <p className="mb-4 text-gray-700">
              Discover projects posted by companies. Place fair bids, compete
              openly, and secure work based on merit — not connections.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewProjects(!viewProjects)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              {viewProjects ? "Hide Projects" : "View Projects"}
            </motion.button>

            {/* Show Project Categories */}
            {viewProjects && (
              <div className="mt-8 grid gap-6">
                {projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-50 p-6 rounded-lg shadow-md text-left hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <h5 className="text-lg font-semibold text-blue-600 mb-2">
                      {proj.title}
                    </h5>
                    <p className="text-sm text-gray-700 mb-2">{proj.desc}</p>
                    <p className="text-xs text-gray-500 mb-1">
                      <strong>Company:</strong> {proj.company}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      <strong>Domain:</strong> {proj.domain} |{" "}
                      <strong>Scale:</strong> {proj.scale}
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Employees:</strong> {proj.employees} |{" "}
                      <strong>Budget:</strong> {proj.budget}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Companies Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-blue-600">
              For Companies
            </h4>
            <p className="mb-4 text-gray-700">
              Post your IT maintenance projects and invite verified contractors
              to bid transparently. Ensure you get the best value without hidden
              costs.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPostProject(!postProject)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              {postProject ? "Cancel" : "Post a Project"}
            </motion.button>

            {/* Post Project Form */}
            {postProject && (
              <form
                onSubmit={handleSubmit}
                className="mt-6 text-left space-y-4 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={newProject.company}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="number"
                  name="employees"
                  placeholder="Employees Size"
                  value={newProject.employees}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget (e.g. $10,000)"
                  value={newProject.budget}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <select
                  name="domain"
                  value={newProject.domain}
                  placeholder="Domain"
                  required
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 bg-white"
                >
                  <option value="">Select Domain</option>

                  {/* Core Infrastructure */}
                  <option value="Networking">Networking</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Hardware & Infrastructure">Hardware & Infrastructure</option>
                  <option value="Operating Systems">Operating Systems</option>
                  <option value="Data Center Management">Data Center Management</option>
                  <option value="Storage Solutions">Storage Solutions</option>

                  {/* Software & Development */}
                  <option value="Software Development">Software Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Application Integration">Application Integration</option>
                  <option value="Software Testing & QA">Software Testing & QA</option>
                  <option value="UI/UX Design">UI/UX Design</option>

                  {/* Security */}
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Information Security">Information Security</option>
                  <option value="Network Security">Network Security</option>
                  <option value="Cloud Security">Cloud Security</option>
                  <option value="Application Security">Application Security</option>
                  <option value="Compliance & Risk Management">Compliance & Risk Management</option>

                  {/* Data & Analytics */}
                  <option value="Database Management">Database Management</option>
                  <option value="Data Warehousing">Data Warehousing</option>
                  <option value="Big Data">Big Data</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Business Intelligence">Business Intelligence</option>
                  <option value="Data Engineering">Data Engineering</option>

                  {/* AI & Automation */}
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Deep Learning">Deep Learning</option>
                  <option value="Natural Language Processing">Natural Language Processing</option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="Robotic Process Automation">Robotic Process Automation</option>
                  <option value="Autonomous Systems">Autonomous Systems</option>

                  {/* DevOps & CI/CD */}
                  <option value="DevOps">DevOps</option>
                  <option value="CI/CD">CI/CD</option>
                  <option value="Containerization (Docker, Kubernetes)">Containerization (Docker, Kubernetes)</option>
                  <option value="Infrastructure as Code">Infrastructure as Code</option>
                  <option value="Monitoring & Observability">Monitoring & Observability</option>

                  {/* IT Services & Support */}
                  <option value="IT Support">IT Support</option>
                  <option value="Helpdesk Solutions">Helpdesk Solutions</option>
                  <option value="Managed IT Services">Managed IT Services</option>
                  <option value="System Administration">System Administration</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Disaster Recovery & Backup">Disaster Recovery & Backup</option>

                  {/* Telecom & IoT */}
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                  <option value="Industrial IoT">Industrial IoT</option>
                  <option value="Smart Devices">Smart Devices</option>
                  <option value="5G & Wireless Technologies">5G & Wireless Technologies</option>

                  {/* Emerging Tech */}
                  <option value="Blockchain">Blockchain</option>
                  <option value="Web3 Development">Web3 Development</option>
                  <option value="AR/VR Development">AR/VR Development</option>
                  <option value="Metaverse Solutions">Metaverse Solutions</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Edge Computing">Edge Computing</option>
                  <option value="Digital Twins">Digital Twins</option>

                  {/* Specialized IT */}
                  <option value="ERP Solutions">ERP Solutions</option>
                  <option value="CRM Solutions">CRM Solutions</option>
                  <option value="HR Tech">HR Tech</option>
                  <option value="FinTech Solutions">FinTech Solutions</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="EdTech">EdTech</option>
                  <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  <option value="Supply Chain Tech">Supply Chain Tech</option>
                </select>
                <input
                  type="text"
                  name="scale"
                  placeholder="Project Scale (Small, Mid, Large)"
                  value={newProject.scale}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <textarea
                  name="desc"
                  placeholder="Project Description"
                  value={newProject.desc}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Submit Project
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- About Page ---------------- */
function AboutPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">About ProcureHub</h3>
        <p className="text-md mb-6 text-gray-700">
          ProcureHub is an advanced digital procurement and contracting platform specifically engineered to address systemic inefficiencies, biases, and corruption within the IT maintenance contracting ecosystem in India.
          By leveraging principles of transparency, anonymity, and data-driven decision-making, it ensures that every vendor can compete on equal technical and financial footing.
          Client organizations can achieve optimal value through fair competition, real-time comparisons, and standardized evaluation metrics.
          At its core, ProcureHub functions as a meritocratic marketplace that eliminates the influence of non-technical variables, directly tackling one of the most pervasive problems in India’s contracting culture—favoritism and bribery.
          The platform modernizes the procurement pipeline through automation, digital verification, and auditable workflows.
          It is built upon a modular, service-oriented architecture, incorporating secure APIs for contractor onboarding, requirement publishing, bid submission, anonymization, evaluation, contract execution, and post-engagement review.
          This ensures seamless interoperability with existing enterprise systems while maintaining data integrity and compliance with evolving cybersecurity regulations.
          The mission of ProcureHub is to democratize access to IT maintenance contracts by removing barriers that traditionally restrict small and medium-sized contractors from competing effectively against large enterprises.
          It enforces transparency by replacing opaque, negotiation-heavy procurement models with open, algorithm-driven comparisons.
          It promotes fairness by anonymizing contractor identities during bidding, so that selection is determined solely by quantifiable parameters such as price competitiveness, service-level commitments, response time, and historical reliability ratings.
          Ultimately, it aims to build institutional trust by maintaining an immutable record of all procurement transactions that can be independently audited.
          The vision underpinning this mission is to create a corruption-resistant process embedded with accountability mechanisms, enabling India to move toward a future where digital contracting systems set new benchmarks in fairness, efficiency, and economic inclusivity.
          For enterprises, ProcureHub delivers measurable technical benefits, including optimized cost efficiency, risk mitigation via contractor verification protocols and blockchain-backed audit trails, and improved operational productivity by automating vendor selection processes.
          For contractors, especially small and medium enterprises, the platform provides a level playing field wherein growth is determined by demonstrable technical expertise, timely execution, and customer satisfaction.
          Architecturally, ProcureHub leverages a layered design: the presentation layer for intuitive user interaction; the application layer for business logic; the data layer for secure storage of contracts, bids, and performance metrics; and the integration layer for connecting with external systems.
          Security is paramount, with strict adherence to the principle of least privilege, role-based access control, and compliance with data protection standards.
          Unlike traditional systems, ProcureHub incorporates immutable logging mechanisms, enabling every stakeholder action to be traced with cryptographic assurance, which not only enhances organizational accountability but also provides legal defensibility in the event of disputes.
          Furthermore, the anonymization subsystem employs cryptographic pseudonymization during the tendering phase to neutralize unconscious bias.
          The broader socioeconomic impact of ProcureHub is equally significant: by dismantling bribery-driven contracting, it fosters a healthier business environment that encourages entrepreneurship; by enforcing transparent pricing, it reduces inefficiencies that inflate costs; and by enabling regional contractors to compete nationally, it drives decentralization of economic opportunity.
          From a governance standpoint, the platform incorporates compliance modules that align with Indian statutory requirements, including GST invoicing integration and digital signature verification.
          The future roadmap envisions integration of AI and machine learning models to enhance contractor scoring and predict procurement risks, as well as expansion into adjacent procurement domains.
          Ultimately, ProcureHub represents the confluence of technology, ethics, and opportunity, creating a contracting ecosystem where competence defines success, fairness defines engagement, and transparency defines trust.
        </p>
        <h5 className="text-xl font-semibold mb-4 mt-8 text-blue-600">
          The origin story
        </h5>
        <p className="text-gray-700 mb-6">
          ProcureHub was conceptualized on the simple realization that fairness in procurement is not a privilege, it should be a right. As industries across the globe digitalize, India too has been undergoing a massive transformation. However, procurement—especially in IT maintenance and support—still remains heavily dependent on informal networks, traditional practices, and sometimes corrupt pathways. The founders of ProcureHub had witnessed this reality firsthand. Small contractors with years of expertise were often sidelined because they lacked the right contacts or were unwilling to pay bribes to secure contracts. At the same time, businesses were unknowingly overpaying for services that were available at competitive rates from equally competent vendors. This inefficiency created frustration on both ends. It became clear that what was missing was a trustworthy, transparent, and anonymous marketplace where both sides could engage fairly. That vision became the foundation of ProcureHub.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          Our Vision and Mission
        </h5>
        <p className="text-gray-700 mb-6">
          Procurement in India is bribeless and fully transparent. Meritocracy thrives—contracts are awarded based on skills, reliability, and pricing, not on who you know. Contractors, whether big or small, urban or rural, have equal visibility and opportunity. Businesses no longer struggle with uncertainty in finding reliable partners but instead make data-driven, confident decisions. India sets a global example of fair and corruption-free IT procurement practices.
        </p>
        <p className="text-gray-700">
          At ProcureHub, our mission is to democratize procurement in IT maintenance contracting by: Enabling Equal Access: Making sure that a small contractor from a small town has the same chance of winning a contract as a large enterprise contractor from a metro city. Ensuring Transparency: Eliminating hidden costs, unfair practices, and favoritism in contract bidding and execution. Promoting Anonymity: Allowing contractors to compete purely on the strength of their proposals, without bias or prejudice based on name, size, or background. Building Trust: Creating a community where businesses and contractors can interact confidently, knowing that the system ensures fairness.
        </p>
        <h4 className="text-2xl font-semibold mb-3 text-blue-600">
          About the Creator
        </h4>
        <p className="text-gray-700">
          Hi, I’m <span className="font-semibold">Atul Kumar Mishra</span>, the creator of ProcureHub. I started this project with the vision of eliminating unfair practices in procurement and creating equal opportunities for all. Inspired by my personal experiences and passion for technology, I aim to make procurement simple, transparent, and impactful for everyone.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Contact Page ---------------- */
function ContactPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-left font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-left font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-left font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
          >
            Send Message
          </motion.button>
        </form>
        <div className="text-center mt-8 text-gray-700">
          <p>Email: atulllmishra1@gmail.com</p>
          <p>Phone: +91 74588 44711</p>
        </div>
      </div>
    </section>
  );
}
/* ---------------- Placeholder SignUp Page ---------------- */
function PlaceholderSignUpPage() {
  return (
    <section className="py-16 bg-gradient-to-r from-white-100 to-indigo-600 text-white text-center min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl text-gray-700 font-bold mb-6">Sign Up - Coming Soon!</h3>
        <p className="text-gray-700 mb-6">
          We are working hard to bring you the sign-up functionality. Stay tuned!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = 'mailto:atulllmishra1@gmail.com'} 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
        >
          Mail to Join Waitlist
        </motion.button>
      </div>
    </section>
  );
} 

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 text-gray-200 pt-14 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">ProcureHub</h4>
          <p className="text-sm leading-relaxed">
            Empowering transparent, fair, and bribeless IT maintenance contracting 
            in India. Bringing equal opportunities to small and large contractors alike.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Created by <span className="text-blue-300 font-semibold">Atul Mishra</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-300">Home</button></li>
            <li><a href="#opportunities" className="hover:text-blue-300">Opportunities</a></li>
            <li><a href="#about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
          <p className="text-sm">We’d love to hear from you. Reach out anytime.</p>
          <p className="mt-3 text-sm">📧 atulllmishra1@gmail.com</p>
          <p className="text-sm">📞 +91 74588 44711</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-blue-300"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github text-xl hover:text-blue-300"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter text-xl hover:text-blue-300"></i>
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Location</h4>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14291.834716532932!2d82.5294056!3d26.42481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759164902332!5m2!1sen!2sin" 
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} ProcureHub. All rights reserved.
      </div>
    </footer>
  );
}

export default App;
