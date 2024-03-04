const loadDetails = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const details = data.posts;
    //console.log(details);
    displayDetails(details)
}
const displayDetails = details => {
    const detailsContainer = document.getElementById('details-container');
    details.forEach((detail) => {
        const detailsCard = document.createElement('div');
        if (detail.isActive) {
            details.isActive = "Success";
        } else{
            details.IsActive = "Error";
        }
        detailsCard.innerHTML = `<div class="flex  w-3/5 mt-10 max-sm:flex max-sm:flex-col shadow-lg ">
        
        <span  class="indicator-item badge ${details.isActive}" id="active"></span> 
        <img src="${detail.image}" alt="" class="w-64 rounded-xl avatar h-64 ">
        
        <div class="card-body ">
            <div class="flex justify-normal gap-5">
                <h1>${detail.category}</h1>
                <h1>${detail.author.name}</h1>
            </div>
            <h2 class="card-title">${detail.title}</h2>
            <p>${detail.description}</p>
            <div class="card-actions flex">
                <div class="outline-dashed outline-1 text-gray-300 mt-10 w-full"></div>
                <div class="flex gap-10">
                    <h1 class="flex gap-5"><img src="./images/commant.png" alt="">${detail.comment_count}</h1>
                    <h1 class="flex gap-5"><img src="./images/eye.png" alt="">${detail.view_count}</h1>
                    <h1 class="flex gap-5"><img src="./images/time.png" alt="">${detail.posted_time}</h1>
                    <div class="ml-56">
                    <kbd id="kbd" class="kbd bg-green-500 rounded-full"> <img src="./images/emil.png" alt=""class="text-white"></kbd>
                                
                    </div>
                </div>
            </div>
        </div>
    </div>`
        detailsContainer.appendChild(detailsCard)
    })
}
loadDetails();

const latestDetails = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const latest = data.posts;
    //console.log(details);
    displayDetails(latest)
}