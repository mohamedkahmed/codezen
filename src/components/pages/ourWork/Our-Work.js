import React, { useState } from "react";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import "./Our-Work.scss";
import { useTranslation } from 'react-i18next'
import ProjectsCard from "./projectsCard/ProjectsCard";
import { useGlobalContext } from "../../context/context";
import { Helmet } from "react-helmet-async";

const OurWork = () => {
  const [grid, setGrid] = useState(0);
  const {unique_Data , FilterateItems ,catgery_active , myData} = useGlobalContext()
  const { t } = useTranslation();
  return (
    <React.Fragment>
        <Helmet>
            <title>OurWork</title>
            <meta name='description'content='this our work page for codezen team included all project that codezen team created' />
            <link rel='canonical' href='/our-work' />
      </Helmet>
    <BreadCrumb title={t("Projects_breadCrumb")}/>
    <div className="our-work-wrapper">
      <div className="container">
        <div className="row">
      <div className="col-12">
              <div className="filter-sort-grid">
                <div className="default-part">
                  {
                    unique_Data.map((item) => {
                      return(
                        <button className= {catgery_active === item ? "btn-more active" :"btn-more" } onClick={() =>FilterateItems(item) } key={item} type="button">{item}</button>
                      )
                    })
                  }
                 
                
                </div>
                <div className="sort-img-ch">
                  <p>
                     <span className="project_lenght">
                       
                        ( {
                          myData.length 
                        })
                     </span>
                      projects complated
                  </p>
                  <div className="sort-img-part">
                 
                    <img
                      className={grid === 4 ? "active" : " "}
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 6 ? "active" : " "}
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="sort"
                    />
                  </div>
                </div>
              </div>
              <div className="project-list">
                <div className="row">
                  <ProjectsCard grid={grid} />
                </div>
              </div>
            </div>
            </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default OurWork