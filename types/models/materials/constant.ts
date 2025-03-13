export namespace ChemicalGroup {
  export const ALKANES = "Alkanes";
  export const ALCOHOLS = "Alcohols";
  export const HALOGENATED_HYDROCARBONS = "Halogenated Hydrocarbons";
  export const AROMATICS = "Aromatics";
  export const CARBOXYLIC_ACIDS = "Carboxylic Acids";
  export const ESTERS = "Esters";
  export const KETONES = "Ketones";
  export const AMIDES = "Amides";
  export const ETHERES = "Ethers";
  export const GLYCOLS_GLYCOL_ETHERS = "Glycols & Glycol Ethers";
  export const SULFUR_BASED_COMPOUNDS = "Sulfur-Based Compounds";
  export const AMINES = "Amines";
  export const HETEROCYCLIC_AMINES = "Heterocyclic Amines";
  export const PETROLEUM_SPIRITS = "Petroleum Spirits";
  export const ACID_ANHYDRIDES = "Acid Anhydrides";
  export const HALOGENATED_ETHERS = "Halogenated Ethers";
  export const HYDROCARBONS = "Hydrocarbons";
  export const INORGANIC_COMPOUNDS = "Inorganic Compounds";
  export const NITRILLES = "Nitriles";

  export type Type =
    | typeof ALKANES
    | typeof ALCOHOLS
    | typeof HALOGENATED_HYDROCARBONS
    | typeof AROMATICS
    | typeof CARBOXYLIC_ACIDS
    | typeof ESTERS;
}
