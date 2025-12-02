import React from "react";
import { FaCalendarAlt, FaVideo, FaFolderOpen } from "react-icons/fa";

export default function ActionButtons() {
  const actions = [
    {
      label: "Schedule a Webinar",
      icon: <FaCalendarAlt size={22} />,
    },
    {
      label: "Join a Webinar",
      icon: <FaVideo size={22} />,
    },
    {
      label: "Open Recordings",
      icon: <FaFolderOpen size={22} />,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-3 cursor-pointer
                     hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
        >
          <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center text-white">
            {item.icon}
          </div>

          <p className="text-sm text-gray-700 text-center font-medium">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
