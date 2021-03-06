import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Demo.scss';

function Demo() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          transform: x
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to(x => `scale(${x})`),
        }}
      >
        <h1 className="main-heading">PhoneBook</h1>
      </animated.div>
    </div>
  );
}

export default Demo;
