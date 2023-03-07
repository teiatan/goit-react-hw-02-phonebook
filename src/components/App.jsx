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
    contacts: [],
    filter: '',
  };

  takeDataFromSubmitForm = data => {
    this.setState({contacts: [...this.state.contacts, data]});
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm submitData={this.takeDataFromSubmitForm}/>
        </Section>
  
        <Section title="Contacts">
          <Filter />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  };
};
