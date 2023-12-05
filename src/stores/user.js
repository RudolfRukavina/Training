import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import router from "../router"

export const useUserStore = defineStore("userData", () => {
  const provider = new GoogleAuthProvider();
  const auth = useFirebaseAuth();
  const user = ref(auth.currentUser);
  const userData = ref(null);

  const getUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          useUserStore().user = user;
          fetchUserData(user.uid);
        } else {
          user.value = null;
        }
      });
    }

  const handleSignInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
      await fetchUserData(result.user.uid);
      router.push('/')
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserData = async (uid) => {
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      userData.value = userDocSnap.data();
    } else {
      // User data not found, create a new document with default data
      const defaultUserData = {
        username: user.value.displayName || "",
        email: user.value.email || "",
        hypertrophy: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
      };

      // Set the document with default data
      await setDoc(userDocRef, defaultUserData);

      // Now fetch the newly created document
      const newUserDocSnap = await getDoc(userDocRef);
      userData.value = newUserDocSnap.data();
    }
  };

  const updateUserData = async () => {
    try {
      const userDocRef = doc(db, "users", user.value.uid);
      await setDoc(userDocRef, userData.value);
      console.log("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      user.value = null;
      userData.value = null;
    } catch (error) {
      console.error(error);
    }
  };
  return { userData, getUser, handleSignInGoogle, fetchUserData, updateUserData, handleLogOut, user };
});
