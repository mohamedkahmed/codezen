import React, { useEffect } from 'react';
import { useTranslation} from "react-i18next";
import {BsGlobe} from "react-icons/bs";
import i18next from 'i18next';
import cookies from "js-cookie";
import "./langs.scss";

const languages = [
  {
    code: "en",
    name: "English",
    counury_code: "gb"
  },

  {
    code: "ar",
    name: "العربية",
    counury_code: "sa",
    dir: "rtl"
  }
]


function Langs() {

  const currentLangaugesCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(l => l.code === currentLangaugesCode);

  const {t} = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('title');
  }, [currentLanguage, t]);

  return (

          <div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <BsGlobe/>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

  <li>
    <span className='dropdown-item-text'>{t("lang")}</span>
  </li>

    {languages.map(({code, name, counury_code}) => (

    <li key={counury_code}>

      <button className="dropdown-item"
       onClick={() => i18next.changeLanguage(code)}
       disabled={code === currentLangaugesCode}
       >
        <span className={`flag-icon flag-icon-${counury_code} mx-2`}
        style={{opacity: code === currentLangaugesCode ? 0.5 : 1}}
        ></span>
        {name}
      </button>
      
      </li>
    ))}


  </ul>
</div>


  );
}

export default Langs;
