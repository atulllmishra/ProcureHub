// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./App.css";
// import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
// import SignUpPage from "./SignUpPage";
//  const router = createBrowserRouter([
//    {
//      path: "/signup",
//      element: <SignUpPage />,
//    },
//  ]);

// function App() {
//   const [page, setPage] = useState("home");
//   // Removed unused isLoggedIn state
//   const navigate = useNavigate();
//   // Navbar links
//   const navLinks = [
//     { id: "home", label: "Home" },
//     // { id: "opportunities", label: "Opportunities" },
//     { id: "about", label: "About Us" },
//     { id: "contact", label: "Contact Us" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <RouterProvider router={router} />
//       {/* Navbar */}
//       <nav className="bg-white shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1
//             className="text-2xl font-bold text-blue-600 cursor-pointer"
//             onClick={() => setPage("home")}
//           >
//             ProcureHub
//           </h1>
//           <div className="space-x-6 flex md:flex">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => setPage(link.id)}
//                 className={`hover:text-blue-600 ${
//                   page === link.id ? "text-blue-600 font-semibold" : ""
//                 }`}
//               >
//                 {link.label}
//               </button>
//             ))}
//           </div>
//           <motion.button
//             onClick={() => navigate("/signup")}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
//           >
//             Get Started 
//           </motion.button>
//         </div>
//       </nav>

//       {/* Page Switching */}
//       {page === "home" && <HomePage setPage={setPage} />}
//       {page === "opportunities" && <OpportunitiesPage />}
//       {page === "about" && <AboutPage />}
//       {page === "contact" && <ContactPage />}

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white py-6 text-center">
//         <p>© {new Date().getFullYear()} ProcureHub. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// /* ---------------- Home Page ---------------- */
// function HomePage({ setPage }) {
//   return (
//     <>
//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Welcome to ProcureHub
//           </motion.h2>
//           <p className="text-lg text-gray-200 mb-4">
//             A transparent and fair Bid Management Company for IT maintenances.
//           </p>
//           <motion.button
//             onClick={() => setPage("opportunities")}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-gray-100"
//           >
//             Explore Opportunities
//           </motion.button>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-6">
//           <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Transparency",
//                 desc: "All deals are tracked openly, ensuring fairness between small and large contractors.",
//               },
//               {
//                 title: "Equal Opportunity",
//                 desc: "Small businesses get the same chance as big ones without bias or hidden processes.",
//               },
//               {
//                 title: "Bribeless Deals",
//                 desc: "Built to eliminate corruption and enable purely merit-based contracts.",
//               },
//               {
//                 title: "Smart Contracts",
//                 desc: "Automated agreements powered by blockchain for secure and reliable execution.",
//               },
//               {
//                 title: "Analytics Dashboard",
//                 desc: "Real-time insights into bids, projects, and contractor performance.",
//               },
//               {
//                 title: "Verified Contractors",
//                 desc: "All contractors are vetted and verified for quality and trustworthiness.",
//               },
//             ].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.15 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
//                 <p>{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how" className="py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-3xl font-bold mb-12">How It Works</h3>
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 step: "1",
//                 title: "Post a Requirement",
//                 desc: "Organizations create procurement requests with full transparency.",
//               },
//               {
//                 step: "2",
//                 title: "Contractors Bid",
//                 desc: "Verified contractors place bids openly, without hidden costs.",
//               },
//               {
//                 step: "3",
//                 title: "Fair Selection",
//                 desc: "Smart algorithms and transparent evaluation ensure the best deal wins.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//               >
//                 <div className="text-4xl font-bold text-blue-600 mb-4">
//                   {item.step}
//                 </div>
//                 <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
//                 <p>{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call To Action Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
//         <h3 className="text-3xl font-bold mb-4">Ready to Join ProcureHub?</h3>
//         <p className="mb-6">
//           Sign up today and be part of the future of fair procurement.
//         </p>
//         <motion.button
//           id="get-started-btn "
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-gray-100"
//         >
//           Get Started Now
//         </motion.button>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-16 bg-gray-100">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h3 className="text-3xl font-bold mb-12">What People Say</h3>
//           <div className="grid md:grid-cols-2 gap-10">
//             {[
//               {
//                 name: "Ravi Kumar",
//                 feedback:
//                   "ProcureHub helped us secure projects without middlemen. It’s a game-changer for small contractors!",
//               },
//               {
//                 name: "Neha Sharma",
//                 feedback:
//                   "The transparency of the bidding process makes it easy to trust. Finally, a fair procurement system.",
//               },
//             ].map((review, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//               >
//                 <p className="italic mb-4">"{review.feedback}"</p>
//                 <h5 className="font-semibold text-blue-600">
//                   - {review.name}
//                 </h5>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------------- Opportunities Page ---------------- */
// function OpportunitiesPage() {
//   return (
//     <section className="py-16 bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h3 className="text-3xl font-bold mb-12">Explore Opportunities</h3>
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contractors Section */}
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <h4 className="text-2xl font-semibold mb-4 text-blue-600">
//               For Contractors
//             </h4>
//             <p className="mb-4 text-gray-700">
//               Discover projects posted by companies. Place fair bids, compete
//               openly, and secure work based on merit — not connections.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
//             >
//               View Projects
//             </motion.button>
//           </motion.div>

