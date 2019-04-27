import Firebase from "./Firebase"

class Gift {
	data = {
		claimed: false,
		claimedBy: null,
	}

	firebase = null

	collection = "gifts"

	constructor() {
		this.firebase = new Firebase()
	}

	saveGiftData = async (uid, { title, url, image = null }) => {
		this.data = Object.assign(this.data, {
			title,
			url,
			image,
			createdAt: this.firebase.app.firestore.FieldValue.serverTimestamp(),
			uid,
		})

		try {
			return this.firebase.firestore
				.collection(this.collection)
				.add({ ...this.data })
		} catch (err) {
			throw new Error(err)
		}
	}

	getDatabaseReference = (uid) => {
		return this.firebase.firestore
			.collection(this.collection)
			.where("uid", "==", uid)
	}

	retrieveGiftDataRealtime = async (uid, cb) => {
		return this.getDatabaseReference(uid).onSnapshot((snap) => cb(snap))
	}

	retrieveGiftDataOnce = async (uid) => {
		try {
			return this.getDatabaseReference(uid).get()
		} catch (err) {
			throw new Error(err)
		}
	}
}

export default Gift
