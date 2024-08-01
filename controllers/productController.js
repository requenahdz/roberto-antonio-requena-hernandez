import Product from '../models/Product.js';

const productController = {
  // Obtener todos los productos
  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).send('Error al obtener productos');
    }
  },
    // Obtener un producto especifico.
    getProduct: async (req, res) => {
      try {
        const products = await Product.findById(req.params.id);
        res.json(products);
      } catch (error) {
        res.status(500).send('Error al obtener el producto');
      }
    },
  
  // Crear un nuevo producto
  createProduct: async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(200).json({
        message: 'Producto creado exitosamente',
        data: product
      });
    } catch (error) {
      res.status(500).send({ message: 'Error al crear producto' });
    }
  },

  // Actualizar un producto existente
  updateProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).send({
          message: 'Producto no encontrado'
        });
      }
      res.status(201).json({
        message: 'Producto actualizado exitosamente',
        data: product
      });
    } catch (error) {
      res.status(500).send({ message: 'Error al actualizar producto' });
    }
  },

  // Eliminar un producto
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send({ message: 'Producto no encontrado' });
      }
      res.send({ message: 'Producto eliminado' });
    } catch (error) {
      res.status(500).send({ message: 'Error al eliminar producto' });
    }
  },
};

export default productController;
