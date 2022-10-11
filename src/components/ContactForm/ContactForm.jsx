import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function ContactForm() {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);  

    const handleSubmit = e => {
        e.preventDefault();

        const namesArray = contacts.map(contact => contact.name);
        console.log(namesArray);

        const form = e.target;

        const name = form.elements.name.value;  
        const number = form.elements.number.value;

        if (namesArray.includes(name)) {
            return alert("Rosie Simpson is already in contacts");
        }

        dispatch(addContact({
            name,
            number,
        }));

        form.reset()

    }
    
    return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}
            >
            <form onSubmit={handleSubmit}>


            <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-aligned"
                    label="Name"
                
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    
                    required
                />
            <br />
              <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Number"
                    
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
              />
                <br />
            <Button variant="contained" type="submit">Add contact</Button>
        </form>
        </Box>);
    }