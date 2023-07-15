import type { FC } from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className="content has-text-centered">
        <strong>App</strong> by <strong>Ryan McCarthy</strong>
        <div className={styles.footerIcons}>
          <Link href="https://github.com/rmmccar92" target="_blank">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
            target="_blank"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
