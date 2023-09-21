import {useEffect, useState} from 'react';

const useDebounce = <T>(value: T, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => {
            clearTimeout(debounceTimeout);
        }
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
