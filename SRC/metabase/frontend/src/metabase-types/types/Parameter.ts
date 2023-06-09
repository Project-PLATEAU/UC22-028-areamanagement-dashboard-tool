import { CardId } from "./Card";
import { Field, FieldId } from "./Field";
import { LocalFieldReference, ForeignFieldReference } from "./Query";

export type ParameterId = string;

// date/*, category, id, etc
export type ParameterType = string;

// a URL-safe encoding of a parameter value
export type ParameterValue = string;
export type ParameterValueOrArray = string | Array<string>;

export type Parameter = {
  id: ParameterId;
  name: string;
  sectionId: string;
  type: ParameterType;
  slug: string;
  default?: string;
  field_id: FieldId | null;
  field_ids?: FieldId[];
  fields: Field[];
  hasOnlyFieldTargets?: boolean; // true if the parameter is only connected to fields/dimensions rather than variables
  target?: ParameterTarget;
  filteringParameters?: ParameterId[];
};

export type VariableTarget = ["template-tag", string];
export type DimensionTarget =
  | ["template-tag", string]
  | LocalFieldReference
  | ForeignFieldReference;

export type ParameterTarget =
  | ["variable", VariableTarget]
  | ["dimension", DimensionTarget];

export type ParameterMappingOption = {
  name: string;
  target: ParameterTarget;
};

export type ParameterMapping = {
  card_id: CardId;
  parameter_id: ParameterId;
  target: ParameterTarget;
};

export type ParameterOption = {
  name: string;
  description?: string;
  type: ParameterType;
};

export type ParameterSection = {
  id: string;
  name: string;
  description: string;
  options: ParameterOption[];
};

export type ParameterInstance = {
  type: ParameterType;
  target: ParameterTarget;
  value: ParameterValue;
};

export type ParameterMappingUIOption = ParameterMappingOption & {
  icon?: string;
  sectionName: string;
  isForeign?: boolean;
};

export type ParameterValues = {
  [id: ParameterId]: ParameterValue;
};
