// FirebaseAuthService.js

const firebaseAdmin = require('firebase-admin');

class FirebaseAuthService {
    constructor(config) {
        firebaseAdmin.initializeApp(config);
    }

    async verifyToken(token) {
        try {
            const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
            return decodedToken;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }

    // Other authentication methods
}

module.exports = FirebaseAuthService;
