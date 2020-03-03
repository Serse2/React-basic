import Rebase from 're-base';
import firebase from 'firebase'


//create a firebase App
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMj7ndU0aHfdH1FBYnkoMHUy0PHBcm42s",
    authDomain: "catch-of-the-day-new-sergio.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-new-sergio.firebaseio.com",
    projectId: "catch-of-the-day-new-sergio",
    storageBucket: "catch-of-the-day-new-sergio.appspot.com",
    messagingSenderId: "59563416094",
    appId: "1:59563416094:web:3937c8f6e2cbac96e02c0f"
})


//create a Rebase binding
const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base