let canvas_chart = document.querySelector('#canvas_chart').getContext('2d');
let chartStart = new Chart(canvas_chart, {
    type: 'radar',
    data: {
        labels: [2020, '', 2022, '', 2024, '', 2026, '', 2028, '', 2030, '', 2032, '', 2034, '', 2036, '', 2038, '', 2040, '', 2042, '', 2044, '', 2046, '', 2048, '', 2050, '', 2052, '', 2054, '', 2056, '', 2058, '', 2060, '', 2062, '', 2064, '', 2066, '', 2068, '', 2070],
        datasets: [
            // for Age
            {
                label: 'Age',
                data: [
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                    51,
                    52,
                    53,
                    54,
                    55,
                    56,
                    57,
                    58,
                    59,
                    60,
                    61,
                    62,
                    63,
                    64,
                    65,
                    66,
                    67,
                    68,
                    69,
                    70,
                    71,
                    72,
                    73,
                    74,
                    75,
                    76,
                    77,
                    78,
                    79,
                    80,
                    81,
                    82,
                    83,
                    84,
                    85,
                    86,
                    87,
                    88,
                    89,
                    90,
                    91,
                    92,
                    93,
                    94,
                    95
                ],
                fill: false,
                borderColor: 'red',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',

            },
            {
                label: 'Start Balance',
                data: [
                    30000,
                    322815,
                    346972,
                    372544,
                    399604,
                    428233,
                    458233,
                    458513,
                    490532,
                    524381,
                    560157,
                    597961,
                    637899,
                    680083,
                    724630,
                    771664,
                    821313,
                    873713,
                    929008,
                    987346,
                    1048886,
                    1113792,
                    1182238,
                    1179430,
                    1176629,
                    1173834,
                    1171047,
                    1168265,
                    1165491,
                    1162723,
                    1159961,
                    1157206,
                    1154458,
                    1151716,
                    1148981,
                    1146252,
                    1143530,
                    1140814,
                    1138104,
                    1135401,
                    1132705,
                    1130015,
                    1127331,
                    1124653,
                    1121982,
                    1119318,
                    1116659,
                    1114007,
                    1111361,
                    1108722,
                    1106089,
                    1103462
                ],
                fill: false,
                borderColor: 'green',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',
            },
            {
                label: 'Contributions',
                data: [
                    9500,
                    9785,
                    10079,
                    10381,
                    10692,
                    11013,
                    11343,
                    11684,
                    12034,
                    12395,
                    12767,
                    13150,
                    13545,
                    13951,
                    14370,
                    14801,
                    15245,
                    15702,
                    16173,
                    16658,
                    17158,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,

                ],
                fill: false,
                borderColor: 'deeppink',
                borderWidth: 1
            },
            {
                label: 'Earnings',
                data: [
                    23212,
                    24945,
                    26779,
                    28719,
                    30772,
                    32943,
                    35239,
                    37666,
                    40231,
                    42941,
                    45805,
                    48829,
                    52022,
                    55394,
                    58952,
                    62708,
                    66672,
                    70853,
                    75264,
                    79916,
                    84821,
                    88668,
                    88457,
                    88247,
                    88038,
                    87828,
                    87620,
                    87412,
                    87204,
                    86997,
                    86790,
                    86584,
                    86379,
                    86174,
                    85969,
                    85765,
                    85561,
                    85358,
                    85155,
                    84953,
                    84751,
                    84550,
                    84349,
                    84149,
                    83949,
                    83749,
                    83551,
                    83352,
                    83154,
                    82957,
                    82760,
                ],
                fill: false,
                borderColor: '#00ff00',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',
            },
            {
                label: 'Fees',
                data: [

                    4907,
                    5209,
                    5529,
                    5865,
                    6220,
                    6593,
                    6987,
                    7402,
                    7840,
                    8301,
                    8786,
                    9297,
                    9835,
                    10402,
                    10998,
                    11626,
                    12287,
                    12983,
                    13716,
                    14486,
                    15297,
                    13300,
                    13269,
                    13237,
                    13206,
                    13174,
                    13143,
                    13112,
                    13081,
                    13050,
                    13019,
                    12988,
                    12957,
                    12926,
                    12895,
                    12865,
                    12834,
                    12804,
                    12773,
                    12743,
                    12713,
                    12682,
                    12652,
                    12622,
                    12592,
                    12562,
                    12533,
                    12503,
                    12473,
                    12443,
                    12414,


                ],
                fill: false,
                borderColor: 'tomato',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',
            },
            {
                label: 'Tax',
                data: [
                    4991,
                    5363,
                    5757,
                    6175,
                    6616,
                    7083,
                    7576,
                    8098,
                    8650,
                    9232,
                    9848,
                    10498,
                    11185,
                    11910,
                    12675,
                    13482,
                    14334,
                    15233,
                    16182,
                    17182,
                    18237,
                    19064,
                    19018,
                    18973,
                    18928,
                    18883,
                    18838,
                    18794,
                    18749,
                    18704,
                    18660,
                    18616,
                    18571,
                    18527,
                    18483,
                    18439,
                    18396,
                    18352,
                    18308,
                    18265,
                    18221,
                    18178,
                    18135,
                    18092,
                    18049,
                    18006,
                    17963,
                    17921,
                    17878,
                    17836,
                    17793,

                ],
                fill: false,
                borderColor: 'black',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',
            },
            {
                label: 'Withdrawals',
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    59112,
                    58972,
                    58831,
                    58692,
                    58552,
                    58413,
                    58275,
                    58136,
                    57998,
                    57860,
                    57723,
                    57586,
                    57449,
                    57313,
                    57176,
                    57041,
                    56905,
                    56770,
                    56635,
                    56501,
                    56367,
                    56233,
                    56099,
                    55966,
                    55833,
                    55700,
                    55568,
                    55436,
                    55304,
                    55173,
                ],
                fill: false,
                borderColor: 'red',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',

            },
            {
                label: 'End Balance',
                data: [
                    322815,
                    346972,
                    372544,
                    399604,
                    428233,
                    458513,
                    490532,
                    524381,
                    560157,
                    597961,
                    637899,
                    680083,
                    724630,
                    771664,
                    821313,
                    873713,
                    929008,
                    987346,
                    1048886,
                    1113792,
                    1182238,
                    1179430,
                    1176629,
                    1173834,
                    1171047,
                    1168265,
                    1165491,
                    1162723,
                    1159961,
                    1157206,
                    1154458,
                    1151716,
                    1148981,
                    1146252,
                    1143530,
                    1140814,
                    1138104,
                    1135401,
                    1132705,
                    1130015,
                    1127331,
                    1124653,
                    1121982,
                    1119318,
                    1116659,
                    1114007,
                    1111361,
                    1108722,
                    1106089,
                    1103462,
                    1100841,
                ],
                fill : false,
                borderColor : 'blue',
                borderWidth: .5,
                lineTension: 1,
                pointStyle: 'triangle',
            }
        ],
    },
    options: {
        animation: {
            duration: 5000,
        },
        title : {
            display: true,
            text: 'Capital Balance Projection',
            fontSize: 20,
        }
    }
})