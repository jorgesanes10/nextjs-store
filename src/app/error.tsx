'use client';

import Image from 'next/image';
import styles from 'app/sass/global-error.module.sass';

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>An error occured</h1>
      <Image src="/images/error.png" alt="" width={500} height={500} />
      <p className={styles.Error__message}>
        There was an error in the application. You can retry the task again.
      </p>
      <button onClick={reset} className={styles.Error__button}>
        Retry
      </button>
    </main>
  );
}
