import React from "react";
import Button from "./Button";
import { Image } from "antd";

const GetApp = () => {
  return (
    // This is the component that displays the download app section on the home page.
    <section className="flexCenter w-full flex-col ">
      <div className="get-app">
        <div className=" flex w-full flex-1 flex-col items-start justify-center ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get App Now!</h2>
          <p className="bold-16 text-gray-10">Available on Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <div className="flex flex-1 items-center justify-center">
          <Image
            width={200}
            src="https://www.automovill.com/assets/images/others/download.png"
            preview={false}
          />
        </div>
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_ablue"
              full
            />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default GetApp;
