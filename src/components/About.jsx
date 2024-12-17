import React, { Fragment } from "react";
import building from "../assets/img/building4.png";
import whyUs from "../assets/img/why-us.png"

const About = () => {
  return (
    <Fragment>
      <div className="flex justify-between items-center gap-6 p-20">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#37517E" }}>
            About
          </h1>
          <p className="text-lg" style={{ color: "#848484" }}>
            Jiffy Software Solutions Pvt Ltd (OPC) is a rapidly advancing entity
            in the Information Technology and Telecommunications sector,
            providing an extensive array of services to renowned brands
            nationally and internationally. Our expertise spans across diverse
            domains, encompassing IVR, SMS, USSD, Mobile Value-Added Services
            (VAS), and Mobile Applications. At Jiffy, our commitment to
            excellence is driven by a team of seasoned, dynamic, and highly
            motivated telecom professionals. We adhere to a set of operational
            standards that prioritize principles such as Integrity, Innovation,
            and unwavering Dedication to our valued customers. Benefiting from
            the extensive industry experience of our founding team, Jiffy is
            well-equipped to deliver Managed Services Platforms, including VAS
            Telecom Charging, Content Management, and Enterprise Messaging
            Solutions in the Mobile Space. Our focus on innovation and integrity
            ensures that we meet the evolving needs of our clients with
            exceptional solutions and services.
          </p>
        </div>
        <div className="w-1/2">
          <img src={building} alt="Building" className="w-full h-auto" />
        </div>
      </div>


      <div className="flex justify-between items-center gap-6 p-20">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#37517E" }}>
          KEY FACTS
        </h1>
        <p className="text-lg" style={{ color: "#848484" }}>
          JIFFY SOFTWARE SOLUTIONS with its sister company named
          3d-Entertainment (Formerly known as Intra-Planet Mobile Solutions) is
          a leading Content House in India a focus on offering huge collection
          of Bollywood, Sports, Devotional, Regional contents for Mobile Space
          which consists of 60,000 + minutes of original audio & video mobile
          content 30,000 content pieces and 2,000 IP products across various
          genres. we strive to empower businesses and organizations to thrive in
          the digital age. Our expertise spans across SMSC IVR USSD, providing
          end-to-end solutions from concept to execution. We Being a technology
          company have made its CMS, Messaging Platform & OCG platform live with
          some of the leading VAS Services providers in India and overseas
          within a short time span. At this moment JIFFY-CMS is handling more
          than 2 million hits a day. What sets us apart is our unwavering
          commitment to quality, reliability, and innovation. We take pride in
          our team of skilled professionals who bring a wealth of experience and
          expertise to every project. By staying abreast of the latest
          technological advancements and industry trends, we ensure that our
          clients stay ahead of the curve in today's competitive market.
          Furthermore, JIFFY is deeply committed to corporate social
          responsibility and sustainability.
        </p>
      </div>
      <div className="w-1/2">
        <img src={whyUs} alt="Why Us" className="w-full h-auto" />
      </div>
      </div>
    </Fragment>
  );
};

export default About;
