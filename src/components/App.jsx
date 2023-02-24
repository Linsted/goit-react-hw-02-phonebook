import React from "react"
import { PhonebookForm } from "./PhonebookForm/PhonebookForm"

export class App extends React.Component {

  state = {
      contacts: [],
      name: '',
  }


  render () {
  
  
    return (
      <section>
        <h1>Phonebook</h1>
      < PhonebookForm />
    </section>
  )}
};
