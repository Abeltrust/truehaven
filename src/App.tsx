import { useHashRoute } from '@/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { AreasOfFocusPage } from '@/pages/AreasOfFocusPage';
import { ApproachPage } from '@/pages/ApproachPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsPage } from '@/pages/TermsPage';

function App() {
  const [route] = useHashRoute();

  const renderPage = () => {
    switch (route) {
      case '/about':
        return <AboutPage />;
      case '/areas-of-focus':
        return <AreasOfFocusPage />;
      case '/approach':
        return <ApproachPage />;
      case '/services':
        return <ServicesPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
