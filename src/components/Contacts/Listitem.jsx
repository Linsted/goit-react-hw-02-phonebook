import PropTypes from 'prop-types';

export const ListItem = ({ contact : {name, phone} }) => {
    
    
    return (
        <li>
            <span>{name}</span><span>{phone}</span>
        </li>
    )
}

ListItem.propTypes = {
contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}).isRequired,
}