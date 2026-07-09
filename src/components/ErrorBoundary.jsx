import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import GlowButton from './ui/GlowButton';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary p-4">
          <div className="text-center max-w-lg space-y-6">
            <div className="w-20 h-20 rounded-full bg-danger/10 border border-danger/20 flex items-center justify-center mx-auto">
              <AlertTriangle size={40} className="text-danger" />
            </div>
            <h2 className="text-display-3 font-display font-bold text-text">
              Something went wrong
            </h2>
            
            {/* Show error details in development */}
            <div className="text-left bg-bg-card-solid rounded-2xl p-4 border border-line/50 overflow-auto max-h-60">
              <p className="text-body-sm text-danger font-mono mb-2">{this.state.error?.toString()}</p>
              <pre className="text-caption text-text-muted font-mono whitespace-pre-wrap">
                {this.state.errorInfo?.componentStack}
              </pre>
            </div>

            <GlowButton
              variant="primary"
              onClick={() => window.location.reload()}
              icon={RefreshCw}
            >
              Reload Page
            </GlowButton>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;