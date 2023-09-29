import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-datepicker/dist/react-datepicker.css";

interface FormProps {
  className?: string;
}

const AddDoctorForm: React.FC<FormProps> = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      specialization: "",
      yearsOfExperience: "",
      picture: null,
      description: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15)
        .required("First name is a required field"),
      lastName: yup.string().max(20).required("Last name is a required field"),
      specialization: yup
        .string()
        .required("Specialization is a required field"),
      yearsOfExperience: yup
        .number()
        .positive()
        .integer()
        .required("Years of experience is a required field"),
      picture: yup.mixed().required("Picture is a required field"),
      description: yup.string(),
    }),

    onSubmit: (values) => {
      console.log(values);
      setShowSuccessMessage(true);
      formik.resetForm();
    },
  });
  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  return (
    <div className="min-h-screen bg-gray-100">
      <h2 className="text-2xl mb-4 pt-5 font-semibold text-indigo-900">
        Add doctor
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-lg mx-auto space-y-4"
      >
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
          <label className="label_field my_label">First name</label>
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500">{formik.errors.firstName}</div>
        ) : null}
        <div className="relative h-10 w-full min-w-[200px] mt-5">
          <input
            className="input-field peer my_input"
            placeholder=" "
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
          <select
            id="specialization"
            name="specialization"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.specialization}
            className="appearance-none w-full h-full pl-3 pr-8 bg-transparent border border-gray-300 rounded my_input"
          >
            <option value="" label="Select Specialization" />
            <option value="Ophthalmologist" label="Ophthalmologist" />
            <option value="Surgeon" label="Surgeon" />
            <option value="Cardiologist" label="Cardiologist" />
            <option value="Dermatologist" label="Dermatologist" />
            <option value="Pediatrician" label="Pediatrician" />
            <option value="Gynecologist" label="Gynecologist" />
            <option value="Neurologist" label="Neurologist" />
            <option value="Orthopedic Surgeon" label="Orthopedic Surgeon" />
            <option value="Dentist" label="Dentist" />
            <option value="Psychiatrist" label="Psychiatrist" />
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
        <div className="relative h-10 w-full min-w-[200px] mt-5">
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
        <div className="relative h-10 w-full min-w-[200px] mt-5">
          <input
            className="input-field peer my_input"
            id="picture"
            name="picture"
            type="file"
            onChange={(event) => {
              const selectedFile = event.currentTarget.files
                ? event.currentTarget.files[0]
                : null;
              formik.setFieldValue("picture", selectedFile);
            }}
          />
          <label className="label_field my_label">Photo</label>
        </div>
        {formik.touched.picture && formik.errors.picture ? (
          <div className="text-red-500">{formik.errors.picture}</div>
        ) : null}
        <div className="relative mt-5">
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
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            type="submit"
          >
            Save
          </button>
        </div>
        {showSuccessMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-indigo-500">
                The doctor card has been successfully created!
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddDoctorForm;
