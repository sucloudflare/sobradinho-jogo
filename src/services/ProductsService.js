export class ProductsService {
  static async findAll({ category, subcategory }) {
    let query = {};
    
    if (category) {
      query.category = category;
    }
    
    if (subcategory) {
      query.subcategory = subcategory;
    }
    
    const products = await prisma.product.findMany({
      where: query,
      include: {
        category: true,
        images: true
      }
    });
    
    return products;
  }

  static async findById(id) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        images: true,
        variants: true
      }
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  static async create(data) {
    const product = await prisma.product.create({
      data,
      include: {
        category: true
      }
    });

    return product;
  }
}