import { useEffect, useRef } from "react"

const useClickOutside = (handler) => {
    //nodeRef is for the dom element you want to handle
    const nodeRef = useRef();
    const listen = (e) => {
        if(!nodeRef?.current?.contains(e.target)) handler()
    }

    useEffect(() => {
        document.addEventListener("mousedown", listen);
        
        return () => document.removeEventListener("mousedown", listen);
    }, []);

    return nodeRef; 
}

export default useClickOutside;