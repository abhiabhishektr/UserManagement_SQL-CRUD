// CreateUserUseCase.js

// Import necessary dependencies and interfaces
const UserRepositoryInterface = require('../interfaces/UserRepositoryInterface');

class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        try {
            // Validate user data
            // (You can include validation logic here or in a separate utility file)

            // Create user
            const newUser = await this.userRepository.createUser(userData);
            return newUser;
        } catch (error) {
            // Handle errors
            throw error;
        }
    }
}

module.exports = CreateUserUseCase;
