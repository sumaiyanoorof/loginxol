import React from 'react'
import { modules } from '../Constants';



const ModuleCard = ({ module }) => {
  return (
     <div className="flex flex-1 h-[550px] flex-row gap-5 rounded-lg w-full mx-auto p-4">
      <div className="bg-gradient-to-t from-gray-900/80 via-red-700/55 to-gray-900  mx-auto rounded-tl-[60px] rounded-br-[60px] border-t-5 border-b-5  border-t-red-700/80 border-b-red-700/80 rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:-translate-y-4 hover:shadow-xl cursor-pointer">
         {/* module image */}
        <img
          src={ module.image}
          alt={ module.title}
          className="w-full h-48 object-cover"
        />
        {/* module content */}
        <div className="p-4 flex-row">
          <h2 className="text-xl text-white/90 font-bold mt-6 mb-2">{module.title}</h2>
          <p className="text-white/90 mt-5 text-sm">{module.description}</p>
        </div>
      </div>
      
    </div>

  );
};

export default ModuleCard;
