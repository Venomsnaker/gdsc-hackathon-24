export const getCurrWeather = async () => {
    // const res = await fetch(`http://35.247.138.127/api/weather`)
    // const data = await res.json()
    const data = {
        message: "Không có thông tin Ipv4 , lấy thông tin mặc định",
        data: {
            coord: {
                lon: 107.8542,
                lat: 15.5
            },
            weather: [
                {
                    id: 801,
                    main: "Clouds",
                    description: "mây thưa",
                    icon: "02d"
                }
            ],
            base: "stations",
            main: {
                temp: 27.36,
                feels_like: 27.56,
                temp_min: 27.36,
                temp_max: 27.36,
                pressure: 1014,
                humidity: 47,
                sea_level: 1014,
                grnd_level: 949
            },
            visibility: 10000,
            wind: {
                speed: 3.18,
                deg: 59,
                gust: 2.98
            },
            clouds: {
                all: 24
            },
            dt: 1708760762,
            sys: {
                country: "VN",
                sunrise: 1708729774,
                sunset: 1708772079
            },
            timezone: 25200,
            id: 1905516,
            name: "Tinh Quang Nam",
            cod: 200
        }
    }
    return data.data
}


