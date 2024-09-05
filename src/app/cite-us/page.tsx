"use client";
import styles from "./page.module.css";

const CiteUs = () => {
  return (
    <div className={styles.backgroundCard}>
      <h2>
        <span>Cite us</span>
      </h2>

      <div>
        miRarchitect - a machine learning-based tool for customized rational
        design of artificial miRNAs.
        <br />
        <br />
        Jaroslaw Synak <sup>1,2,*</sup>, Agnieszka Belter <sup>1,*</sup>, Marta
        Mackowiak <sup>2</sup>, Anna Kotowska-Zimmer <sup>1</sup>, Marek
        Figlerowicz <sup>1</sup>, Marta Szachniuk <sup>1,2,#</sup>, and Marta
        Olejniczak
        <sup>1,#</sup>
        <br />
        <br />
        <sup>1</sup> Institute of Bioorganic Chemistry, Polish Academy of
        Sciences, Noskowskiego 12/14, 61-704 Poznan, Poland and
        <br />
        <sup>2</sup> Institute of Computing Science, Poznan University of
        Technology, Piotrowo 2, 60-965 Poznan, Poland
        <br />
        <br />
        <sup>*</sup> Authors contributed equally
        <br />
        <br />
        <sup>#</sup> Corresponding authors
        <br />
        <br />
        marta.szachniuk@cs.put.poznan.pl
        <br />
        marta.olejniczak@ibch.poznan.pl
      </div>
    </div>
  );
};

export default CiteUs;
