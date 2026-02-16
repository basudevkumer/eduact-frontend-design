import React, { useState } from "react";
import Container from "../commonComponent/Container";
import Bredcrumb from "../commonComponent/Bredcrumb";

function InputField({ placeholder, width = "311px" }) {
  return (
    <div
      className="bg-[#f6f6f6] h-[60px] relative rounded-[4px] shrink-0"
      style={{ width }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="absolute w-full h-full bg-transparent font-['Urbanist',sans-serif] font-semibold leading-[26px] left-[30px] text-[#697585] text-[16px] top-0 border-none outline-none"
        style={{ width: `calc(100% - 60px)` }}
      />
    </div>
  );
}

function TextAreaField() {
  return (
    <div className="bg-[#f6f6f6] h-[176px] relative rounded-[4px] shrink-0 w-[642px]">
      <textarea
        placeholder="Write a Message"
        className="absolute w-full h-full bg-transparent font-['Urbanist',sans-serif] font-semibold leading-[26px] left-[30px] pt-[17px] text-[#697585] text-[16px] top-0 border-none outline-none resize-none"
        style={{ width: `calc(100% - 60px)` }}
      />
    </div>
  );
}

function Checkbox({ checked, onChange, label }) {
  return (
    <div
      className="content-stretch flex gap-[15px] items-center relative shrink-0 cursor-pointer"
      onClick={onChange}
    >
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div
          className={`col-1 ml-0 mt-0 rounded-[3px] row-1 size-[24px] transition-colors ${
            checked ? "bg-[#f57005]" : "bg-white border-2 border-[#697585]"
          }`}
        />
        {checked && (
          <div className="col-1 ml-[6px] mt-[6px] relative row-1 size-[12px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M4.19632 10.2057C4.04557 10.2057 3.89481 10.148 3.77996 10.0332L0.172757 6.42585C-0.0575858 6.19562 -0.0575858 5.82336 0.172757 5.59312C0.402993 5.36289 0.775144 5.36289 1.00549 5.59312L4.19632 8.78396L10.9946 1.98582C11.2248 1.75558 11.597 1.75558 11.8273 1.98582C12.0575 2.21616 12.0575 2.58831 11.8273 2.81865L4.6128 10.0332C4.49795 10.148 4.34708 10.2057 4.19632 10.2057Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="font-['Urbanist',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#697585] text-[20px]">
        {label}
      </p>
    </div>
  );
}

function RadioButton({ checked, onChange, label, description }) {
  return (
    <div className="relative">
      <div
        className="flex gap-[13px] items-start cursor-pointer"
        onClick={onChange}
      >
        <div className="relative shrink-0 mt-[3px]">
          <div
            className={`size-[24px] rounded-[100px] transition-colors ${
              checked ? "bg-[#f57005]" : "bg-white border-2 border-[#697585]"
            }`}
          />
          {checked && (
            <div className="absolute left-[6px] size-[12px] top-[6px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M4.19632 10.2057C4.04557 10.2057 3.89481 10.148 3.77996 10.0332L0.172757 6.42585C-0.0575858 6.19562 -0.0575858 5.82336 0.172757 5.59312C0.402993 5.36289 0.775144 5.36289 1.00549 5.59312L4.19632 8.78396L10.9946 1.98582C11.2248 1.75558 11.597 1.75558 11.8273 1.98582C12.0575 2.21616 12.0575 2.58831 11.8273 2.81865L4.6128 10.0332C4.49795 10.148 4.34708 10.2057 4.19632 10.2057Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[20px]">
            {label}
          </p>
          <p className="font-['Urbanist',sans-serif] font-semibold leading-[32px] text-[#697585] text-[16px] tracking-[0.32px] w-[469px] whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

const Checkout = () => {
  const [payment, setPayment] = useState("bank");
  const [sameAsBilling, setSameAsBilling] = useState(true);

  return (
    <div>
      <Bredcrumb slugHeading={"Checkout"} slug={"Shop"} />
      <Container>
        <div className="relative py-[60px]">
          <div className="absolute bg-[#f6f6f6] h-[93px] left-0 rounded-[14px] top-[60px] w-[643px]">
            <p className="absolute font-['Urbanist',sans-serif] font-medium left-[50px] text-[18px] top-[41px]">
              <span className="text-[#2a254d]">Have a coupon? </span>
              <span className="font-['Urbanist',sans-serif] font-bold text-[#f57005] cursor-pointer">
                Click here to enter your code
              </span>
            </p>
          </div>

          <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 top-[213px]">
            <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[32px]">
              Billing Details
            </p>
            <div className="content-stretch flex flex-col gap-[20px] items-start">
              <div className="content-stretch flex gap-[20px] items-start">
                <InputField placeholder="First Name" />
                <InputField placeholder="Last Name" />
              </div>

              <div className="content-stretch flex gap-[20px] items-start">
                <InputField placeholder="Email Address" />
                <InputField placeholder="Phone Number" />
              </div>

              <InputField placeholder="Company" width="642px" />

              <InputField placeholder="Address" width="642px" />

              <InputField
                placeholder="Apartment, Unit, etc(optional)"
                width="642px"
              />

              <div className="content-stretch flex gap-[20px] items-start">
                <InputField placeholder="Town/City" />
                <InputField placeholder="State" />
              </div>

              <div className="content-stretch flex gap-[20px] items-start">
                <InputField placeholder="Zip code" />
                <InputField placeholder="Country" />
              </div>
            </div>
          </div>

          <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[680px] top-[213px]">
            <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[32px]">
              Additional Information
            </p>
            <TextAreaField />
          </div>

          <div className="absolute content-stretch flex flex-col gap-[43px] items-start left-0 top-[895px]">
            <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[32px]">
              Shipping Details
            </p>
            <Checkbox
              checked={sameAsBilling}
              onChange={() => setSameAsBilling(!sameAsBilling)}
              label="Same as  Billing Details"
            />
          </div>

          <div className="absolute left-0 top-[1104px]">
            <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[32px] mb-[62px]">
              Your Order
            </p>

            <div className="w-[642px] h-0 relative mb-[30px]">
              <svg
                className="block w-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 642 1"
              >
                <line stroke="#E4E4E4" x2="642" y1="0.5" y2="0.5" />
              </svg>
            </div>

            <div className="flex justify-between mb-[30px] w-[642px]">
              <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[20px]">
                Product
              </p>
              <p className="font-['Urbanist',sans-serif] font-bold leading-[47px] text-[#2a254d] text-[20px]">
                Price
              </p>
            </div>

            <div className="w-[642px] h-0 mb-[30px]">
              <svg
                className="block w-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 642 1"
              >
                <line stroke="#E4E4E4" x2="642" y1="0.5" y2="0.5" />
              </svg>
            </div>

            <div className="flex flex-col gap-[30px] mb-[30px] font-['Urbanist',sans-serif] font-medium text-[#2a254d] text-[20px]">
              <div className="flex justify-between w-[642px]">
                <p>Product Name</p>
                <p>$10.33</p>
              </div>
              <div className="flex justify-between w-[642px]">
                <p>Subtotal</p>
                <p>$10.33</p>
              </div>
              <div className="flex justify-between w-[642px]">
                <p>Shipping</p>
                <p>$0.00</p>
              </div>
            </div>

            <div className="w-[638px] h-0 mb-[30px]">
              <svg
                className="block w-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 638 1"
              >
                <line stroke="#E4E4E4" x2="638" y1="0.5" y2="0.5" />
              </svg>
            </div>

            <div className="flex justify-between w-[642px] font-['Urbanist',sans-serif] font-bold text-[#2a254d] text-[20px]">
              <p>Total</p>
              <p>$20.00</p>
            </div>
          </div>

          <div className="absolute left-[680px] top-[1166px]">
            <div className="bg-[#f6f6f6] h-[382px] rounded-[14px] w-[642px] relative mb-[50px]">
              <div className="absolute left-[40px] top-[40px]">
                <RadioButton
                  checked={payment === "bank"}
                  onChange={() => setPayment("bank")}
                  label="Direct bank transfer"
                  description="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                />
              </div>
              <div className="absolute left-[40px] top-[209px]">
                <RadioButton
                  checked={payment === "cash"}
                  onChange={() => setPayment("cash")}
                  label="Cash on delivery"
                  description="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                />
              </div>
            </div>
            <div className="h-[56px] overflow-clip relative rounded-[6px] w-[238px] cursor-pointer">
              <div className="absolute bg-[#f57005] content-stretch flex h-[56px] items-center justify-center left-0 px-[32px] rounded-[6px] top-0 w-full hover:bg-[#e66504] transition-colors">
                <div className="content-stretch flex gap-[10px] items-center">
                  <p className="font-['Urbanist',sans-serif] font-bold text-[18px] text-white">
                    Place your Order
                  </p>
                  <div className="flex items-center justify-center rotate-180">
                    <div className="relative size-[18px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M16.5 8.25H3.3105L7.28025 4.28025C7.35188 4.21106 7.40902 4.12831 7.44833 4.0368C7.48763 3.9453 7.50832 3.84689 7.50919 3.7473C7.51005 3.64772 7.49108 3.54896 7.45337 3.45678C7.41566 3.36461 7.35997 3.28087 7.28955 3.21045C7.21913 3.14003 7.13539 3.08434 7.04322 3.04663C6.95104 3.00892 6.85228 2.98995 6.7527 2.99081C6.65311 2.99168 6.5547 3.01237 6.4632 3.05167C6.37169 3.09098 6.28893 3.14812 6.21975 3.21975L0.96975 8.46975C0.829146 8.6104 0.75016 8.80113 0.75016 9C0.75016 9.19887 0.829146 9.3896 0.96975 9.53025L6.21975 14.7803C6.3612 14.9169 6.55065 14.9925 6.7473 14.9908C6.94395 14.989 7.13206 14.9102 7.27111 14.7711C7.41017 14.6321 7.48905 14.4439 7.49075 14.2473C7.49246 14.0507 7.41687 13.8612 7.28025 13.7197L3.3105 9.75H16.5C16.6989 9.75 16.8897 9.67098 17.0303 9.53033C17.171 9.38968 17.25 9.19891 17.25 9C17.25 8.80109 17.171 8.61032 17.0303 8.46967C16.8897 8.32902 16.6989 8.25 16.5 8.25Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[56px] right-0 top-0 w-[33px] pointer-events-none">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 33 56"
                >
                  <path
                    d="M26.561 0H33V56H0L26.561 0Z"
                    fill="#F7F5F5"
                    fillOpacity="0.21"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[1700px]" />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
