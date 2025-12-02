import React from "react";

export default function Usercard() {
  return (
    <div className="bg-white w-60 min-h-[350px] rounded-xl shadow-lg p-4 flex flex-col items-center gap-4">
      
      <div className="w-28 h-28 rounded-xl overflow-hidden mt-14">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
          alt="profile"
        />
      </div>

      <div className="text-center">
        <h3 className="font-semibold text-lg">Prableen Kaur</h3>
        <h4 className="text-gray-600 text-sm">prableen@gmail.com</h4>
        <h4 className="text-gray-600 text-sm">9899999982</h4>
        <br />
        <h4 className="text-gray-600 text-sm">Delhi, India</h4>
      </div>

    </div>
  );
}
