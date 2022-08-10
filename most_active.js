const data = [
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
        name: ' Doe',
        time: '10 hrs'
    }
]
const container = document.getElementById('most_active_main');

const cards = (singledata, container) => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = ` <div class="most_active_container">
        <img src="${singledata.img}" class="most_active_img" alt="...">
        <div class="most_active_info">
            <span class="most_active_name"> <span class="">${singledata.name}</span></span>
            <span class="most_active_time"><span class="fs-6 fw-bold"></span><span class="">${singledata.time}</span></span>
            
            
        </div>
    </div>`
    container.appendChild(div);


}
for (const singledata of data) {

    cards(singledata, container);


}
