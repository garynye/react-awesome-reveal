import * as React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { CommonProps } from '../const';

export const Jello: React.FC<CommonProps> = ({
  children,
  delay = 0,
  fraction,
  speed,
  triggerOnce = false,
  className,
  style,
}) => {
  const [ref, inView] = useInView({ threshold: fraction, triggerOnce });

  return (
    <div
      ref={ref}
      className={classNames('animated', className, speed, {
        jello: inView,
      })}
      style={{
        ...style,
        animationDelay: `${delay}ms`,
        visibility: inView ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  );
};
