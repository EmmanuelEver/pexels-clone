import { useState } from "react";


// *** NOTE ***
// add try catch block for better error handling;

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const setLocalValue = (value) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
    }

    return [storedValue, setLocalValue];

}

export default useLocalStorage;