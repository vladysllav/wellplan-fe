import {useEffect, useMemo, useState} from 'react';
import Search from '../Search/Search';
import useDebounce from '../../hooks/useDebounce';
import DoctorCard from '../DoctorCard/DoctorCard';
import {dummyDoctorsList} from '../../data/dummyDoctorsList';
import {DoctorModel} from '../../models/doctor.model';

const DoctorCardList = () => {
    const [doctors, setDoctors] = useState<DoctorModel[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [isFiltering, setIfFiltering] = useState(true);

    const debouncedSearchQuery = useDebounce<string>(searchQuery, 1000);

    useEffect(() => {
        setDoctors(dummyDoctorsList);
        setLoading(false);
    }, []);

    const filteredDoctors = useMemo(() => {
        setIfFiltering(true)
        return doctors.filter((doctor) => {
            const fullName = doctor.fullName.toLowerCase();
            const specialization = doctor.specialization.toLowerCase();
            return fullName.includes(debouncedSearchQuery) || specialization.includes(debouncedSearchQuery);
        });
    }, [doctors, debouncedSearchQuery]);

    useEffect(() => {
        setIfFiltering(false);
    }, [filteredDoctors]);

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <div>
            {loading ? (
                <div className="animate-spin w-16 h-16 border-t-4 border-b-4 border-violet-700 rounded-full mx-auto my-12"></div>
            ) : (
                <>
                    <div className="relative mb-4">
                        <Search onSearch={handleSearchChange}></Search>
                    </div>
                    <div>
                        {filteredDoctors.length === 0 ? (
                            <div className="mt-6 flex items-center justify-center h-full">
                                <div className="bg-white p-4 rounded-md shadow-md text-center">
                                    <p className="text-red-500 text-lg font-semibold">No results found</p>
                                    <p className="text-gray-600">Try refining your search criteria.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredDoctors.map((doctor: DoctorModel) => (
                                    <div key={doctor.id}
                                         className={`w-full transition-opacity duration-700 ease-in-out ${isFiltering ? 'opacity-0' : 'opacity-100'}`}>
                                        <DoctorCard doctor={doctor}/>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default DoctorCardList;
