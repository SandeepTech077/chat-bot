import * as Yup from 'yup';

export const enquirySchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  contact: Yup.string()
    .required("Contact number is required")
    .min(10, "Must be at least 10 digits"),
  project: Yup.string().required("Select any project"),
  message: Yup.string()
    .required("Message is required")
    .max(500, "Message must be at most 500 characters"), 
});
