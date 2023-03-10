import { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [
      {name: 'Rosie Simpson', number: '459-12-56'},
      {name: 'Hermione Kline', number: '443-89-12'},
      {name: 'Eden Clements', number: '645-17-79'},
      {name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  takeDataFromSubmitForm = data => {
    const existingContact = this.state.contacts.find((element) =>
      element.name === data.name
    );

    if(existingContact === undefined) {
      this.setState({contacts: [...this.state.contacts, data]});
      Notify.success(`${data.name} is successfully added to your contact list`);
    } else {
      window.alert(`${data.name} is already in contacts`);
    } 
  };

  handleFilterInputChange = e => {
    this.setState({filter: e.currentTarget.value});
  };

  chooseArrayForRender = () => {
    if(this.state.filter !== "") {
      const filterArray = this.state.contacts.filter(element => element.name.toLowerCase().includes(this.state.filter));
      return (filterArray)
    } else {
      return (this.state.contacts)
    }
  };

  deleteContact = (name) => {
    const contactIndex = this.state.contacts.findIndex((element) =>
      element.name === name
    );
    const arrayContacts = [...this.state.contacts];
    arrayContacts.splice(contactIndex, 1)
    this.setState({contacts: arrayContacts});
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.takeDataFromSubmitForm}/>
        </Section>
  
        <Section title="Contacts">
          <Container>
            <Filter value={this.state.filter} onChange={this.handleFilterInputChange}/>
            <ContactList
              contacts={this.state.contacts} 
              filter={this.state.filterArray} 
              renderArray={this.chooseArrayForRender} 
              onDeleteContact={this.deleteContact}>
            </ContactList>
          </Container>
        </Section>
      </>
    );
  };
};