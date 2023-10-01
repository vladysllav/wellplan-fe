import '../../assets/styles/Tailwind.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const NewPassword: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: yup.object({
            password: yup
                .string()
                .required('Required')
                .min(8, 'Password must be at least 8 characters long')
                .max(15, 'Password cannot exceed 15 characters')
                .matches(/^[a-zA-Z0-9]+$/, 'Password cannot contain special characters'),
            confirmPassword: yup
                .string()
                .required('Required')
                .oneOf([yup.ref('password')], 'Passwords must match'),
        }),
        onSubmit: (values) => {
            console.log('Form data', values);
            navigate('/login');
        },
    });

    const handleButtonClick = () => {
        if (formik.errors) {
            toast.error('Please fix the form errors before submitting.');
        } else {
            console.log('Form data', formik.values);
            navigate('/login');
            toast.success('Password updated successfully');
        }
    };
    return (
        <div className="min-h-screen">
            <Header />
            <div className="my-6 border-t border-gray-200"></div>
            <h2 className="text-2xl mb-4 font-semibold text-blue-700">Create a new password</h2>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max">
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
                    <label className="label_field my_label">New password</label>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className="input-field peer my_input"
                        placeholder=" "
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    <label className="label_field my_label">Enter the password again</label>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="text-red-500">{formik.errors.confirmPassword}</div>
                ) : null}
                <div className="mt-4 pb-5">
                    <Button label="Submit" type="submit" onClick={handleButtonClick} />
                </div>
            </form>
            <Footer />
        </div>
    );
};
export default NewPassword;
