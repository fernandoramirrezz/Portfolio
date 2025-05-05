import React from "react";
import { Lightsaber } from "@/components/ui/lightsaber";


export function LightSaber () {
    
  return (
    <div className="lg:scale-90 md:scale-75 scale-49 w-full flex-1/2 justify-end">
      <Lightsaber className="w-[80vw] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" />
    </div>
  );
}
export default LightSaber;