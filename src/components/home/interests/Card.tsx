import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

type ICardProps = {
  title: string;
  description: string;
  color: 'green' | 'blue' | 'purple';
  tag: string;
};

const Card = ({ title, description, color, tag }: ICardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('Card rendered');
    const div = divRef.current;
    if (!div) return;
    VanillaTilt.init(div, {
      max: 10,
      speed: 1000,
    });
  }, []);

  return (
    <div
      ref={divRef}
      className={`w-96 h-[500px] border-[1px] border-opacity-50 hover:border-opacity-100 group transition-opacity duration-200 rounded-2xl shadow-lg shadow-black ${
        color === 'green'
          ? `border-[#1fc26a]`
          : color === 'blue'
          ? `border-[#298ee0]`
          : `border-[#6511bb]`
      } `}
    >
      <div
        className={
          'text-white opacity-100 text-center text-3xl font-semibold mt-6'
        }
      >
        {title}
      </div>
      <div
        className={
          'text-white text-xl text-center px-4 opacity-50 group-hover:opacity-75 transition-opacity duration-200 mt-20'
        }
      >
        {description}
      </div>
    </div>
  );
};
export default Card;
