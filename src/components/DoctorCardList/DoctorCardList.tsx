import React, {useEffect, useState} from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import {dummyDoctorsList} from '../../data/dummyDoctorsList';
import {DoctorModel} from '../../models/doctor.model';

const DoctorCardList = () => {
    const [doctors, setDoctors] = useState<DoctorModel[]>([]);

    useEffect(() => {
        setDoctors(dummyDoctorsList);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doctor: DoctorModel, idx: number) => (
                <DoctorCard key={idx}
                            doctor={doctor}/>
            ))}
        </div>
    );
};

export default DoctorCardList;
