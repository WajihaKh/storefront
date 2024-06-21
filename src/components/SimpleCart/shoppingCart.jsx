import { useSelector } from 'react-redux';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase");
  };

  return (
    <Box className="shopping-cart">
      <Typography variant="h4">Shopping Cart</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(item => (
              <TableRow key={item.cartItemId}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6">Total: ${calculateTotal()}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>Checkout</Button>
    </Box>
  );
};

export default ShoppingCart;
