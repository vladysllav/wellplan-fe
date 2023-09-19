import Header from '../Header/Header';
import {useFormik} from "formik";
import * as yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, {useState} from 'react';
import Button from '../../components/Button/Button';


const NewPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };


    const formik = useFormik({
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
        onSubmit: values => {
            console.log('Form data', values);
            formik.resetForm();
            setSelectedDate(null);
            setIsRegistrationSuccessful(true);
        }

    });
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header/>
            <div className="my-6 border-t border-gray-200"></div>
            <h2 className="text-2xl mb-4 font-semibold text-green-500">Sign up</h2>
            {isRegistrationSuccessful && (
                <div className="text-green-500 mt-2">Регистрация успешно завершена!</div>
            )}
            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max">
                <div className="flex flex-col w-72">
                    <input
                        placeholder="First name"
                        className="border rounded py-2 px-3 focus:border-indigo-500"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-500 mt-1">{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div className="flex flex-col w-72">
                    <input
                        placeholder="Last name"
                        className="border rounded py-2 px-3 focus:border-indigo-500"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-500 mt-1">{formik.errors.lastName}</div>
                    ) : null}
                </div>
                <div className="flex flex-col w-72">
                    <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email Address</label>
                    <input
                        className="border rounded py-2 px-3 focus:border-indigo-500"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 mt-1">{formik.errors.email}</div>
                    ) : null}

                </div>
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
                        {formik.touched.userType && formik.errors.userType ? (
                            <div className="text-red-500 mt-1">{formik.errors.userType}</div>
                        ) : null}
                    </div>

                </div>
                <div className="flex flex-col w-72">
                    <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
                    <input
                        className="border rounded py-2 px-3 focus:border-indigo-500"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 mt-1">{formik.errors.password}</div>
                    ) : null}
                </div>
                <div className="flex flex-col w-72">
                    <label htmlFor="date_of_birth" className="mb-2 font-semibold text-gray-700">Date of Birth</label>
                    <DatePicker
                        className="border rounded py-2 px-3 focus:border-indigo-500"
                        selected={selectedDate}
                        onChange={(date) => {
                            formik.setFieldValue('date_of_birth', date);
                            handleDateChange(date);
                        }}
                        dateFormat="yyyy-MM-dd"
                        locale="en-US"
                    />
                    {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                        <div className="text-red-500 mt-1">{formik.errors.date_of_birth}</div>
                    ) : null}
                </div>
                <div className="mt-4 pb-5">
                    <Button label="Submit" type="submit"/>
                </div>
            </form>
        </div>
    );
};
export default NewPage;