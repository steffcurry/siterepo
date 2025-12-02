import Hero from './components/Hero';
import Mission from './components/Mission';
import WhyReStyle from './components/WhyReStyle';
import Vision from './components/Vision';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F6F3]">
      <Hero />
      <Mission />
      <WhyReStyle />
      <Vision />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
