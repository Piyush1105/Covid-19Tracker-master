function fetchAPI() {
    fetch('https://api.covid19india.org/data.json').then(res => res.json()).then(d => {
        console.log("chart running")
        var ctx = document.getElementById('myChart1').getContext('2d');
        let data = d.statewise
        console.log(data[1].deltaconfirmed)
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: [
                    data[1].statecode,
                    data[2].statecode,
                    data[3].statecode,
                    data[4].statecode,
                    data[5].statecode,
                    data[6].statecode,
                    data[7].statecode,
                    data[8].statecode,
                    data[9].statecode,
                    data[10].statecode,
                    data[11].statecode,
                    data[12].statecode,
                    data[13].statecode,
                    data[14].statecode,
                    data[15].statecode,
                    data[16].statecode,
                    data[17].statecode,
                    data[18].statecode,
                    data[19].statecode,
                    data[20].statecode,
                    data[21].statecode,
                    data[22].statecode,
                    data[23].statecode,
                    data[24].statecode,
                    data[25].statecode,
                    data[26].statecode,
                    data[27].statecode,
                    data[28].statecode,
                    data[29].statecode,
                    data[30].statecode,
                    data[31].statecode,
                    data[32].statecode,
                    data[33].statecode,
                    data[34].statecode,
                    data[35].statecode,
                    data[36].statecode,
                ],
                datasets: [{
                    label: 'Total Deaths',
                    backgroundColor: 'red',
                    borderColor: 'black',
                    data: [
                        data[1].deaths,
                        data[2].deaths,
                        data[3].deaths,
                        data[5].deaths,
                        data[27].deaths,
                        data[7].deaths,
                        data[8].deaths,
                        data[9].deaths,
                        data[10].deaths,
                        data[11].deaths,
                        data[12].deaths,
                        data[13].deaths,
                        data[14].deaths,
                        data[15].deaths,
                        data[16].deaths,
                        data[17].deaths,
                        data[17].deaths,
                        data[18].deaths,
                        data[19].deaths,
                        data[20].deaths,
                        data[21].deaths,
                        data[22].deaths,
                        data[23].deaths,
                        data[24].deaths,
                        data[25].deaths,
                        data[26].deaths,
                        data[6].deaths,
                        data[28].deaths,
                        data[29].deaths,
                        data[30].deaths,
                        data[31].deaths,
                        data[32].deaths,
                        data[33].deaths,
                        data[34].deaths,
                        data[35].deaths,
                        data[36].deaths,
                    ]
                }]
            },

            // Configuration options go here
            options: {}
        });
    })
}
fetchAPI()