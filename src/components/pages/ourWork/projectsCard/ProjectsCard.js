import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ProjectsCard.scss";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";

const ProjectsCard = (props) => {
  const {myData} = useGlobalContext()
  const { grid } = props;
  const {t} = useTranslation()
  const location = useLocation();

  return (
    <React.Fragment>

    {myData.map((item) => {
        return (
      
          <div  key={item.id}
          
               className={ grid ?` col-${grid} `:`col-lg-4 col-md-6 col-sm-12`}
          >
          <article className="card">
                <div className="temporary_image">
                      <img loading='lazy' className='img' src={item.bage.imgUrl} alt={item.bage.title} />
                </div>
                <div className="card_content">
                    <span className="card_title">{item.bage.title}</span>
                    <span className="card_subtitle">{item.bage.description.slice(0, 70)}...</span>                       
                     <Link className = "link_to" to={`/SingleProduct/${item.id}`}>{t("show more")}</Link>
       
                </div>
        </article>
    
    </div>
        )
    })}
    
    </React.Fragment>
  );
};

export default ProjectsCard;