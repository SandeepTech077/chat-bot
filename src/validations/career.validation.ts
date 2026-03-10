import * as yup from 'yup';

export const CareerValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(/^[0-9]{10}$/, "Contact number must be 10 digits")
    .required("Contact number is required"),
  designation: yup.string().required("Designation is required"),
  
  // Validate the resume field to ensure a file is selected and of the correct type
  resume: yup
    .mixed()
    .required("Resume is required")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return false; // No file selected
      return value.size <= 10485760; // 10MB max size
    })
    .test("fileFormat", "Unsupported File Format", (value) => {
      if (!value) return false; // No file selected
      return ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type);
    }),

  message: yup.string().required("Message is required"),
  agreement: yup.boolean().oneOf([true], "You must agree to the terms"),
});
