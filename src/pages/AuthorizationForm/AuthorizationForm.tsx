
import {useFormik} from "formik";
import * as yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom";


const Login: React.FC = () => {
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string().required('Required'),
        }),

        onSubmit: async (values) => {
            try {
                if (values.email && values.password) {
                    console.log("Form data", values);
                    navigate("/");
                } else {
                    toast.error("Authentication failed: Please fill in all fields");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },
    });


    return (
        <div className="min-h-screen">
            <div className="my-6 border-t border-gray-200"></div>
            <h2 className="text-2xl mb-4 font-semibold text-blue-700">Login</h2>
            <ToastContainer/>
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max">
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className="input-field peer border-blue-gray-200 text-blue-gray-700
                placeholder-shown:border-blue-gray-200
                placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50"
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <label className="label_field before:content[' '] after:content[' ']
                text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200
                peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500">
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
                        className="input-field peer border-blue-gray-200 text-blue-gray-700
                            placeholder-shown:border-blue-gray-200
                            placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50"
                        placeholder=" "
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <label className="label_field before:content[' '] after:content[' ']
                            text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200
                            peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>
                </div>
                {
                    formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500">{formik.errors.password}</div>
                    ) : null
                }
                <div className="mt-4 pb-5">
                    <Button label="Submit" type="submit"/>
                    <div>
                        <Link className="text-lg font-semibold text-green-500 hover:text-orange-500"
                              to="/forgot-password">Forgot your password?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;
