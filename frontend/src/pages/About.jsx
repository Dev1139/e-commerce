import React from 'react'
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"
import {assets} from '../assets/frontend_assets/assets'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we believe in timeless style and lasting quality. Our
            mission is to bring you an exclusive collection of fashion and
            lifestyle products that combine modern trends with everyday comfort.
            Whether you're shopping for essentials or making a statement,
            Forever is your go-to destination for items that never go out of
            style.
          </p>
          <p>
            We are more than just an online store—we’re a community of
            trendsetters who value elegance, affordability, and reliability.
            From carefully curated selections to seamless shopping experiences,
            we ensure that every detail reflects our dedication to excellence.
            Join us and experience fashion that truly lasts… Forever.
          </p>
          <b>Our Mission</b>
          <p>
            At Forever, our mission is to deliver timeless, high-quality
            products that blend style with comfort, while creating a seamless
            and satisfying shopping experience. We aim to inspire confidence and
            individuality through fashion that lasts — Forever.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure every product meets the highest standards of quality,
            durability, and design before it reaches you. Your satisfaction and
            trust are our top priorities.
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We offer a smooth, user-friendly shopping experience with easy
            navigation, quick checkouts, and reliable delivery—designed to fit
            your lifestyle effortlessly.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is always here to help, ensuring your
            questions are answered and issues resolved quickly—with care,
            respect, and a smile.
          </p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
}

export default About