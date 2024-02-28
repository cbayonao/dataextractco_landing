import { map } from 'nanostores'

export const Message = map({
    name: '',
    email: '',
    phone: '',
    message: '',
    sent: false // Prevents submission spam
})