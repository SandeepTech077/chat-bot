import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import Chatbot from "../components/Chatbot";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsAppButton />
      <Chatbot />
    </>
  );
};

export default PageLayout;
