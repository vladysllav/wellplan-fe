import '../../assets/styles/Tailwind.css'
import {useFormik} from "formik";
import * as yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Login: React.FC = () => {
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup
                .string()
                .required('Required')
                .min(8, 'Password must be at least 8 characters long')
                .max(15, 'Password cannot exceed 15 characters')
                .matches(/^[a-zA-Z0-9]+$/, 'Password cannot contain special characters')
        }),
        onSubmit: values => {
            console.log('Form data', values);
            navigate("/");
        }
    });

    const handleButtonClick = () => {
        if (formik.errors) {
            toast.error("Please fix the form errors before submitting.");
        } else {
            console.log("Form data", formik.values);
            navigate("/");
        }
    };
    return (
        <div className="min-h-screen">
           <Header/>
            <div className="my-6 border-t border-gray-200"></div>
            <h2 className="text-2xl mb-4 font-semibold text-blue-700">Login</h2>
            <ToastContainer/>
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max">
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
                    <label className="label_field my_label">
                        Email
                    </label>
                </div>
                {
                    formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500">{formik.errors.email}</div>
                    ) : null
                }
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
                    <label className="label_field my_label">
                        Password
                    </label>
                </div>
                {
                    formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500">{formik.errors.password}</div>
                    ) : null
                }
                <div className="mt-4 pb-5">
                    <Button label="Submit" type="submit" onClick={handleButtonClick}/>
                    <div>
                        <Link className="text-lg font-semibold text-green-500 hover:text-orange-500"
                              to="/forgot-password">Forgot your password?</Link>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
export default Login;
