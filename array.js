function getdata(){
    fetch("https://jsonplaceholder.typicode.com/users")
       .then(rep=>rep.json()) 
       .then(data=>data.map(data=>{
            console.log(data.name," Email ",data.email)
       }))
       .catch(error=>{
        console.log("I have got Error")
        console.log(error)
       })

}


getdata();


async function Asyncdata(){
try{   
     console.log("Async Started")
let rep=await fetch("https://jsonplaceholder.typicode.com/users")
let data=await rep.json()
console.log("Aync Functions")
data.map(data=>{
          console.log(data.name, "",data.email)
     })
}
 catch(error){
          console.log(error)
     }
     console.log("Async Ended")
}

Asyncdata()