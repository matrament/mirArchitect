"use client";
import { Anchor, Divider } from "antd";
import styles from "./page.module.css";

const Overview = () => {
  return (
    <div className={styles.backgroundCard}>
      <h2>
        <span>Overview</span>
      </h2>

      <p style={{ textAlign: "justify" }}>
        AmiRNAs have advantages over other RNAi tools in terms of gene silencing
        specificity and lower off-target effects. However, only precise
        processing of amiRNAs using Drosha and Dicer ensures efficient and safe
        siRNAs. Since the sequence, structure and variability of pri-miRNA
        structure strongly affect its processing, it is difficult to predict the
        effects of replacing miRNA with an exogenous siRNA sequence.
        Inappropriate amiRNA design can result in inefficient processing,
        generation of siRNA variants with seed sequence changes, or induction of
        arm switching - a process that leads to the release of the passenger
        strand of the siRNA. However, it has been shown possible to change the
        21-nt sequence of a mature miRNA in a natural miRNA precursor without
        affecting miRNA biogenesis and maturation, opening the prospect of
        designing amiRNAs with new targets.
        <br /> <br />
        miRarchitect was created to support the rational design of amiRNA
        therapeutics. The design process uses state-of-the-art computational
        techniques, including machine learning, and performs analysis of the
        target sequence (input data), design and study of siRNA structure and
        thermodynamics, selection of the best native pri-miRNA scaffold, and
        amiRNA generation.
      </p>
      <h2>
        <span>Team</span>
      </h2>
      <p style={{ textAlign: "justify" }}>
        miRarchitect tool is managed by researchers at the Department of Genome
        Engineering and at the Department of Structural Bioinformatic, Institute
        of Bioorganic Chemistry, Polish Academy of Sciences, Poznan, Poland and
        Institute of Computing Science, Poznan University of Technology, Poznan,
        Poland.
      </p>
      <div style={{ width: "100%" }}>
        <p>miRarchitect Team</p>
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
