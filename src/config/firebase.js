import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'project-planner-598c9.firebaseapp.com',
  databaseURL: 'https://project-planner-598c9.firebaseio.com',
  projectId: 'project-planner-598c9',
  storageBucket: 'project-planner-598c9.appspot.com',
  messagingSenderId: '110640444941',
  appId: '1:110640444941:web:9c386d8853faabd78c8744',
  measurementId: 'G-C97KF452WV',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
