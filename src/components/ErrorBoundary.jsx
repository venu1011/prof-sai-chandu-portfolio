import React from "react";
import Button from './ui/Button';
import Icon from "./AppIcon";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        'description': error.toString(),
        'fatal': false
      });
    }
    
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4">
          <div className="max-w-lg w-full text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Error Icon */}
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="AlertTriangle" size={40} color="#dc2626" />
              </div>
              
              {/* Error Message */}
              <h1 className="text-2xl font-bold text-slate-800 mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-slate-600 mb-6">
                We're sorry, but something unexpected happened. The error has been logged 
                and we'll look into it. Please try refreshing the page or return to the homepage.
              </p>
              
              {/* Error Details (only in development) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left mb-6 p-4 bg-slate-50 rounded-lg">
                  <summary className="font-medium text-slate-700 cursor-pointer mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="text-sm text-red-600 whitespace-pre-wrap">
                    {this.state.error.toString()}
                  </pre>
                  <pre className="text-xs text-slate-500 mt-2 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={this.handleReload}
                >
                  Reload Page
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Home"
                  iconPosition="left"
                  onClick={this.handleGoHome}
                >
                  Go Home
                </Button>
              </div>
              
              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  If this problem persists, please contact{' '}
                  <a 
                    href="mailto:professorsaichandu@gmail.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    professorsaichandu@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;