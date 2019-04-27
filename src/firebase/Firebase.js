import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
	apiKey: `${process.env.REACT_APP_apiKey}`,
	authDomain: `${process.env.REACT_APP_authDomain}`,
	databaseURL: `${process.env.REACT_APP_databaseURL}`,
	projectId: `${process.env.REACT_APP_projectId}`,
	storageBucket: `${process.env.REACT_APP_storageBucket}`,
	messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
}

class Firebase {
	constructor() {
		if (!app.apps.length) {
			app.initializeApp(config)
		}

		this.auth = app.auth()
		this.firestore = app.firestore()
		this.app = app

		this.googleProvider = new app.auth.GoogleAuthProvider()
	}

	doSignInWithGoogle = () => {
		return this.auth.signInWithPopup(this.googleProvider)
	}

	getCurrentUser = async () => this.auth.currentUser

	doSetSessionPersistence = () => {
		return this.auth.setPersistence(app.auth.Auth.Persistence.SESSION)
	}

	loginUser = async () => {
		try {
			await this.doSetSessionPersistence()
			return await this.doSignInWithGoogle()
		} catch (e) {
			throw new Error(e.message)
		}
	}
}

export default Firebase
