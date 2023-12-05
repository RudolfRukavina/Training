import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDdvFQJojywaCDZy1qQ5G33rHI0pS3TdCg",
  authDomain: "fittter-a407d.firebaseapp.com",
  projectId: "fittter-a407d",
  storageBucket: "fittter-a407d.appspot.com",
  messagingSenderId: "395655675391",
  appId: "1:395655675391:web:47fcf15056bfb7c1b3fbca",
  measurementId: "G-G0QWHCD96E"
};

export const firebaseApp = initializeApp(config)
export const db = getFirestore(firebaseApp)
export const todosRef = collection(db, 'todos')


export default firebaseApp;
// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }


// export const updateUser = (id, user) => {
//   return usersCollection.usersCollection.doc(id).update(user)
// }

// export const delUser = (id) => {
//   return usersCollection.usersCollection.doc(id).delete(user)
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }
