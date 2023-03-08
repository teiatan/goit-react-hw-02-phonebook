import PropTypes from 'prop-types';
import { Component } from "react";
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
    initialFilter: '',
  };

  static propTypes = {
    initialContacts: PropTypes.array,
    initialFilter: PropTypes.string,
  };

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    filterArray: '',
  };

  takeDataFromSubmitForm = data => {
    this.setState({contacts: [...this.state.contacts, data]});
  };

  takeeDataFromFilterInput = data => {
    this.setState({filter: data});
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
