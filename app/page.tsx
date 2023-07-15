import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Student Sorter</h1>

        <div className={styles.studentLink}>
          <Link href="/students">
            <h2>Students &rarr;</h2>
            <p>View and edit students</p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
