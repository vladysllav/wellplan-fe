
import { ToastContainer } from "react-toastify";
import Button from "../../../components/Button/Button";
import { Link} from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import useCustomFormValidation from '../../../hooks/customFormLogin';
import '../../../assets/styles/Tailwind.css'

const ForgotPassword: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });


    const handleFormValidation = useCustomFormValidation(
        "Please fix the form errors before submitting.",
        false,
        "A message with password recovery instructions has been sent by email."
    );

  return (
    <div className="min-h-screen">
      <Header />
      <div className="my-6 border-t border-gray-200"></div>
      <h2 className="text-2xl mb-4 font-semibold text-indigo-900">
        Recover Password
      </h2>
      <p>
        Enter the email address you used to register
        <br />
        end we'll send you the instruction
      </p>
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        className="mt-6 space-y-4 flex justify-center flex-col m-auto w-max"
      >
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
        <div className="mt-4 pb-5">
          <Button
            label="RESET PASSWORD"
            type="submit"
            onClick={() => handleFormValidation(formik,
                "Please fix the form errors before submitting",
                "A message with password recovery instructions has been sent by email.")}
          />
          <div>
            <Link
              className="text-lg font-semibold text-indigo-900 hover:text-indigo-500"
              to="/login"
            >
              Back to login
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default ForgotPassword;
