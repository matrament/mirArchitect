export type gene = {
  id: string;
  type: string;
};

export type transcript = {
  key: React.Key;
  stableId: string;
  start: number;
  end: number;
  lengths: number;
  name: string;
  exons: number;
  version: number;
};

export type ensembl_transcript = {
  Exon: any[];
  Parent: string;
  Translation: Object;
  assembly_name: string;
  biotype: string;
  db_type: string;
  display_name: string;
  end: number;
  id: string;
  is_canonical: number;
  length: number;
  logic_name: string;
  object_type: string;
  seq_region_name: string;
  source: string;
  species: string;
  start: number;
  strand: number;
  version: number;
};

export type task = {
  seq: string;
  params: {
    GC_min: number;
    GC_max: number;
    max_GC_stretch: number;
    bind_init: number;
    "5prime_diff_len": number;
    "5prime_diff_min": number;
    diff_max: number;
    max_tm: number;
    force_insert_prefix: boolean;
    filter_offtargets: boolean;
    bad_prefix_score: number;
    amiRNA_id: string | string[];
  };
  targets: string[];
};
