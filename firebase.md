# Firebase

## Set up firebase and Deploy

- Head over to firebase. Sign in and create a project.

- Copy your project settings under **Firebase SDK snippet** into your local project (ie your project's `api key`, `auth domain`, `databaseURL`, etc)

- Create a file (firebase.js or config.js Any name that suits you is fine)

- Inside the file, **import firebase from 'firebase/app'**

> The above line imports one of firebase SDKS which is use to initialize our application. **Firebase app**(the core Firebase SDK) is always required and must be listed first. You can now have access to each of firebase product through the firebase namespace

> **Note** *The reason why we did not import everything from firebase ie **import app from 'firebase'** is that, loading the entire SDK is not efficient for production web apps*

- Initialize firebase.

```js
  const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
});
```

**Optionally**

- Install firebase CLI tools by running the command **npm i -g firebase-tools**
- Login into firebase using **firebase login**

> This command connects your local machine with firebase and gives your access to your firebase projects

- Next, run **firebase init**

> This command links your local app directory with firebase, generates a firebase.json file, and prompts you to specify a public root directory

- Finally, run **firebase deploy**


# Firebase Authentication

## onAuthStateChange

The recommended way to get the current user.

```js
  firebase.auth().onAuthStateChange(callback to return an observable)
```

My way is to use rxfire to return an observable:

```js
import {authState} from 'rxfire/auth';

authState(auth());
```

## Register email and password(createUserWithEmailAndPassword)

```js
  await firebase.auth().createUserWithEmailAndPassword(email, password)
```

## Sign in email and password(signInWithEmailAndPassword)

```js
  await firebase.auth().signInWithEmailAndPassword(email, password)
```

## Creating Providers(google, facebook, twitter, github etc)

**Google**
```js
  const provider = new firebase.auth.GoogleAuthProvider()
```

**Facebook**
```js
  const provider = new firebase.auth.FacebookAuthProvider()
```

**Twitter**
```js
  const provider = new firebase.auth.TwitterAuthProvider()
```

**Github**
```js
  const provider = new firebase.auth.GithubAuthProvider()
```

## Oath Sign in with a provider

**Popup**
```js
  await firebase.auth().signInWithPopup(provider)
```

**Redirect**
```js
  await signInWithRedirect(provider);
```
## Sign Out
```js
  await auth().signOut();
```


# Cloud Firestore

**To use firebase cloud firestore, first you'll need to import firestore from firebase.**

```js
  import firestore from 'firebase/firestore';
```
- Connect to a collection:

```js
  firestore.collection('books'); // returns a collection reference called books
```

- Connect to a document:

```js
  firestore.doc(`/books/id`); // returns a specific document refercence 
```

## Resolving Promises
All or 95% of cloud firestore is asynchronous and also **promised based**

- To resolve a promise you can either use the then and catch approach or the async and await approach.
- After successfully resolving the promise, a **snapshot** is returned. A snapshot is basically data at that particular point in time based on your query.
- QuerySnapshot is what is returned next.

### QuerySnaphot Properties
A querySnapshot has the following properties:
- docs: An array that returns all of the documents in the snapshot
- empty: This is a boolean that lets us know if the snapshot was empty
- metadata: Metadata about this snapshot, concerning its source and if it has local modifications
- query: A reference to the query that you fired.
- size: The number of documents in the QuerySnapshot

A QuerySnapshot has some methods as well:
- docChanges(): An array of the changes since the last snapshot.
- forEach(): Iterates over the entire array of snapshots.
- isEqual(): Let's you know if it matches another snapshot.

QuerySnapshots typically hold onto a number of **QueryDocumentSnapshots, which inherit from DocumentSnapshot** and have the following properties:

- id: The id of the given document.
- exists: Is this even a thing in the database?
- metadata: Pretty much the same as QuerySnapshot above.
- ref: A reference to the the documents location in the database.
…and the following methods:

- data(): Gets all of the fields of the object.
- get(): Allows you to access a particular property on the object.
- isEqual(): Useful for comparisons.
References allow you to access the database itself. This is useful for getting the collection that document is from, deleting the document, listening for changes, setting and updating properties.

## Performing CRUD operations in Cloud Firestore

- Create (add) a new document with auto-generated ID

```js
  firestore.collection('books').add(data); // returns a promise
  
  // Alternatively
  firestore.collection('books').set(data);
  
```
**Note: set also creates a new document if the documents being set does not exist **

- **Get (read) all documents** from a collection:

> Here, I mostly use a library called **rxfire** to simplify things.

```js
  import { collectionData } from 'rxfire/firestore';
  
  const bookCollectionRef = firestore.collection('books');
  collectionData(booksCollectionRef, 'id'); // returns an observable
```
- **Get a single document** from a collection: 

> Here, I mostly use a library called **rxfire** to simplify things

```js
  import {docData} from 'rxfire/firestore';
  
  const bookRef = firestore.doc(`/books/id`);
  docData(bookRef, 'id'); // returns an observable
  
```

- **Update a specific document** in a collection:

```js
  firestore.doc(`/books/id`).update(data);  // returns a promise
  
  // Alternatively
  firestore.collection('books').doc('id').update(data, {merge: true})
```

**Note: updating a document without {merge: true} overwrites the entire document. But if {merge:true} is specified, prevents the entire document from being overwritten**

**Also, there are two ways of updating/modifying a document in firebase. We have the update and set methods. Set is used to wipe out the entire properties of a document reference whiles the update method updates/modifies just a single propety and will not wipe out the entire object **

- **Delete a specific document** in a collection:

```js
  firestore.doc(`/books/id`).delete(); // returns a promise
```

# Cloud Functions

To setup cloud functions locally, you'll need **node pacakage manager(npm) and firebase CLI**

1. Install firebase tools globally on your local machine using npm:

`npm i -g firebase-tools`

2. Intialize firebase functions:

`firebase init functions`

Here, a couple of question will be asked. Are you ready to proceed(choose: yes[y]), Select a project to link with, Language to use (javascript/typescript), Use Eslint(y/n), Install dependencies(choose: yes[y])

3. A folder called **functions** with it's dependecies will be created. All cloud function logic will be wriiten in a folder called index.js 

4. Deploy cloud functions:

`firebase deloy --only functions`

# Storage

**not ready**

# Messaging

**not ready**

# Firebase Concepts

## Cloud Firestore:

Cloud firestore is a NoSQL document realated database similar to **CouchDB and MongoDB**. Instead of storing data in a traditional row and column table, in NoSQL, data are stored as **collections of documents**. Modeling a relational data in a NoSQL database can be a challenge especially coming from a SQL background since you have to unlearn most of the things under SQL. 

### Collections
Collections don't store data on their own. Collections are containers that holds multiple documents that can be queried.

### Documents
Data in a kind of json format. The rule of thumb here is that it is important to make your collections large and your document small (1mb or smaller).

Because NoSQL is schemaless, it means that we have the flexibility to model relationships in a variety of ways.

### Ways of Modeling Data:
- One to One
- One to Many
- Many to Many

### Ways Firebase allows you to model your data:
1. **Root collection:** Is a collection of documents in the root of your database.
2. **Embbed data on document:** Here you can save object, arrays and other data types on the document. The important thing is that, it needs to be relatively small.(1mb or less) It is not ideal for documents that scales up to thousands of records.
3. **Nest sub-collection on a document:** This allows one to scope a collection to a parent document hence creating a hierarchy structure.

### Querying Across Parents
**Problem**
- Let's say you have a list of **user documents** in a user collection. 
- Under each user we have a collection that holds the levels of students in the University. 
- Querying for all the number of users in level 100 will be difficult since the data is specifically scoped to that user. So you can't use it to query multiple users.

**The solution**
- **Denormalize** the data and save the collection as a **root collection**. 
- After creating the root collection, you will need to save the user id of the associated user on each individual document.
- With this, we can reference multiple user Ids to create a many-to-many relationship.


# Working with Cloudfire store
- You'll first have to create a cloud firestore object.
### Get a collection
```javascript
firestore.collection('posts');
```

### Get a single document
```javascript
firestore.collection('posts').doc('1234dfadf34dfs');
```

### Get a sub-collection within a document
```javascript
firestore.collection('posts').doc('1234dfadf34dfs').collection('comments');
```

### Get a  document in a sub-collection within a document
```javascript
firestore.collection('posts').doc('1234dfadf34dfs').collection('comments').doc('33rerdf34545qd');

// or
firestore.doc('/path to the document')
```

# Ordering
Cloud firestore supports some SQLite-like queries


<hr>
# Firebase CLI
You can use firebase command line interface to create a complete firebase project just like you do using the graphical user interface in your firebase console dashboard.To use firebase cli, you must first of all install **firebase-tools**
```javascript
npm i -g firebase-tools
```

After you're done installing firebase-tools, log into firebase by running the command ```javascript firebase login```

### Creating a Firebase Project
- To create a firebase project, run the command:
```javascript
firebase projects:create {project_name}
```
- Now the next step is to initialize firebase:
```javascript
firebase init
```
- Select the services you'll want to use(cloud functions, firestore, database, storage)
- Next, choose an existing project or create a new one
- Now select your build folder. (choose build and select yes if asked whether your app is SPA)
- Done!

**Note:** In case you're adding multiple development environment, run the following commands:
- Select a second project to add by running the command:
```javascript
firebase use --add
```
- Choose a project from the list
- Give the selected project an **alias** let's say *production*
- Switch to the development project by running the command:
```javascript
firebase use default
```

### Firebase implicit initialization 
First of all using the code below is a very bad idea because it is not a good idea to leak non-production environment details in a production application:
```javascript
if (process.env.REACT_APP_DEPLOY_ENV='production') {
  firebase.initializeApp(productionConfig)
} else {
  firebase.initializeApp(developmentConfig) 
}
```

**Recommended Approach:**
Implicit initialization works by loading Firebase javascript from a special /__/ folder. When we deploy our app to Firebase this route will exist for us but locally we will need to do a little more work to set it up.

In your favorite code editor open up the build/index.html that was created by firebase init. At the top of the body tag you will see a series of Firebase related script tags, copy it.

Paste them in your public/index.html file at the top of the body tag. Feel free to remove features you are not using.

# Revisiting Authentication with Firebase

To authenticate your application with a provider like google, follow the steps below:

- Get the auth module from firebase
```javascript
  import firebase from 'firebase/app';
  import 'firebase/auth';
  
  const auth = firebase.auth();
```

- create a provider of your choice. Here we will use google provider
```javascript
  const provider = firebase.auth.googleAuthProvider();
```

- Sign in with google
```javascript
  const signInWithGoogle = () => auth.signInWithPopup(provider);
```

Moreover, using **onAuthStaeChange**, we can track the current user. This will fire or get called when a user is either loggedin or logged out. When that happens we either get a user object or null.

# Custom Claims

Claims are extra bit of information that is to be associated with an authenticated user. Settinng custom claims should not be done on the client side (in the browser). Custom claims should be set on the server instead using cloud functions.

## Cloud functions
Cloud functions allow us to run functions on the server and it is good for code you don't want to expose on the client and perform tasks that are not available to client users.

You can write cloud functions to trigger the following:
- Cloud Firestore
- Realtime Database 
- Remote Config
- Firebase Authentication
- Google Analytics
- Crashlytics
- Cloud Storage
- Cloud Pub/Sub
- HTTP


## Setting up Cloud Functions
(NB: Have node installed in the first place).

Step1: Install firebase-cli tools by running ```npm i -g firebase-tools ```
Step2: Login into firebase ```firebase login```
Step3: Run ```firebase init```
Step4: Select the tool you want Typescript or Javascript
Step5: Choose whether you want Eslint or not
Step6: Install all dependencies


## Inside index.js
This should be your setup:

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// allows us to make calls to firestore on our local network
admin.initializeApp({
  credentials: admin.credential.cert(require('fileToPath(admin.json)')),
  databaseURL: "https://www.blahblah.com"
})

// you'll need to install express first
const express = require('express');
const app = express();

app.get('/helloWorld', (req, res) => {
  res.send('Hello world');
})

exports.api = functions.https.onRequest(app);
```

**Important Tip: How do you get your Service Account Credential?**
Steps:
1. Go to your firebase project settings
2. Under the *Service accounts* tab generate a new key
3. This key comes in a json format, copy that file into your functions folder and require it

# Creating Date strings in Firebase
```javascript
createdAt: new Date().toISOString()
```
