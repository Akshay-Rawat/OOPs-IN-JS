
function fetchAPI1() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api1 resolved: 10  (after 5s)");
      resolve({ data: 10 });
    }, 5000);
  });
}
function fetchAPI2() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api2 resolved: 20  (after 2s)");
      resolve({ data: 20 });
    }, 2000);
  });
}
function fetchAPI3() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api3 resolved: 30  (after 4s)");
      resolve({ data: 30 });
    }, 4000);
  });
}
function fetchAPI4() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api4 resolved: 40  (after 1s)");
      resolve({ data: 40 });
    }, 1000);
  });
}
function fetchAPI5() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api5 resolved: 50  (after 3s)");
      resolve({ data: 50 });
    }, 3000);
  });
}
let a1=fetchAPI1()
let a2=fetchAPI2()
let a3=fetchAPI3()
let a4=fetchAPI4()
let a5=fetchAPI5()

function hey(arr){
    let count= 0
    for(let i =0;i<arr.length;i++){
        arr[i].then(res=>{
            count++
            temp[i]=res.data

            if(count==arr.length){
                console.log(temp)
            }
        }).catch(console.log("err"))
    }

}
hey([a1,a2,a3,a4,a5])
 



