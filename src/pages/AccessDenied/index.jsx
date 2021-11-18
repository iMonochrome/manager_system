import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AccessDenied(props) {
  const { t  } = useTranslation([ "common"]);
  let history = useHistory();
  return (
    <div className="error-page flex__center__center">
      <Result
        status="403"
        title="403"
        subTitle={t("403")}
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

export default AccessDenied;
