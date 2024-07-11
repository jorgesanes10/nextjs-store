'use client';

import { useState } from 'react';
import classnames from 'classnames/bind';
import Image from 'next/image';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE =
  'data:image/jpeg;base64,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';

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => {
    setHasBorder(!hasBorder);
  };

  const cx = classnames.bind(styles);

  const buttonStyles = cx('Description__Button', {
    'Description__Button--border': hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
