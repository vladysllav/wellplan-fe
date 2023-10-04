import '../../../assets/styles/Tailwind.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../../components/Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import useCustomFormValidation from '../../../hooks/customFormLogin';

const NewPage: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            date_of_birth: null,
        },
        validationSchema: yup.object({
            firstName: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup
                .string()
                .required('Required')
                .min(8, 'Password must be at least 8 characters long')
                .max(15, 'Password cannot exceed 15 characters')
                .matches(/^[a-zA-Z0-9]+$/, 'Password cannot contain special characters'),
            date_of_birth: yup.date().nullable().required('Required'),
        }),

        onSubmit: (values) => {
            console.log('Form data', values);
            navigate('/');
        },
    });

    const handleFormValidation = useCustomFormValidation('Please fix the form errors before submitting.', true, '/');

    return (
        <div>
            <div className="my-6 border-t border-gray-200"></div>
            <h2 className="text-2xl mb-4 font-semibold text-indigo-900">Sign up</h2>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max">
                <div className="relative h-10 w-full min-w-[200px] mt-5">
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
                    <label className="label_field my_label">First Name</label>
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500">{formik.errors.firstName}</div>
                ) : null}
                <div className="relative h-10 w-full min-w-[200px] mt-5">
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
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className="input-field peer my_input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <label className="label_field my_label">Email</label>
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className="input-field peer my_input"
                        placeholder=" "
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <label className="label_field my_label">Password</label>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <div className="flex flex-col w-72">
                    <label htmlFor="date_of_birth" className="mb-2 font-semibold text-gray-700">
                        Date of Birth
                    </label>
                    <DatePicker
                        className="border rounded py-2 px-3 focus:border-indigo-500"
                        selected={formik.values.date_of_birth}
                        onChange={(date) => formik.setFieldValue('date_of_birth', date)}
                        dateFormat="yyyy-MM-dd"
                        locale="en-US"
                    />
                </div>
                {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                    <div className="text-red-500 mt-1">{formik.errors.date_of_birth}</div>
                ) : null}
                <div className="mt-4 pb-5">
                    <Button
                        label="Submit"
                        type="submit"
                        onClick={() =>
                            handleFormValidation(formik, 'Please fix the form errors before submitting', '/')
                        }
                    />
                </div>
            </form>
        </div>
    );
};
export default NewPage;
