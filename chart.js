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
//             {
//                 label: "Data sales",
//                 data: [
//                     21, 234, 81, 53, 753, 2, 76
//                 ],

//                 borderColor: 'blue',
//                 borderWidth: 2
//             },


//         ]

//     },
//     option: {
//         interaction: {
//             mode: 'index'
//         },
//         responsive: true
//     }
// })


new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: "Revenue",
                data: [
                    1, 2, 8, 5, 75, 2, 76
                ],

                borderColor: 'blue',
                borderWidth: 2
            },



        ]

    },
    option: {
        interaction: {
            mode: 'dataset'
        },
        responsive: true
    }
})


// new Chart(chart, {
//     type: 'line',
//     data: {
//         labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//         datasets: [
//             {
//                 label: "Data",
//                 data: [{ 'data.key': 'one', 'data.value': 20 }, { 'data.key': 'two', 'data.value': 30 }],

//                 borderColor: 'blue',
//                 borderWidth: 2
//             },


//         ]

//     },
//     option: {
//         responsive: true,
//         parsing: {
//             xAxisKey: 'data\\.key',
//             yAxisKey: 'data\\.value'
//         }
//     }
// })

