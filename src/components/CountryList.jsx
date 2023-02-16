import React from "react";

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
    <div>
      {/* <div className="row">
        <div className="col-8">
          <h4>Country</h4>
        </div>
        <div className="col-4">
          <h4>Country code</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h4>Country</h4>
        </div>
        <div className="col-4">
          <h4>Country code</h4>
        </div>
      </div> */}
      <table className="table table-strip">

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
            <th>
              Populations
            </th>
            <th>
              Languages
            </th>
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
              <td>{item.population}</td>
              <td dangerouslySetInnerHTML={{ __html: getLanguages(item.languages) }} />
              
            </tr>
          )

          )}


        </tbody>
      </table>
    </div>

  );
}

export default CountryList;