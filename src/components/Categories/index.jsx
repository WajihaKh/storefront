import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { setActiveCategory, filterProductsByCategory } from '../Store/actions';  // Ensure this path is correct

const Categories = () => {
  const categories = useSelector(state => state.categories.categories);
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const dispatch = useDispatch();

  const handleCategoryClickLocal = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(filterProductsByCategory(category));
  };

  return (
    <Box className="categories">
      <Typography variant="h5" gutterBottom>
        Browse our Categories
      </Typography>
      <List component="nav">
        {categories.map(category => (
          <ListItem
            button
            key={category.name}
            onClick={() => handleCategoryClickLocal(category.name)}
            selected={category.name === activeCategory}
          >
            <ListItemText primary={category.displayName} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Categories;
