import React from "react";
import { Lightsaber } from "@/components/ui/lightsaber";


export function LightSaber () {
    
  return (
    <div className="scale-66 w-full justify-start">
      <Lightsaber className="w-[80vw] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" />
    </div>
  );
}
export default LightSaber;