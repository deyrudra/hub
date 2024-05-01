import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <div className={styles.vercelLogo}>
            <h1>RUDRA <br></br>DEY.</h1>
          </div>
        </div>
        <div className={styles.navbar}>
          <Link className={styles.navlinks} href="/">
            <p>Home</p>
          </Link>
          <Link className={styles.navlinks} href="/portfolio">
            <p>My Portfolio</p>
          </Link>
          <Link className={styles.navlinks} href="/business">
            <p>Tutoring</p>
          </Link>
          <Link className={styles.navlinks} href="/about">
            <p>About Me</p>
          </Link>
          <Link className={styles.navlinks} href="/contact">
            <p>Contact Me</p>
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.card}>
            <h2>
              Appointment Booking <span><img src={"/githubLogo.png"} width={30} height={30}/></span>
            </h2>
            <p style={{fontSize:"1rem"}}>Want to book a programming session with me? Click the button below!</p>
            <Link className={styles.navlinks} href="/business/booking">
              <p>BUTTON</p>
            </Link>
          </div>
      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  );
}
