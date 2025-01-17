import styles from "@/styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา | kuromi</title>
        <meta name="keywords" content="ร้านค้า,ขายขนมหวาน,เตยปาย" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="/about.svg" width={500} height={500} alt="logo" />
      </div>
    </>
  );
}
