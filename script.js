var container=document.createElement("div");
container.setAttribute("class", "container");

var row=document.createElement("div");
row.setAttribute("class", "row");

container.append(row);
document.body.append(container);

async function restdata(){
let res=await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json");
let res1= await res.json();
let result=res1.Results;
console.log(result);
try {
    for(var i=0;i<result.length;i++){
    var id=result[i].Make_ID;
    var name=result[i].Make_Name;
    var model=result[i].Model_ID;
    var mname=result[i].Model_Name;
    console.log(id,name,model,mname);
    var div=document.createElement("div");
    div.innerHTML=` <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">Make ID: ${id}</p>
                                <p class="card-text">Make Name: ${name}</p>
                                <p class="card-text">Model ID: ${model}</p>
                                <p class="card-text">Model Name: ${mname}</p>
                            </div>
                        </div>
                    </div>`;
    row.append(div);
    }
} catch (error) {
    console.log("invalid"+error.message);
}
}
restdata();