//           {/* Companies Section */}
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <h4 className="text-2xl font-semibold mb-4 text-blue-600">
//               For Companies
//             </h4>
//             <p className="mb-4 text-gray-700">
//               Post your IT maintenance projects and invite verified contractors
//               to bid transparently. Ensure you get the best value without hidden
//               costs.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
//             >
//               Post a Project
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- About Page ---------------- */
// function AboutPage() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h3 className="text-3xl font-bold text-blue-600 mb-6">About ProcureHub</h3>
//         <p className="text-md mb-6 text-gray-700">
//           ProcureHub is an advanced digital procurement and contracting platform specifically engineered to address systemic inefficiencies, biases, and corruption within the
//            IT maintenance contracting ecosystem in India by leveraging principles of transparency, anonymity, and data-driven decision-making to ensure that every vendor, regardless of organizati
//            onal scale or geographic location, can compete on equal technical and financial footing while enabling client organizations to achieve optimal value through fair competition, real-time comparisons, and stan
//            dardized evaluation metrics. At its core, ProcureHub functions as a meritocratic marketplace that eliminates the influence of non-technical variables such as personal networks, political leverage, or informal financial incentives, thereby directly tackling one of the most pervasive pr
//            oblems in India’s contracting culture—favoritism and bribery—while simultaneously modernizing the procurement pipeline through automation, digital verification, and auditable workflows. The platform is built upon a modular service-oriented architecture, incorporating secure APIs for contractor o
//            nboarding, requirement publishing, bid submission, anonymization, evaluation, contract execution, and post-engagement review, ensuring seamless interoperability with existing enterprise systems while maintaining data integrity and compliance with evolving cybersecurity regulations. The mission of ProcureHub is to democratize access to IT maintenance contracts by removing barriers that traditionally restrict small and medium-sized contractors from competing effectively against large enterprises; to enforce transparency by replacing opaque, negotiation-heavy procurement models with open, algorithm-driven comparisons; to promote fairness by anonymizing contractor identities during bidding so that selection is determined solely by quantifiable parameters such as price competitiveness, service-level commitments, response time, and historical reliability ratings; and to build institutional trust by maintaining an immutable record of all procurement transactions that can be independently audited to verify compliance with contractual obligations. The vision underpinning this mission is to create an industrial environment in which procurement becomes a corruption-resistant process embedded with accountability mechanisms, enabling India to move toward a future where digital contracting systems set new benchmarks in fairness, efficiency, and economic inclusivity. For enterprises, ProcureHub delivers measurable technical benefits: optimized cost efficiency through exposure to competitive bids in real time; risk mitigation via contractor verification protocols and blockchain-backed audit trails; improved operational productivity by automating vendor selection processes that historically consumed weeks of manual negotiation; and assurance of compliance with procurement best practices through standardized contract templates and traceable decision logic. For contractors, especially small and medium enterprises, the platform provides a level playing field wherein growth is determined by demonstrable technical expertise, timely execution, and customer satisfaction rather than subjective gatekeeping, while offering advanced analytics dashboards that help vendors benchmark their performance, identify competitive strengths, and continuously improve service delivery to meet evolving industry expectations. Architecturally, ProcureHub leverages a layered design: the presentation layer ensures intuitive user interaction for both contractors and enterprises; the application layer manages business logic for bidding, anonymization, ranking, and review processes; the data layer employs encrypted databases and distributed ledgers to store contracts, bids, and performance metrics securely; and the integration layer connects with external systems such as enterprise resource planning (ERP) tools, payment gateways, and regulatory compliance systems, ensuring seamless end-to-end execution of procurement workflows. Security is paramount within the platform, with a strict adherence to the principle of least privilege, role-based access control, and compliance with ISO 27001 and GDPR-equivalent data protection standards, while the content security policy (CSP) embedded within the web application framework prevents malicious injection and enforces evaluation of only pre-validated code, thus eliminating risks associated with unsafe runtime evaluations such as eval() or string-based function creation. Unlike traditional procurement systems that often leave audit gaps, ProcureHub incorporates immutable logging mechanisms, enabling every stakeholder action—requirement posting, bid submission, evaluation, award decision, and final settlement—to be traced with cryptographic assurance, which not only enhances organizational accountability but also provides legal defensibility in the event of disputes. Furthermore, the anonymization subsystem employs cryptographic pseudonymization during the tendering phase to ensure contractors are identified only by system-generated identifiers until a decision has been finalized, thereby neutralizing unconscious bias and reinforcing the principle of meritocracy. The broader socioeconomic impact of ProcureHub is equally significant: by dismantling bribery-driven contracting, it fosters a healthier business environment that encourages entrepreneurship, especially among smaller contractors who historically lacked access to fair opportunities; by enforcing transparent pricing, it reduces inefficiencies that inflate costs for businesses and ultimately for end consumers; by enabling regional contractors to compete nationally, it drives decentralization of economic opportunity, supporting India’s vision of inclusive digital growth. From a governance standpoint, the platform incorporates compliance modules that align with Indian statutory requirements, including Goods and Services Tax (GST) invoicing integration, labor law adherence, and digital signature verification as per the Information Technology Act, ensuring that every contract executed within ProcureHub is both legally valid and regulatorily compliant. The future roadmap of ProcureHub envisions integration of artificial intelligence and machine learning models to enhance contractor scoring accuracy, predict procurement risks, and generate automated insights for enterprises, as well as expansion of the core system into adjacent procurement domains beyond IT maintenance, including facility management, infrastructure support, and manufacturing supply chains, thereby evolving into a multi-industry procurement hub. Additionally, advanced analytics dashboards will enable enterprises to conduct trend analysis across multiple contracts, monitor vendor performance KPIs in real time, and forecast budgetary allocations more precisely, while contractors will gain access to training modules, certification programs, and automated compliance checkers that help them improve their competitiveness in the digital marketplace. At the international level, the system architecture is designed with scalability in mind, enabling deployment in other developing economies facing similar corruption challenges, thereby positioning ProcureHub as a potential global benchmark in fair procurement practices. Unlike conventional platforms that prioritize transaction volume, ProcureHub prioritizes transaction integrity, believing that sustainable growth for both enterprises and contractors can only be achieved by embedding fairness into the very architecture of procurement. As the platform evolves, continuous feedback loops from stakeholders will inform iterative development cycles, ensuring that ProcureHub remains responsive to real-world challenges while upholding its founding principles of fairness, transparency, anonymity, empowerment, innovation, and integrity. In essence, ProcureHub is not merely a digital tool but an infrastructural reform mechanism, a socio-technical innovation that combines advanced computing principles with ethical design philosophy to address one of the most persistent barriers to equitable growth in India’s contracting sector. By making procurement bribeless, auditable, and merit-driven, it transforms what was once a pain point into a strategic enabler for businesses and a growth accelerator for contractors, thereby contributing not only to organizational efficiency but also to national economic resilience. Ultimately, ProcureHub represents the confluence of technology, ethics, and opportunity, creating a contracting ecosystem where competence defines success, fairness defines engagement, and transparency defines trust, and as such it stands as both a solution to present inefficiencies and a blueprint for the future of procurement in a digital-first India.
//         </p>
//         <h5 className="text-xl font-semibold mb-4 text-blue-600">
//           The origin story
//         </h5>
//         <p className="text-gray-700 mb-6">
//           ProcureHub was conceptualized on the simple realization that fairness in procurement is not a privilege, it should be a right. As industries across the globe digitalize, India too has been undergoing a massive transformation. However, procurement—especially in IT maintenance and support—still remains heavily dependent on informal networks, traditional practices, and sometimes corrupt pathways.
//           The founders of ProcureHub had witnessed this reality firsthand. Small contractors with years of expertise were often sidelined because they lacked the right contacts or were unwilling to pay bribes to secure contracts. At the same time, businesses were unknowingly overpaying for services that were available at competitive rates from equally competent vendors. This inefficiency created frustration on both ends.
//           It became clear that what was missing was a trustworthy, transparent, and anonymous marketplace where both sides could engage fairly. That vision became the foundation of ProcureHub.
//         </p>
//         <h5 className="text-xl font-semibold mb-4 text-blue-600">
//           Our Vision and Mission
//         </h5>
//         <p className="text-gray-700 mb-6">
//           Procurement in India is bribeless and fully transparent.
//           Meritocracy thrives—contracts are awarded based on skills, reliability, and pricing, not on who you know.
//           Contractors, whether big or small, urban or rural, have equal visibility and opportunity.
//           Businesses no longer struggle with uncertainty in finding reliable partners but instead make data-driven, confident decisions.
//           India sets a global example of fair and corruption-free IT procurement practices.
//         </p>
//         <p className="text-gray-700">
//           At ProcureHub, our mission is to democratize procurement in IT maintenance contracting by:
//           Enabling Equal Access: Making sure that a small contractor from a small town has the same chance of winning a contract as a large enterprise contractor from a metro city.
//           Ensuring Transparency: Eliminating hidden costs, unfair practices, and favoritism in contract bidding and execution.
//           Promoting Anonymity: Allowing contractors to compete purely on the strength of their proposals, without bias or prejudice based on name, size, or background.
//           Building Trust: Creating a community where businesses and contractors can interact confidently, knowing that the system ensures fairness.
//         </p>
//         <h5 className="text-xl font-semibold mb-4 mt-8 text-blue-600">

