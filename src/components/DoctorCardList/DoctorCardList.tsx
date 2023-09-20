import {useEffect, useState} from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import {dummyDoctorsList} from '../../data/dummyDoctorsList';
import {DoctorModel} from '../../models/doctor.model';

const DoctorCardList = () => {
    const [doctors, setDoctors] = useState<DoctorModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([]);

    useEffect(() => {
        setDoctors(dummyDoctorsList);
        setFilteredDoctors(dummyDoctorsList);
        setLoading(false);
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = doctors.filter((doctor) => {
            const fullName = doctor.fullName.toLowerCase();
            const specialization = doctor.specialization.toLowerCase();
            return fullName.includes(query) || specialization.includes(query);
        });

        setFilteredDoctors(filtered);
    };

    return (
        <div>
            {loading ? (
                <div className="animate-spin w-16 h-16 border-t-4 border-b-4 border-violet-700 rounded-full mx-auto my-12"></div>
            ) : (
                <>
                    <div className="relative mb-4">
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
                                        setFilteredDoctors(doctors);
                                    }}
                                ></i>
                            </div>
                        )}
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
                                {filteredDoctors.map((doctor: DoctorModel, idx: number) => (
                                    <div key={idx}
                                         className="w-full">
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
