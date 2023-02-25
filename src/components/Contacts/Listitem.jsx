import PropTypes from 'prop-types';

export const ListItem = ({ contact : {name, phone, id}, onClick }) => {
    console.log()
    
    return (
        <li>
            <span>{name}</span>
            <span>{phone}</span>
            <button type='button' onClick={()=>onClick(id)}>Delete</button>
        </li>
    )
}

ListItem.propTypes = {
contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,}).isRequired,
onClick: PropTypes.func.isRequired,
}