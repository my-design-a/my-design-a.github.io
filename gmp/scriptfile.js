
var url = "https://myvillage-6cc71.firebaseio.com/"

//gambhirpur-data
//korutla-data
fetch(url+'/PassingBuses-data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var temp ="";
  //start loop
    data.forEach(function(ktldata){
        
        temp +="<tr>";
        temp +="<td>"+ktldata.id+"</td>";
        temp +="<td>"+ktldata.sname+"</td>";
        temp +="<td>"+ktldata.hname+"</td>";
        temp +="<td>"+ktldata.dname+"</td>";
        temp +="<td>"+ktldata.time+"</td>";
       
        temp +="</tr>";
       
      });
    document.getElementById('passdata').innerHTML = temp;
  });


  fetch(url+'/korutla-data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var temp ="";
  //start loop
    data.forEach(function(ktldata){
        
        
        temp +="<tr>";
        temp +="<td>"+ktldata.id+"</td>";
        temp +="<td>"+ktldata.name+"</td>";
        temp +="<td>"+ktldata.stime+"</td>";
        temp +="<td>"+ktldata.dtime+"</td>";
        temp +="</tr>";
       

       
      });
    
    
    document.getElementById('korutladata').innerHTML = temp;
  });


  fetch(url+'/gambhirpur-data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    var temp ="";
  //start loop
    data.forEach(function(gmpdata){
        
        
        temp +="<tr>";
        temp +="<td>"+gmpdata.id+"</td>";
        temp +="<td>"+gmpdata.name+"</td>";
        temp +="<td>"+gmpdata.stime+"</td>";
        temp +="<td>"+gmpdata.dtime+"</td>";
        temp +="</tr>";
       

       
      });
      //close loop


      document.getElementById("gmpdata").innerHTML = temp;
  
   
  });







  