'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useEffect} from 'react';
import { useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure'
import Image from 'next/image';
import IconToUse1 from "../Assets/icons8-facebook (1).svg"
import IconToUse2 from "../Assets/icons8-instagram (1).svg"
import IconTouse3 from "../Assets/icons8-tiktok (1).svg"
import IconToUse4 from "../Assets/icons8-snapchat.svg"
import IconToUse5 from "../Assets/icons8-twitterx.svg"
import iconToUse6 from "../Assets/icons8-youtube.svg"
import IconToUse7 from "../Assets/icons8-whatsapp.svg"


export default function FooterToUseOnIntro(){

    let images:Array<string> =[IconToUse1,IconToUse2,IconTouse3,IconToUse4,IconToUse5,iconToUse6,IconToUse7]
  



    let [ref, {width}] = useMeasure();
    const xTransition = useMotionValue(0);

    useEffect(() =>{
      let control;
      let finalPosition = -width

      control = animate(xTransition, [0, finalPosition], {
        ease: 'linear',
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
      })

      return control.stop;
    }, [xTransition, width])
    return (
        <>
            <motion.div ref={ref} className="flex justify-between w-[100%]" style={{x: xTransition}}>
                {[...images,...images].map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-[20%] h-[50px]">
                        <div className="flex items-center justify-center h-full">
                          <Image 
                                  src={image}
                                  className="h-full w-fit"
                                  alt="activityPicture"
                                  key={index}
                                  width={100}
                                  height={100}
                              />
                        </div>
                    </div>
                ))}
                
            </motion.div>
            
        </>
    );
};

