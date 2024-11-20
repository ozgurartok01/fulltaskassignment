export const transformProductData = (products) => {
    return products.map(product => ({
      name: product.name,
      price: product.price,
      popularity: (product.popularityScore / 20).toFixed(1),
      images: product.images,
    }));
  };
  