//         </h5>
//         <h4 className="text-2xl font-semibold mb-3 text-blue-600">
//           About the Creator
//         </h4>
//         <p className="text-gray-700">
//           Hi, I’m <span className="font-semibold">Atul Kumar Mishra</span>, the
//           creator of ProcureHub. I started this project with the vision of
//           eliminating unfair practices in procurement and creating equal
//           opportunities for all. Inspired by my personal experiences and passion
//           for technology, I aim to make procurement simple, transparent, and
//           impactful for everyone.
//         </p>
//       </div>
//     </section>
//   );
// }

// /* ---------------- Contact Page ---------------- */
// function ContactPage() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-3xl mx-auto px-6">
//         <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
//         <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
//           <div>
//             <label className="block text-left font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-left font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <label className="block text-left font-medium mb-2">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             ></textarea>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
//           >
//             Send Message
//           </motion.button>
//         </form>
//         <div className="text-center mt-8 text-gray-700">
//           <p>Email: atulllmishra1@gmail.com</p>
//           <p>Phone: +91 74588 44711</p>
//         </div>
//       </div>
//     </section>
//   );
//       // Removed unreachable code
// }

// export default App;

import React, { useState } from "react";
import { motion } from "framer-motion";

// Placeholder for SignUpPage as it was imported but not defined
function SignUpPage() {
  return (
    <section className="min-h-screen py-16 bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md space-y-6 text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-4">Sign Up</h3>
        <p className="text-gray-700">This is the placeholder sign-up page. The functionality will be added here later.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </section>
  );
}

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
      {page === "signup" && <SignUpPage />}


      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} ProcureHub. All rights reserved.</p>
      </footer>
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              View Projects
            </motion.button>
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              Post a Project
            </motion.button>
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

export default App;