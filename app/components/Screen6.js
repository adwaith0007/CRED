import React from "react";
import Image from "next/image";

function Screen6() {
  return (
    <div className="w-full h-screen flex flex-row bg-[#0f0f0f] text-white ">
      <div className="w-[50%] h-full">
        <div className="mt-10 flex flex-col ">
          <div>
            <h1>we’ve got your back.</h1>
          </div>

          <div>
            <p>
              gain complete control over your credit card with CRED Protect.
              receive category-based analysis of your spends, detect hidden
              charges, and track your credit limit in real-time.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col ">
          <div>
            <h1>begin your winning streak.</h1>
          </div>

          <div>
            <p>
              use your CRED coins to participate in games and raffles to win the
              most exclusive rewards and cashbacks on CRED. good luck.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col ">
          <div>
            <h1>for your eclectic taste.</h1>
          </div>

          <div>
            <p>
              get access to the CRED Store, a member-exclusive selection of
              products and experiences at special prices that complement your
              taste. this is the good life they speak of.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col ">
          <div>
            <h1>more cash in your pockets.</h1>
          </div>

          <div>
            <p>
              switch to CRED RentPay and start paying rent with your credit
              card. this way you get up to 45 days of credit free period, more
              reward points and a happy landlord.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full flex justify-center ">
        <div>
          <div>
            <Image height={200} width={100} src="/neopop-fold1.webp"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen6;
