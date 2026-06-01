// pages/dashboard.js
"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth"; // Use the custom hook for authentication
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fetchUserRole } from "../fetchData";

function Dashboard() {
  const { user, loading } = useAuth(); // Use custom hook for user authentication
  const router = useRouter();
  const [data, setData] = useState([]);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (loading) return; // Don't fetch if still loading user

    if (!user) {
      router.push("/login");
      return;
    }

    // Fetch user role
    const getUserRole = async () => {
      const fetchedRole = await fetchUserRole(user.uid);
      if (fetchedRole) {
        setRole(fetchedRole);
      } else {
        console.error("Role not found for user");
      }
    };

    // Fetch dashboard data
    const fetchData = async () => {
      let q;
      if (role == "admin") {
        q = query(collection(db, "admin_operations")); // Example for admin-specific data
      } else {
        q = query(collection(db, "devices"), where("userId", "==", user.uid)); // Example for user-specific data
      }

      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map((doc) => doc.data());
      setData(fetchedData);
    };

    getUserRole().then(fetchData);
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null; // Prevent rendering if user is not authenticated

  if (!user.displayName) {
    router.push("/registration");
  }
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <h1>Profile</h1>
        <p>Welcome, {user.displayName}</p>
        <p>Your role is: {role}</p>
      </div>
    </>
  );
}

export default Dashboard;
