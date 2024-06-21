import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  );

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Box className="product-details">
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="h5">{product.description}</Typography>
      <Typography variant="h6">Price: ${product.price}</Typography>
      <Typography variant="h6">In Stock: {product.inStock}</Typography>
      {/* Add more details like reviews, suggestions, etc. */}
    </Box>
  );
};

export default ProductDetails;
