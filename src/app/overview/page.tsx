"use client";
import { Anchor, Divider } from "antd";
import styles from "./page.module.css";

const Overview = () => {
  return (
    <div className={styles.backgroundCard}>
      <h1>Overview</h1>

      <p style={{ textAlign: "justify" }}>
        miRArchitect a machine learning-based tool for rational design of
        artificial miRNAs. The design process involves analyzing the target
        sequence (input), designing and studying the structure and
        thermodynamics of siRNA, selecting the best native pri-miRNA scaffold,
        and developing amiRNA.
        <br /> <br />
        AmiRNAs have advantages over other RNAi tools in gene silencing
        specificity and less off-target effects. However, only precise
        processing of amiRNA with both Drosha and Dicer ensures an effective and
        safe siRNA. Because the sequence, structure and structure fickleness of
        a pri-miRNA strongly influence its processing, it is difficult to
        predict the effects of replacement of the miRNA sequence with an
        exogenous siRNA sequence. Improper amiRNA design may result in
        inefficient processing, the generation of siRNA variants with seed
        sequence changes or the induction of arm switching—a process that leads
        to the release of the passenger strand of siRNA.
        <br /> <br />
        Nevertheless, we showed, that it is possible to alter the sequence of
        the 21-nt mature miRNAs within the natural miRNA precursor, without
        affecting miRNA biogenesis and maturation, which opens up the prospect
        of creating amiRNAs with new targets by design.
        <br /> <br />
        miRarchitect was established to support Your Research, to add the new
        dimension of rational design of amiRNA therapeutics.
      </p>
      <h1>Team</h1>
      <p style={{ textAlign: "justify" }}>
        miRarchitect tool is managed by researchers at the Department of Genome
        Engineering and at the Department of Structural Bioinformatic, Institute
        of Bioorganic Chemistry, Polish Academy of Sciences, Poznan, Poland and
        Institute of Computing Science, Poznan University of Technology, Poznan,
        Poland.
      </p>
      <div style={{ width: "100%" }}>
        <p>mirArchitect Team</p>
        <ul>
          <li>
            Agnieszka Belter<sup>1</sup>
          </li>
          <li>
            Jaroslaw Synak<sup>1,2</sup>
          </li>
          <li>
            Marta Maćkowiak<sup>1,2</sup>
          </li>
          <li>
            Anna Kotowska-Zimmer<sup>1</sup>
          </li>
          <li>
            Marta Szachniuk<sup>1,2</sup>
          </li>
          <li>
            Marta Olejniczak<sup>1</sup>
          </li>
        </ul>
        <p>
          <sup>1</sup> Institute of Bioorganic Chemistry, Polish Academy of
          Sciences, Noskowskiego 12/14, 61-704 Poznan, Poland
        </p>
        <p>
          <sup>2</sup> Institute of Computing Science, Poznan University of
          Technology, Piotrowo 2, 60-965 Poznan, Poland
        </p>
      </div>
    </div>
  );
};

export default Overview;
