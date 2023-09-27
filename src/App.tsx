import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../src/pages/HomePage/HomePage";
import { AppDispatch, fetchData } from "../src/store/actions/dataActions";
import "./App.css";
import { RootState } from "./store/index";
import NewPage from "../src/pages/NewPage/NewPage";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/LogSignPage/RegistrationForm/RegistrationForm";
import AuthorizationForm from "./pages/LogSignPage/AuthorizationForm/AuthorizationForm";
import ForgotPassword from "./pages/LogSignPage/ForgotPassword/ForgotPassword.";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import UserProfile from "./pages/UserProfile/UserProfile";


import NewPassword from "./pages/NewPassword/NewPassword";
import Terms from "./pages/Terms/Terms";
import LogSignPage from "./pages/LogSignPage/LogSignPage";

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
          <Route path="/login" element={<AuthorizationForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signin" element={<RegistrationForm />} />
          <Route path="/about" element={<AboutUsPage />} />
            <Route path="/user-profile" element={<UserProfile/>}/>
          <Route path="/new" element={<NewPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/logSign" element={<LogSignPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
