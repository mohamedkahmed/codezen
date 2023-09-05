import React from "react";
import "./BreadCrumb.scss";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
const BreadCrumb = (props) => {
  const { title } = props;
  const { t } = useTranslation();
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-item">
          <Link className="dir-m bages_links" to="/">
          {t("home")}
          </Link>
          / {title}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
