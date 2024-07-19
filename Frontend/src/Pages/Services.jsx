import React, { useEffect, useState } from "react";
import TitleCard from "../Components/TitleCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToggleElement from "../Components/ToggleElement";
import ImageUrl from "../../src/assets/services_page.jpg";
import { Element, animateScroll, Link } from "react-scroll";
function Services() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);
  const [isToggle3, setIsToggle3] = useState(false);
  const [isToggle4, setIsToggle4] = useState(false);
  const [isToggle5, setIsToggle5] = useState(false);

  const handleToggle1 = () => {
    setIsToggle1(!isToggle1);
  };

  const handleToggle2 = () => {
    setIsToggle2(!isToggle2);
  };

  const handleToggle3 = () => {
    setIsToggle3(!isToggle3);
  };

  const handleToggle4 = () => {
    setIsToggle4(!isToggle4);
  };

  const handleToggle5 = () => {
    setIsToggle5(!isToggle5);
  };
  return (
    <>
      <Header />
      <Link to="scrollToDiv" smooth={true} duration={800}>
        <TitleCard title="Our Services" imgUrl={ImageUrl} />
      </Link>
      <Element name="scrollToDiv" className="w-screen bg-white pb-10">
        <div className=" bg-white w-screen pb-10 flex flex-col items-center justify-center  gap-5">
          <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mx-2 text-center mb-5">
            Our Services
          </h2>

          <div className=" justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
            Primerise Pty Ltd provides a comprehensive suite of services that is
            designed to meet the unique needs of businesses looking to establish
            a presence in Australia while ensuring compliance, privacy. and
            strategic guidance.
            <div className="w-full mt-4 mx-2">
              {/**------------------------------------------- */}
              <div
                className="flex flex-col mb-3 max-w-xl md:max-w-2xl lg:max-w-5xl text-2xl w-full "
                key={1}
              >
                <div
                  className="flex items-center justify-between font-bold w-full cursor-pointer"
                  onClick={handleToggle1}
                >
                  <div className="text-base">
                    <span className="font-bold">
                      1. Nominee Director Appointment
                    </span>
                  </div>
                  <div>
                    {isToggle1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={` text-white text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 my-2 bg-gray-500/90 p-3 rounded-lg ${
                    isToggle1 ? "block" : "hidden"
                  }`}
                >
                  <p>
                    Ensure compliance with Australian regulations by appointing
                    one of our experienced Nominee Directors.
                    <br />
                    <ol className="m-2 ">
                      <li>
                        <b>1. Legal Compliance:</b> Fulfill the requirement of
                        having a local director in Australia.
                      </li>
                      <li>
                        <b>2. Strategic Guidance:</b> Ensure all necessary
                        paperwork is in order for regulatory compliance.
                      </li>
                    </ol>
                    Customizedcompliance solutions to fit the specific needs of
                    your business.
                  </p>
                </div>
              </div>
              {/**------------------------------------------------------------- */}
              <div
                className="flex flex-col mb-3 max-w-xl md:max-w-2xl lg:max-w-5xl text-2xl w-full "
                key={2}
              >
                <div
                  className="flex items-center justify-between font-bold w-full cursor-pointer"
                  onClick={handleToggle2}
                >
                  <div className="text-base">
                    <span className="font-bold">2. Compliance Management</span>
                  </div>
                  <div>
                    {isToggle2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={` text-white text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 my-2 bg-gray-500/90 p-3 rounded-lg ${
                    isToggle2 ? "block" : "hidden"
                  }`}
                >
                  <p>
                    Stay on the right side of the law with our proactive
                    approach to compliance management.
                    <br />
                    <ol className="m-2 ">
                      <li>
                        <b>1. Regulatory Updates: </b> Stay informed about
                        changes in Australian corporate regulations.
                      </li>
                      <li>
                        <b>2. Documentation Assistance:</b> Ensure all necessary
                        paperwork is in order for regulatory compliance.
                      </li>
                    </ol>
                    Customized compliance solutions to fit the specific needs of
                    your business.
                  </p>
                </div>
              </div>
              {/**------------------------------------------------------------- */}

              <div
                className="flex flex-col mb-3 max-w-xl md:max-w-2xl lg:max-w-5xl text-2xl w-full "
                key={3}
              >
                <div
                  className="flex items-center justify-between font-bold w-full cursor-pointer"
                  onClick={handleToggle3}
                >
                  <div className="text-base">
                    <span className="font-bold">3. Stratigic Advisory</span>
                  </div>
                  <div>
                    {isToggle3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={` text-white text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 my-2 bg-gray-500/90 p-3 rounded-lg ${
                    isToggle3 ? "block" : "hidden"
                  }`}
                >
                  <p>
                    Beyond compliance, our Nominee Directors provide strategic
                    insights to drive business success.
                    <br />
                    <ol className="m-2 ">
                      <li>
                        <b>1. Market Understanding: </b> Leverage our local
                        expertise for informed decision-making.
                      </li>
                      <li>
                        <b>2. Business Growth: </b> Receive strategic advice to
                        support your business expansion.
                      </li>
                    </ol>
                    Strategic advisory services tailored to your industry and
                    business goals.
                  </p>
                </div>
              </div>
              {/**------------------------------------------------------------- */}
            </div>
          </div>

          <div className=" justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2  text-left">
            <h2 className="text-gray-700 font-bold text-3xl lg:text-5xl mt-20 mb-5 text-center">
              Company Registration and Regulatory Requirements
            </h2>
            <p className="justify-around items-center text-black text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 text-left">
              Registering a company in Australia involves several steps,
              including meeting regulatory requirements and obtaining necessary
              tax registrations. Here's a general guide on the process:
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

              {/**------------------------------------------- */}
              <div
                className="flex flex-col mb-3 max-w-xl md:max-w-2xl lg:max-w-5xl text-2xl w-full "
                key={4}
              >
                <div
                  className="flex items-center justify-between font-bold w-full cursor-pointer"
                  onClick={handleToggle4}
                >
                  <div className="text-base">
                    <span className="font-bold">
                      4. Company Tax File Number(TFN) Registration
                    </span>
                  </div>
                  <div>
                    {isToggle4 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={` text-white text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 my-2 bg-gray-500/90 p-3 rounded-lg ${
                    isToggle4 ? "block" : "hidden"
                  }`}
                >
                  <p>
                    <br />
                    <ol>
                      <li>
                        1. Your company will need a Tax File Number (TFN) to
                        meet its tax obligations.
                      </li>
                      <li>
                        2. How to Register: Apply for a TFN for your company
                        through the ATO website.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
              {/**------------------------------------------------------------- */}

              <div
                className="flex flex-col mb-3 max-w-xl md:max-w-2xl lg:max-w-5xl text-2xl w-full "
                key={5}
              >
                <div
                  className="flex items-center justify-between font-bold w-full cursor-pointer"
                  onClick={handleToggle5}
                >
                  <div className="text-base">
                    <span className="font-bold">
                      5. Business Activity Statement (BAS)
                    </span>
                  </div>
                  <div>
                    {isToggle5 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={` text-white text-base max-w-xl md:max-w-2xl lg:max-w-5xl mx-2 my-2 bg-gray-500/90 p-3 rounded-lg ${
                    isToggle5 ? "block" : "hidden"
                  }`}
                >
                  <p>
                    <ol className="m-2 ">
                      <li>
                        1. Businesses registered for GST need to submit a
                        Business Activity Statement (BAS) regularly to report
                        GST, pay as you go (PAYG) withholding, and other taxes.
                      </li>
                      <li>
                        2. How to Lodge: BAS can be lodged online through the
                        ATO Business Portal or with the help of your tax
                        professional.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>
              {/**------------------------------------------------------------- */}
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
              information on the official website of the Australian Securities
              and Investments Commission (ASIC) or consult legal professionals
              for the most up-to-date details.
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
              In addition to the Nominee Director Services offered by our
              company, we have partnered with accounting firms, legal firms, and
              we have access to professional business services provider who we
              will be able to reach out in order to assist your business to
              operate smoothly.
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
      </Element>
      <Footer />
    </>
  );
}

export default Services;
