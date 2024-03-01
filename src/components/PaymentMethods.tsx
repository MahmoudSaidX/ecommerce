import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <article className="sm:w-1/2 my-2">
      <ul className="flex flex-row gap-2 items-center justify-center">
        <li>
          <FaCcVisa className="text-3xl" />
        </li>
        <li>
          <FaCcMastercard className="text-3xl" />
        </li>
        <li>
          <FaGooglePay className="text-3xl" />
        </li>
        <li>
          <FaCcApplePay className="text-3xl" />
        </li>
      </ul>
    </article>
  );
};

export default PaymentMethods;
