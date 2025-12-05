import React, { Suspense, ReactNode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Error Boundary Component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-eventa-cream">
          <div className="text-center px-4">
            <h1 className="text-4xl font-serif text-eventa-green mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              We encountered an unexpected error. Please refresh the page and try again.
            </p>
            {this.state.error && (
              <p className="text-sm text-gray-500 mb-6 font-mono">
                {this.state.error.message}
              </p>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-eventa-gold text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition-colors font-bold"
              aria-label="Refresh page"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-eventa-cream">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="h-12 w-48 bg-eventa-gold rounded-full"></div>
      <p className="text-eventa-green text-sm">Loading Eventa...</p>
    </div>
  </div>
);

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <div className="font-sans text-eventa-dark bg-eventa-cream selection:bg-eventa-gold selection:text-white">
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
