// pages/protectedPage.js

import withProtectedRoute from "@/components/ProtectedRoute";

function ProtectedPage() {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>This page is only accessible by signed-in users.</p>
    </div>
  );
}

export default withProtectedRoute(ProtectedPage);
