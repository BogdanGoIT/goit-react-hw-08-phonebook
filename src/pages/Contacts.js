// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

// export default function Tasks() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <>
//       <TaskEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <TaskList />
//     </>
//   );
// }



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
          
        <ContactList />

        {isLoading && !error && <b>Request in progress...</b>}

      </div>
    )
  
};
