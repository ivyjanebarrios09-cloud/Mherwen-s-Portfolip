"use server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function trackLinkClick(projectId: string): Promise<void> {
  if (!db) {
    console.log("Firebase not configured, skipping click tracking.");
    return;
  }
  
  try {
    await addDoc(collection(db, "clicks"), {
      projectId,
      timestamp: serverTimestamp(),
    });
    console.log("Click tracked for project:", projectId);
  } catch (error) {
    console.error("Error tracking click:", error);
    // In a real app, you might want to log this to a monitoring service
  }
}
