fetch('listar.php')
.then(res => res.json())
.then(data => {

    console.log(data);
    
    data.map(item => {
        
    });

});

let racks = {
    racks1: {
    rackName: "rack-1",
    status: true,
    rackClass: "rack rack-1",
    rackId: "R1"
  },
  racks2: {
    rackName: "rack-2",
    status: true,
    rackClass: "rack rack-2",
    rackId: "R2"
  },
  racks3: {
    rackName: "rack-3",
    status: true,
    rackClass: "rack rack-3",
    rackId: "R3"
  }
  };

  let bays = {
    bay1: {
    bayName: "bay-1",
    status: true,
    bayClass: "bay bay-1",
    bayId: "R1B1",
    rackClass: "rack rack-1",
    rackId: "R1"
  },
  bay2: {
    bayName: "bay-2",
    status: true,
    bayClass: "bay bay-2",
    bayId: "R1B2",
    rackClass: "rack rack-1",
    rackId: "R1"
  },
  };

  let spots = {
    spot1: {
      spotName: "spot-1",
      status: true,
      spotClass: "spot spot-1",
      spotId: "R1B1S1",
      bayClass: "bay bay-1",
      bayId: "R1B1",
      rackClass: "rack rack-1",
      rackId: "R1"
  },
  spot2: {
      spotName: "spot-2",
      status: true,
      spotClass: "spot spot-2",
      spotId: "R1B1S2",
      bayClass: "bay bay-1",
      bayId: "R1B1",
      rackClass: "rack rack-1",
      rackId: "R1"
  },
  spot3: {
    spotName: "spot-3",
    status: true,
    spotClass: "spot spot-1",
    spotId: "R1B1S2",
    bayClass: "bay bay-2",
    bayId: "R1B2",
    rackClass: "rack rack-1",
    rackId: "R1"
}
  };
  
  
  let racksAdd = Object.values(racks);
  
  for(let i=0; i< racksAdd.length; i++){
    console.log(racksAdd[i]);
    var newDivR = document.createElement("div");
    newDivR.id = `${racksAdd[i].rackId}`;
    newDivR.className = `${racksAdd[i].rackClass}`;
    var respuesta = document.getElementById("warehouse");
    respuesta.appendChild(newDivR);
  }
  
  let bayAdd = Object.values(bays); // valores = ["Scott", "Negro", true, 5];
  
  for(let i=0; i< bayAdd.length; i++){
  var newDivB = document.createElement("div");
  newDivB.id = `${bayAdd[i].bayId}`;
  newDivB.className = `${bayAdd[i].bayClass}`;
  var responseB = document.getElementById(bayAdd[i].rackId);
  responseB.appendChild(newDivB);
  }

  let spotAdd = Object.values(spots);
  
  for(let i=0; i< spotAdd.length; i++){
  var newDivS = document.createElement("div");
  newDivS.id = `${spotAdd[i].spotId}`;
  newDivS.className = `${spotAdd[i].spotClass}`;
  var responseB = document.getElementById(spotAdd[i].bayId);
  responseB.appendChild(newDivS);
  }