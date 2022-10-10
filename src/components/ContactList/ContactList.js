// глупый компонент который просто рендерит

import { useSelector,  useDispatch } from "react-redux"
import { deleteContact } from "redux/operations";
import { selectVisibleContacts } from "redux/selectors";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts)
    console.log(contacts)

    return (
        // console.log(contacts)
        <ul>
            {contacts && contacts.map(({ nameValue, numberValue, id }) =>
                <li key={id}>{nameValue} {numberValue}
                    <button type="button"
                        onClick={() => dispatch(deleteContact(id))}
                    >Удалить</button>
                </li>)}
        </ul>
    )
}

    // const contacts = useSelector(selectContacts);
    // const filterName = useSelector(selectFilter);
    // console.log(filterName);

    // const getFilterdContacts = () => {
    //     const normalizedFilter = filterName.toLowerCase();

    //     return contacts.filter(contact => 
    //     contact.nameValue.toLowerCase().includes(normalizedFilter),
    //     );

    // }

    // const filteredContacts = getFilterdContacts();