import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(
                window.localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
