// UpdateProductUseCase.js

// Import necessary dependencies and interfaces
const ProductRepositoryInterface = require('../interfaces/ProductRepositoryInterface');

class UpdateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(productId, updatedProductData) {
        try {
            // Validate updated product data
            // (You can include validation logic here or in a separate utility file)

            // Update product
            const updatedProduct = await this.productRepository.updateProduct(productId, updatedProductData);
            return updatedProduct;
        } catch (error) {
            // Handle errors
            throw error;
        }
    }
}

module.exports = UpdateProductUseCase;
