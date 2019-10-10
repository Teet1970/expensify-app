//import * as firebase from 'firebase';
 import firebase from 'firebase/app';
 import 'firebase/database';
 import 'firebase/firebase-auth';

//import * as firebase from 'firebase';
//import * as firebase from "firebase/app";
//import 'firebase/messaing';
//import 'firebase/firebase-storage';
//import 'firebase/firebase-app';


const firebaseConfig = {
  
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://expensify-c30b5.firebaseio.com",
    //databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default};

// database.ref('expenses').on('child_removed',(snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     });

// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//         });

// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses);
// });
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1000000,
//     createdAt: 1000
// })

// database.ref().set({
//     name: "Teet Kalmus",
//     age: 49,
//     stressLevel: 6,
//     job: {
//         title: 'Software manager',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Tartu',
//         country: 'Estonia'
//     }
// }).then (()=>{
//     console.log('Data is saved');
// }).catch((error)=>{
//     console.log('This failed', error);
// });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//        console.log(`${val.name} is a ${val.job.title} at 
//         ${val.job.company}`);;
//    });

// const onValueChange= database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   }).catch((error)=>{
//          console.log('This failed', error);
//      })

// setTimeout(()=>{
//       database.ref('age').set(29);
//   }, 3500);

// setTimeout(()=>{
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 10500);

//   database.ref().once('value',(snapshot)=>{
//         //const age =snapshot.val().age;
//         const name =snapshot.val().name;
//         const occupation = snapshot.val().job.title;
//         const company = snapshot.val().job.company;

//         console.log(name, 'is', occupation, 'at', company);

//         // console.log(`${snapshot.val().name} is 
//         // ${snapshot.val().job.title} at 
//         // ${snapshot.val().job.company}`);
//      })
//   .catch((error)=>{
//            console.log('This failed', error);
//      });

  

// database.ref('isSingle').remove().then (()=>{
//     console.log('Data is saved');
// }).catch((error)=>{
//     console.log('This failed', error);
// });

// database.ref().update({
//     name: 'Mike',
//     age: 29, 
//     job: {
//         title: 'Manager',
//         company: 'Apple'
//     },
//     isSingle: null
// });

// database.ref().once('value',(snapshot)=>{
//     //const age =snapshot.val().age;
//     const name =snapshot.val().name;
//     const occupation = snapshot.val().job.title;
//     const company = snapshot.val().job.company;

    // console.log(name, 'is', occupation, 'at', company);

    // console.log(`${snapshot.val().name} is 
    // ${snapshot.val().job.title} at 
    // ${snapshot.val().job.company}`);
//  })
// .catch((error)=>{
//        console.log('This failed', error);
//  });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

//database.ref('isSingle').set(null);
//   database.ref('age').set(27);
//   database.ref('location/city').set('Tallinn');
//   database.ref('attributes').set({
//       height: 187,
//       weight: 90
//   }).then (()=>{
//     console.log('Data is saved second time');
// }).catch((error)=>{
//     console.log('This failed', error);
// });
