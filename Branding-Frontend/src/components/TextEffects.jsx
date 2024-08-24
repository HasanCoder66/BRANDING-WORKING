import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hopes',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Visions',
        1500,
        'Dreams',
        1500,
        'inspirations',
        1500,
        'goals',
        1500,
        'ambitions ',
        1500,
        'Concepts',
       
      ]}
      speed={30}
      className='text-[3rem] sm:text-7xl  text-[white] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;