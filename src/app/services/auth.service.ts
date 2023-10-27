import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../model/loginform';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8083';
  userData: any; // Save logged in user data
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private http: HttpClient,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        console.log("28 line "+JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(loginForm: LoginForm) {
    console.log("I am into sign in service");
    return this.afAuth
      .signInWithEmailAndPassword(loginForm.email, loginForm.password)
      .then((result) => {
        this.SetUserData(result.user);

        
         this.afAuth.authState.subscribe(async (user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user')!);
            const headers = { 'content-type': 'application/json'} 
         
            console.log("i m logged in "+JSON.stringify(loginForm));
            this.router.navigate(['dashboard']);
           await this.http.post<LoginForm>(this.baseUrl+"/sign-in",loginForm,this.httpOptions).toPromise()
           .then((response: any) => {
            console.log("Response received:", response);
         
            // Handle the response data here
            if (response && response.success) {
              // Successful response
              // You can access the response data, e.g., response.data
            } else {
              // Handle any errors or unexpected responses
              console.error("Error in response:", response);
            }
          })
          .catch((error: any) => {
            console.error("Error occurred:", error);
         
            // Handle the error, e.g., show an error message to the user
            // You can access error.status, error.statusText, etc.
          });
 
            
          }
        }); 
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
    //return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
      window.location.reload;
    });
  }
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
   
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(async (result) => {
        console.log('Successfully logged in with Google!', result);
   
        // After successful Google authentication, post the registration data
  const signUpForm = { email: result.user.email ,loginType:'googleAuth'}; // Assuming you want to use the email from Google as the registration email
   
  await this.http.post<any>(this.baseUrl + "/sign-in", signUpForm, this.httpOptions)
          .toPromise()
          .then((response: any) => {
            console.log("Response received:", response);
            // Handle the response data here
            if (response && response.success) {
              // Successful response
              // You can access the response data, e.g., response.data
            } else {
              // Handle any errors or unexpected responses
              console.error("Error in response:", response);
            }
          })
          .catch((error: any) => {
            console.error("Error occurred:", error);
            // Handle the error, e.g., show an error message to the user
            // You can access error.status, error.statusText, etc.
          });
   
        // Redirect to the dashboard
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
}
