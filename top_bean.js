const topBeanData = [
    {
        img: 'https://image.shutterstock.com/image-vector/avatar-modern-young-guy-working-600w-2015853842.jpg',
        name: 'Benny Chagur',
        time: '5400 Beans'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
        name: 'Chynita Heree',
        time: '5000 Beans'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
        name: 'David Yers',
        time: '4300 Beans'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png',
        name: 'Hayder Jahid',
        time: '4000 Beans'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png',
        name: 'Jhon Doe',
        time: '3000 Beans'
    },
]
const topBeanContainer = document.getElementById('top_bean_main');
// console.log(topLevelContainer);

const topBean = (singledata, topLevelContainer) => {
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
for (const singledata of topBeanData) {

    cards(singledata, topBeanContainer);


}
