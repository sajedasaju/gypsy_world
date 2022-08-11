const data = [
    {
        img: 'https://image.shutterstock.com/image-vector/avatar-modern-young-guy-working-600w-2015853842.jpg',
        name: 'Benny Chagur',
        time: '10 hrs'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
        name: 'Chynita Heree',
        time: '16 hrs'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
        name: 'David Yers',
        time: '15 hrs'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png',
        name: 'Hayder Jahid',
        time: '14 hrs'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png',
        name: 'Jhon Doe',
        time: '10 hrs'
    },
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
