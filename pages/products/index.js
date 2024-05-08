import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Product.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  return {
    props: { products: data.products },
  };
}
export default function Index({ products }) {
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด | kuromi</title>
        <meta name="keywords" content="ร้านค้า,ขายขนมหวาน,โทรศัพท์" />
      </Head>
      <div className={styles.container}>
        {products.map(item => (
          <div key={item.id}>
            <Link href={'/products/'+item.id} className={styles.detail}>
              <h2 className={styles.title}>{item.title}</h2>
              <Image
                src={item.thumbnail}
                width={300}
                height={300}
                alt={item.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
