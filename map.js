const fetchAp1 = async () => {
    fetch('https://api.covid19india.org/data.json').then(res => res.json()).then(data => {
        console.log(data.statewise)
        let d = data.statewise
        ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
        let chartConfig = {
            type: null,
            backgroundColor: '#9DDCF9',
            title: {
                text: '',
                backgroundColor: 'none',
                fontColor: '#000'
            },
            shapes: [
                {
                    type: 'zingchart.maps',
                    options: {
                        name: 'ind',
                        panning: false, // turn of zooming. Doesn't work with bounding box
                        zooming: false,
                        scrolling: false,
                        style: {
                            tooltip: {
                                borderColor: '#000',
                                borderWidth: '1px',
                                fontSize: '18px',
                                borderRadius: '1px'
                            },
                            borderColor: '#000',
                            borderWidth: '1px',
                            controls: {
                                visible: false, // turn of zooming. Doesn't work with bounding box

                            },
                            hoverState: {
                                alpha: .28
                            },
                            items: {
                                KA: {
                                    tooltip: {
                                        text: `Karnataka <br>Total Recovered:${d[3].active}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'green',
                                    label: {
                                        visible: true
                                    }
                                },
                                KL: {
                                    tooltip: {
                                        text: `Kerela<br>Total Recovered:${d[2].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#9c3',
                                    label: {
                                        visible: true
                                    }
                                },
                                MH: {
                                    tooltip: {
                                        text: `Maharashtra<br> Total Recovered:${d[1].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#ffa769',
                                    label: {
                                        visible: true
                                    }
                                },
                                AP: {
                                    tooltip: {
                                        text: `Andra Pradesh<br>Total Recovered:${d[4].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                TN: {
                                    tooltip: {
                                        text: `TamilNadu<br>Total Recovered:${d[5].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#93c',
                                    label: {
                                        visible: true
                                    }
                                },
                                DL: {
                                    tooltip: {
                                        text: `Delhi<br>Total Recovered:${d[6].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'red',
                                    label: {
                                        visible: true
                                    }
                                },
                                UP: {
                                    tooltip: {
                                        text: `UttarPradesh <br>Total Recovered:${d[7].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#beff69',
                                    label: {
                                        visible: true
                                    }
                                },
                                WB: {
                                    tooltip: {
                                        text: `West Bengal<br>Total Recovered:${d[8].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#f8fc6d',
                                    label: {
                                        visible: true
                                    }
                                },
                                OR: {
                                    tooltip: {
                                        text: `Oddisha<br>Total Recovered:${d[9].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#c978ff',
                                    label: {
                                        visible: true
                                    }
                                },
                                RJ: {
                                    tooltip: {
                                        text: `Rajasthan Total Recovered:${d[10].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'lightblue',
                                    label: {
                                        visible: true
                                    }
                                },
                                CT: {
                                    tooltip: {
                                        text: `Chhattisgarh<br>Total Recovered:${d[11].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                TL: {
                                    tooltip: {
                                        text: `Telngana<br>Total Recovered:${d[12].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#78e2ff',
                                    label: {
                                        visible: true
                                    }
                                },
                                HR: {
                                    tooltip: {
                                        text: `Haryana<br>Total Recovered:${d[13].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'lightblue',
                                    label: {
                                        visible: true
                                    }
                                },
                                GJ: {
                                    tooltip: {
                                        text: `Gujrat<br>Total Recovered:${d[14].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'orange',
                                    label: {
                                        visible: true
                                    }
                                },
                                BR: {
                                    tooltip: {
                                        text: `Bihar<br>Total Recovered :${d[15].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'orange',
                                    label: {
                                        visible: true
                                    }
                                },
                                MP: {
                                    tooltip: {
                                        text: `Madhya Pradesh <br>Total Recovered:${d[16].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                AS: {
                                    tooltip: {
                                        text: `Assam<br>Total Recovered:${d[17].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'red',
                                    label: {
                                        visible: true
                                    }
                                },
                                PB: {
                                    tooltip: {
                                        text: `Punjab<br>Total Recovered:${d[18].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'blue',
                                    label: {
                                        visible: true
                                    }
                                },
                                JK: {
                                    tooltip: {
                                        text: `Jammu and Kashmir<br>Total Recovered:${d[19].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#9c3',
                                    label: {
                                        visible: true
                                    }
                                },
                                JH: {
                                    tooltip: {
                                        text: `Jharkhand<br>Total Recovered:${d[20].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '',
                                    label: {
                                        visible: true
                                    }
                                },
                                UT: {
                                    tooltip: {
                                        text: `Uttarakhand<br>Total Recovered:${d[21].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'lightblue',
                                    label: {
                                        visible: true
                                    }
                                },
                                HP: {
                                    tooltip: {
                                        text: `Himachal Pradesh<br> Total Recovered:${d[22].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                GA: {
                                    tooltip: {
                                        text: `GOA<br>Total Recovered:${d[23].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'lightyellow',
                                    label: {
                                        visible: true
                                    }
                                },
                                PY: {
                                    tooltip: {
                                        text: `Puducherry<br>Total Recovered:${d[24].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                TR: {
                                    tooltip: {
                                        text: ` Tripura<br>Total Reccovered:${d[25].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'lightblue',
                                    label: {
                                        visible: true
                                    }
                                },
                                MN: {
                                    tooltip: {
                                        text: `Manipur<br>Total Recovered:${d[26].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                CH: {
                                    tooltip: {
                                        text: `Chandigarh<br>Total Recovered:${d[27].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                AR: {
                                    tooltip: {
                                        text: `Arunachal Padesh<br>Total Recovered:${d[28].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'blue',
                                    label: {
                                        visible: true
                                    }
                                },
                                ML: {
                                    tooltip: {
                                        text: `Meghalaya<br>Total Recovered:${d[29].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#93c',
                                    label: {
                                        visible: true
                                    }
                                },
                                NL: {
                                    tooltip: {
                                        text: `Nagaland<br>Total Recovered:${d[30].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#9c3',
                                    label: {
                                        visible: true
                                    }
                                },
                                LA: {
                                    tooltip: {
                                        text: `Ladakh<br>Total Recovered:${d[31].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                SK: {
                                    tooltip: {
                                        text: `Sikkim<br>Total Recovered:${d[32].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: '#00AE4D',
                                    label: {
                                        visible: true
                                    }
                                },
                                AN: {
                                    tooltip: {
                                        text: `Andaman & Nicobar <br>Total Recovered:${d[33].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'red',
                                    label: {
                                        visible: true
                                    }
                                },
                                MZ: {
                                    tooltip: {
                                        text: `Mizoram<br>Total Recovered:${d[34].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'orange',
                                    label: {
                                        visible: true
                                    }
                                },
                                DN: {
                                    tooltip: {
                                        text: `Dadar....<br>Total Recovered:${d[35].recovered}`,
                                        backgroundColor: '#d2ffc7'
                                    },
                                    backgroundColor: 'red',
                                    label: {
                                        visible: true
                                    }
                                },

                            },
                            LD: {
                                tooltip: {
                                    text: `Lakshadweep<br>Total Recovered:${d[36].recovered}`,
                                    backgroundColor: '#d2ffc7'
                                },
                                backgroundColor: '#00AE4D',
                                label: {
                                    visible: true
                                }
                            },
                            label: { // text displaying. Like valueBox
                                fontSize: '15px',
                                visible: false
                            }
                        },
                        zooming: false // turn of zooming. Doesn't work with bounding box
                    }
                }
            ]
        }

        zingchart.loadModules('maps,maps-ind,maps-world-countries');
        zingchart.render({
            id: 'myChart',
            data: chartConfig,
            height: '100%',
            width: '100%',
        });
    })
}
fetchAp1()
