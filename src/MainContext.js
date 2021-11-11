import { createContext } from 'react';
export const MainContext = createContext({
    name: '',
    img: null,
    cryptoId: '',
    chatState: false
});
