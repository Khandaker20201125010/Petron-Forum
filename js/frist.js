const loadDetails = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const details = data.posts;
    //console.log(details);
    displayDetails(details)
}
loadDetails();
let count = 0;
const displayDetails = details => {

    const detailsContainer = document.getElementById('details-container');
    details.forEach((detail) => {
        const con = document.getElementById('count');
        const detailsCard = document.createElement('div');
        detailsCard.innerHTML = `<div class="flex  w-3/5 mt-10 max-sm:flex max-sm:flex-col shadow-lg  relative">   
        <div class="indicator">
        <span id="light" class="indicator-item badge ${detail.isActive ? 'bg-success' : ' bg-error'}"></span> 
         <div class="grid w-72 h-72 bg-base-300 place-items-center">
            <img src="${detail.image}" alt="">
         </div>
         </div>
        
        <div class="card-body ">
            <div class="flex justify-normal gap-5 font-bold">
                <h1>${detail.category}</h1>
                <h1 >Author:${detail.author.name}</h1>
            </div>
            <h2 class="card-title">${detail.title}</h2>
            <p>${detail.description}</p>
            <div class="card-actions flex">
                <div class="outline-dashed outline-1 text-gray-300 mt-10 w-full"></div>
                <div class="flex gap-10">
                    <h1 class="flex gap-2"><img src="./images/commant.png" alt="">${detail.comment_count}</h1>
                    <h1 class="flex gap-2"><img src="./images/eye.png" alt="">${detail.view_count}</h1>
                    <h1 class="flex gap-2"><img src="./images/time.png" alt="">${detail.posted_time}</h1>
                    <div class="ml-56">
                    <kbd id='${detail.id}' class="kbd bg-green-500 rounded-full"> <img src="./images/emil.png" alt=""class="text-white"></kbd>
                                
                    </div>
                </div>
            </div>
        </div>
    </div>`
        con.appendChild(detailsCard);
        detailsContainer.appendChild(detailsCard)
        const click = document.getElementById('click');
        const docCount = document.getElementById('docCount');
        const coVid = document.getElementById(detail.id);
        console.log(count);
        coVid.addEventListener('click', function () {
            count = count + 1;
            console.log(count);
            docCount.innerText = count;
            const docList = document.createElement('div');
            docList.innerHTML = `
                <div class="flex bg-white p-4 rounded-2xl mb-4">
                    <div>
                        <p class="font-bold">${detail.title}</p>
                    </div>
                    <div class="flex gap-2">
                        <img src="./images/eye.png" alt="">
                        <h1 class="flex gap-2">${detail.view_count}</h1>
                    </div>
                </div>`;
                click.appendChild(docList);
        });
        
  
    })
}


const latestDetails = () => {
    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
        .then(response => response.json())
        .then(latest => lastDetails(latest))

}
const lastDetails = latest => {
    latest.forEach((extra) => {

        const detailsContainer = document.getElementById('ext');
        const detailsCard = document.createElement('div');
        detailsCard.innerHTML = `<div  class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${extra.cover_image}" alt="Shoes"class="w-80 rounded-3xl" /></figure>
        <div class= "card-body ">
            <h1 class="flex gap-2"><img src="./images/cal.png" alt="">${extra.author.posted_date}</h1>
          <h2 class="text-base font-bold">${extra.title}</h2>
          <p class="font-semibold text-gray-400">${extra.description}</p>
          <div class=" justify-start  rounded-full ">
            <div class="flex gap-5">
                <img src="${extra.profile_image}" alt="" class="w-[52px] h-[52px] rounded-full bg-gray-400 overflow-hidden">
                <div class="flex flex-col">
                    <h1 class="text-base font-bold">${extra.author.name}</h1>
                    <p>${extra.author.designation}</p>
                </div>                   
            </div>                     
          </div>
        </div>
      </div>`
        detailsContainer.appendChild(detailsCard)
    })
}
const handelSearch = () =>{
    const searchBtn = document.getElementById('search-btn');
    const searchText = searchBtn.value;
    console.log(searchText);
}   
latestDetails();

function checkEvenOrOdd() {
    const catDetails = document.getElementById($(detail.category));
    const searchDocument = document.addEventListener('search-btn')
    if (catdetails === searchDocument.value) {
        latestDetails(catdetails)
        
    } else {
        
    }
}





