import styles from "./ContactForm.module.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import {
  CONTACT_FORM_DESCRIPTIONS,
  FORM_FIELDS,
} from "../../constants/ContactFormConstant";
import PropTypes from "prop-types";
import { getPlaceOptions } from "../../utils/utils";
import SectionHeading from "../SectionHeading/SectionHeading";
import usePlaces from "../../hooks/usePlaces";
const ContactForm = ({
  contactFormData,
  handleFormChange,
  handleFormSubmit,
}) => {
  const { places } = usePlaces();

  const fieldOptions = getPlaceOptions(places);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };
  return (
    <section className={styles.contactForm}>
      <section className={styles.formWrapper}>
        <section className={styles.formContainer}>
          <SectionHeading
            heading={CONTACT_FORM_DESCRIPTIONS.heading}
            description={CONTACT_FORM_DESCRIPTIONS.description}
          />
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
                placeholder={field.placeholder}
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
//prop types for contact form
ContactForm.propTypes = {
  contactFormData: PropTypes.object.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
