import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  // Sign-in with email/password
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        console.log('User signed in:', userCredential.user);
        return userCredential.user;
      })
      .catch(error => {
        console.error('Sign-in error:', error);
        throw error; // propagate the error
      });
  }

  // Sign-out
  signOut() {
    return this.afAuth.signOut();
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.afAuth.authState;
  }
}
