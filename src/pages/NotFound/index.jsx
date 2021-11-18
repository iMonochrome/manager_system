import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound(props) {
  const { t } = useTranslation(["common"]);
  let history = useHistory();
  return (
    <div className="error-page flex__center__center">
      <Result
        status="404"
        title="404"
        subTitle={t("404")}
        extra={
          <Button onClick={() => history.push("/")} type="primary" size="large">
            {t('backhome')}
          </Button>
        }
      />
      ;
    </div>
  );
}

export default NotFound;
