import React from 'react';

function Instructors ({instructors}) {

    var output = "<div class='row'>";

    for(var i=0;i<instructors.length;i++) {
       if((i%3)==0)
       {
          output += "</div><div class='row'>" + "<div class='col-md-4'><!-- content --></div>";
       }
       else
       {
          output += "<div class='col-md-4'><!-- content --></div>";
       }
    }

    if((i%3)!=0) {
       output += "</div><div class='row'>";
    }

    console.log(instructors.length)

    


    return (
    <div className="main">

        <h1 style={{padding:"15px"}}>Instructors</h1>
        <hr />
        <div class="row">
  <div class="col-md-4">!-- content --</div>
  <div class="col-md-4">!-- content --</div>
  <div class="col-md-4">!-- content --</div>
</div>

    

    </div>
)}

export default Instructors