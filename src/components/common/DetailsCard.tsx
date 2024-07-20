import React from "react";
import { DetailsCardProps } from "./interface";
import { formatDate } from "../../utils/dateUtils";

const DetailsCard: React.FC<DetailsCardProps> = ({
  name,
  ID,
  job,
  joiningDate,
}) => {
  const formattedDate = formatDate(joiningDate);
  const details = [
    { label: "Name", value: name },
    { label: "ID", value: ID },
    { label: "Job", value: job },
    { label: "Joining Date", value: formattedDate },
  ];

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <span className="text-5xl font-extrabold tracking-tight">
            Details
          </span>
          <ul className="space-y-5 my-7">
            {details.map((detail) => (
              <li
                key={detail.label}
                className="text-base font-normal leading-tight text-gray-700 ms-3"
              >
                {detail.label} = {detail.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
