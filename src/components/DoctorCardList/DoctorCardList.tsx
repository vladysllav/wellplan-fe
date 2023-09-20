import {useEffect, useState} from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import {dummyDoctorsList} from '../../data/dummyDoctorsList';
import {DoctorModel} from '../../models/doctor.model';

const DoctorCardList = () => {
    const [doctors, setDoctors] = useState<DoctorModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setDoctors(dummyDoctorsList);
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <div className="animate-spin w-16 h-16 border-t-4 border-b-4 border-violet-700 rounded-full mx-auto my-12"></div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {doctors.map((doctor: DoctorModel, idx: number) => (
                        <DoctorCard key={idx} doctor={doctor} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DoctorCardList;
