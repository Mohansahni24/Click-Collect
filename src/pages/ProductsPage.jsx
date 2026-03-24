import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProduct } from '../features/products/productsSlice';
import ProductList from '../features/products/ProductList';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get('search') || '').trim();
  const allProducts = useSelector(selectAllProduct);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return allProducts;
    const lower = searchQuery.toLowerCase();

    return allProducts.filter((product) => {
      const name = product?.name?.toLowerCase() ?? '';
      const description = product?.description?.toLowerCase() ?? '';
      const category = (product?.category || '').toString().toLowerCase();
      const subCategory = (product?.subCategory || '').toString().toLowerCase();

      return (
        name.includes(lower) ||
        description.includes(lower) ||
        category.includes(lower) ||
        subCategory.includes(lower)
      );
    });
  }, [allProducts, searchQuery]);

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : 'All Products'}
        </h1>
        {searchQuery && (
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'} found
          </p>
        )}
      </div>

      <ProductList products={filteredProducts} loading={false} error={null} />
    </div>
  );
}

export default ProductsPage;


