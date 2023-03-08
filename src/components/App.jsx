import { Component } from "react";
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: this.props.innerContacts,
    filterArray: '',
    renderArray: this.props.innerContacts,
  };

  takeDataFromSubmitForm = data => {
    const index = this.state.contacts.findIndex((element) =>
    element.name === data.name);
    if(index === -1) {
      this.setState({
        contacts: [...this.state.contacts, data],
        renderArray: [...this.state.contacts, data],
      });
    } else {
      window.alert(`${data.name} is already in contacts`);
    };
    
  };

  takeDataFromFilterInput = data => {
    this.setState({filter: data});
    this.setState(prevState => {
      return { filterArray: this.state.contacts.filter(element => element.name.toLowerCase().includes(prevState.filter)) };
    });
    setTimeout(this.chooseArrayForRender);
  };

  chooseArrayForRender = () => {
    if(this.state.filterArray !== "") {
        this.setState({renderArray: this.state.filterArray})
    };
    };

  deleteContact = (name) => {
    const contactIndex = this.state.contacts.findIndex((element) =>
            element.name === name
          );
    const arrayContacts = [...this.state.contacts];
    arrayContacts.splice(contactIndex, 1)
    this.setState({contacts: arrayContacts, renderArray: arrayContacts});
    

    if(this.state.filterArray !== "") {
      const filterIndex = this.state.contacts.findIndex((element) =>
        element.name === name
      );
      const arrayFiler = [...this.state.filter];
      arrayFiler.splice(filterIndex, 1)
      this.setState({filter: arrayFiler, renderArray: arrayFiler});
    };

    setTimeout(this.chooseArrayForRender);
    
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm submitData={this.takeDataFromSubmitForm}/>
        </Section>
  
        <Section title="Contacts">
          <Filter filter={this.takeDataFromFilterInput}/>
          <ContactList contacts={this.state.contacts} filter={this.state.filterArray} renderArray={this.state.renderArray} deleteName={this.deleteContact}/>
        </Section>
      </>
    );
  };
};
