import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { t } from "ttag";
import moment from "moment";

import { getUser } from "metabase/selectors/user";
import { TextButton } from "metabase/components/Button.styled";
import Tooltip from "metabase/components/Tooltip";
import DateTime from "metabase/components/DateTime";

function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

LastEditInfoLabel.propTypes = {
  item: PropTypes.shape({
    "last-edit-info": PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    }).isRequired,
  }),
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

function formatEditorName(firstName, lastName) {
  const lastNameFirstLetter = lastName.charAt(0);
  return `${firstName} ${lastNameFirstLetter}.`;
}

function LastEditInfoLabel({ item, user, onClick, className }) {
  const { first_name, last_name, id: editorId, timestamp } = item[
    "last-edit-info"
  ];
  const time = moment(timestamp).fromNow();

  const editor =
    editorId === user.id ? t`you` : formatEditorName(first_name, last_name);

  return (
    <Tooltip tooltip={<DateTime value={timestamp} />}>
      <TextButton
        size="small"
        className={className}
        onClick={onClick}
        data-testid="revision-history-button"
      >{t`Edited ${time} by ${editor}`}</TextButton>
    </Tooltip>
  );
}

export default connect(mapStateToProps)(LastEditInfoLabel);
