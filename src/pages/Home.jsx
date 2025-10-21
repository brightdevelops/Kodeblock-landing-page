// src/pages/Home.jsx

import projects from '../sections/About.jsx';
import CTA from '../sections/Project.jsx';
import Hero from '../sections/Hero.jsx';
import Team from '../sections/Team.jsx';
import About from '../sections/About.jsx';

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>KODEBLOCK Landing Page</h1>
      <p>If you see this, routing/imports are correct.</p>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#ebe2d6] text-[#1e1e1e]">
//       <Navbar />
//       <main className="relative z-10">
//         <Hero />
//         <Projects />
//         <About />
//         <Team />
//         <CTA />
//       </main>
//       <Footer />
//     </div>
//   );
// }