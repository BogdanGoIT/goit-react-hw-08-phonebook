// глупый компонент который просто рендерит

import { useSelector,  useDispatch } from "react-redux"
import { deleteContact } from "redux/contacts/operations";
import { selectVisibleContacts } from "redux/contacts/selectors";
import Chip from '@mui/material/Chip';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts)
    console.log(contacts);

    return (
        // console.log(contacts)
        <ul>
            {contacts && contacts.map(({ name, number, id }) =>
                <li key={id}>{name} {number}
                    <Chip label="Deletable"
                        onDelete={() => dispatch(deleteContact(id))}
                        onClick={() => dispatch(deleteContact(id))}
                    />
                    {/* <Chip label="Delete" variant="outlined" onDelete={() => dispatch(deleteContact(id))}
                        onClick={() => dispatch(deleteContact(id))}
                    /> */}
                </li>)}
        </ul>
    )
}
