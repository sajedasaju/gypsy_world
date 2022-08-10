const topLevelData = [
    {
        img: 'https://image.shutterstock.com/image-vector/avatar-modern-young-guy-working-600w-2015853842.jpg',
        name: 'Jon Doe',
        time: '10 hrs'
    },
    {
        img: 'https://image.shutterstock.com/image-vector/avatar-modern-young-guy-working-600w-2015853842.jpg',
        name: 'Jon Doe',
        time: '10 hrs'
    },
    {
        img: 'https://image.shutterstock.com/image-vector/avatar-modern-young-guy-working-600w-2015853842.jpg',
        name: 'Jon Doe',
        time: '10 hrs'
    },
    {
        img: 'https://image.shutterstock.com/image-vector/avatar-modern-young-guy-working-600w-2015853842.jpg',
        name: ' Doehh',
        time: '10 hrs'
    }
]
const topLevelContainer = document.getElementById('top_level_main');
console.log(topLevelContainer);

const topLevel = (singledata, topLevelContainer) => {
    const div = document.createElement('div');
    div.innerHTML = ` <div class="most_active_container">
        <img src="${singledata.img}" class="most_active_img" alt="...">
        <div class="most_active_info">
            <h5 class="most_active_name"> <span class="">${singledata.name}</span></h5>
            <p class="most_active_time"><span class="fs-6 fw-bold"></span><span class="">${singledata.time}</span></p>
            
            
        </div>
    </div>`
    container.appendChild(div);


}
for (const singledata of topLevelData) {

    cards(singledata, topLevelContainer);


}
