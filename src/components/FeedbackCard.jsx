import { quotes } from "../assets";

const FeedbackCard = ({ img, content, title, name }) => (
  <div className="flex justify-between flex-col py-12 px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double quote"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-lg leading-8 text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-xl leading-8 text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-6 text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
