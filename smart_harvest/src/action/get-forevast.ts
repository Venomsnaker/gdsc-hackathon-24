"use server"
export const getForecast = async () => {
    // const res = await fetch(`http://35.247.138.127/api/weather/forecast`)
    // const data = await res.json()
    const data = {
        "message": "Không có thông tin Ipv4 , lấy thông tin mặc định",
        "data": {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1708765200,
                    "main": {
                        "temp": 25.6,
                        "feels_like": 25.65,
                        "temp_min": 25.6,
                        "temp_max": 25.6,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 949,
                        "humidity": 55,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "mây thưa",
                            "icon": "02d"
                        }
                    ],
                    "clouds": {
                        "all": 19
                    },
                    "wind": {
                        "speed": 3.12,
                        "deg": 63,
                        "gust": 3.36
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-24 09:00:00"
                },
                {
                    "dt": 1708776000,
                    "main": {
                        "temp": 23.03,
                        "feels_like": 23.16,
                        "temp_min": 17.9,
                        "temp_max": 23.03,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 951,
                        "humidity": 68,
                        "temp_kf": 5.13
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "mây thưa",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 18
                    },
                    "wind": {
                        "speed": 0.92,
                        "deg": 75,
                        "gust": 0.95
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-24 12:00:00"
                },
                {
                    "dt": 1708786800,
                    "main": {
                        "temp": 20,
                        "feels_like": 20.17,
                        "temp_min": 17.2,
                        "temp_max": 20,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 952,
                        "humidity": 81,
                        "temp_kf": 2.8
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "mây rải rác",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 28
                    },
                    "wind": {
                        "speed": 0.17,
                        "deg": 202,
                        "gust": 0.51
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-24 15:00:00"
                },
                {
                    "dt": 1708797600,
                    "main": {
                        "temp": 15.54,
                        "feels_like": 15.71,
                        "temp_min": 15.54,
                        "temp_max": 15.54,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 950,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "mây thưa",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 21
                    },
                    "wind": {
                        "speed": 0.9,
                        "deg": 223,
                        "gust": 0.79
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-24 18:00:00"
                },
                {
                    "dt": 1708808400,
                    "main": {
                        "temp": 14.81,
                        "feels_like": 14.93,
                        "temp_min": 14.81,
                        "temp_max": 14.81,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 949,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "mây thưa",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 16
                    },
                    "wind": {
                        "speed": 0.94,
                        "deg": 222,
                        "gust": 0.84
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-24 21:00:00"
                },
                {
                    "dt": 1708819200,
                    "main": {
                        "temp": 16.28,
                        "feels_like": 16.34,
                        "temp_min": 16.28,
                        "temp_max": 16.28,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 952,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "mây rải rác",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 27
                    },
                    "wind": {
                        "speed": 0.42,
                        "deg": 224,
                        "gust": 0.71
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-25 00:00:00"
                },
                {
                    "dt": 1708830000,
                    "main": {
                        "temp": 24.29,
                        "feels_like": 24.16,
                        "temp_min": 24.29,
                        "temp_max": 24.29,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 953,
                        "humidity": 53,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "mây rải rác",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 28
                    },
                    "wind": {
                        "speed": 1.57,
                        "deg": 62,
                        "gust": 2.29
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-25 03:00:00"
                },
                {
                    "dt": 1708840800,
                    "main": {
                        "temp": 27.59,
                        "feels_like": 27.32,
                        "temp_min": 27.59,
                        "temp_max": 27.59,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 950,
                        "humidity": 40,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "mây thưa",
                            "icon": "02d"
                        }
                    ],
                    "clouds": {
                        "all": 17
                    },
                    "wind": {
                        "speed": 2.55,
                        "deg": 55,
                        "gust": 2.69
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-25 06:00:00"
                },
                {
                    "dt": 1708851600,
                    "main": {
                        "temp": 25.98,
                        "feels_like": 25.98,
                        "temp_min": 25.98,
                        "temp_max": 25.98,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 949,
                        "humidity": 49,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 63
                    },
                    "wind": {
                        "speed": 2.73,
                        "deg": 55,
                        "gust": 2.87
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-25 09:00:00"
                },
                {
                    "dt": 1708862400,
                    "main": {
                        "temp": 17.84,
                        "feels_like": 18.08,
                        "temp_min": 17.84,
                        "temp_max": 17.84,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 950,
                        "humidity": 92,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 65
                    },
                    "wind": {
                        "speed": 0.94,
                        "deg": 101,
                        "gust": 0.93
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-25 12:00:00"
                },
                {
                    "dt": 1708873200,
                    "main": {
                        "temp": 16.39,
                        "feels_like": 16.67,
                        "temp_min": 16.39,
                        "temp_max": 16.39,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 951,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 54
                    },
                    "wind": {
                        "speed": 0.64,
                        "deg": 196,
                        "gust": 0.59
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-25 15:00:00"
                },
                {
                    "dt": 1708884000,
                    "main": {
                        "temp": 16.14,
                        "feels_like": 16.37,
                        "temp_min": 16.14,
                        "temp_max": 16.14,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 950,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 61
                    },
                    "wind": {
                        "speed": 0.69,
                        "deg": 219,
                        "gust": 0.64
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-25 18:00:00"
                },
                {
                    "dt": 1708894800,
                    "main": {
                        "temp": 17.1,
                        "feels_like": 17.32,
                        "temp_min": 17.1,
                        "temp_max": 17.1,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 949,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 0.02,
                        "deg": 231,
                        "gust": 0.34
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-25 21:00:00"
                },
                {
                    "dt": 1708905600,
                    "main": {
                        "temp": 17.88,
                        "feels_like": 18.1,
                        "temp_min": 17.88,
                        "temp_max": 17.88,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 951,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 0.05,
                        "deg": 268,
                        "gust": 0.34
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-26 00:00:00"
                },
                {
                    "dt": 1708916400,
                    "main": {
                        "temp": 21.93,
                        "feels_like": 21.9,
                        "temp_min": 21.93,
                        "temp_max": 21.93,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 953,
                        "humidity": 66,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 0.87,
                        "deg": 49,
                        "gust": 1.79
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-26 03:00:00"
                },
                {
                    "dt": 1708927200,
                    "main": {
                        "temp": 27.64,
                        "feels_like": 27.48,
                        "temp_min": 27.64,
                        "temp_max": 27.64,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 950,
                        "humidity": 42,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 72
                    },
                    "wind": {
                        "speed": 2.22,
                        "deg": 51,
                        "gust": 1.94
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-26 06:00:00"
                },
                {
                    "dt": 1708938000,
                    "main": {
                        "temp": 26.28,
                        "feels_like": 26.28,
                        "temp_min": 26.28,
                        "temp_max": 26.28,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 948,
                        "humidity": 50,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "bầu trời quang đãng",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 2
                    },
                    "wind": {
                        "speed": 2.81,
                        "deg": 60,
                        "gust": 2.79
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-26 09:00:00"
                },
                {
                    "dt": 1708948800,
                    "main": {
                        "temp": 17.97,
                        "feels_like": 18.28,
                        "temp_min": 17.97,
                        "temp_max": 17.97,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 950,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "bầu trời quang đãng",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 0.91,
                        "deg": 86,
                        "gust": 0.97
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-26 12:00:00"
                },
                {
                    "dt": 1708959600,
                    "main": {
                        "temp": 17.27,
                        "feels_like": 17.59,
                        "temp_min": 17.27,
                        "temp_max": 17.27,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 951,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "mây rải rác",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 39
                    },
                    "wind": {
                        "speed": 0.31,
                        "deg": 163,
                        "gust": 0.5
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-26 15:00:00"
                },
                {
                    "dt": 1708970400,
                    "main": {
                        "temp": 17.23,
                        "feels_like": 17.49,
                        "temp_min": 17.23,
                        "temp_max": 17.23,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 949,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 54
                    },
                    "wind": {
                        "speed": 0.44,
                        "deg": 238,
                        "gust": 0.48
                    },
                    "visibility": 10000,
                    "pop": 0.02,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-26 18:00:00"
                },
                {
                    "dt": 1708981200,
                    "main": {
                        "temp": 16.51,
                        "feels_like": 16.72,
                        "temp_min": 16.51,
                        "temp_max": 16.51,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 949,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 58
                    },
                    "wind": {
                        "speed": 0.29,
                        "deg": 233,
                        "gust": 0.49
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-26 21:00:00"
                },
                {
                    "dt": 1708992000,
                    "main": {
                        "temp": 18.37,
                        "feels_like": 18.59,
                        "temp_min": 18.37,
                        "temp_max": 18.37,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 951,
                        "humidity": 89,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 77
                    },
                    "wind": {
                        "speed": 0.26,
                        "deg": 262,
                        "gust": 0.67
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-27 00:00:00"
                },
                {
                    "dt": 1709002800,
                    "main": {
                        "temp": 22.24,
                        "feels_like": 22.4,
                        "temp_min": 22.24,
                        "temp_max": 22.24,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 952,
                        "humidity": 72,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.15,
                        "deg": 35,
                        "gust": 1.69
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-27 03:00:00"
                },
                {
                    "dt": 1709013600,
                    "main": {
                        "temp": 26.06,
                        "feels_like": 26.06,
                        "temp_min": 26.06,
                        "temp_max": 26.06,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 950,
                        "humidity": 59,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 94
                    },
                    "wind": {
                        "speed": 2.1,
                        "deg": 62,
                        "gust": 2.51
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-27 06:00:00"
                },
                {
                    "dt": 1709024400,
                    "main": {
                        "temp": 25.09,
                        "feels_like": 25.33,
                        "temp_min": 25.09,
                        "temp_max": 25.09,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 948,
                        "humidity": 64,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.45,
                        "deg": 66,
                        "gust": 2.9
                    },
                    "visibility": 10000,
                    "pop": 0.07,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-27 09:00:00"
                },
                {
                    "dt": 1709035200,
                    "main": {
                        "temp": 19.76,
                        "feels_like": 20.35,
                        "temp_min": 19.76,
                        "temp_max": 19.76,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 949,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "mưa nhẹ",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.16,
                        "deg": 68,
                        "gust": 2.35
                    },
                    "visibility": 10000,
                    "pop": 0.39,
                    "rain": {
                        "3h": 0.4
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-27 12:00:00"
                },
                {
                    "dt": 1709046000,
                    "main": {
                        "temp": 19.17,
                        "feels_like": 19.73,
                        "temp_min": 19.17,
                        "temp_max": 19.17,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 950,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "mưa nhẹ",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.68,
                        "deg": 60,
                        "gust": 1.14
                    },
                    "visibility": 7302,
                    "pop": 0.23,
                    "rain": {
                        "3h": 0.3
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-27 15:00:00"
                },
                {
                    "dt": 1709056800,
                    "main": {
                        "temp": 18.54,
                        "feels_like": 19.06,
                        "temp_min": 18.54,
                        "temp_max": 18.54,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 948,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 94
                    },
                    "wind": {
                        "speed": 0.24,
                        "deg": 37,
                        "gust": 0.55
                    },
                    "visibility": 5177,
                    "pop": 0.11,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-27 18:00:00"
                },
                {
                    "dt": 1709067600,
                    "main": {
                        "temp": 18.45,
                        "feels_like": 18.96,
                        "temp_min": 18.45,
                        "temp_max": 18.45,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 947,
                        "humidity": 100,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 94
                    },
                    "wind": {
                        "speed": 0.2,
                        "deg": 146,
                        "gust": 0.45
                    },
                    "visibility": 6332,
                    "pop": 0.02,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-27 21:00:00"
                },
                {
                    "dt": 1709078400,
                    "main": {
                        "temp": 18.93,
                        "feels_like": 19.44,
                        "temp_min": 18.93,
                        "temp_max": 18.93,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 949,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 93
                    },
                    "wind": {
                        "speed": 0.3,
                        "deg": 106,
                        "gust": 0.66
                    },
                    "visibility": 10000,
                    "pop": 0.02,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-28 00:00:00"
                },
                {
                    "dt": 1709089200,
                    "main": {
                        "temp": 23.92,
                        "feels_like": 24.22,
                        "temp_min": 23.92,
                        "temp_max": 23.92,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 950,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 94
                    },
                    "wind": {
                        "speed": 1.25,
                        "deg": 60,
                        "gust": 1.8
                    },
                    "visibility": 10000,
                    "pop": 0.02,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-28 03:00:00"
                },
                {
                    "dt": 1709100000,
                    "main": {
                        "temp": 26.61,
                        "feels_like": 26.61,
                        "temp_min": 26.61,
                        "temp_max": 26.61,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 948,
                        "humidity": 59,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "mây đen u ám",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 97
                    },
                    "wind": {
                        "speed": 2.17,
                        "deg": 50,
                        "gust": 1.96
                    },
                    "visibility": 10000,
                    "pop": 0.02,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-28 06:00:00"
                },
                {
                    "dt": 1709110800,
                    "main": {
                        "temp": 25.61,
                        "feels_like": 26,
                        "temp_min": 25.61,
                        "temp_max": 25.61,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 946,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "mây rải rác",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 41
                    },
                    "wind": {
                        "speed": 2.35,
                        "deg": 63,
                        "gust": 2.79
                    },
                    "visibility": 10000,
                    "pop": 0.25,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-28 09:00:00"
                },
                {
                    "dt": 1709121600,
                    "main": {
                        "temp": 20.99,
                        "feels_like": 21.57,
                        "temp_min": 20.99,
                        "temp_max": 20.99,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 947,
                        "humidity": 93,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 67
                    },
                    "wind": {
                        "speed": 0.86,
                        "deg": 63,
                        "gust": 1.21
                    },
                    "visibility": 10000,
                    "pop": 0.29,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-28 12:00:00"
                },
                {
                    "dt": 1709132400,
                    "main": {
                        "temp": 20.32,
                        "feels_like": 20.91,
                        "temp_min": 20.32,
                        "temp_max": 20.32,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 948,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "mưa nhẹ",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 0.41,
                        "deg": 42,
                        "gust": 0.86
                    },
                    "visibility": 10000,
                    "pop": 0.31,
                    "rain": {
                        "3h": 0.15
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-28 15:00:00"
                },
                {
                    "dt": 1709143200,
                    "main": {
                        "temp": 19.61,
                        "feels_like": 20.21,
                        "temp_min": 19.61,
                        "temp_max": 19.61,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 946,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "mưa nhẹ",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 0.3,
                        "deg": 193,
                        "gust": 0.36
                    },
                    "visibility": 10000,
                    "pop": 0.34,
                    "rain": {
                        "3h": 0.15
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-28 18:00:00"
                },
                {
                    "dt": 1709154000,
                    "main": {
                        "temp": 18.75,
                        "feels_like": 19.27,
                        "temp_min": 18.75,
                        "temp_max": 18.75,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 945,
                        "humidity": 99,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 71
                    },
                    "wind": {
                        "speed": 0.68,
                        "deg": 218,
                        "gust": 0.64
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-02-28 21:00:00"
                },
                {
                    "dt": 1709164800,
                    "main": {
                        "temp": 19.59,
                        "feels_like": 20.11,
                        "temp_min": 19.59,
                        "temp_max": 19.59,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 947,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 76
                    },
                    "wind": {
                        "speed": 0.34,
                        "deg": 146,
                        "gust": 0.73
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-29 00:00:00"
                },
                {
                    "dt": 1709175600,
                    "main": {
                        "temp": 27.84,
                        "feels_like": 28.91,
                        "temp_min": 27.84,
                        "temp_max": 27.84,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 949,
                        "humidity": 57,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "mây cụm",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 82
                    },
                    "wind": {
                        "speed": 1.44,
                        "deg": 66,
                        "gust": 1.49
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-29 03:00:00"
                },
                {
                    "dt": 1709186400,
                    "main": {
                        "temp": 31.65,
                        "feels_like": 32.31,
                        "temp_min": 31.65,
                        "temp_max": 31.65,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 946,
                        "humidity": 43,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "mây rải rác",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 47
                    },
                    "wind": {
                        "speed": 2.65,
                        "deg": 47,
                        "gust": 1.58
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-02-29 06:00:00"
                }
            ],
            "city": {
                "id": 1905516,
                "name": "Tinh Quang Nam",
                "coord": {
                    "lat": 15.5,
                    "lon": 107.8542
                },
                "country": "VN",
                "population": 0,
                "timezone": 25200,
                "sunrise": 1708729774,
                "sunset": 1708772079
            }
        }
    }
    return data.data
}


// export const forecast = data.data.list.map((element) => {
//     return element.main.temp
// })

