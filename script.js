
let warehouse = {
    racks1: {
    bay1: {
    rackName: "rack rack-1",
    bayClass: "bay bay-1",
    status: true,
    number: 5,
    width: "140.25px",
    height: "60px",
    left: "5px",
    top: "25px",
    },
    bay2: {
    rackName: "rack rack-1",
    bayClass: "bay bay-2",
    status: true,
    number: 5,
    width: "140.25px",
    height: "60px",
    left: "5px",
    top: "25px",
    },
    rackClass: "rack rack-1",
    rackId: "rack rack-1"
  },
  
  racks2: {
    bay1: {
    rackName: "rack rack-2",
    bayClass: "bay bay-1",
    status: true,
    number: 5,
    width: "140.25px",
    height: "60px",
    left: "5px",
    top: "25px",
    },
    bay2: {
    rackName: "rack rack-2",
    bayClass: "bay bay-2",
    status: true,
    number: 5,
    width: "140.25px",
    height: "60px",
    left: "5px",
    top: "25px",
    },
    rackClass: "rack rack-2",
    rackId: "rack rack-2"
  }
  
  
  };
  
  
  let racksAdd = Object.values(warehouse);
  for(let i=0; i< racksAdd.length; i++){
  
    var newDivR = document.createElement("div");
      newDivR.id = `${racksAdd[i].rackClass}`;
    newDivR.className = `${racksAdd[i].rackClass}`;
    var respuesta = document.getElementById("warehouse");
    respuesta.appendChild(newDivR);
    console.log(racksAdd[i].rackClass);
  }
  
  let valores = Object.values(warehouse.racks1); // valores = ["Scott", "Negro", true, 5];
  
  for(let i=0; i< valores.length; i++){
  var newDivB = document.createElement("div");
  newDivB.id = `${valores[i].bayClass}`;
  newDivB.className = `${valores[i].bayClass}`;
  var responseB = document.getElementById("rack rack-2");
  responseB.appendChild(newDivB);
  
  }