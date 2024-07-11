import { getCollections } from 'app/services/shopify/collections';
import Link from 'next/link';
import styles from './StoreLayout.module.sass';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className={styles.StoreLayout}>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map(({ id, title, handle }: any) => (
            <Link
              key={id}
              href={`/store/${handle}`}
              className={styles.StoreLayout__chip}
            >
              {title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
