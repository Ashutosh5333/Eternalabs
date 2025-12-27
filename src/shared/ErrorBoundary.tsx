"use client";

import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean; error?: any };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error("ERROR BOUNDARY CAUGHT:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-400 bg-black/30 border border-red-500/40 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Something went wrong.</h2>

          <button
            onClick={() => location.reload()}
            className="mt-2 px-4 py-1 bg-blue-600 rounded"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}


