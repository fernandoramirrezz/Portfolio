import { CometCard } from "@/components/ui/comet-card";

export function CometCardDemo() {
  return (
    <a 
      href=" https://www.figma.com/proto/WCBs1WXkRJe8XRKMG3MCnm/Still-Wireframe?node-id=11-996&p=f&t=UPhjbNq6pXLAKqUX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A996" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <CometCard>
        <div
          className="relative flex cursor-pointer flex-col items-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
          }}
        >
          {/* iPhone 16 Pro Frame */}
          <div className="relative max-w-[280px]">
            {/* Phone body with titanium gray frame */}
            <div className="relative bg-[#5a5a5c] rounded-[55px] p-[3px] shadow-2xl">
              {/* Inner black bezel */}
              <div className="relative bg-black rounded-[52px] p-2">
                {/* Dynamic Island */}
                <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-10 border border-[#1a1a1a]" />
                
                {/* Screen container */}
                <div className="relative rounded-[45px] overflow-hidden bg-black">
                  {/* App screenshot */}
                  <img
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    alt="Still App Interface"
                    src="Stillapp.PNG"
                    style={{
                      aspectRatio: "9/19.5",
                      minHeight: "550px",
                      maxHeight: "620px",
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Side buttons - Volume (left side) */}
            <div className="absolute -left-[2px] top-[140px] w-[3px] h-[50px] bg-[#5a5a5c] rounded-l-md" />
            <div className="absolute -left-[2px] top-[200px] w-[3px] h-[50px] bg-[#5a5a5c] rounded-l-md" />
            <div className="absolute -left-[2px] top-[260px] w-[3px] h-[50px] bg-[#5a5a5c] rounded-l-md" />
            
            {/* Side button - Power (right side) */}
            <div className="absolute -right-[2px] top-[180px] w-[3px] h-[80px] bg-[#5a5a5c] rounded-r-md" />
          </div>
        </div>
      </CometCard>
    </a>
  );
}