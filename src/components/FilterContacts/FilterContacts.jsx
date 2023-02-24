import PropTypes from 'prop-types';

export const FilterContacts = ({onFilter, filter}) => {
    return (
        <label> Find contacts by name
            <input type="text" name='filter' onChange={onFilter} value={filter} />
            
    </label>
)
}

FilterContacts.propTypes = {
    onFilter: PropTypes.func,  
     filter: PropTypes.string.isRequired,  
}