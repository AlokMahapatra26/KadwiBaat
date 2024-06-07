import {z} from 'zod'

export const MessageSchema = z.object({
    content:z
    .string()
    .min(5 , "message should be atleast 5 characters")
    .max(1000 , "message should not more than 1000 character")
    

})