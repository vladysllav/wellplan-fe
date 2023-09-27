
import {FormikValues} from "formik";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

function useCustomFormValidation(
    myMessage: string,
    shouldNavigate: boolean,
    secondMessage: string
) {
    const navigate = useNavigate();

    const customFormValidation = (
        formik: FormikValues,
        myErrorMessage: string = myMessage,
        mySecondMessage: string = secondMessage
    ) => {
        if (Object.keys(formik.errors).length > 0) {
            toast.error(myErrorMessage);
        } else {
            console.log("Данные формы", formik.values);
            formik.resetForm();
            if (shouldNavigate) {
                navigate(mySecondMessage);
                formik.resetForm();
            } else {
                toast.success(mySecondMessage);
                formik.resetForm();
            }
        }
    };

    return customFormValidation;
}

export default useCustomFormValidation;