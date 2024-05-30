import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'pp-labo4-f41a0',
        appId: '1:244301993711:web:4d8054d64bfd3698e52d1a',
        storageBucket: 'pp-labo4-f41a0.appspot.com',
        apiKey: 'AIzaSyBrFW7kVRa-jqbQoqNnS-jV4THUxc5vjr0',
        authDomain: 'pp-labo4-f41a0.firebaseapp.com',
        messagingSenderId: '244301993711',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
  ],
};
