import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("./components/LoginForm"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Student Sorter</h1>
        <LoginForm />
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
