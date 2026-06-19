import { useState } from "react";
import styles from "./Layout.module.scss";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ContactForm from "../components/ContactForm/ContactForm";
import toast from "react-hot-toast";
import Banner from "../components/Banner/Banner";
import { inputValidation } from "../utils/utils";
const Layout = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    homeTown: "",
    destination: "",
    contactNumber: "",
  });
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const handleFormSubmit = () => {
    if (contactFormData.homeTown === contactFormData.destination) {
      toast.error("Source and Destination can't be same");
      return;
    }
    const nameValidation = inputValidation("name", contactFormData.name);
    const phoneValidation = inputValidation(
      "phoneNo",
      contactFormData.contactNumber,
    );
    if (!nameValidation.valid) {
      toast.error(nameValidation.message);
      return;
    }

    if (!phoneValidation.valid) {
      toast.error(phoneValidation.message);
      return;
    }
    setIsBannerVisible(true);
    setTimeout(() => {
      setContactFormData({
        name: "",
        homeTown: "",
        destination: "",
        contactNumber: "",
      });
      setIsBannerVisible(false);
    }, 2000);
  };
  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactForm
        contactFormData={contactFormData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
      />
      {isBannerVisible && (
        <div className={styles.banner}>
          <Banner
            name={contactFormData.name}
            source={contactFormData.homeTown}
            destination={contactFormData.destination}
          />
        </div>
      )}
    </>
  );
};

export default Layout;
