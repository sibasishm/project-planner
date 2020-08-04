import firebase from '../config/firebase';

const db = firebase.firestore();

export const getDataFromSnapshot = snapshot => {
  if (!snapshot.exists) return null;

  const data = snapshot.data();

  for (const prop in data) {
    if (data[prop] instanceof firebase.firestore.Timestamp) {
      data[prop] = data[prop].toDate();
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
};

export const getDataFromFirebase = (collectionName, observer, ...rest) =>
  rest.length > 0
    ? db
        .collection(collectionName)
        .where(...rest)
        .onSnapshot(observer)
    : db.collection(collectionName);
