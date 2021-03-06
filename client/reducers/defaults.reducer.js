const initialState = {
  salary: {
    "Alabama":[24.86 ,18.22 ,10.66],
    "Alaska":[37.58 ,27.98 ,17.55],
    "Arizona":[32.26 ,26.05 ,14.09],
    "Arkansas":[25.26 ,18.88 ,11.09],
    "California":[44.11 ,26.51 ,15.52],
    "Colorado":[31.17 ,24.60 ,14.83],
    "Connecticut":[34.45 ,28.30 ,15.25],
    "Delaware":[31.43 ,25.86 ,13.76],
    "District of Columbia":[38.70 ,26.23 ,15.81],
    "Florida":[27.87 ,21.50 ,12.00],
    "Georgia":[28.67 ,20.10 ,11.49],
    "Hawaii":[41.66 ,24.33 ,15.47],
    "Idaho":[27.71 ,20.76 ,12.24],
    "Illinois":[30.96 ,24.39 ,12.84],
    "Indiana":[26.82 ,20.98 ,12.06],
    "Iowa":[24.88 ,20.58 ,13.08],
    "Kansas":[25.75 ,20.90 ,11.70],
    "Kentucky":[26.43 ,20.20 ,11.99],
    "Louisiana":[27.30 ,19.05 ,10.12],
    "Maine":[28.30 ,22.05 ,12.60],
    "Maryland":[32.32 ,26.35 ,14.09],
    "Massachusetts":[38.37 ,28.59 ,14.96],
    "Michigan":[29.69 ,23.58 ,13.51],
    "Minnesota":[33.31 ,22.47 ,15.06],
    "Mississippi":[24.78 ,18.43 ,10.54],
    "Missouri":[27.19 ,20.37 ,11.73],
    "Montana":[28.47 ,21.11 ,12.52 ],
    "Nebraska":[26.72 ,20.58 ,12.79 ],
    "Nevada":[36.50 ,27.36 ,15.95],
    "New Hampshire":[30.08 ,24.80 ,14.34],
    "New Jersey":[35.23 ,27.13 ,13.60],
    "New Mexico":[30.00 ,23.77 ,12.51],
    "New York":[35.84 ,23.58 ,16.23],
    "North Carolina":[26.87 ,21.39 ,11.42],
    "North Dakota":[27.11 ,22.30 ,15.21],
    "Ohio":[28.13 ,20.93 ,12.36],
    "Oklahoma":[26.47 ,19.82 ,11.46],
    "Oregon":[38.13 ,25.24 ,14.89],
    "Pennsylvania":[29.99 ,23.28 ,13.88],
    "Puerto Rico":[14.87 ,11.68 ,9.53],
    "Rhode Island":[32.92 ,28.59 ,14.12],
    "South Carolina":[27.33 ,19.98 ,11.48],
    "South Dakota":[24.49 ,18.64 ,12.01],
    "Tennessee":[25.79 ,19.25 ,11.61],
    "Texas":[30.96 ,22.73 ,12.21],
    "Utah":[27.08 ,22.98 ,12.09],
    "Vermont":[29.87 ,24.01 ,13.75],
    "Virginia":[29.20 ,21.05 ,12.91],
    "Washington":[34.28 ,26.29 ,14.07],
    "West Virginia":[25.93 ,17.90 ,12.03],
    "Wisconsin":[29.72 ,21.82 ,13.33],
    "Wyoming":[27.87 ,23.13 ,13.86],
  },
  benefits: 26.56,
  pto: 23.9,
  mealBreak: 30,
  cnaAdmin: 2.00,
  lpnAdmin: .50,
  rnAdmin: .30,
  census: 95,
};

export default (state = initialState, action) => state;
