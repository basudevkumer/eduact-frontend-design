import React, { useState } from "react";
import Container from "../commonComponent/Container";
import Bredcrumb from "../commonComponent/Bredcrumb";
import Button from "../commonComponent/Button";
import { Link } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Office Chair", price: 10.33, quantity: 2 },
    { id: 2, name: "Round Chair", price: 10.33, quantity: 2 },
  ]);

  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <Bredcrumb slugHeading={"Cart"} slug={"Shop"} />

      <Container>
        <div className="relative w-full mt-[120px] mb-[120px] min-h-[720px] font-['Urbanist',sans-serif]">
          {/* Header */}
          <div className="absolute left-0 top-0 w-full">
            <div className="absolute left-0 top-0 text-[20px] font-bold text-[#2a254d] leading-[47px]">
              Item
            </div>
            <div className="absolute left-[477px] top-0 text-[20px] font-bold text-[#2a254d] leading-[47px]">
              Price
            </div>
            <div className="absolute left-[712px] top-0 text-[20px] font-bold text-[#2a254d] leading-[47px]">
              Quantity
            </div>
            <div className="absolute left-[981px] top-0 text-[20px] font-bold text-[#2a254d] leading-[47px]">
              Subtotal
            </div>
            <div className="absolute left-[1247px] top-0 text-[20px] font-bold text-[#2a254d] leading-[47px]">
              Remove
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[44px] w-[1320px] h-[1px] bg-[#e4e4e4]" />

          {cartItems.map((item, index) => {
            const topOffset = index === 0 ? 74 : 241;
            const titleTop = index === 0 ? 121 : 288;
            const qtyTop = index === 0 ? 105 : 272;
            const closeTop = index === 0 ? 118 : 285;
            const lineTop = index === 0 ? 211 : 378;

            return (
              <div key={item.id}>
                <div
                  className="absolute left-0 w-[109.918px] h-[107px] border border-[#e4e4e4] rounded-[6px] bg-[#f6f6f6] flex items-center justify-center"
                  style={{ top: `${topOffset}px` }}
                >
                  <div className="w-[115px] h-[115px] bg-[#152b4a] rounded-[4px]" />
                </div>

                <div
                  className="absolute left-[151px] text-[20px] font-bold text-[#2a254d]"
                  style={{ top: `${titleTop}px` }}
                >
                  {item.name}
                </div>

                <div
                  className="absolute left-[477px] text-[20px] text-[#2a254d]"
                  style={{ top: `${titleTop}px` }}
                >
                  ${item.price.toFixed(2)}
                </div>

                <div
                  className="absolute left-[712px] w-[153px] h-[46px] border border-[#e4e4e4] rounded-[10px] flex items-center justify-between bg-white"
                  style={{ top: `${qtyTop}px` }}
                >
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="flex-1 text-[20px] text-[#697585] bg-transparent border-none cursor-pointer"
                  >
                    −
                  </button>

                  <div className="flex-1 text-center text-[16px] font-bold text-[#2a254d] border-l border-r border-[#e4e4e4]">
                    {item.quantity}
                  </div>

                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="flex-1 text-[20px] text-[#697585] bg-transparent border-none cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div
                  className="absolute left-[981px] text-[20px] text-[#2a254d]"
                  style={{ top: `${titleTop}px` }}
                >
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute left-[1300px] w-[20px] h-[20px] text-[28px] text-[#c0c0c0] bg-transparent border-none cursor-pointer leading-none"
                  style={{ top: `${closeTop}px` }}
                >
                  ×
                </button>

                <div
                  className="absolute left-1/2 -translate-x-1/2 w-[1320px] h-[1px] bg-[#e4e4e4]"
                  style={{ top: `${lineTop}px` }}
                />
              </div>
            );
          })}

          <div className="absolute left-0 top-[438px] flex gap-[20px] items-center">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-[303px] h-[56px] bg-[#f6f6f6] border border-[#e4e4e4] rounded-[6px] text-[16px] font-semibold px-[30px] text-[#2a254d]"
            />
            <div className="h-[56px] overflow-clip relative rounded-[6px] w-[204px] cursor-pointer">
              <div className="absolute bg-[#f57005] content-stretch flex h-[56px] items-center justify-center left-0 px-[32px] rounded-[6px] top-0 w-full hover:bg-[#e66504] transition-colors">
                <div className="content-stretch flex gap-[10px] items-center">
                  <p className="font-['Urbanist',sans-serif] font-bold text-[16px] font-weight-700 text-white">
                    Apply Coupon
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

          <div className="absolute left-[1029px] top-[438px]">
            <div className="relative h-[44px] flex items-center text-[20px] text-[#2a254d]">
              <div className="absolute left-0">Subtotal</div>
              <div className="absolute right-0">${subtotal.toFixed(2)}</div>
            </div>

            <div className="relative h-[44px] flex items-center text-[20px] text-[#2a254d]">
              <div className="absolute left-0">Shipping</div>
              <div className="absolute right-0">$0.00</div>
            </div>

            <div className="w-[291px] h-[1px] bg-[#e4e4e4]" />

            <div className="relative h-[30px] flex items-center text-[20px] font-bold text-[#2a254d] mt-[30px]">
              <div className="absolute left-0">Total</div>
              <div className="absolute right-0">${subtotal.toFixed(2)}</div>
            </div>

            <div className="absolute left-[-51px] top-[172px] flex gap-[20px]">
              <div className="h-[56px] overflow-clip relative rounded-[6px] w-[154px] cursor-pointer">
                <div className="absolute bg-[#2a254d] content-stretch flex h-[56px] items-center justify-center left-0 px-[32px] rounded-[6px] top-0 w-full hover:bg-[#1e1a3a] transition-colors">
                  <div className="content-stretch flex gap-[10px] items-center">
                    <p className="font-['Urbanist',sans-serif] font-bold text-[18px] text-white">
                      Update
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
              <div className="h-[56px] overflow-clip relative rounded-[6px] w-[168px] cursor-pointer">
                <div className="absolute bg-[#f57005] content-stretch flex h-[56px] items-center justify-center left-0 px-[32px] rounded-[6px] top-0 w-full hover:bg-[#e66504] transition-colors">
                  <div className="content-stretch flex gap-[10px] items-center">
                    <p className="font-['Urbanist',sans-serif] font-bold text-[18px] text-white">
                     <Link to={"/checkout"}> Checkout</Link>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
