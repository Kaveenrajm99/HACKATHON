let nav = document.createElement('nav');
nav.setAttribute('id', 'nav-bar');
nav.classList.add('navbar', 'navbar-light', 'bg-dark');
document.body.appendChild(nav);

let div = document.createElement('div');
div.setAttribute('id', 'first-div');
div.classList.add('container');
document.getElementById('nav-bar').appendChild(div)

let forms = document.createElement('form');
forms.setAttribute('id', 'forms')
forms.setAttribute('onsubmit', false)
forms.classList.add('d-flex');
document.getElementById('first-div').appendChild(forms);


let searchdata = document.createElement('input');
searchdata.setAttribute('id', 'search-Box');
searchdata.setAttribute('type', 'text');
searchdata.setAttribute('placeholder', 'search');
searchdata.setAttribute('aria-label', 'search');
searchdata.classList.add('form-control', 'me-2','bg-dark','text-success','fw-bold');
document.getElementById('forms').appendChild(searchdata);


let btn = document.createElement('button');
btn.setAttribute('id', 'se-btn');
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'search()');
btn.classList.add('btn', 'btn-outline-success');
btn.innerHTML = 'Search';
document.getElementById('forms').appendChild(btn);



let div1 = document.createElement('div');
div1.setAttribute('id', 'second-div');
div1.classList.add('container', 'mt-4');
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute('id', 'data');
div2.classList.add('row', 'mt-4', 'bg-dark','text-success');
document.getElementById('second-div').appendChild(div2);

let p1 = document.createElement('ul');
p1.classList.add('col-3','text-break', 'h4', 'fs-4','fw-bold', 'bg-dark');
p1.innerHTML = 'Id'
document.getElementById('data').appendChild(p1);

let p2 = document.createElement('ul');
p2.classList.add('col-3','text-break', 'h4', 'fs-4','fw-bold', 'bg-dark');
p2.innerHTML = 'Name'
document.getElementById('data').appendChild(p2);

let p3 = document.createElement('ul');
p3.classList.add('col-3','text-break', 'h4', 'fs-4','fw-bold', 'bg-dark');
p3.innerHTML = 'Address'
document.getElementById('data').appendChild(p3);

// let p4 = document.createElement('ul');
// p4.classList.add('col-2','text-break', 'h4', 'fs-4','fw-bold', 'bg-dark');
// p4.innerHTML = 'Website'
// document.getElementById('data').appendChild(p4);

let p5 = document.createElement('ul');
p5.classList.add('col-2','text-break', 'h4', 'fs-4','fw-bold', 'bg-dark');
p5.innerHTML = 'Phone'
document.getElementById('data').appendChild(p5);




let globalResponse;
fetch("https://api.openbrewerydb.org/breweries")
    .then((v) => v.json())
    .then((response) => {
        globalResponse = response;
        let parentDiv = document.getElementById("data");
        response.map((x) => {

            let id = document.createElement("li");
            id.setAttribute('id', 'data1');
            id.classList.add("col-3");
            id.innerText = x.id;
            parentDiv.appendChild(id);

            let name = document.createElement("li");
            name.setAttribute('id', 'data1');
            name.classList.add("col-3");
            name.innerText =  x.name;
            parentDiv.appendChild(name);

            let street = document.createElement("li");
            street.setAttribute('id', 'data1');
            street.classList.add("col-3");
            street.innerText = x.street;
            parentDiv.appendChild(street);

            // let web = document.createElement("li");
            // web.setAttribute('id', 'data1');
            // web.classList.add("col-2");
            // web.innerText = x.website_url;
            // parentDiv.appendChild(web);
          
             let phone = document.createElement("li");
            phone.setAttribute('id', 'data1');
            phone.classList.add("col-2");
            phone.innerText = x.phone;
            parentDiv.appendChild(phone);

        })
    }).catch((er) => console.error(er));



async function search() {

    let parentDiv = document.getElementById("data");
    while (parentDiv.childNodes.length > 4) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
    fetch("https://api.openbrewerydb.org/breweries")
        .then((v) => v.json())
        .then((response) => {
            let a = document.getElementById('search-Box').value;
            response.map((x) => {
                if (((x.id != null) && (x.id.includes(a))) || (( x.name != null) && ( x.name.includes(a))) || ((x.street!= null) && (x.street.includes(a))) ||(( x.phone != null) && ( x.phone.includes(a)))) {
                     let id = document.createElement("li");
            id.setAttribute('id', 'data1');
            id.classList.add("col-3");
            id.innerText = x.id;
            parentDiv.appendChild(id);

            let name = document.createElement("li");
            name.setAttribute('id', 'data1');
            name.classList.add("col-2");
            name.innerText =  x.name;
            parentDiv.appendChild(name);

            let street = document.createElement("li");
            street.setAttribute('id', 'data1');
            street.classList.add("col-2");
            street.innerText = x.street;
            parentDiv.appendChild(street);

            let web = document.createElement("li");
            web.setAttribute('id', 'data1');
            web.classList.add("col-2");
            web.innerText = x.website_url;
            parentDiv.appendChild(web);
          
            let phone = document.createElement("li");
            phone.setAttribute('id', 'data1');
            phone.classList.add("col-2");
            phone.innerText = x.phone;
            parentDiv.appendChild(phone);
           }
            })
        }).catch((er) => console.error(er));
}