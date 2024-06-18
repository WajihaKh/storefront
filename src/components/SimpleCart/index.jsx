import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart } from '../Store/actions';

const SimpleCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <div className="simple-cart">
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.name} />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(item)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SimpleCart;