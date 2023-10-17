import { useFormik } from 'formik';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_BASE_URL } from '../../helpers/apiConstants';

interface BaseDoctor {
    first_name: string;
    last_name: string;
    experience: number;
    email: string;
    date_of_birth: Date;
}

function AddDoctorForm() {
    const specializations = [
        'Select Specialization',
        'Ophthalmologist',
        'Surgeon',
        'Cardiologist',
        'Dermatologist',
        'Pediatrician',
        'Gynecologist',
        'Neurologist',
        'Orthopedic Surgeon',
        'Dentist',
        'Psychiatrist',
    ];

    const formik = useFormik({
        initialValues: {
            firstName: '123',
            lastName: '123',
            specialization: 'Dentist',
            yearsOfExperience: 4,
            picture: '123',
            description: '',
        },
        validationSchema: yup.object({
            firstName: yup.string().max(15).required('First name is a required field'),
            lastName: yup.string().max(20).required('Last name is a required field'),
            specialization: yup.string().required('Specialization is a required field'),
            yearsOfExperience: yup.number().positive().integer().required('Years of experience is a required field'),
            picture: yup.mixed().required('Picture is a required field'),
            description: yup.string(),
        }),

        onSubmit: async (values) => {
            try {
                const result = await axios.post<BaseDoctor>(`${API_BASE_URL}/doctors/doctors/`, values);

                if (result.status >= 200 && result.status < 300) {
                    toast.success('The doctor card has been successfully created');
                    formik.resetForm();
                } else {
                    toast.error(`Sorry, we couldn't add the doctor at this time. Please try again later.`);
                }
            } catch (error) {
                toast.error(`Sorry, we couldn't add the doctor at this time. Please try again later.`);
            }
        },
    });

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 font-semibold text-indigo-900">Add doctor</h2>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="relative">
                    <input
                        className="input-field peer my_input"
                        placeholder=" "
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <label className="label_field my_label">First name</label>
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500">{formik.errors.firstName}</div>
                ) : null}
                <div className="relative">
                    <input
                        placeholder=" "
                        className="input-field peer my_input"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <label className="label_field my_label">Last name</label>
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
                <div className="relative">
                    <select
                        id="specialization"
                        name="specialization"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.specialization}
                        className="appearance-none w-full h-full pl-3 pr-8 bg-transparent border border-gray-300 rounded my_input"
                    >
                        {specializations.map((specialization, index) => (
                            <option key={index} value={specialization} label={specialization} />
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                {formik.touched.specialization && formik.errors.specialization ? (
                    <div className="text-red-500">{formik.errors.specialization}</div>
                ) : null}
                <div className="relative">
                    <input
                        className="input-field peer my_input"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.yearsOfExperience}
                    />
                    <label className="label_field my_label">Years of experience</label>
                </div>
                {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience ? (
                    <div className="text-red-500">{formik.errors.yearsOfExperience}</div>
                ) : null}
                <div className="relative">
                    <input
                        className="input-field peer my_input"
                        id="picture"
                        name="picture"
                        type="file"
                        onChange={(event) => {
                            const selectedFile = event.currentTarget.files ? event.currentTarget.files[0] : null;
                            formik.setFieldValue('picture', selectedFile);
                        }}
                    />
                    <label className="label_field my_label">Photo</label>
                </div>
                {formik.touched.picture && formik.errors.picture ? (
                    <div className="text-red-500">{formik.errors.picture}</div>
                ) : null}
                <div className="relative">
                    <textarea
                        className="input-field peer my_input"
                        id="description"
                        name="description"
                        placeholder=" "
                        rows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    <label className="label_field my_label">Bio</label>
                </div>
                {formik.touched.description && formik.errors.description ? (
                    <div className="text-red-500">{formik.errors.description}</div>
                ) : null}
                <div className="mt-4 pb-5">
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddDoctorForm;
