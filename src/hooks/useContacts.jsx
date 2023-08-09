import { useSelector } from "react-redux";
import { getContacts, getError, getFilter, getIsLoading } from "redux/contacts/selectors";

export const useContacts = () => {
   const filter = useSelector(getFilter)
   const contacts = useSelector(getContacts)
   const isLoading = useSelector(getIsLoading)
   const error = useSelector(getError)

   return {
      filter,
      contacts,
      isLoading,
      error
   }
}