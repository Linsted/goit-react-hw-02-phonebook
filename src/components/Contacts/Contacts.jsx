import PropTypes from 'prop-types';
import { ListItem } from './Listitem';

export const Contacts = ({contacts}) => {
    // console.log(contacts)
     
    return (
        <div>  
            <ul>{contacts.map(contact => <ListItem key={contact.id} contact={contact} /> )}</ul>
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
}