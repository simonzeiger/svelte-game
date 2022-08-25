import './app.css'
import App from './App.svelte'

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsCTqTEJxsBYGhShNeOetUxTUTHFF7u0o",
  authDomain: "svelte-game-43670.firebaseapp.com",
  projectId: "svelte-game-43670",
  storageBucket: "svelte-game-43670.appspot.com",
  messagingSenderId: "409471071554",
  appId: "1:409471071554:web:b367f616e61129bbcc84db",
  measurementId: "G-74YW1ZVH2W"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

/**
 * Global firestore database object. 
 */
export const db = getFirestore();

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

/**  Global State */
export const pc = new RTCPeerConnection(servers);

let localStream = null;
let remoteStream = null;

const app = new App({
  target: document.getElementById('app')
})

export default app
