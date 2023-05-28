import React from 'react';

const UseDebounce = (searchValue, delay) => {
    const [debouncedSearch, setDebouncedSearch] = React.useState(searchValue);
    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchValue);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [searchValue, delay]);
    return debouncedSearch;
};

export default UseDebounce;
