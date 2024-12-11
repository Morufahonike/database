import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:3000/ticket'

export const eventApiSlice = createApi({
    reducerPath: 'eventApiSlice',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getAllticket: builder.query({
            query: ()=> '/'
        }),
        createTicket: builder.mutation({
            query: (newTicket)=>({
             url: '/',
             method: "POST",
             body: newTicket
            })
        }),
        deleteTicket: builder.mutation({
            query(id) {
                return {
                    url: `/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: (result, error, id) => [{type: 'Posts', id }],
        }),
        updateTicket: builder.mutation({
            query: ({ id, ...ticket }) => ({
                url: `/ticket/${id}`,
                method: 'PUT',
                body: ticket,
            })
        })
    })
})

export const {
   useGetAllticketQuery,
   useCreateTicketMutation,
   useDeleteTicketMutation,
   useUpdateTicketMutation
} = eventApiSlice