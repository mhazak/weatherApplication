//FUNCTION FOR HEATH INDEX CALCULATOR
function heatCalc() {
  T = document.getElementById("tem").value;
  rh = document.getElementById("hm").value;

  if (
    (document.getElementById("far").checked && T < 80) ||
    (document.getElementById("cel").checked && T < 26.7)
  ) {
    document.getElementById("res").style.display = "none";
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = "Temperature is too low.";
  } else {
    result =
      -42.379 +
      2.04901523 * T +
      10.14333127 * rh -
      0.22475541 * T * rh -
      6.83783 * 0.001 * (T * T) -
      5.481717 * 0.01 * (rh * rh) +
      1.22874 * 0.001 * (T * T) * rh +
      8.5282 * 0.0001 * T * (rh * rh) -
      1.99 * 0.000001 * (T * T) * (rh * rh);

    document.getElementById("res").style.display = "block";
    document.getElementById("res").innerHTML = result;
    document.getElementById("error").style.display = "none";
  }
}

//TOGGLER FOR HIDE/SHOW
function showOrHide(name) {
  if (document.getElementById(name).style.display === "none") {
    document.getElementById(name).style.display = "block";
  } else {
    document.getElementById(name).style.display = "none";
  }
}

//ADDING DAY 26/4/2018 TO THE TABLE
function twentySix() {
  const firstDay = {};

  firstDay.timer = [
    "2:33",
    "5:33",
    "8:33",
    "11:33",
    "14:33",
    "17:33",
    "20:33",
    "23:33"
  ];

  firstDay.humidity = [71, 72, 72, 73, 73, 71, 71, 70];
  firstDay.temp = [9.8, 9.9, 8.8, 7.6, 7.6, 8.0, 8.0, 9.0];

  firstDay.weather = [
    "Light Rain",
    "Light Rain",
    "Light Rain",
    "Light Rain",
    "Light Rain",
    "Light Rain",
    "Light Rain",
    "Light Rain"
  ];

  //CALLING FUNCTION, WHICH WILL ADD ALL DATAS TO THE TABLE
  callTable(firstDay);
}

//FUNCTION FOR ADDING DAY 27/4/2018
function twentySeven() {
  const secondDay = {};

  secondDay.humidity = [74, 78, 82, 83, 86, 86, 86, 83];
  secondDay.temp = [9.7, 8.5, 6.2, 6.3, 6.6, 6.5, 6.5, 6.1];

  secondDay.weather = [
    "Showers",
    "Heavy Rain",
    "Thunder",
    "Thunder",
    "Thunder",
    "Thunder",
    "Thunder",
    "Thunder"
  ];

  secondDay.timer = [
    "2:33",
    "5:33",
    "8:33",
    "11:33",
    "14:33",
    "17:33",
    "20:33",
    "23:33"
  ];

  callTable(secondDay);
}

function twentyEight() {
  const thirdDay = {};

  thirdDay.humidity = [79, 84, 81, 84, 84, 83, 83, 84];
  thirdDay.temp = [9.6, 7.3, 6.7, 6.2, 6.2, 6.3, 6.3, 6.0];

  thirdDay.weather = [
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain"
  ];

  thirdDay.timer = [
    "2:33",
    "5:33",
    "8:33",
    "11:33",
    "14:33",
    "17:33",
    "20:33",
    "23:33"
  ];

  callTable(thirdDay);
}

function twentyNine() {
  const fourthDay = {};

  fourthDay.humidity = [83, 87, 87, 86, 86, 86, 84, 82];
  fourthDay.temp = [8.5, 6.5, 4.6, 4.7, 4.7, 5.0, 5.2, 5.8];

  fourthDay.weather = [
    "Light Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain"
  ];

  fourthDay.timer = [
    "2:33",
    "5:33",
    "8:33",
    "11:33",
    "14:33",
    "17:33",
    "20:33",
    "23:33"
  ];

  callTable(fourthDay);
}

function thirty() {
  const fifthDay = {};

  fifthDay.humidity = [74, 69, 78, 79, 80, 79, 79, 79];
  fifthDay.temp = [8.7, 8.2, 7.0, 7.0, 7.9, 8.2, 8.8, 8.8];

  fifthDay.weather = [
    "Showers",
    "Light Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain",
    "Heavy Rain"
  ];

  fifthDay.timer = [
    "2:33",
    "5:33",
    "8:33",
    "11:33",
    "14:33",
    "17:33",
    "20:33",
    "23:33"
  ];

  callTable(fifthDay);
}

function callTable(day) {
  //HERE ARE STORED VARIABLES FROM HTML, FOR TIME AND OTHER COLS, IT WILL BE EASIER TO ADD DATAS USING FOR LOOP.
  let times = [
    document.getElementById("time1"),
    document.getElementById("time2"),
    document.getElementById("time3"),
    document.getElementById("time4"),
    document.getElementById("time5"),
    document.getElementById("time6"),
    document.getElementById("time7"),
    document.getElementById("time8")
  ];

  //
  let humadity = [
    document.getElementById("hum1"),
    document.getElementById("hum2"),
    document.getElementById("hum3"),
    document.getElementById("hum4"),
    document.getElementById("hum5"),
    document.getElementById("hum6"),
    document.getElementById("hum7"),
    document.getElementById("hum8")
  ];

  let weath = [
    document.getElementById("wet1"),
    document.getElementById("wet2"),
    document.getElementById("wet3"),
    document.getElementById("wet4"),
    document.getElementById("wet5"),
    document.getElementById("wet6"),
    document.getElementById("wet7"),
    document.getElementById("wet8")
  ];

  let temper = [
    document.getElementById("temp1"),
    document.getElementById("temp2"),
    document.getElementById("temp3"),
    document.getElementById("temp4"),
    document.getElementById("temp5"),
    document.getElementById("temp6"),
    document.getElementById("temp7"),
    document.getElementById("temp8")
  ];

  //CYCLES, WHICH WILL FILL THE COLS

  let i = 0;
  for (let time of times) {
    time.innerHTML = day.timer[i];
    i++;
  }

  i = 0;
  for (let tem of temper) {
    tem.innerHTML = day.temp[i];
    i++;
  }

  i = 0;
  for (let we of weath) {
    we.innerHTML = day.weather[i];
    i++;
  }

  i = 0;
  for (let hu of humadity) {
    hu.innerHTML = day.humidity[i];
    i++;
  }
  showOrHide("tableOne");
}

//created by Marek Hazak
