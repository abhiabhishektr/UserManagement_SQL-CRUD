const { updateProduct } = require('../usecases/UpdateProductUseCase');

class ProductController {
    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updatedProduct = await updateProduct(productId, productData);
            res.status(200).json({ success: true, product: updatedProduct });
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ success: false, message: 'Failed to update product' });
        }
    }
}

module.exports = new ProductController();
