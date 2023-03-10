import { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
//import { ContactItem } from "./ContactItem/ContactItem";

export class App extends Component {
  state = {
    contacts: [
      {name: 'Rosie Simpson', number: '459-12-56'},
      {name: 'Hermione Kline', number: '443-89-12'},
      {name: 'Eden Clements', number: '645-17-79'},
      {name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
    filterArray: [],
    renderArray: [
      {name: 'Rosie Simpson', number: '459-12-56'},
      {name: 'Hermione Kline', number: '443-89-12'},
      {name: 'Eden Clements', number: '645-17-79'},
      {name: 'Annie Copeland', number: '227-91-26'},
    ],
  };

  takeDataFromSubmitForm = data => {
    const index = this.state.contacts.findIndex((element) =>
    element.name === data.name);
    if(index === -1) {
      this.setState({
        filter: "",
        contacts: [...this.state.contacts, data],
        //renderArray: [...this.state.contacts, data],
      })
      if(this.state.filter === "" || this.state.filter === undefined){
        this.setState({
          renderArray: [...this.state.contacts, data],
        })
      } else {
        Notify.success(`${data.name} is successfully added to your contact list`);
      };
    } else {
      window.alert(`${data.name} is already in contacts`);
    };
    
  };

  takeDataFromFilterInput = data => {
    this.setState({filter: data});
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState( () => {
        return  {[name]: value};
    });
    this.setState( prevState => {
        this.props.filter(prevState.filter);
    });
};

  chooseArrayForRender = () => {
    if(this.state.filterArray.length !== 0) {
        this.setState({renderArray: this.state.filterArray})
    };
    };

  cchooseArrayForRender = () => {
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
    this.setState({contacts: arrayContacts, renderArray: arrayContacts});
    

    if(this.state.filterArray.length !== 0) {
      const filterIndex = this.state.contacts.findIndex((element) =>
        element.name === name
      );
      const arrayFilter = [...this.state.filterArray];
      arrayFilter.splice(filterIndex, 1)
      this.setState({filterArray: arrayFilter, renderArray: arrayFilter});
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
          <Container>
            <Filter filter={this.takeDataFromFilterInput} value={this.state.filter} onChange={this.handleInputChange}/>
            <ContactList
              contacts={this.state.contacts} 
              filter={this.state.filterArray} 
              renderArray={this.cchooseArrayForRender} 
              onDeleteContact={this.deleteContact}>
            </ContactList>
          </Container>
        </Section>
      </>
    );
  };
};
