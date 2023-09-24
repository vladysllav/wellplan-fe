import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomePage from '../src/pages/HomePage/HomePage';
import {AppDispatch, fetchData} from "../src/store/actions/dataActions";
import "./App.css";
import {RootState} from "./store/index";
import NewPage from "../src/pages/NewPage/NewPage";
import Header from "../src/pages/Header/Header";
import {Route, Routes} from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Footer from "../src/pages/Footer/Footer";
import AuthorizationForm from "./pages/AuthorizationForm/AuthorizationForm";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";




function App() {
    const dispatch = useDispatch<AppDispatch>();

    const data = useSelector((state: RootState) => state.yourStateSlice.data);
    const loading = useSelector(
        (state: RootState) => state.yourStateSlice.loading
    );
    const error = useSelector((state: RootState) => state.yourStateSlice.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    console.log(data, "data");
    return (
        <div className="App">
            {/* Define routes */}
            <main>
                <Routes>
                    <Route path="/authorization" element={<AuthorizationForm/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/registration" element={<RegistrationForm/>}/>
                    <Route path="/about" element={<AboutUsPage/>}/>
                    <Route path="/new" element={<NewPage/>}/>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/header" element={<Header/>}/>
                    <Route path="/header" element={<Footer/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
