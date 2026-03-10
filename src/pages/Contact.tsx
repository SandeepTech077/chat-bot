import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactDetails from "../components/Contact/ContactDetails";
import CustomButton from "../components/Common/CustomButton";
import AnimateOnInView from "../animation/AnimateOnInView";
import { MenuItem, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import { ENQUIRY_SUCCESS_MESSAGE } from "../constants/strings";
import Images from "../assets/Images";
import { getCategoryData } from "../utils/helper";
import { commerical, plots, residential } from "../constants/projectTypes";
import { enquirySchema } from "../validations/enquiry.validation";
import BannerImg from "../components/BannerImg";
import { useNavigate } from "react-router-dom";


const BASE_URL = (import.meta as any).env.VITE_APP_BASE_URL;

const ContactUs = () => {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(enquirySchema),
  });

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(`${BASE_URL}/send-enquiry-mail`, {
        name: data.name,
        email: data.email,
        contact: data.contact,
        message: data.message,
        project: data.project || "No project selected",
        token:"6gfG97fTGrx7ELcGXqAA5UGJXTHx94"
      });


      if (response?.data) {
        // setConfirmationOpen(true);
         navigate('/thank-you',{ 
        state: {
          name: data.name,
          project: data.project,
          // pdf: pdf // Pass PDF URL if available
        }
        
      });
      reset(); // Reset the form after successful submission

      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to submit the form. Please try again."
      );
      // console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const commercialData = getCategoryData(commerical);
  const residentialData = getCategoryData(residential);
  const plotdata = getCategoryData(plots);
  const allCatData = [...commercialData, ...residentialData, ...plotdata];

  return (
    <>
      <BannerImg image={`${Images.contactBanner}`} />
      <div className="container-base ">
        <div className="flex lg:gap-10 flex-wrap lg:flex-nowrap md:px-10 ">
          <AnimateOnInView
            variants={fadeVariant}
            className="w-full lg:w-1/2 sm:py-12 order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <TextField
                variant="outlined"
                label="Your Name"
                className="w-full"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />

              <TextField
                variant="outlined"
                label="Email Id"
                className="w-full"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />

              <TextField
                variant="outlined"
                type="number"
                label="Contact No."
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10);
                }}
                className="w-full"
                {...register("contact")}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />

              <Controller
                name="project"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    variant="outlined"
                    label="Select Project"
                    className="w-full"
                    error={!!errors?.project}
                    helperText={errors?.project?.message}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          style: {
                            maxHeight: 300,
                          },
                        },
                      },
                    }}
                  >
                    {allCatData.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.title}
                        style={{ height: 50 }}
                      >
                        {option.title}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <TextareaAutosize
                minRows={4}
                placeholder="Your Message"
                className="w-full border text-black border-gray-300 rounded p-2"
                {...register("message")}
              />
              {errors?.message && (
                <span className="text-red-500 mb-5">
                  {errors?.message.message}
                </span>
              )}

              <CustomButton
                text={isLoading ? "Submitting..." : "Submit"}
                type="submit"
                disabled={isLoading}
              />
            </form>

            {errorMessage && (
              <div className="pt-5">
                <span className="text-red-500">{errorMessage}</span>
              </div>
            )}
          </AnimateOnInView>

          <AnimateOnInView
            variants={fadeVariant}
            className="lg:w-1/2 lg:flex justify-center items-center py-4 "
          >
            <ContactDetails />
          </AnimateOnInView>
        </div>

<AnimateOnInView variants={fadeVariant} className="mt-5 mb-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7316617830547!2d72.50742470000002!3d23.0336228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b44f7033b9b%3A0x9913323bf0db79d9!2sShilp%20Group!5e0!3m2!1sen!2sin!4v1739364286792!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{
      border: 0,
      borderRadius: '15px', // Set the border radius here
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</AnimateOnInView>

      </div>

      {/* Map Section */}
      <AnimateOnInView
        variants={fadeVariant}
        className="block sm:hidden justify-center container-base items-center py-4 "
      >
        <div className="flex gap-6 items-start">
          <img
            src={Images.contactLocation}
            className="w-8 h-8"
            alt="location"
          />
          <span className="text-base lg:text-lg">
          SHILP HOUSE,<br /> Rajpath Rangoli Rd, Opposite Rajpath Club, Bodakdev, Ahmedabad, Gujarat 380054
      
          </span>
        </div>
        <div className="flex gap-6 items-center my-4">
          <img src={Images.contactPhone} loading="lazy" className="w-8 h-8" alt="message" />
          <div className="flex flex-col">
            <span className="text-base lg:text-lg">+91 9898211567</span>
            <span className="text-base lg:text-lg">+91 9898508567</span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img src={Images.contactMessage} loading="lazy" className="w-8 h-8" alt="message" />
          <div className="flex flex-col text-lg items-start justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@shilp.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base lg:text-lg"
          >
            sales@shilp.co.in
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saumil@shilp.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base lg:text-lg"
          >
            saumil@shilp.co.in
          </a>
        </div>
        </div>
      </AnimateOnInView>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={() => setConfirmationOpen(false)}
        confirmButtonText={"Ok"}
        onClose={() => setConfirmationOpen(false)}
        message={ENQUIRY_SUCCESS_MESSAGE}
      />
    </>
  );
};

export default ContactUs;
