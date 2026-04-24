import styles from "./ContactForm.module.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import {
  CONTACT_FORM_DESCRIPTIONS,
  FORM_FIELDS,
} from "../../constants/ContactFormConstant";
import { fetchAllPlaces } from "../../services/place.api";
import { useEffect, useState } from "react";
import { getPlaceOptions } from "../../utils/utils";
const ContactForm = ({
  contactFormData,
  handleFormChange,
  handleFormSubmit,
}) => {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const response = await fetchAllPlaces();
    console.log("inside",response)
    setPlaces(response);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fieldOptions = getPlaceOptions(places);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };
  return (
    <section className={styles.contactForm}>
      <section className={styles.formWrapper}>
        <section className={styles.formContainer}>
          <p className={styles.formHeading}>
            {CONTACT_FORM_DESCRIPTIONS.heading}
          </p>
          <p className={styles.formDescription}>
            {CONTACT_FORM_DESCRIPTIONS.description}
          </p>
        </section>

        <form className={styles.formWrapper} onSubmit={(e) => handleSubmit(e)}>
          {FORM_FIELDS.map((field, _idx) =>
            field.type === "select" ? (
              <InputField
                options={fieldOptions}
                type={field.type}
                label={field.label}
                value={contactFormData[field.name]}
                onChange={handleFormChange}
                name={field.name}
                required={field.required}
                autoComplete={field.autoComplete}
                key={_idx}
              />
            ) : (
              <InputField
                type={field.type}
                label={field.label}
                value={contactFormData[field.name]}
                onChange={handleFormChange}
                name={field.name}
                required={field.required}
                autoComplete={field.autoComplete}
                key={_idx}
              />
            ),
          )}
          <span className={styles.btnContainer}>
            <Button variant={"primary"} size={"large"} type={"submit"}>
              SUBMIT INTEREST
            </Button>
          </span>
        </form>
      </section>
    </section>
  );
};

export default ContactForm;
