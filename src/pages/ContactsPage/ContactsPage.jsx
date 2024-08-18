import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <>
            <h1>PhoneBook</h1>
            <ContactForm />
            <>{isLoading && 'Loading. Wait, please.'}</>
            <SearchBox />
            <ContactList />
        </>
    )
}