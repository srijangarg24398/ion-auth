import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // facebookLoggedIn:boolean=false;
  provider={
  	loggedIn:false,
  	name:"",
  	email:"",
  	profilePicture:"",
  	provider:""
  }
  // facebook:any;
  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth) {

  }
  loginWithFacebook(){
  	// var provider = new firebase.auth.FacebookAuthProvider();
	// provider.addScope('user_birthday');
	// firebase.auth().signInWithRedirect(provider);
  	//this.afAuth.auth.signInWithRedirect(provider)

  	this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  	.then(res=>{
  		// console.log(res.user.providerData);
  		this.provider.loggedIn=true;
  		this.provider.name=res.user.displayName;
  		this.provider.email=res.user.email;
  		this.provider.profilePicture=res.user.photoURL;
  		this.provider.provider="facebook";
  		// this.facebook=res.user.providerData[0];
  		// this.facebookLoggedIn=true;
  		// console.log(this.facebook);
  	})
  	.catch(err=>console.log(err));
  }
  logoutOfFacebook(){
  	this.afAuth.auth.signOut();
  	// this.facebookLoggedIn=false;
  	this.provider.loggedIn=false;
  }

  loginWithGoogle(){
  	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  	.then(res=>{
  		console.log("Login via google");
  		this.provider.loggedIn=true;
  		this.provider.name=res.user.displayName;
  		this.provider.email=res.user.email;
  		this.provider.profilePicture=res.user.photoURL;
  		this.provider.provider="Google";
  	}).catch(err=>console.log(err));
  }
  logout(){
  	this.afAuth.auth.signOut();
  	this.provider.loggedIn=false;
  }
}
