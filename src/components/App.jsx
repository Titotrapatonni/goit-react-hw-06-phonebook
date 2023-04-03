import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout, HeroTitle, Title } from './Layout.styled';

export const App = () => {
  const filter = useSelector(state => state.filters);

  return (
    <Layout>
      <HeroTitle>Phonebook</HeroTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter value={filter} />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
