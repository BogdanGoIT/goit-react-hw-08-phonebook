import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div>
        
        <h1>Phonebook</h1>
        <ContactForm />
        
        <h2>Contacts</h2>
        <Filter />
          
        {isLoading && !error && <p>Request in progress...</p>}

        <ContactList />

      </div>
    )
  
};
