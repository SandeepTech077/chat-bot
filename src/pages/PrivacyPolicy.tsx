import Images from "../assets/Images";
import BannerImg from "../components/BannerImg";
import mobile_pp from "../assets/Images/mobile/shilp-privacy-policy.webp"

const PrivacyPolicy = () => {
  return (
    <>
      <BannerImg image={Images.newPrivacyPolicyBanner} className="sm:block hidden" />
      <BannerImg image={mobile_pp} className="sm:hidden block" />
      <section className="px-5 md:px-10 overflow-hidden space-y-8 py-10 ">
        <div>
          <p className="text-xl text-[#727272]">
            We at SHILP Group are dedicated to safeguarding and upholding your
            privacy. When you visit our website, www.shilpgroup.com, or use any
            of our linked mobile applications (collectively, "Sites"), we
            gather, use, and retain your personal data in accordance with this
            privacy policy, our terms of use, and any other agreements mentioned
            on it. You agree to the data practices outlined in this policy by
            using our sites.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Data We Could Gather</h2>
          <p className="text-xl text-[#727272]">
            The following information about you may be gathered and processed by
            us:
          </p>
          <p className="text-xl text-[#727272]">
            Information you provide to us : This includes any personal
            information you share with us by filling out forms on our Sites,
            submitting your CV, corresponding with us via phone or email, or
            interacting with our business partners. This may include your name,
            address, email, phone number, and other relevant details regarding
            your inquiry or request.
          </p>
          <p className="text-xl text-[#727272]">
            Information we receive from other sources : We may receive
            information about you from other third parties that provide services
            related to our operations, such as business partners,
            subcontractors, payment service providers, and analytics providers.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">How We Use Your Information</h2>
          <p className="text-xl text-[#727272]">
            We use the information we collect for the following purposes :
          </p>
          <p className="text-xl text-[#727272]">
            To provide requested services : This includes processing inquiries,
            facilitating contracts, delivering requested services, and providing
            updates on SHILP Group's projects and ventures.
          </p>
          <p className="text-xl text-[#727272]">
            To improve our Sites : We use collected data to troubleshoot, test,
            and enhance the user experience, ensuring that content is tailored
            effectively to your needs.
          </p>
          <p className="text-xl text-[#727272]">
            To communicate with you : We may send you information about other
            products, services, and opportunities we believe may interest you,
            provided you have consented to such communications.
          </p>
          <p className="text-xl text-[#727272]">
            For advertising and marketing : We may share your data with
            third-party advertisers and analytics providers to deliver relevant
            advertisements and measure the effectiveness of our marketing
            efforts.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Disclosure of Your Information</h2>
          <p className="text-xl text-[#727272]">
            We may share your personal data with :
          </p>
          <p className="text-xl text-[#727272]">
            SHILP Group affiliates : This includes subsidiaries and other
            companies within the SHILP Group.
          </p>
          <p className="text-xl text-[#727272]">
            Business partners and service providers : We may share your
            information with suppliers, agents, subcontractors, and professional
            advisors for contract performance or to provide services.
          </p>
          <p className="text-xl text-[#727272]">
            Third-party service providers : This may include advertising
            networks, analytics providers, and search engine providers who
            assist in improving our Sites and marketing efforts.
          </p>
          <p className="text-xl text-[#727272]">
            Legal obligations : If necessary, we may disclose your personal
            information to comply with legal obligations or protect our rights,
            property, or safety.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Where We Store Your Personal Data</h2>
          <p className="text-xl text-[#727272]">
            The data we collect may be stored and processed by SHILP Group or
            third-party suppliers located outside your home country. We ensure
            that your data is treated securely through technical and
            organizational measures. Unfortunately, no data transmission method
            over the internet is entirely secure, and we cannot guarantee the
            absolute security of your data.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl">Cookies :</h2>
          <p className="text-xl text-[#727272]">
            Our Sites may use cookies to enhance user experience, analyze site
            usage, and personalize content. By continuing to use our Sites, you
            consent to the use of cookies. You can block or disable cookies
            through your browser settings, but doing so may impact the
            functionality of our Sites.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Your Rights :</h2>
          <p className="text-xl text-[#727272]">
            You have the right to request that we do not process your personal
            data for marketing purposes. You can also request access to,
            correction, or deletion of your personal data, subject to legal
            obligations.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Changes to our Privacy Policy :</h2>
          <p className="text-xl text-[#727272]">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page, and where appropriate, we will notify
            you via email.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl ">Contact :</h2>
          <p className="text-xl text-[#727272]">
            If you have any questions or concerns about this privacy policy,
            please contact us at info@shilpgroup.com.
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

export default PrivacyPolicy;
