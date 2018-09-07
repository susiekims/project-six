import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDmbl8IViAlIidjsV5lD7uXv4i-OrdWLJg",
    authDomain: "critter-app.firebaseapp.com",
    databaseURL: "https://critter-app.firebaseio.com",
    projectId: "critter-app",
    storageBucket: "",
    messagingSenderId: "1079455378155"
};
firebase.initializeApp(config);

export default config;
