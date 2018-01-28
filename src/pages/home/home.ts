import { Component,ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  provider={
  	loggedIn:false,
  	name:"",
  	email:"",
  	profilePicture:"",
  	provider:""
  }
  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth, public ref:ChangeDetectorRef) {

  }

  login(provider){
  	let sip=null;
  	switch(provider){
  		case "facebook":
  			sip=new firebase.auth.FacebookAuthProvider();
  		break;
  		case "google":
  			sip=new firebase.auth.GoogleAuthProvider();
  		break;
  		case "twitter":
  			sip=new firebase.auth.TwitterAuthProvider();
  		break;
  		case "github":
  			sip=new firebase.auth.GithubAuthProvider();
  		break;
  	}
	// this.afAuth.auth.signInWithPopup(sip)
	// .then(res=>{
	this.afAuth.auth.signInWithRedirect(sip)
	.then(()=>{this.afAuth.auth.getRedirectResult().then(res=>{
		console.log("Logged in via "+provider);
		this.provider.loggedIn=true;
  		this.provider.name=res.user.displayName;
  		this.provider.email=res.user.email;
  		this.provider.profilePicture=res.user.photoURL;
  		this.provider.provider="facebook";
  		this.ref.detectChanges();
	})
	.catch(err=>console.log(err))
})
  }

  logout(){
  	this.afAuth.auth.signOut();
  	this.provider.loggedIn=false;
  }


 //  loginWithFacebook(){
 //  	// var provider = new firebase.auth.FacebookAuthProvider();
	// // provider.addScope('user_birthday');
	// // firebase.auth().signInWithRedirect(provider);
 //  	//this.afAuth.auth.signInWithRedirect(provider)

 //  	this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
 //  	.then(res=>{
 //  		// console.log(res.user.providerData);
 //  		this.provider.loggedIn=true;
 //  		this.provider.name=res.user.displayName;
 //  		this.provider.email=res.user.email;
 //  		this.provider.profilePicture=res.user.photoURL;
 //  		this.provider.provider="facebook";
 //  		// this.facebook=res.user.providerData[0];
 //  		// this.facebookLoggedIn=true;
 //  		// console.log(this.facebook);
 //  	})
 //  	.catch(err=>console.log(err));
 //  }
}
