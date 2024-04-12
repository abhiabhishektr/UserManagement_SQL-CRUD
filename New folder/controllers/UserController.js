const { createUser } = require('../usecases/CreateUserUseCase');

class UserController {
    async createUser(req, res) {
        try {
            const userData = req.body;
            const user = await createUser(userData);
            res.status(201).json({ success: true, user });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ success: false, message: 'Failed to create user' });
        }
    }
}

module.exports = new UserController();
