import React from "react";
import Button from "../ButtonNew/Button";
// import NavbarT from "../Navbar/NavbarT";
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import CardCmp from "../cardCmp";
// import cardData from "../cardCmp/cardData";
// import WhyChoose from "../WhyChooseCmp";

function About({ type }) {
  return (
    <>
      <div className="landingContainer about-page text-center">
        <div className="lg:p-[100px] py-[30px]">
          <div className=" m-auto px-6 md:px-12 xl:px-6">
            <div className="md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12 ">
                <img
                src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929235/branding%20hopes/Option_03_scel4o.jpg"

                  alt="image"
                  // h-[50vh] neechy
                  className="sm:w-[100%] "
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-[#fca311] font-bold md:text-4xl">
                  About Branding Hopes
                </h2>
                <p className="text mt-6 text-white text-center">
                  At Branding Hopes, we are more than just a digital marketing
                  agency – we are your partners in success. With a passion for
                  creativity and a drive for results, we are dedicated to
                  helping businesses like yours thrive in the digital age.
                </p>
                <div className='mt-[2rem]'>
                  <Button text='Learn More' link='/about'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-evenly flex-wrap gap-[20px]">
          {cardData.map((data) => (
            <CardCmp data={data} />
          ))}
        </div>
        <WhyChoose /> */}
        {/* <div className="pb-16 ">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex lg:flex-row md:flex-col-reverse md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-[#59c174] font-bold md:text-4xl">
                                    React development is carried out by passionate developers
                                </h2>
                                <p className="text mt-4 text-[#2c2e48]">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                                    accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                                    aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                                </p>
                                <p className=" text mt-4 text-[#2c2e48]">
                                    Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                                    Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                                </p>
                            </div>
                            <div className="md:5/12 lg:w-5/12">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9n1sjJTkKooonpC7CDHFTLBZ7VDFDqDf9oXgrPD7QQ&s"
                                    alt="image"
                                    width={500}
                                    className='sm:w-[100%]'
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default About;
