import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  // Skip initialization if env vars are not available (dev/testing)
  if (
    !process.env.FIREBASE_ADMIN_PROJECT_ID ||
    !process.env.FIREBASE_ADMIN_CLIENT_EMAIL ||
    !process.env.FIREBASE_ADMIN_PRIVATE_KEY
  ) {
    console.warn("Firebase Admin SDK not configured - skipping initialization");
    return null;
  }

  if (!apps.length) {
    try {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
          clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
      });
    } catch (error) {
      console.error("Failed to initialize Firebase Admin:", error);
      return null;
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

const firebaseAdmin = initFirebaseAdmin();

export const auth = firebaseAdmin?.auth || null;
export const db = firebaseAdmin?.db || null;