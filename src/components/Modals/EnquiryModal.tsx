import { FiX } from "react-icons/fi";
import Images from "../../assets/Images";
import Images1 from "../../assets/Images/shilpProjects/bopal_ambli/ambli-project-building.webp";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquirySchema } from "../../validations/enquiry.validation";
import { MenuItem, TextareaAutosize, TextField } from "@mui/material";
import CustomButton from "../Common/CustomButton";
import ConfirmationModal from "./ConfirmationModal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  commerical,
  plots,
  residential,
} from "../../constants/projectTypes";
import { getCategoryData } from "../../utils/helper";
import axios from "axios";
import {
  ENQUIRY_SUCCESS_MESSAGE,
  ENQUIRY_SUCCESS_MESSAGE_WITH_DOWNLOAD,
} from "../../constants/strings";

interface EnquiryModalProps {
  isModalOpen: boolean;
  projectName?: string;
  sideImg?: string;
  pdf?: string;
  closeModal: () => void;
}

const EnquiryModal = ({
  isModalOpen,
  closeModal,
  pdf,
  projectName,
  sideImg = `${Images.inquiryFormImg}`,
}: EnquiryModalProps) => {
  const navigate = useNavigate();
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(enquirySchema),
    defaultValues: {
      project: projectName || "",
    },
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (projectName) {
      setValue("project", projectName);
    }
  }, [projectName, setValue]);

  const toggleConfirmation = () => {
    if (pdf) {
      handleDownloadPDF();
      setConfirmationOpen(false);
      closeModal();
    } else {
      setConfirmationOpen(false);
      closeModal();
    }
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdf!;
    link.download = `${projectName}_brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    setIsLoading(true);
    setErrorMessage(null);
    console.log('SANDEEP PRAJAPATI')

    try {
      const response = await axios.post(`${BASE_URL}/send-enquiry-mail`, {
        name: data.name,
        email: data.email,
        contact: data.contact,
        message: data.message,
        project: data.project || "No project selected",
        token: "6gfG97fTGrx7ELcGXqAA5UGJXTHx94",
      });

      if (response.status === 200) {
        // setConfirmationOpen(true);
         navigate('/thank-you',{ 
        state: {
          name: data.name,
          project: data.project,
          pdf: pdf // Pass PDF URL if available
        }
      });
        reset();
      } else {
        throw new Error("Failed to send data");
      }
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again.");
      // console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const commercialData = getCategoryData(commerical);
  const residentialData = getCategoryData(residential);
  const plotdata = getCategoryData(plots);
  const allCatData = [...commercialData, ...residentialData, ...plotdata];

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-30 bg-black bg-opacity-80">
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full py-8 px-4 flex items-center justify-center">
          <motion.div
            className="flex justify-center flex-col rounded-3xl lg:flex-row bg-white max-w-7xl w-full relative my-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Form Section */}
            <div className="p-6 md:p-8 w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mb-2  text-gray-600">
                  Interested in a Property?
                </h3>
                <button className="block lg:hidden" onClick={closeModal}>
                  <FiX className="w-6 h-6 text-black" />
                </button>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
                Let's Connect.
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                  className="w-full"
                  {...register("contact")}
                  error={!!errors.contact}
                  helperText={errors.contact?.message}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
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
                      disabled={!!projectName}
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
                  className="px-8 py-2 text-lg  text-black"
                  disabled={isLoading}
                  text={isLoading ? "Submitting...." : "Submit"}
                />
              </form>
              <span className="text-red-500 mt-3">{errorMessage}</span>
            </div>

            {/* Image Section */}

            {projectName === "Shilp Iskon Ambli" ? (
              <div
                className="hidden lg:block rounded-r-3xl lg:w-1/2 bg-cover bg-no-repeat bg-top rounded-tl-[100px] "
                style={{ backgroundImage: `url(${Images1})`, width: "100%" }}
              ></div>
            ) : (
              <div
                className="hidden lg:block rounded-r-3xl lg:w-1/2 bg-cover bg-no-repeat bg-top rounded-tl-[100px] "
                style={{ backgroundImage: `url(${sideImg})`, width: "100%" }}
              ></div>
            )}

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-black transition duration-200 ease-in-out"
              onClick={closeModal}
            >
              <FiX className="w-6 h-6 lg:block hidden" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onConfirm={toggleConfirmation}
        confirmButtonText={pdf ? "Download Brochure" : "Ok"}
        onClose={() => setConfirmationOpen(false)}
        message={
          pdf ? ENQUIRY_SUCCESS_MESSAGE_WITH_DOWNLOAD : ENQUIRY_SUCCESS_MESSAGE
        }
      />
    </div>
  );
};

export default EnquiryModal;
