import React from "react";

interface SkillIconProps {
  name: String;
}

function SkillIcon({ name }: SkillIconProps) {
  return (
    // <div className="flex items-center justify-center">
    //   <div className="inline-block rounded-2xl bg-[#08252e] px-3 py-1.5">
    //     <h1 className="text-md font-medium text-[#64FFDA]">{name}</h1>
    //   </div>
    // </div>
    <span className="inline-flex mb-2 mr-2 max-h-[32px] flex-shrink-0 items-center rounded-2xl bg-[#08252e] px-2.5 py-1.5 md:px-3 md:py-2 mt-1 text-sm md:text-base font-medium text-[#64FFDA]">
      {name}
    </span>
  );
}

export default SkillIcon;
