const data=[
    {name: "company one", category: "tech", num_emplyees: 50},
    {name: "company two", category: "finance", num_emplyees: 10},
    {name: "company three", category: "retail", num_emplyees: 24},
    {name: "company four", category: "tech", num_emplyees: 8},
    {name: "company five", category: "finance", num_emplyees: 42}
];
const ages=[16,18,54,29,15,37,21,20,70,46,32,25]
let arr =[];
for(let x=0; x < ages.length; x++){
  if(ages[x] < 20){
    arr.push(ages[x])
  }
}
console.log("This is without filter function", arr)
let older = ages.filter(ages => ages < 20)
console.log("This is with filter function",older);

let arr2 =[];
for(let x=0; x < data.length; x++){
  if(data[x].category == "tech"){
    arr2.push(data[x])
  }
}
console.log(arr2)
const category_function = data.filter(data => data.category === "tech");
console.log(category_function)

const using_map = data.map(data => data.num_emplyees*2)
console.log(using_map)
const age_old = ages.map(ages => Math.sqrt(ages)).map(ages => ages*2);
console.log(age_old)