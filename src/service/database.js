import firebase from 'firebase'
import store from '@/store'

var config = {
    apiKey: "AIzaSyCo2HQa9ud4o_Y-l7PhUQqdE2B7DCe09Ds",
    authDomain: "ionic-vue-imfucked.firebaseapp.com",
    databaseURL: "https://ionic-vue-imfucked.firebaseio.com",
    projectId: "ionic-vue-imfucked",
    storageBucket: "ionic-vue-imfucked.appspot.com",
    messagingSenderId: "1022177291332"
  };
  
const database =   firebase.initializeApp(config);
database.signUp = async(email,password) => {
  try{
    await firebase.auth().createUserWithEmailAndPassword(email,password);
    
    store.commit('setCurrentUser' , firebase.auth().currentUser);
    return true;
  }catch(error){
    return error;
  }
}

database.logIn = async(email,password) => {
  try{
    await firebase.auth().signInWithEmailAndPassword(email,password);
    
    store.commit('setCurrentUser' , firebase.auth().currentUser);
    return true;
  }catch(error){
    return error;
  }
}

database.signOut = async() => {
  try{
    await firebase.auth().signOut();
    
    store.commit('setCurrentUser' , null);
    return true;
  }catch(error){
    return error;
  }
}

export default database