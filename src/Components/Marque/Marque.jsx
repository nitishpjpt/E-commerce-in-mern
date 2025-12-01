import React from "react";
import Marquee from "react-fast-marquee";

import p1 from "../../assets/hp.png";
import p2 from "../../assets/boeing.3037b0a6.png";
import p3 from "../../assets/nasa.png";
import p4 from "../../assets/dell.png";

const Marque = () => {
    return (
        <div className="w-full bg-#F9FAFB py-14">
            <Marquee speed={50} pauseOnHover={true} gradient={false}>
                <div className="flex items-center gap-16">

                    {/* Item 1 */}
                    <div className="flex flex-col items-center min-w-max">
                        <img src={p1} className="h-18 w-auto object-contain mb-2" />
                        <span className="text-base font-semibold text-gray-700 text-center">
                            Google
                        </span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center min-w-max">
                        <img src={p2} className="h-18 w-auto object-contain mb-2" />
                        <span className="text-base font-semibold text-gray-700 text-center">
                            Meta
                        </span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center min-w-max">
                        <img src={p3} className="h-18 w-auto object-contain mb-2" />
                        <span className="text-base font-semibold text-gray-700 text-center">
                            Amazon
                        </span>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col items-center min-w-max">
                        <img src={p4} className="h-18 w-auto object-contain mb-2" />
                        <span className="text-base font-semibold text-gray-700 text-center">
                            Netflix
                        </span>
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default Marque;
