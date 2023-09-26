import Review from '../Review/Review';
import {DoctorModel} from '../../models/doctor.model';
import default_avatar from '../../assets/images/default_avatar.png';

const DoctorCard = ({ doctor }: { doctor: DoctorModel }) => {

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="p-8 flex items-center justify-center">
                <img className="max-w-full h-auto max-h-40 md:max-h-45 lg:max-h-48"
                     src={default_avatar}
                     alt={doctor.fullName}
                />
            </div>
            <div className="px-5 pb-5 flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                    <div>
                        <div className="flex flex-col">
                            <a href="/doctor/id/detail"
                               className="text-start">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{doctor.fullName}</h5>
                            </a>
                            <h6 className="text-start text-md font-semibold tracking-tight text-gray-600">{doctor.specialization}</h6>
                            <h6 className="text-start text-md font-semibold tracking-tight text-gray-600">{doctor.yearsOfExperience} years of experience</h6>
                        </div>
                    </div>

                    <Review review={doctor.reviews} path="/review"/>
                </div>

                <div className="bio overflow-hidden line-clamp-3 sm:line-clamp-5 md:line-clamp-7 lg:line-clamp-10">
                    {doctor.bio}
                </div>


                <div className="flex gap-2 justify-between flex-wrap">
                    <a className="min-w-xs hover:bg-violet-700 hover:text-white text-md text-violet-700 items-center justify-center font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 border border-violet-700 rounded-md transition duration-300 ease-in-out"
                       href="/doctor/id/detail">More detail</a>
                    <a className="min-w-xs bg-violet-700 text-md text-white rounded-md items-center justify-center font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 overflow-hidden inline-flex whitespace-nowrap"
                       href="/book">Book appointment</a>
                </div>
            </div>

        </div>
    );
};

export default DoctorCard;
