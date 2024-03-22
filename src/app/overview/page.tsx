"use client";
import { Anchor } from "antd";

const Overview = () => {
  return (
    <>
      <Anchor
        replace
        items={[
          {
            key: "part-1",
            href: "#part-1",
            title: "Part 1",
          },
          {
            key: "part-2",
            href: "#part-2",
            title: "Part 2",
          },
          {
            key: "part-3",
            href: "#part-3",
            title: "Part 3",
          },
        ]}
      />

      <div
        id="part-2"
        style={{ height: "20vh", background: "rgba(0,255,0,0.02)" }}
      />
      <div
        id="part-3"
        style={{ height: "20vh", background: "rgba(0,0,255,0.02)" }}
      />

      <div id="part-1">
        miRArchitect a machine learning-based tool for rational design of
        artificial miRNAs. The design process involves analyzing the target
        sequence (input), designing and studying the structure and
        thermodynamics of siRNA, selecting the best native pri-miRNA scaffold,
        and developing amiRNA. AmiRNAs have advantages over other RNAi tools in
        gene silencing specificity and less off-target effects. However, only
        precise processing of amiRNA with both Drosha and Dicer ensures an
        effective and safe siRNA. Because the sequence, structure and structure
        fickleness of a pri-miRNA strongly influence its processing, it is
        difficult to predict the effects of replacement of the miRNA sequence
        with an exogenous siRNA sequence. Improper amiRNA design may result in
        inefficient processing, the generation of siRNA variants with seed
        sequence changes or the induction of arm switching—a process that leads
        to the release of the passenger strand of siRNA. Nevertheless, we
        showed, that it is possible to alter the sequence of the 21-nt mature
        miRNAs within the natural miRNA precursor, without affecting miRNA
        biogenesis and maturation, which opens up the prospect of creating
        amiRNAs with new targets by design. miRarchitect was established to
        support Your Research, to add the new dimension of rational design of
        amiRNA therapeutics.
      </div>
    </>
  );
};

export default Overview;
