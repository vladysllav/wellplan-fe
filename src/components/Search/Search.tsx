import React, { useState, ChangeEvent } from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search by name or specialization"
                className="w-full px-4 py-2 pl-10 pr-8 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-violet-700"
                value={searchQuery}
                onChange={handleSearchChange}/>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
            </div>
            {searchQuery !== '' && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                    <i
                        className="fas fa-times text-gray-400 hover:text-red-500"
                        onClick={() => {
                            setSearchQuery('');
                        }}
                    ></i>
                </div>
            )}
        </>
    );
};

export default Search;




