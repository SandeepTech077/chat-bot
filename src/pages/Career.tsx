import { useState, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BannerImg from "../components/BannerImg";
import Images from "../assets/Images";
import TitleTwo from "../components/Common/TitleTwo";
import { Checkbox, TextField, Select, MenuItem, InputAdornment, IconButton, FormControl, InputLabel, FormHelperText } from "@mui/material";
import CustomButton from "../components/Common/CustomButton";
import { CareerValidationSchema } from "../validations/career.validation";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import { ENQUIRY_SUCCESS_MESSAGE } from "../constants/strings";
import axios from "axios";
import { BASE_URL } from "../constants/projectTypes";
import mobile_carr from "../assets/Images/mobile/mobile-career-banner.webp";
import UploadIcon from "../assets/Icons/Vector.svg";
const Career = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);

  const jobOptions = [
    "Facilities and Maintenance Executive",
    "Pre-Sales Executive",
    "AGM - Civil Engineering",
    "Junior Civil Engineer",
    "Billing and Planning Engineer",
  ];

  const defaultValues = {
    name: "",
    email: "",
    contact: "",
    designation: "",
    resume: null,
    message: "",
    agreement: false
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CareerValidationSchema),
    defaultValues
  });
  const designationValue = watch("designation");
  const handleDesignationChange = (event) => {
    setValue("designation", event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFile(event.target.files[0]);
      setValue("resume", event.target.files[0], { shouldValidate: true });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setValue("agreement", isChecked);
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    setError(null);
  
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("message", data.message);
    formData.append("designation", data.designation);
    if (resumeFile) {
      formData.append("resume", resumeFile);
    }
  
    try {
      const response = await axios.post(`${BASE_URL}/send-mail-carrer`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        setConfirmationOpen(true);
        reset(defaultValues); // Reset form with default values
        setResumeFile(null);
        setChecked(false); 
        
        // Clear the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        
        setLoading(false);
      } else {
        throw new Error("Failed to send data");
      }
    } catch (error) {
      setError("Failed to submit the form. Please try again.");
      setLoading(false);
    }
  };

  // Rest of the component remains the same...
  return (
<>
      <BannerImg image={Images.careerBanner} alt="" className="sm:block hidden" />
      <BannerImg image={mobile_carr} alt="Career section banner optimized for mobile view." className="sm:hidden block" />
      <div className="container-base px-4 mb-20">
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 px-0  md:px-20">
  <TitleTwo text={'Career'} />
  <span className="pt-7 text-xl md:text-3xl text-center capitalize ">Be Part of Something Great</span>
  <p className="text-center mt-5 text-base text-gray-600 ]">
    If you think you have the talent and the drive to work for the industry's most seasoned professionals with a culture built on collaboration and dedication to unparalleled quality, come and join us.
  </p>
</div>

        <div className="flex flex-col md:flex-row justify-between items-start  gap-10 md:px-20">
          <form className="space-y-5 w-full md:w-[45%] md:order-2 order-1 mt-20" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="text"
              label="Your Name"
              variant="outlined"
              className="mb-4"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            {/* ... other form fields remain the same ... */}
            <TextField
              type="email"
              label="Email Id"
              variant="outlined"
              className="mb-4"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              type="number"
              label="Contact No."
              variant="outlined"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10);
              }}
              className="mb-4"
              fullWidth
              {...register("contact")}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
            
            <FormControl fullWidth variant="outlined" error={!!errors.designation}>
              <InputLabel id="designation-label">Designation</InputLabel>
              <Select
                labelId="designation-label"
                label="Designation"
                value={designationValue || ""}
                onChange={handleDesignationChange}
                {...register("designation")}
              >
                {jobOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {errors.designation && <FormHelperText>{errors.designation.message}</FormHelperText>}
            </FormControl>

            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <div>
              <TextField
                label="Upload Resume"
                variant="outlined"
                className="w-full mb-4"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleUploadClick}>
                        <img src={UploadIcon} alt="Upload Icon" className="w-6 h-6" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={resumeFile ? resumeFile.name : ""}
                disabled
              />
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
            </div>

            <TextField
              type="text"
              label="Your Message"
              variant="outlined"
              className="pb-32"
              multiline
              rows={4}
              fullWidth
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreement"
                checked={checked}
                onChange={handleCheckboxChange}
                className="w-5 h-5 border-gray-300 text-black rounded focus:ring-indigo-500"
              />
              <label htmlFor="agreement" className="text-base pl-3 text-black">
                I agree that my submitted data is being collected & stored.
              </label>
            </div>
            {errors.agreement && <p className="text-red-500 text-sm">{errors.agreement.message}</p>}
            {error && <div className="text-red-500">{error}</div>}
            <CustomButton disabled={loading} type="submit" text={loading ? "Submitting..." : "Submit"} />
          </form>

          {/* Current Openings Section - Show below form for mobile */}
          <div className="md:w-[45%] w-full mt-6 md:order-1 order-2">
            <span className="text-3xl">Current Openings</span>
            <div className="space-y-4 mt-5">
              {jobOptions.map((job, index) => (
                <div key={index} className="px-3 py-4 border bg-[#f8f8f8] rounded-[12px]">
                  <span className="text-lg">{job}</span>
                  <p>2+ Years Experience</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ConfirmationModal
          isOpen={isConfirmationOpen}
          onConfirm={() => setConfirmationOpen(false)}
          confirmButtonText={"Ok"}
          onClose={() => setConfirmationOpen(false)}
          message={ENQUIRY_SUCCESS_MESSAGE}
        />
      </div>
    </>
  );
};

export default Career;