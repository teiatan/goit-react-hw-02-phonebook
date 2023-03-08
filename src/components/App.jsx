import { Component } from "react";
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filterArray: '',
  };

  takeDataFromSubmitForm = data => {
    const index = this.state.contacts.findIndex((element) =>
    element.name === data.name);
    if(index === -1) {
      this.setState({contacts: [...this.state.contacts, data]});
    } else {
      window.alert(`${data.name} is already in contacts`);
    };
    
  };

  takeDataFromFilterInput = data => {
    this.setState({filter: data});
    this.setState(prevState => {
      return { filterArray: this.state.contacts.filter(element => element.name.toLowerCase().includes(prevState.filter)) };
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm submitData={this.takeDataFromSubmitForm}/>
        </Section>
  
        <Section title="Contacts">
          <Filter filter={this.takeDataFromFilterInput}/>
          <ContactList contacts={this.state.contacts} filter={this.state.filterArray}/>
        </Section>
      </>
    );
  };
};
