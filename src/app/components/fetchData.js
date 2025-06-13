// components/fetchData.js

import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// Helper function to convert Firestore Timestamps to ISO strings
const convertTimestampToISO = (timestamp) => {
  return timestamp ? timestamp.toDate().toISOString() : null;
};

// Fetch all device entries
export const fetchEntries = async () => {
  try {
    const snapshot = await getDocs(collection(db, "devices"));
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date_added: convertTimestampToISO(data.date_added), // Convert Timestamp to ISO string
        last_updated: convertTimestampToISO(data.last_updated), // Convert Timestamp to ISO string
      };
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
};

// Fetch a single device by its ID
export const fetchDeviceById = async (id) => {
  try {
    const deviceRef = doc(db, "devices", id);
    const deviceSnap = await getDoc(deviceRef);

    if (!deviceSnap.exists()) {
      console.warn(`Device with ID ${id} not found.`);
      return null; // Device not found
    }

    const data = deviceSnap.data();
    return {
      id: deviceSnap.id,
      ...data,
      date_added: convertTimestampToISO(data.date_added), // Convert Timestamp to ISO string
      last_updated: convertTimestampToISO(data.last_updated), // Convert Timestamp to ISO string
    };
  } catch (error) {
    console.error(`Error fetching device with ID ${id}:`, error);
    return null;
  }
};
// Fetch a single device by its ID
export const fetchItemById = async (id) => {
  try {
    const itemRef = doc(db, "items", id);
    const itemSnap = await getDoc(itemRef);

    if (!itemSnap.exists()) {
      console.warn(`Item with ID ${id} not found.`);
      return null; // Item not found
    }

    const data = itemSnap.data();
    return {
      id: itemSnap.id,
      ...data,
      date_added: convertTimestampToISO(data.date_added), // Convert Timestamp to ISO string
      last_updated: convertTimestampToISO(data.last_updated), // Convert Timestamp to ISO string
    };
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    return null;
  }
};

// Fetch user data by user ID
export const fetchUserById = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.warn(`User with ID ${userId} not found.`);
      return null; // User not found
    }

    const data = userSnap.data();
    return {
      id: userSnap.id,
      ...data,
      created_at: convertTimestampToISO(data.created_at), // Convert Timestamp to ISO string
    };
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    return null;
  }
};

// Fetch user role by user ID
export const fetchUserRole = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.warn(`User with ID ${userId} not found.`);
      return null; // User not found
    }

    const data = userSnap.data();
    return data.role || null; // Return the role field or null if not available
  } catch (error) {
    console.error(`Error fetching role for user with ID ${userId}:`, error);
    return null;
  }
};
