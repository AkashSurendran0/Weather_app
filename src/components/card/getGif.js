export function getGif(mood){
    switch(mood){
        case 'Rain':
            return 'weather_gifs/rainy.gif' 
        case 'Clouds': 
           return 'weather_gifs/cloudy.gif'
        case 'Clear':
            return 'weather_gifs/sunny.gif'
        case 'Thunderstorm':
            return 'weather_gifs/thunder.gif'
        case 'Snow':
            return 'weather_gifs/snow.gif'
        case 'Mist':
            return 'weather_gifs/foggy.gif'
        case 'Fog':
            return 'weather_gifs/foggy.gif'
        case 'Haze':
            return 'weather_gifs/foggy.gif'
        default:
            return null
    }
}