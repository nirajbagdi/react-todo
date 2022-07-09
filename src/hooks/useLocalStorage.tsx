import { useState, useEffect } from 'react';

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
    const [value, setValue] = useState<T>(() => {
        const storageValue = localStorage.getItem(key);
        return storageValue !== null ? JSON.parse(storageValue) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue] as const;
};

export default useLocalStorage;
