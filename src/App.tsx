import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VoCodeJobCampaign from "./pages/VoCodeJobCampaign";
import Company from "./pages/Company";
import VoCodeRecruiterProfile from "./pages/VoCodeRecruiterProfile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/vocodejobcampaign":
        title = "";
        metaDescription = "";
        break;
      case "/vocoderecruiterprofile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<VoCodeJobCampaign />} />
      <Route path="/company" element={<Company />} />
      <Route
        path="/vocoderecruiterprofile"
        element={<VoCodeRecruiterProfile />}
      />
    </Routes>
  );
}
export default App;
