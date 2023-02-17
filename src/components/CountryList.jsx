import React from "react";
import { Link } from "react-router-dom";
function CountryList({ countries }) {


  const getLanguages =  (item) => {
    let lang = "<ul>"
    for(var key in item){
      lang += "<li>"+item[key]+"</li>"  
        }
      lang = lang + "</ul>"
    return lang;
  }
  return (
    <div className="px-3 py-2 listmobilesize ">

      <table className="table table-strip" style={{width:"80%"}}>

        <thead>
          <tr>
            <th>
              Flag
            </th>
            <th>
              Name
            </th>
            <th>
              Regions
            </th>
            <th className="hideInMobile">
              Population
            </th>
            <th>
              Languages
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, index) => (
            <tr>
              <td className="text-large">
                <img src={item.flags.png} width="40"></img>
              </td>
              <td>{item.name.common}</td>
              <td>{item.region}</td>
              <td className="hideInMobile">{item.population}</td>
              <td dangerouslySetInnerHTML={{ __html: getLanguages(item.languages) }} />
              <td><Link to={`/country/${item.name.common}`}><span>Details</span></Link></td>
            </tr>
          )

          )}


        </tbody>
      </table>
    </div>

  );
}

export default CountryList;