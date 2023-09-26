import { useNavigate } from 'react-router-dom';
import { FormikValues } from 'formik/dist/types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useFormSubmitHandler(defaultMessage: string, defaultPath: string) {
    const navigate = useNavigate();

    const handleButtonClick = (formik: FormikValues, customMessage: string = defaultMessage, customPath: string = defaultPath) => {
        if (formik.errors) {
            toast.error(customMessage);
        } else {
            console.log("Form data", formik.values);
            navigate(customPath);
        }
    };

    return handleButtonClick;
}

export default useFormSubmitHandler;