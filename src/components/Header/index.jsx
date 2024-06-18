import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ handleCategoryClick }) => {
  const categories = useSelector(state => state.categories.categories);
  const activeCategory = useSelector(state => state.categories.activeCategory);

  return (
    <AppBar position="static" color="default">
      <Toolbar className="header">
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          OUR STORE
        </Typography>
        {categories.map(category => (
          activeCategory !== category.name && (
            <Box key={category.name} mx={2}>
              <Typography variant="body1">
                <a href="#" onClick={() => handleCategoryClick(category.name)}>
                  {category.displayName}
                </a>
              </Typography>
            </Box>
          )
        ))}
        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
