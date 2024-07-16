import React from "react";
import TitleCard from "../Components/TitleCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToggleElement from "../Components/ToggleElement";
import ImageUrl from "../../src/assets/services_page.jpg";
function Services() {
  return (
    <>
      <Header />
      <TitleCard title="Our Services" imgUrl={ImageUrl} />
      <div className=" bg-white w-screen pb-10 flex flex-col items-center justify-center  gap-5">
        <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mx-2 text-center mb-5">
          Our Services
        </h2>
        <div className=" justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
          Senmov Pty Ltd provides a comprehensive suite of services that is
          designed to meet the unique needs of businesses looking to establish a
          presence in Australia while ensuring compliance, privacy. and
          strategic guidance.
          <div className="w-full mt-4 mx-2">
            <ToggleElement
              order="1"
              title="Nominee Director Appointment"
              desc="Ensure compliance with Australian regulations by appointing one of our experienced Nominee Directors.
1. Legal Compliance: Fulfill the requirement of having a local director in Australia.
2. Strategic Guidance: Ensure all necessary paperwork is in order for regulatory compliance.
Customized compliance solutions to fit the specific needs of your business."
            />
            <ToggleElement
              order="2"
              title="Compliance Management"
              desc="Stay on the right side of the law with our proactive approach to compliance management.
1. Regulatory Updates: Stay informed about changes in Australian corporate regulations.
2. Documentation Assistance: Ensure all necessary paperwork is in order for regulatory compliance.
Customized compliance solutions to fit the specific needs of your business."
            />
            <ToggleElement
              order="3"
              title="Stratigic Advisory"
              desc="Beyond compliance, our Nominee Directors provide strategic insights to drive business success.
1. Market Understanding: Leverage our local expertise for informed decision-making.
2. Business Growth: Receive strategic advice to support your business expansion.
Strategic advisory services tailored to your industry and business goals."
            />
          </div>
        </div>

        <div className=" justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2  text-left">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5 text-center">
            Company Registration and Regulatory Requirements
          </h2>
          <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
            Registering a company in Australia involves several steps, including
            meeting regulatory requirements and obtaining necessary tax
            registrations. Here's a general guide on the process:
          </p>
          <div className="flex flex-col w-full items-start  mt-4 mx-2">
            <ToggleElement
              order="1"
              title="Australian Business Number (ABN) Registration"
              desc="Before registering for other taxes, you need to obtain an Australian Business Number (ABN). An ABN is a unique identifier for your business."
            />
            <ToggleElement
              order="2"
              title="Registering for Goods and Services Tax (GST)"
              desc="1. You are required to register for the Goods and Services Tax (GST) if your business has a GST turnover of $75,000 AUD or more.2. You can register for GST through the Australian Taxation Office (ATO) website or with the assistance of your tax professional."
            />
            <ToggleElement
              order="3"
              title="Registering for Pay As You Go (PAYG) Withholding"
              desc="If your business employs staff or pays other businesses, you may need to register for PAYG withholding. This involves withholding tax from payments and remitting it to the ATO. You can register for PAYG withholding through the ATO website."
            />
            <ToggleElement
              order="4"
              title="Company Tax File (CTF) Registration"
              desc=""
            />
            <ToggleElement
              order="5"
              title="Business Activity Statement (BAS)"
              desc=""
            />
            <ToggleElement
              order="6"
              title="Corporat Compliance"
              desc="Ensure that your company complies with the Corporations Act 2001. This includes maintaining proper records, holding annual general meetings, and submitting annual financial statements."
            />
            <ToggleElement
              order="7"
              title="Profissional Assistance"
              desc="Consider seeking professional advice from an accountant or tax professional to ensure that you meet all regulatory and tax obligations specific to your business."
            />
          </div>
        </div>

        <div className=" lg:max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5">
            DIN Application Process
          </h2>
          <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
            In Australia, the Director Identification Number (DIN) is a unique
            identifier assigned to individuals who are directors or intend to
            become directors of companies. It's essential to check the latest
            information on the official website of the Australian Securities and
            Investments Commission (ASIC) or consult legal professionals for the
            most up-to-date details.
          </p>
          <div className="flex flex-col w-full items-start  mt-4 mx-2">
            <ToggleElement
              order="1"
              title="Eligibility"
              desc="Ensure that you are eligible to apply for a DIN. Generally, individuals who are directors or intending directors of companies are required to obtain a DIN.

"
            />
            <ToggleElement
              order="2"
              title="Online Portal"
              desc="The DIN application process is expected to be conducted through an online portal provided by ASIC. Visit the ASIC website for the latest updates on the availability of the portal.

"
            />
            <ToggleElement
              order="3"
              title="Required Information"
              desc="Prepare the necessary information for the application, which may include personal details, contact information, and details about your directorship history.

"
            />
            <ToggleElement
              order="4"
              title="Verification"
              desc="The application process may involve identity verification to ensure the accuracy of the information provided.

"
            />
            <ToggleElement
              order="5"
              title="Application Free"
              desc="Check if there is an application fee associated with obtaining a DIN. Details about fee should be available on the ASIC website.
"
            />
          </div>
        </div>

        <div className="w-full justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2  text-left">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5">
            Referral, Support, and Consultation Services
          </h2>
          <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
            In addition to the Nominee Director Services offered by our company,
            we have partnered with accounting firms, legal firms, and we have
            access to professional business services provider who we will be
            able to reach out in order to assist your business to operate
            smoothly.
          </p>
        </div>

        <div className="w-full justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2  text-left">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5 text-center">
            How it Works
          </h2>
          <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left"></p>
          <div className="flex flex-col w-full items-start  mt-4 mx-2">
            <ToggleElement
              order="1"
              title="Consultation"
              desc="Schedule an initial consultation to discuss your business goals and specific needs.

"
            />
            <ToggleElement
              order="2"
              title="Tailord Proposal"
              desc="Receive a customized proposal outlining the Nominee Director Services that best align with your requirements.

"
            />
            <ToggleElement
              order="3"
              title="Seamless Appointment"
              desc="Once agreed, we facilitate the appointment of a Nominee Director, ensuring a smooth and legally compliant process."
            />
          </div>
        </div>

        <div className="w-full justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2  text-left">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mx-2 text-center mb-5">
            Work with us
          </h2>
          <p className="text-gray-700 text-xl m-5 text-center">
            Ready to embark on your Australian business journey?
          </p>
          <div className="mt-6 flex justify-center items-center">
            <a
              href="/contactus"
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer flex justify-center items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
