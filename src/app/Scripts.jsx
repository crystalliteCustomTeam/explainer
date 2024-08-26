"use client";
import { useEffect } from 'react';

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== ZenDesk ========//
            const zenDesk = document.createElement("script");
            zenDesk.id = "ze-snippet";
            zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            zenDesk.async = true;
            zenDesk.defer = true;
            document.body.appendChild(zenDesk);

        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts;
