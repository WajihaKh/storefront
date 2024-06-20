import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { addToCart, updateProductQuantity } from '../Store/actions';

const Products = () => {
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const activeCategoryDetails = categories.find(category => category.name === activeCategory);

  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      console.log('Adding to cart:', product); // Add this line to verify the function call
      dispatch(addToCart(product));
      dispatch(updateProductQuantity(product.id, product.quantity - 1));
    }
  };

  return (
    <div className="products">
      {activeCategory && (
        <div>
          <Typography variant="h3" gutterBottom>
            {activeCategoryDetails?.displayName || 'Products'}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {activeCategoryDetails?.description || ''}
          </Typography>
          <Grid container spacing={4}>
            {filteredProducts.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card className="product-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://unsplash.it/1920/1080?random=${product.name}`}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography className="price" variant="body1">
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                    <Button size="small">View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Products;
