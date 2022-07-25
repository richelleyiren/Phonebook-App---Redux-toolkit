import { createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const addContactss = createAsyncThunk('add/Contact', async (newContact)=>{
          const response = await axios.post('/add-contact',{
               cName:newContact.name,
               cNumber:newContact.number
          })
          return response.data            
})

export const getContacts = createAsyncThunk("get/Contact", async () => {
  const allConts = await axios.get('/get-contacts');
  return allConts.data;
   

});

export const updateContacts = createAsyncThunk('update/Contact', async (id)=>{
      const upds = await axios.put(`/favorite/${id}`);
          return upds.data  
          
})

export const deleteContact = createAsyncThunk('delete/Contact',async(id) =>{
      const remove = await axios.delete(`/delete/${id}`)
      console.log("delete", remove.data)
      return remove.data
})



export const ContactsSlice =  createSlice({
      name: "phonebook",
      initialState:{
            contactList: [],
            loading :false,
            error: ''
      },
      // reducers:{
      //       addContact:(state,action) =>{
      //             const newContact = {
      //                   id:nanoid(),
      //                   name:action.payload.name,
      //                   number:action.payload.number,
      //                   favorite:false
      //             }
      //             state.contactList.push(newContact)
      //       },
      //       removeContact:(state,action)=>{
      //            state.contactList = state.contactList.filter(dcontact => dcontact.id !== action.payload)
      //       },
      //       updateContact:(state,action)=>{
      //            state.contactList =  state.contactList.map( contact =>{
      //                   return contact.id === action.payload ? {...contact, favorite:!contact.favorite}
      //                   :{...contact}
      //             })
      //       }

      // },
      extraReducers: builder => {
            builder
              .addCase(addContactss.pending, (state, action) => {
                state.loading = true;
              })
              .addCase(addContactss.fulfilled, (state, action) => {
                
                state.loading = false;
                state.contactList.push(action.payload);
              })
              .addCase(addContactss.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message;
              })
              // Fetching all data
              .addCase(getContacts.pending, (state, action) => {
                state.loading = true;
              })
              .addCase(getContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contactList = action.payload;
              })
              .addCase(getContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              })
              // updating contacts
              .addCase(updateContacts.pending, (state, action) => {
                state.loading = true;
              })
              .addCase(updateContacts.fulfilled, (state, action) => {
                
                state.loading = false;
                state.contactList = state.contactList.map((list) =>
                  list.id === action.payload.id
                    ? { ...list, favorite: !list.favorite }
                    : { ...list }
                );
              })
              .addCase(updateContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              })
              //deleting
              .addCase(deleteContact.pending, (state,action) =>{
                    state.loading = true
              })
              .addCase(deleteContact.fulfilled, (state,action) =>{
                    console.log('delete action',action)
                    state.loading = false
                    state.contactList = state.contactList.filter(rem => rem.id !== action.payload.id)
              })
              .addCase(deleteContact.rejected, (state,action)=>{
                    state.loading = false
                    state.error = action.error.message

                  })
              
      }

})

// export const selectAllContacts = (state) => state.phonebook
 export const{addContact,removeContact, updateContact} = ContactsSlice.actions

export default ContactsSlice.reducer