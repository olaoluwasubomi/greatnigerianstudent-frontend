import React from "react";
import privacydata from "./privacydata";
import Nav from "../Privacy/Nav";
const Privacy = () => {
  const data = privacydata.map((info, i) => {
    return (
      <div key={i} className="my-5">
        <ol className="list-decimal">
          <li className="text-lg font-bold">{i + 1}. {info.heading}</li>
          <ol className="list-disc">
            <li className="mt-2">{info.subheading}
              <ul>
                <li className="my-2">{info.text}</li>
              </ul>
            </li>
          </ol>
        </ol>

        {info.text2 && (
          <ol>
            <ol className="list-disc">
              <li className="mt-2">{info.subheading2}
                <ul>
                  <li className="my-2">{info.text2}</li>
                </ul>
              </li>
            </ol>
          </ol>
        )}

        {info.text3 && (
          <ol>
            <ol className="list-disc">
              <li className="list-disc mt-2">{info.subhead3}
                <ul>
                  <li className="my-2">{info.text3}</li>
                </ul>
              </li>
            </ol>
          </ol>
        )}
      </div>
    );
  });

  return (
    <div>
        <Nav />
        <div className="my-10 lg:w-1/2 md:w-1/2 sm:w-11/12 mx-auto bg-white shadow-lg rounded-xl lg:px-16 md:px-16 sm:px-6 py-16">
        <div>
        <p className="text-center text-4xl font-bold">Privacy Policy</p>
        <span className="text-center my-3 text-sm block">
          Last Updated 13th Dec.2023
        </span>
        <p className="my-5 text-xl font-bold text-justify px-0">
          Thank you for choosing the Great Nigerian Students (GNS) Platform. We
          are committed to protecting your privacy and providing a secure
          platform for collaboration and relationship building among skilled
          students across universities and colleges. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your personal
          information.
        </p>
      </div>

      <div>{data}</div>

      <div className="flex items-center justify-between lg:w-3/4 md:w-3/4 sm:w-full mx-auto mt-10">
        <a href="#" className="block lg:py-6 md:py-6 sm:py-3 w-5/12 text-center rounded-full decline text-xl font-bold">Decline</a>
        <a href="#" className="block lg:py-6 md:py-6 sm:py-3 w-5/12 text-center rounded-full navcolor text-white font-bold text-xl">Accept</a>
      </div>
    </div>
    </div>
    
  );
};

export default Privacy;