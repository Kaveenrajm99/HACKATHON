fetch("https://api.openbrewerydb.org/breweries")
  .then((x) => x.json())
  .then((response) => {
    let parentDiv = document.getElementById("content");

    response.filter((x) => {
      let para = document.createElement("p");
      para.classList.add("col-3","text-break");
      para.innerText = x.id;
      para.classList.add("text-success");
      parentDiv.appendChild(para);

      let para1 = document.createElement("p");
      para1.classList.add("col-3","text-break");
      para1.innerText = x.name;
      para1.classList.add("text-success");
      parentDiv.appendChild(para1);

      let para2 = document.createElement("p");
      para2.classList.add("col-2","text-break");
      para2.innerText = x.street
      para2.classList.add("text-success");
      parentDiv.appendChild(para2);

      let para3 = document.createElement("p");
      para3.classList.add("col-2","text-break");
      para3.innerText = x.website_url;
      para3.classList.add("text-success");
      parentDiv.appendChild(para3);

      let para4 = document.createElement("p");
      para4.classList.add("col-2","text-break");
      para4.innerText = x.phone;
      para4.classList.add("text-success");
      parentDiv.appendChild(para4);
    
    })
    }).catch((er)=>console.error(er))


    async function fetchData() {
      try {
        const result = await axios.get("https://api.openbrewerydb.org/breweries")
       .then((result)=>{
         result.filter((m)=>m.id)
         console.log(m)
       }).then((result)=>{
        result.filter((m)=>m.name)
        console.log(m).then((result)=>{
          result.filter((m)=>m.street)
          console.log(m)
        })
      })
      } catch (error) {
        console.error(error);
      }
    }