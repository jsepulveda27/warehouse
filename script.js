
let warehouse = {
    racks1: {
    rackName: "rack rack-1",
    status: true,
    number: 5,
    rackClass: "rack rack-1",
    rackId: "aB3245h"
  },
  racks2: {
    rackName: "rack rack-2",
    status: true,
    number: 5,
    rackClass: "rack rack-2",
    rackId: "aB2245h"
  },
  };

  let rack = {
    bay1: {
    bayName: "bay bay-1",
    status: true,
    number: 5,
    bayClass: "bay bay-1",
    bayId: "aB32432h",
    rackClass: "rack rack-1",
    rackId: "aB3245h"
  },
  bay2: {
    bayName: "bay bay-2",
    status: true,
    number: 5,
    bayClass: "bay bay-2",
    bayId: "aB52432h",
    rackClass: "rack rack-2",
    rackId: "aB2245h"
  },
  };
  
  
  let racksAdd = Object.values(warehouse);
  
  for(let i=0; i< racksAdd.length; i++){
    console.log(racksAdd[i]);
    var newDivR = document.createElement("div");
      newDivR.id = `${racksAdd[i].rackId}`;
    newDivR.className = `${racksAdd[i].rackClass}`;
    var respuesta = document.getElementById("warehouse");
    respuesta.appendChild(newDivR);
  }
  
  let bayAdd = Object.values(rack); // valores = ["Scott", "Negro", true, 5];
  
  for(let i=0; i< bayAdd.length; i++){
    console.log(bayAdd[i].rackClass);
  var newDivB = document.createElement("div");
  newDivB.id = `${bayAdd[i].bayClass}`;
  newDivB.className = `${bayAdd[i].bayClass}`;
  var responseB = document.getElementById(bayAdd[i].rackId);
  responseB.appendChild(newDivB);
  }