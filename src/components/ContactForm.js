// Internal Imports
import { useState } from "react";
// MUI
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'Commercial & Residential.',
    label: 'Commercial & Residential.',
  },
  {
    value: 'Housing',
    label: 'Housing',
  },
  {
    value: 'Industrial & Logistics Facilities',
    label: 'Industrial & Logistics Facilities',
  },
  {
    value: 'Hospitality',
    label: 'Hospitality',
  },
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jobtitle: "",
  campnyname: "",
  recaptcha: "",
  message: "",
  messagesubject: "",
  services: "",
};

const initialErrors = {
  firstName: {
    required: "",
  },
  lastName: {
    required: "",
  },
  email: {
    required: "",
    pattern: "",
  },
  phone: {
    required: "",
  },
    services: {
    required: "",
    pattern: "",
  },
  recaptcha: {
    required: "",
  },
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmit, setIsSubmit] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleFieldChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    validate({ [e.target.name]: e.target.value });
  };

  const validate = (fieldValues = initialValues) => {
    const temp = { ...errors };
    // First Name
    "firstName" in fieldValues &&
      (temp.firstName.required = fieldValues.firstName
        ? ""
        : "Please, insert your first name.");

    // Last Name
    "lastName" in fieldValues &&
      (temp.lastName.required = fieldValues.lastName
        ? ""
        : "Please, insert your last name.");

    // Email
    "email" in fieldValues &&
      (temp.email.required = fieldValues.email
        ? ""
        : "Please, insert your email.");

    "email" in fieldValues &&
      (temp.email.pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          fieldValues.email
        )
          ? ""
          : "Email not valid");

    // Phone
    "phone" in fieldValues &&
      (temp.phone.required = fieldValues.phone
        ? ""
        : "Please, insert your phone.");

    // Services
    "services" in fieldValues &&
      (temp.services.required = fieldValues.services
        ? ""
        : "Please, choose service.");

    // Recaptcha
    "recaptcha" in fieldValues &&
      (temp.recaptcha.required = fieldValues.recaptcha
        ? ""
        : "Please, Enter to make sure you not a robot.");

    setErrors({ ...temp });

    if (fieldValues !== initialValues) {
      return Object.values(temp).every((x) =>
        Object.values(x).every((el) => el === "")
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={5} mb={5}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            label="First Name"
            variant="standard"
            required
            fullWidth
            value={formValues.firstName}
            onChange={handleFieldChange}
            error={Boolean(errors.firstName.required)}
            helperText={errors.firstName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            label="Last Name"
            variant="standard"
            required
            fullWidth
            value={formValues.lastName}
            onChange={handleFieldChange}
            error={Boolean(errors.lastName.required)}
            helperText={errors.lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            variant="standard"
            required
            fullWidth
            InputProps={{
              type: "email",
            }}
            value={formValues.email}
            onChange={handleFieldChange}
            error={
              Boolean(errors.email.required) || Boolean(errors.email.pattern)
            }
          />
          {errors.email.required && (
            <FormHelperText
              style={{ color: "#d32f2f", fontSize: "0.75rem", lineHeight: 1.2 }}
            >
              {errors.email.required}
            </FormHelperText>
          )}
          {errors.email.pattern && !errors.email.required && (
            <FormHelperText
              style={{ color: "#d32f2f", fontSize: "0.75rem", lineHeight: 1.2 }}
            >
              {errors.email.pattern}
            </FormHelperText>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="phone"
            label="Phone"
            variant="standard"
            required
            fullWidth
            InputProps={{
              type: "tel",
            }}
            value={formValues.phone}
            onChange={handleFieldChange}
            error={Boolean(errors.phone.required)}
            helperText={errors.phone.required}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            name="message"
            label="Message"
            variant="standard"
            fullWidth
            value={formValues.message}
            onChange={handleFieldChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={5} justifyContent="center" alignItems="center">
      
        <Grid item xs sm={6} md={3}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmit}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
