let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう


/*resultDiv.insertAdjacentHTML('beforeend', `<p>都市名 (City Name): ${data.name}</p>`);
resultDiv.insertAdjacentHTML('beforeend', `<p>天気 (Weather Description): ${data.weather[0].description}</p>`);
resultDiv.insertAdjacentHTML('beforeend', `<p>最低気温 (Minimum Temperature): ${data.main.temp_min}°C</p>`);
resultDiv.insertAdjacentHTML('beforeend', `<p>最高気温 (Maximum Temperature): ${data.main.temp_max}°C</p>`);
resultDiv.insertAdjacentHTML('beforeend', `<p>湿度 (Humidity): ${data.main.humidity}%</p>`);
resultDiv.insertAdjacentHTML('beforeend', `<p>風速 (Wind Speed): ${data.wind.speed} m/s</p>`);
resultDiv.insertAdjacentHTML('beforeend', `<p>風向 (Wind Direction): ${data.wind.deg} degrees</p>`);*/

let selectBox = document.querySelector('select[name="selectBox"]');
let btn = document.querySelector('button#btn');
btn.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  // URL を設定
  let CityId = selectBox.value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + CityId + '.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log('都市名 (City Name):', data.name);
    console.log('最低気温 (Minimum Temperature):', data.main.temp_min, '°C');
    console.log('最高気温 (Maximum Temperature):', data.main.temp_max, '°C');
    console.log('湿度 (Humidity):', data.main.humidity, '%');
    console.log('風速 (Wind Speed):', data.wind.speed, 'm/s');
    console.log('風向 (Wind Direction):', data.wind.deg, 'degrees');

    // 新しいli要素を生成して、各データを表示
    let cityName = document.createElement('p');
    cityName.textContent = '都市名: ' + data.name;

    let maxTemp = document.createElement('p');
    maxTemp.textContent = '最高気温: ' + data.main.temp_max + '°C';

    let minTemp = document.createElement('p');
    minTemp.textContent = '最低気温: ' + data.main.temp_min + '°C';

    let Humidity = document.createElement('p');
    Humidity.textContent = '湿度: ' + data.main.humidity + '%';

    let windSpeed = document.createElement('p');
    windSpeed.textContent = '風速: ' + data.wind.speed + 'm/s';

    let windDeg = document.createElement('p');
    windDeg.textContent = '風向: ' + data.wind.deg + '°';

    // 結果を表示するul要素を取得し、子要素として追加
    let resultList = document.querySelector('#result');
    
    let resultLi = document.querySelectorAll('div#result > p');
    for (let li of resultLi) {
    li.remove();
}

    resultList.insertAdjacentElement('beforeend', cityName);
    resultList.insertAdjacentElement('beforeend', maxTemp);
    resultList.insertAdjacentElement('beforeend', minTemp);
    resultList.insertAdjacentElement('beforeend', Humidity);
    resultList.insertAdjacentElement('beforeend', windSpeed);
    resultList.insertAdjacentElement('beforeend', windDeg);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
