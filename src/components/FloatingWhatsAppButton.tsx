import Icons from "../assets/Icons";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "+919909961234";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" onClick={handleClick}>
     
        <img loading="lazy" src={Icons.whatsapp} alt="" className="cursor-pointer" />

    
    </div>
  );
};

export default FloatingWhatsAppButton;
