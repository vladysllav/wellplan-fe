import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import useToggle from '../../hooks/useToggle';
import Review from '../../components/Review/Review';
import { dummyDoctorsList } from '../../data/dummyDoctorsList';
import { DoctorModel } from '../../models/doctor.model';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AvatarEditor from '../../components/AvatarEditor/AvatarEditor';
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';

const initialValues = {
    fullName: '',
    city: '',
    email: '',
    yearsOfExperience: 0,
    bio: '',
};

const UserProfile: React.FC = () => {
    const [userProfile, setUserProfile] = useState<DoctorModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [showMore, toggleShowMore] = useToggle();
    const [isEditing, toggleIsEditing] = useToggle();

    const validationSchema = yup.object().shape({
        fullName: yup.string().required('Full name is required'),
        city: yup.string().required('City is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        yearsOfExperience: yup
            .number()
            .typeError('Years of experience must be a number')
            .min(0, 'Years of experience must be a positive number')
            .required('Years of experience is required'),
        bio: yup.string().required('Bio is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: () => {
            updatedUserProfileInformation();
        },
    });

    useEffect(() => {
        setUserProfile(dummyDoctorsList[0]);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (userProfile) {
            formik.setValues({
                fullName: userProfile.fullName,
                city: userProfile.city,
                email: userProfile.email,
                yearsOfExperience: userProfile.yearsOfExperience,
                bio: userProfile.bio,
            });
        }
    }, [userProfile, formik]);

    const updatedUserProfileInformation = () => {
        if (isEditing && !formik.isValid) {
            toast.error('Please complete the form.');
            return;
        }
        if (isEditing && formik.isValid) {
            setUserProfile((prevUserProfile) => {
                return prevUserProfile
                    ? {
                          ...prevUserProfile,
                          fullName: formik.values.fullName,
                          city: formik.values.city,
                          email: formik.values.email,
                          yearsOfExperience: formik.values.yearsOfExperience,
                      }
                    : prevUserProfile;
            });
            toast.success('Your changes were updated.');
            toggleIsEditing();
        }
    };

    const handleImageUpload = (image: string) => {
        setUserProfile((prevUserProfile) => {
            return userProfile
                ? {
                      ...userProfile,
                      image,
                  }
                : prevUserProfile;
        });
    };

    return (
        <>
            <Header />
            <ToastContainer />

            {userProfile && !isLoading ? (
                <section className="max-w-[1200px] mx-auto px-8 py-16">
                    <div className="flex flex-col md:flex-row lg:gap-10 gap-4">
                        <div className="flex-shrink-0">
                            <AvatarEditor srcIcon={userProfile.image} onImageUpload={handleImageUpload} />
                        </div>
                        {!isEditing ? (
                            <div className="flex flex-col gap-4 flex-grow">
                                <div className="flex flex-row gap-4 justify-between flex-wrap">
                                    <div className="flex flex-col justify-start items-baseline">
                                        <h2 className="text-2xl font-bold mb-1">{userProfile.fullName}</h2>
                                        <p className="text-gray-700 mb-1">
                                            <i className="fas fa-map-marker"></i> {userProfile.city}
                                        </p>
                                        <p className="text-gray-700 mb-1">
                                            <i className="fas fa-envelope"></i> {userProfile.email}
                                        </p>
                                        <p className="text-gray-700 mb-1">
                                            <i className="fas fa-clock"></i> {userProfile.yearsOfExperience} years of
                                            experience
                                        </p>
                                        <Review review={userProfile.reviews} path="/review" />
                                    </div>
                                    <button
                                        type="button"
                                        className="min-w-xs bg-violet-700 text-md text-white rounded-md items-center justify-center font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 overflow-hidden inline-flex whitespace-nowrap h-fit"
                                        onClick={toggleIsEditing}
                                    >
                                        Edit Profile
                                    </button>
                                </div>

                                <div className="lg:max-w-[50%] text-start">
                                    <span
                                        className={`font-semibold ${
                                            showMore ? 'block' : 'line-clamp-3'
                                        } overflow-hidden`}
                                    >
                                        {userProfile.bio}
                                    </span>
                                    <button
                                        className={`${
                                            showMore ? 'hidden' : 'block'
                                        } text-violet-700 hover:visible focus:visible`}
                                        onClick={toggleShowMore}
                                    >
                                        More
                                    </button>
                                </div>

                                <hr className="border-t border-gray-300" />
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4 flex-grow">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="flex flex-row gap-4 justify-between flex-wrap">
                                        <div className="flex flex-col justify-start items-baseline">
                                            <div className="w-full text-end">
                                                <div className=" flex flex-row gap-2 items-center">
                                                    <label className="text-gray-700 flex-none">Full name:</label>
                                                    <input
                                                        type="text"
                                                        className="input-field flex-grow"
                                                        id="fullName"
                                                        name="fullName"
                                                        value={formik.values.fullName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                {formik.touched.fullName && formik.errors.fullName ? (
                                                    <div className="text-red-600 text-sm">{formik.errors.fullName}</div>
                                                ) : null}
                                            </div>
                                            <div className="w-full text-end">
                                                <div className="w-full flex flex-row gap-2 items-center mt-2">
                                                    <label className="text-gray-700 flex-none">City:</label>
                                                    <input
                                                        type="text"
                                                        className="input-field"
                                                        id="city"
                                                        name="city"
                                                        value={formik.values.city}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                {formik.touched.city && formik.errors.city ? (
                                                    <div className="text-red-600 text-sm">{formik.errors.city}</div>
                                                ) : null}
                                            </div>
                                            <div className="w-full text-end">
                                                <div className="w-full flex flex-row gap-2 items-center mt-2">
                                                    <label className="text-gray-700 flex-none">E-mail:</label>
                                                    <input
                                                        type="text"
                                                        className="input-field"
                                                        id="email"
                                                        name="email"
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div className="text-red-600 text-sm">{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                            <div className="w-full text-end">
                                                <div className="w-full flex flex-row gap-2 items-center mt-2">
                                                    <label className="text-gray-700 flex-none">
                                                        Years of experience:
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="input-field mb-2"
                                                        id="yearsOfExperience"
                                                        name="yearsOfExperience"
                                                        value={formik.values.yearsOfExperience}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience ? (
                                                    <div className="text-red-600 text-sm">
                                                        {formik.errors.yearsOfExperience}
                                                    </div>
                                                ) : null}
                                            </div>

                                            <Review review={userProfile.reviews} path="/review" />
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <button
                                                type="button"
                                                className="min-w-xs h-fit hover:bg-violet-700 hover:text-white text-md text-violet-700 items-center justify-center font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 border border-violet-700 rounded-md transition duration-300 ease-in-out"
                                                onClick={toggleIsEditing}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="min-w-xs bg-violet-700 text-md text-white rounded-md items-center justify-center font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 overflow-hidden inline-flex whitespace-nowrap h-fit"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>

                                    <div className="lg:max-w-[50%] text-start">
                                        <div className="w-full text-end">
                                            <div className="w-full flex flex-col gap-2 items-center mt-2">
                                                <label className="text-gray-700 flex-none self-start">Bio:</label>
                                                <textarea
                                                    className="input-field"
                                                    rows={4}
                                                    id="bio"
                                                    name="bio"
                                                    value={formik.values.bio}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            {formik.touched.bio && formik.errors.bio ? (
                                                <div className="text-red-600 text-sm">{formik.errors.bio}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </section>
            ) : (
                <div className="animate-spin w-16 h-16 border-t-4 border-b-4 border-violet-700 rounded-full mx-auto my-12"></div>
            )}

            <Footer />
        </>
    );
};

export default UserProfile;
