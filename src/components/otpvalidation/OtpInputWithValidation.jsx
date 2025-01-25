import React, { useState, useRef, useEffect } from "react";

const OtpInputWithValidation = () => {
  let numberOfDigits = 6;
  const correctOTP = "123456";
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== correctOTP) {
      setOtpError("Wrong OTP Please Check Again");
    } else {
      setOtpError(null);
    }
  }, [otp]);

  return (
    <>
      <article className="w-full bg-black p-6 text-center">
        <div className="">
          <p className="text-base text-white mt-6 mb-4 p-4">
            One Time Password (OTP)
          </p>

          <div className="flex items-center justify-center gap-4 p-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) =>
                  (otpBoxReference.current[index] = reference)
                }
                className={`border w-20 h-auto text-black p-3 rounded-md block bg-white focus:border-2 focus:outline-none appearance-none`}
              />
            ))}
          </div>

          <p
            className={`text-white text-sm mt-4 ${
              otpError ? "error-show" : ""
            }`}
          >
            {otpError}
          </p>
        </div>
      </article>
    </>
  );
};

export default OtpInputWithValidation;
