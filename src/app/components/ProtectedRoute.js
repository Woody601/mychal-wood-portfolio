// components/ProtectedRoute.js

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export default function ProtectedRoute(WrappedComponent) {
  return function ProtectedRoute(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        // Redirect to login page if not authenticated
        router.push("/login");
      }
    }, [user, loading, router]);

    if (loading || !user) {
      // Show a loading indicator or null while checking auth state
      return <div></div>;
    }

    // Render the wrapped component if user is authenticated
    return <WrappedComponent {...props} />;
  };
}
