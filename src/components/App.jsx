import React from "react"
import { Contacts } from "./Contacts/Contacts"
import { FilterContacts } from "./FilterContacts/FilterContacts"
import { PhonebookForm } from "./PhonebookForm/PhonebookForm"

export class App extends React.Component {



  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'},
  ],
    filter: '',
      
  }


  addContact = newState => 
    this.setState(prevState => {
      return ({
        contacts: [...prevState.contacts, newState],})
    })
  

  filterForm = evt => this.setState({ filter: evt.target.value, });
    

  

  render () {
  
    const { addContact, filterForm } = this;
    const { filter } = this.state;


    const normalizedRequest = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts
      .filter(contact => contact.name.toLowerCase()
      .includes(normalizedRequest));


  
    return (
      <section>
        <h1>Phonebook</h1>
        < PhonebookForm onSubmit={addContact} />
        <h2>Contacts</h2>
        < FilterContacts
            onFilter={filterForm}
            filter={filter}/>
        < Contacts contacts={filteredContacts}
           />
        

    </section>
  )}
};
