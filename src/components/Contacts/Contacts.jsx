import PropTypes from 'prop-types';
import { ListItem } from './Listitem';

export const Contacts = ({contacts, onClick}) => {
    // console.log(onClick)
     
    return (
        <div>  
            <ul>{contacts.map(contact => <ListItem key={contact.id} contact={contact} onClick={onClick} /> )}</ul>
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
    onClick: PropTypes.func.isRequired,
}