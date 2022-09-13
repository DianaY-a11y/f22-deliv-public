import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// Functions for database mutations

export const emptyEntry = {
  name: "",
  link: "",
  description: "",
  user: "",
  category: 0,
};

export async function addEntry(entry) {
  await addDoc(collection(db, "entries"), {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    user: entry.user,
    category: entry.category,
    // The ID of the current user is logged with the new entry for database user-access functionality.
    // You should not remove this userid property, otherwise your logged entries will not display.
    userid: entry.userid,
  });
}

export async function updateEntry(entry) {
  // TODO: Create Mutation to Edit Entry
  try {
    console.log(entry, "entry");
    const updatesDoc = doc(db, "entries", entry.id);

    await updateDoc(updatesDoc, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      category: entry.category,
    });
  } catch (error) {
    console.log(entry.id, "whatsup");
    console.error(error);
  }
}

export async function deleteEntry(id) {
  const dDoc = doc(db, "entries", id);
  try {
    await deleteDoc(dDoc);
  } catch (error) {
    console.error(error);
  }
}
