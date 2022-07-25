import React from 'react'
import {useSelector } from "react-redux"
import {selectAllContacts} from './ContactSlice'

const ContactList = () => {
     const contacts = useSelector(selectAllContacts)

     const displayContacts = contacts.map((conts) => (
    <article key={conts.id}>
         <h3>{conts.name}</h3>
         <h3>{conts.number}</h3>
       </article>
     ));

    return (
        <div>
            <section>
                {displayContacts}
                
            </section>
        </div>
    )
}

export default ContactList
