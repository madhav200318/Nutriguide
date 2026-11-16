import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MealTracker from './components/MealTracker';
import Features from './components/Features';
import PlateBanner from './components/PlateBanner';
import Goals from './components/Goals';
import Quote from './components/Quote';
import Journal from './components/Journal';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Toast from './components/ui/Toast';
import useToast from './hooks/useToast';

export default function App() {
  const [toast, notify] = useToast();
  return (
    <>
      <Toast {...toast} />
      <Header />
      <main id="top">
        <Hero />
        <HowItWorks />
        <MealTracker notify={notify} />
        <Features />
        <PlateBanner />
        <Goals />
        <Quote />
        <Journal />
        <Signup notify={notify} />
      </main>
      <Footer notify={notify} />
    </>
  );
}
