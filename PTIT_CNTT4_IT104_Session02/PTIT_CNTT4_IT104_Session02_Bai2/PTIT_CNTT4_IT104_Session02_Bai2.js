const greetingWithWeather  = (name, weather) => {
    if(weather.toLowerCase() === "sunny"){
        console.log(`Chào ${name}! Hôm nay trời nắng thật tuyệt vời!`);

    }else if(weather.toLowerCase() === "rainy"){
        console.log(`Chào ${name}! Hôm nay trời mưa hãy mang theo ô!`);

    }else{
        console.log(`Chào ${name}! Hôm nay thời tiết không xác định!`);
    }
}

greetingWithWeather("Duy","sunny");