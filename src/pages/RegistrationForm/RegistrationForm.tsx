import Header from '../Header/Header';
import {useFormik} from "formik";
import * as yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../components/Button/Button';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
    password: string;
    date_of_birth: Date | null;

    [key: string]: string | Date | null;
}

const NewPage: React.FC = () => {

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            userType: '',
            password: '',
            date_of_birth: null
        },
        validationSchema: yup.object({
            firstName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string().required('Required'),
            userType: yup.string()
                .oneOf(['admin', 'client'], 'Invalid user type')
                .required('Required'),
            date_of_birth: yup.date().nullable().required('Required')
        }),

        onSubmit: (values: FormValues) => {
            if (hasEmptyField(values)) {
                toast.error('One or more fields are empty. Please fill in all required fields.');
            } else {
                console.log('Form data', values);
                formik.resetForm();
                toast.success('Registration successfully completed!');
            }
        }
    });
    const hasEmptyField = (values: FormValues) => {
        const allValues = Object.values(values);
        return allValues.some(value => !value);
    };

    return (
        <div className="min-h-screen">
            <Header/>
            <div className="my-6 border-t border-gray-200"></div>
            <h2 className="text-2xl mb-4 font-semibold text-blue-700">Sign up</h2>
            <ToastContainer/>
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max">
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className=" peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent
                         bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0
                          transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
                           placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500
                            focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5
                     flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400
                      transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
                       before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l
                        before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px]
                         after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
                          after:border-t after:border-r after:border-blue-gray-200 after:transition-all
                           peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
                            peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
                             peer-placeholder-shown:after:border-transparent peer-focus:text-[11px]
                              peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2
                               peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2
                                peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent
                                 peer-disabled:before:border-transparent peer-disabled:after:border-transparent
                                  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        First Name
                    </label>
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500">{formik.errors.firstName}</div>
                ) : null}
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        placeholder=" "
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent
                         bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0
                          transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
                           placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500
                            focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5
                     flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400
                      transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
                       before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l
                        before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px]
                         after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
                          after:border-t after:border-r after:border-blue-gray-200 after:transition-all
                           peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
                            peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
                             peer-placeholder-shown:after:border-transparent peer-focus:text-[11px]
                              peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2
                               peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2
                                peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent
                                 peer-disabled:before:border-transparent peer-disabled:after:border-transparent
                                  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Last name
                    </label>
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent
                         bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0
                          transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
                           placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500
                            focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5
                     flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400
                      transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
                       before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l
                        before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px]
                         after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
                          after:border-t after:border-r after:border-blue-gray-200 after:transition-all
                           peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
                            peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
                             peer-placeholder-shown:after:border-transparent peer-focus:text-[11px]
                              peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2
                               peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2
                                peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent
                                 peer-disabled:before:border-transparent peer-disabled:after:border-transparent
                                  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                    </label>
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                <div className="flex flex-col w-72">
                    <label className="mb-2 font-semibold text-gray-700">User type</label>
                    <div className="flex justify-around">
                        <label>
                            <input
                                type="radio"
                                id="admin"
                                name="userType"
                                value="admin"
                                checked={formik.values.userType === 'admin'}
                                onChange={formik.handleChange}
                            />
                            Admin
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="client"
                                name="userType"
                                value="client"
                                checked={formik.values.userType === 'client'}
                                onChange={formik.handleChange}
                            />
                            Client
                        </label>
                    </div>
                    {formik.touched.userType && formik.errors.userType ? (
                        <div className="text-red-500">{formik.errors.userType}</div>
                    ) : null}
                </div>
                <div className="relative h-10 w-full min-w-[200px] mt-5">
                    <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent
                         bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0
                          transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
                           placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500
                            focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5
                     flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400
                      transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
                       before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l
                        before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px]
                         after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
                          after:border-t after:border-r after:border-blue-gray-200 after:transition-all
                           peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
                            peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
                             peer-placeholder-shown:after:border-transparent peer-focus:text-[11px]
                              peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2
                               peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2
                                peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent
                                 peer-disabled:before:border-transparent peer-disabled:after:border-transparent
                                  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <div className="flex flex-col w-72">
                    <label htmlFor="date_of_birth" className="mb-2 font-semibold text-gray-700">Date of Birth</label>
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
                    <Button label="Submit" type="submit"/>
                </div>
            </form>
        </div>
    );
};
export default NewPage;