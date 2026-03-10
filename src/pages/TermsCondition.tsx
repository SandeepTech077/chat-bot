import BannerImg from "../components/BannerImg";
import Images from "../assets/Images";
import mobiletc from "../assets/Images/mobile/building-side-view.webp"

const TermsCondition = () => {
  return (
    <>
      <BannerImg image={Images.newTermsBanner} className="sm:block hidden"/>
      <BannerImg image={mobiletc} className="sm:hidden block"/>
      <section className="px-5 md:px-10 overflow-hidden space-y-8 py-10 ">
        <div>
          <p className="text-xl text-[#727272]">
            Welcome to the official website of Shilp Group! Please read these
            Terms and Conditions carefully before accessing or using our
            websites. By using this website, you agree to be bound by these
            terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">About Us</h2>
          <p className="text-xl text-[#727272]">
            This website, www.shilpgroup.com, is operated by Shilp Group and its
            subsidiaries ("we," "our," or "Shilp"). Our sites are made available
            to you free of charge for browsing and use.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Accuracy of Information on Our Sites</h2>
          <p className="text-xl text-[#727272]">
            We make reasonable efforts to ensure that the content on our
            websites is up-to-date and accurate. However, we do not guarantee
            the accuracy, completeness, or reliability of the content, and we
            are under no obligation to update or correct any errors or
            omissions. We do not offer any warranties or representations
            concerning the accuracy of information, and we are not liable for
            any damages arising from relying on such information.
          </p>
          <p className="text-xl text-[#727272]">
            Content on our websites is for general guidance only. Always seek
            professional advice and verification before making any decisions
            based on information from our site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Accessing Our Site</h2>
          <p className="text-xl text-[#727272]">
            Our websites are made available free of charge. Access is provided
            on a temporary basis, and we reserve the right to suspend, withdraw,
            or modify all or any part of our websites without notice. We do not
            guarantee uninterrupted access and are not liable for any downtime
            or interruptions.
          </p>
          <p className="text-xl text-[#727272]">
            You are responsible for ensuring that all individuals who access our
            websites through your internet connection are aware of these terms
            and comply with them. You may not disclose any user identification
            or passwords to third parties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Intellectual Property Rights</h2>
          <p className="text-xl text-[#727272]">
            We hold all intellectual property rights to the content on our
            websites. No part of the website may be copied, reproduced, or used
            for commercial purposes without prior written permission. You may
            download or print content for personal, non-commercial use only, and
            you must acknowledge Shilp Group as the source of the material.
          </p>
          <p className="text-xl text-[#727272]">
            Any unauthorized use of our website’s content will result in the
            immediate termination of your right to access and use the site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Links to Third-Party Websites :</h2>
          <p className="text-xl text-[#727272]">
            Our websites may contain links to third-party websites for your
            convenience. We are not responsible for the content of external
            sites, and these links do not imply our endorsement of those sites.
            Use of third-party websites is at your own risk.
          </p>
          <p className="text-xl text-[#727272]">
            You may link to our homepage, provided it is done in a fair and
            legal manner that does not damage our reputation. However, you may
            not establish a link to any part of our website other than the
            homepage.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Privacy Policy</h2>
          <p className="text-xl text-[#727272]">
            We value your privacy. Our Privacy Policy outlines how we collect,
            process, and protect your personal data. By using our websites, you
            consent to the processing of your personal data as described in the
            Privacy Policy.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Applicable Law</h2>
          <p className="text-xl text-[#727272]">
            These Terms and Conditions are governed by the laws of India. Any
            disputes arising from these terms will be subject to the exclusive
            jurisdiction of the courts in Gujarat, India.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Refund and Cancellation Policy</h2>
          <p className="text-xl text-[#727272]">
            Shilp Group aims for complete customer satisfaction. Our refund and
            cancellation policy is as follows:
          </p>
          <p className="text-xl text-[#727272]">
            <strong>Booking Policy:</strong> A token amount is required to hold
            a unit. To confirm your preferred unit, you must pay the booking
            amount and submit all necessary documents within one week. Failure
            to do so will result in the unit being made available to others.
          </p>
          <p className="text-xl text-[#727272]">
            <strong>Cancellation Policy:</strong> Please visit the Shilp House
            for details regarding cancellations.
          </p>
          <p className="text-xl text-[#727272]">
            <strong>Refund Policy:</strong> If applicable, Shilp will process a
            refund for the token amount within one month. Full refunds are
            available without deductions, as long as the process is followed.
          </p>
          <p className="text-xl text-[#727272]">
            <strong>Shipping & Orders:</strong> All payments and bookings should
            be made through the Shilp Smart Society application. A booking
            confirmation and receipt will be sent automatically via email once
            the booking is completed.
          </p>
          <p className="text-xl text-[#727272]">
            <strong>Important Disclaimer:</strong> While we take security and
            privacy seriously, it is important that you exercise caution when
            sharing sensitive information. We are not responsible for any losses
            resulting from sharing information with third parties who are not
            officially affiliated with Shilp Group. Always ensure that you are
            engaging with official Shilp channels.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Contact Us</h2>
          <p className="text-xl text-[#727272]">
            For any inquiries or issues, please contact us via email at
            info@shilpgroup.com.
          </p>
          <p className="text-xl text-[#727272]">
            Thank you for visiting Shilp Group's website.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
