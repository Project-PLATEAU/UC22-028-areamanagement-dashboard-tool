import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Label from "metabase/components/type/Label";
import { color } from "metabase/lib/colors";
import Icon from "metabase/components/Icon";

export const ItemTitle = styled(Label)`
  margin: 0;
  word-break: break-word;
`;

export const ItemIcon = styled(Icon)`
  color: ${props => color(props.color) || color("text-light")};
  justify-self: end;
`;

const activeItemCss = css`
  background-color: ${color("brand")};

  ${ItemIcon},
  ${ItemTitle} {
    color: ${color("white")};
  }
`;

const VERTICAL_PADDING_BY_SIZE = {
  small: "0.5rem",
  medium: "0.75rem",
};

export const BaseItemRoot = styled.li`
  display: grid;
  align-items: center;
  cursor: pointer;
  padding: ${props => VERTICAL_PADDING_BY_SIZE[props.size]} 0.5rem;
  border-radius: 6px;
  margin-bottom: 2px;

  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.isSelected && activeItemCss}

  &:hover {
    ${activeItemCss}
  }
`;

export const ItemRoot = styled(BaseItemRoot)`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 0.5rem;
`;
