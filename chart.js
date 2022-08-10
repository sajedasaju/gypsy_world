const chart = document.querySelector("#chart").getContext('2d');

// new Chart(chart, {
//     type: 'line',
//     data: {
//         labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//         datasets: [
//             {
//                 label: "Data",
//                 data: [
//                     1, 2, 8, 5, 75, 2, 76
//                 ],

//                 borderColor: 'blue',
//                 borderWidth: 2
//             },


//         ]

//     },
//     option: {
//         responsive: true
//     }
// })


new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: "Data",
                data: [{ id: 'Sales', nested: { value: 1500 } }, { id: 'Purchases', nested: { value: 500 } }],

                borderColor: 'blue',
                borderWidth: 2
            },


        ]

    },
    option: {
        responsive: true,
        parsing: {
            xAxisKey: 'id',
            yAxisKey: 'nested.value'
        }
    }
})
