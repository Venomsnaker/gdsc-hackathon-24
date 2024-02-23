# Thông tin API

URL: `https://api-ecom.duthanhduoc.com/`
Đối với các route cần xác thực => Gửi token lên bằng headers với key là `authorization`. Token phải bắt đầu bằng 'Bearer '

## Format trả về

Là một object

```ts
interface Response {
  message: string
  data?: any
}
```

Ví dụ

```json
{
  "message": "Lấy sản phẩm thành công",
  "data": {
    "_id": "60afb2c76ef5b902180aacba",
    "images": [
      "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"
    ],
    "price": 3190000,
    "rating": 4.6,
    "price_before_discount": 3990000,
    "quantity": 138,
    "sold": 1200,
    "view": 696,
    "name": "Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng",
    "description": "",
    "category": "60afafe76ef5b902180aacb5",
    "image": "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg",
    "createdAt": "2021-05-27T14:55:03.113Z",
    "updatedAt": "2021-06-12T14:22:55.871Z"
  }
}
```

## Format lỗi

### Trong trường hợp lỗi 422 (thường do form) hoặc lỗi do truyền query / param bị sai

Ví dụ đăng ký email đã tồn tại

```json
{
  "message": "Lỗi",
  "data": {
    "email": "Email đã tồn tại"
  }
}
```

### Trong trường hợp lỗi còn lại

```json
{
  "message": "Lỗi do abcxyz",
"data": {}
}
```

## Register: `/register`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```

<!-- Rules

- email: required, length: 5-160, isEmail
- password: required, length: 6-160 -->

Response

```json
{
  "message": "Đăng ký thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxNUBnbWFpbC5jb20iLCJpZCI6IjYwYzZmNGViNGVhMWRlMzg5ZjM1NjA1YiIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjEtMDYtMTRUMDY6MTk6MjMuNzQ5WiIsImlhdCI6MTYyMzY1MTU2MywiZXhwIjoxNjI0MjU2MzYzfQ.WbNgnd4cewdDNpx-ZLebk1kLgogLctBqgh9fc9Mb3yg",
    "expires": "7d",
    "user": {
      "roles": ["User"],
      "_id": "60c6f4eb4ea1de389f35605b",
      "email": "user15@gmail.com",
      "createdAt": "2021-06-14T06:19:23.703Z",
      "updatedAt": "2021-06-14T06:19:23.703Z",
      "__v": 0
    }
  }
}
```

## Login: `/login`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```

<!-- Rules

- email: required, length: 5-160, isEmail
- password: required, length: 6-160 -->

Response

```json
{
  "message": "Đăng nhập thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOThmNWI1MTY5MDU1MzZlODE4ZjhjYyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciIsIkFkbWluIl0sImNyZWF0ZWRfYXQiOiIyMDIxLTA2LTE0VDA4OjA4OjI4LjQ5NVoiLCJpYXQiOjE2MjM2NTgxMDgsImV4cCI6MTYyNDI2MjkwOH0.8YITBWt6SXikoaBHf-SlOh_h7ii0UgwY_5-bjCirY",
    "expires": "7d",
    "user": {
      "_id": "6098f5b516905536e818f8cc",
      "roles": ["User"],
      "email": "user2@gmail.com",
      "name": "Real user",
      "date_of_birth": null,
      "address": "",
      "phone": "",
      "createdAt": "2021-05-10T08:58:29.081Z",
      "updatedAt": "2021-05-10T08:58:29.081Z",
      "__v": 0
    }
  }
}
```

## Lấy thời tiết hiện tại: `/weather`

Method: POST
body : (không cần body)

```json
{  }
```
Response

có 2 trường hợp : 
- không xác định được ip người send thì mặc định ở tỉnh QUảng Nam
- xác định được ip người send thì lấy thông tin theo ip đó

```json
{
        "message": "Không có thông tin Ipv4 , lấy thông tin mặc định",
        "data": {
        "coord": {
            "lon": 107.8542,
            "lat": 15.5
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "mây rải rác",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 31.17,
            "feels_like": 31.95,
            "temp_min": 31.17,
            "temp_max": 31.17,
            "pressure": 1014,
            "humidity": 45,
            "sea_level": 1014,
            "grnd_level": 950
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.42,
            "deg": 54,
            "gust": 1.76
        },
        "clouds": {
            "all": 33
        },"dt": 1708666034,
        "sys": {
            "country": "VN",
            "sunrise": 1708643407,
            "sunset": 1708685662
        },
        "timezone": 25200,
        "id": 1905516,
        "name": "Tinh Quang Nam",
        "cod": 200
        }

}
```

## Lấy dự báo thời tiết cho 5 ngày tới , mỗi 3 giờ 1 lần : `/weather/forecast`

Method: POST

body : (không cần body)

```json
{  }
```
Response

có 2 trường hợp :
- không xác định được ip người send thì mặc định ở tỉnh QUảng Nam
- xác định được ip người send thì lấy thông tin theo ip đó

```json
{
    "message": "Không có thông tin Ipv4 , lấy thông tin mặc định",
    "data": {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1708668000,
                "main": {
                    "temp": 31.45,
                    "feels_like": 32.19,
                    "temp_min": 31.45,
                    "temp_max": 31.45,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 949,
                    "humidity": 44,
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
                    "speed": 3.03,
                    "deg": 53,
                    "gust": 2.51
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-23 06:00:00"
            },
            {
                "dt": 1708678800,
                "main": {
                    "temp": 30.03,
                    "feels_like": 31.09,
                    "temp_min": 27.19,
                    "temp_max": 30.03,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 948,
                    "humidity": 50,
                    "temp_kf": 2.84
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
                    "all": 23
                },
                "wind": {
                    "speed": 2.96,
                    "deg": 66,
                    "gust": 3.92
                },
                "visibility": 10000,
                "pop": 0.1,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-23 09:00:00"
            },
            {
                "dt": 1708689600,
                "main": {
                    "temp": 24.16,
                    "feels_like": 24.67,
                    "temp_min": 20.52,
                    "temp_max": 24.16,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 950,
                    "humidity": 78,
                    "temp_kf": 3.64
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
                    "all": 37
                },
                "wind": {
                    "speed": 1.01,
                    "deg": 55,
                    "gust": 1.99
                },
                "visibility": 10000,
                "pop": 0.13,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-23 12:00:00"
            },
            {
                "dt": 1708700400,
                "main": {
                    "temp": 20.21,
                    "feels_like": 20.79,
                    "temp_min": 20.21,
                    "temp_max": 20.21,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 96,
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
                    "all": 92
                },
                "wind": {
                    "speed": 0.61,
                    "deg": 40,
                    "gust": 1.05
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-23 15:00:00"
            },
            {
                "dt": 1708711200,
                "main": {
                    "temp": 19.86,
                    "feels_like": 20.43,
                    "temp_min": 19.86,
                    "temp_max": 19.86,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 949,
                    "humidity": 97,
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
                    "all": 96
                },
                "wind": {
                    "speed": 0.52,
                    "deg": 48,
                    "gust": 0.9
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-23 18:00:00"
            },
            {
                "dt": 1708722000,
                "main": {
                    "temp": 18.58,
                    "feels_like": 19.05,
                    "temp_min": 18.58,
                    "temp_max": 18.58,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 948,
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
                    "all": 74
                },
                "wind": {
                    "speed": 0.65,
                    "deg": 122,
                    "gust": 0.85
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-23 21:00:00"
            },
            {
                "dt": 1708732800,
                "main": {
                    "temp": 18.72,
                    "feels_like": 19.13,
                    "temp_min": 18.72,
                    "temp_max": 18.72,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 95,
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
                    "speed": 0.44,
                    "deg": 123,
                    "gust": 1.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-24 00:00:00"
            },
            {
                "dt": 1708743600,
                "main": {
                    "temp": 25.93,
                    "feels_like": 25.99,
                    "temp_min": 25.93,
                    "temp_max": 25.93,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 953,
                    "humidity": 54,
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
                    "all": 23
                },
                "wind": {
                    "speed": 1.6,
                    "deg": 61,
                    "gust": 1.74
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-24 03:00:00"
            },
            {
                "dt": 1708754400,
                "main": {
                    "temp": 29.29,
                    "feels_like": 28.91,
                    "temp_min": 29.29,
                    "temp_max": 29.29,
                    "pressure": 1014,
                    "sea_level": 1014,
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
                    "all": 14
                },
                "wind": {
                    "speed": 2.69,
                    "deg": 54,
                    "gust": 2.3
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-24 06:00:00"
            },
            {
                "dt": 1708765200,
                "main": {
                    "temp": 26.14,
                    "feels_like": 26.14,
                    "temp_min": 26.14,
                    "temp_max": 26.14,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 949,
                    "humidity": 55,
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
                    "all": 7
                },
                "wind": {
                    "speed": 2.9,
                    "deg": 62,
                    "gust": 3.01
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
                    "temp": 18.58,
                    "feels_like": 18.9,
                    "temp_min": 18.58,
                    "temp_max": 18.58,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 92,
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
                    "all": 20
                },
                "wind": {
                    "speed": 0.96,
                    "deg": 76,
                    "gust": 0.93
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
                    "temp": 16.81,
                    "feels_like": 17.13,
                    "temp_min": 16.81,
                    "temp_max": 16.81,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 952,
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
                    "all": 11
                },
                "wind": {
                    "speed": 0.52,
                    "deg": 193,
                    "gust": 0.54
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
                    "temp": 15.88,
                    "feels_like": 16.11,
                    "temp_min": 15.88,
                    "temp_max": 15.88,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
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
                    "speed": 0.68,
                    "deg": 228,
                    "gust": 0.65
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
                    "temp": 15.13,
                    "feels_like": 15.28,
                    "temp_min": 15.13,
                    "temp_max": 15.13,
                    "pressure": 1016,
                    "sea_level": 1016,
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
                    "all": 17
                },
                "wind": {
                    "speed": 1.02,
                    "deg": 211,
                    "gust": 0.9
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
                    "temp": 16.3,
                    "feels_like": 16.39,
                    "temp_min": 16.3,
                    "temp_max": 16.3,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 951,
                    "humidity": 92,
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
                    "all": 14
                },
                "wind": {
                    "speed": 0.82,
                    "deg": 220,
                    "gust": 0.95
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
                    "temp": 25.21,
                    "feels_like": 25.12,
                    "temp_min": 25.21,
                    "temp_max": 25.21,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 952,
                    "humidity": 51,
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
                    "all": 0
                },
                "wind": {
                    "speed": 1.65,
                    "deg": 54,
                    "gust": 2.13
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
                    "temp": 28.64,
                    "feels_like": 28.17,
                    "temp_min": 28.64,
                    "temp_max": 28.64,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 950,
                    "humidity": 39,
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
                    "all": 1
                },
                "wind": {
                    "speed": 2.65,
                    "deg": 56,
                    "gust": 2.77
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
                    "temp": 25.82,
                    "feels_like": 25.87,
                    "temp_min": 25.82,
                    "temp_max": 25.82,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 949,
                    "humidity": 54,
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
                    "all": 7
                },
                "wind": {
                    "speed": 3.07,
                    "deg": 63,
                    "gust": 3.16
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
                    "temp": 18.08,
                    "feels_like": 18.35,
                    "temp_min": 18.08,
                    "temp_max": 18.08,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 92,
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
                    "all": 12
                },
                "wind": {
                    "speed": 0.78,
                    "deg": 95,
                    "gust": 0.76
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
                    "temp": 16.94,
                    "feels_like": 17.2,
                    "temp_min": 16.94,
                    "temp_max": 16.94,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 951,
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
                    "all": 53
                },
                "wind": {
                    "speed": 0.39,
                    "deg": 195,
                    "gust": 0.44
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
                    "temp": 16.72,
                    "feels_like": 16.9,
                    "temp_min": 16.72,
                    "temp_max": 16.72,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 94,
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
                    "all": 63
                },
                "wind": {
                    "speed": 0.38,
                    "deg": 199,
                    "gust": 0.6
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
                    "temp": 15.41,
                    "feels_like": 15.57,
                    "temp_min": 15.41,
                    "temp_max": 15.41,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 949,
                    "humidity": 98,
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
                    "all": 88
                },
                "wind": {
                    "speed": 0.66,
                    "deg": 214,
                    "gust": 0.64
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
                    "temp": 16.61,
                    "feels_like": 16.68,
                    "temp_min": 16.61,
                    "temp_max": 16.61,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 951,
                    "humidity": 90,
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
                    "all": 81
                },
                "wind": {
                    "speed": 0.49,
                    "deg": 214,
                    "gust": 0.77
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
                    "temp": 23.25,
                    "feels_like": 23.17,
                    "temp_min": 23.25,
                    "temp_max": 23.25,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 953,
                    "humidity": 59,
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
                    "all": 75
                },
                "wind": {
                    "speed": 1.64,
                    "deg": 48,
                    "gust": 2.53
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
                    "temp": 27.39,
                    "feels_like": 27.33,
                    "temp_min": 27.39,
                    "temp_max": 27.39,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 950,
                    "humidity": 43,
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
                    "all": 58
                },
                "wind": {
                    "speed": 2.67,
                    "deg": 48,
                    "gust": 2.59
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
                    "temp": 25.39,
                    "feels_like": 25.34,
                    "temp_min": 25.39,
                    "temp_max": 25.39,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 949,
                    "humidity": 52,
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
                    "all": 51
                },
                "wind": {
                    "speed": 2.97,
                    "deg": 61,
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
                    "temp": 17.44,
                    "feels_like": 17.64,
                    "temp_min": 17.44,
                    "temp_max": 17.44,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 92,
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
                    "all": 34
                },
                "wind": {
                    "speed": 0.87,
                    "deg": 94,
                    "gust": 0.85
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
                    "temp": 18.57,
                    "feels_like": 18.7,
                    "temp_min": 18.57,
                    "temp_max": 18.57,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 951,
                    "humidity": 85,
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
                    "all": 95
                },
                "wind": {
                    "speed": 0.22,
                    "deg": 98,
                    "gust": 0.38
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
                    "temp": 18.34,
                    "feels_like": 18.48,
                    "temp_min": 18.34,
                    "temp_max": 18.34,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 950,
                    "humidity": 86,
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
                    "speed": 0.03,
                    "deg": 198,
                    "gust": 0.2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-26 18:00:00"
            },
            {
                "dt": 1708981200,
                "main": {
                    "temp": 18.15,
                    "feels_like": 18.27,
                    "temp_min": 18.15,
                    "temp_max": 18.15,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 949,
                    "humidity": 86,
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
                    "all": 100
                },
                "wind": {
                    "speed": 0.13,
                    "deg": 100,
                    "gust": 0.28
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
                    "temp": 18.76,
                    "feels_like": 18.86,
                    "temp_min": 18.76,
                    "temp_max": 18.76,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 951,
                    "humidity": 83,
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
                    "speed": 0.28,
                    "deg": 92,
                    "gust": 0.86
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
                    "temp": 22.46,
                    "feels_like": 22.48,
                    "temp_min": 22.46,
                    "temp_max": 22.46,
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
                    "all": 100
                },
                "wind": {
                    "speed": 1.44,
                    "deg": 59,
                    "gust": 2.41
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
                    "temp": 26.04,
                    "feels_like": 26.04,
                    "temp_min": 26.04,
                    "temp_max": 26.04,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 950,
                    "humidity": 52,
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
                    "speed": 2.58,
                    "deg": 63,
                    "gust": 2.48
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
                    "temp": 23.27,
                    "feels_like": 23.35,
                    "temp_min": 23.27,
                    "temp_max": 23.27,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 948,
                    "humidity": 65,
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
                    "speed": 2.36,
                    "deg": 61,
                    "gust": 3.14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-27 09:00:00"
            },
            {
                "dt": 1709035200,
                "main": {
                    "temp": 19.28,
                    "feels_like": 19.48,
                    "temp_min": 19.28,
                    "temp_max": 19.28,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 949,
                    "humidity": 85,
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
                    "all": 100
                },
                "wind": {
                    "speed": 0.79,
                    "deg": 91,
                    "gust": 0.8
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-27 12:00:00"
            },
            {
                "dt": 1709046000,
                "main": {
                    "temp": 16.7,
                    "feels_like": 16.93,
                    "temp_min": 16.7,
                    "temp_max": 16.7,
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
                    "all": 77
                },
                "wind": {
                    "speed": 0.26,
                    "deg": 226,
                    "gust": 0.31
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-27 15:00:00"
            },
            {
                "dt": 1709056800,
                "main": {
                    "temp": 16.03,
                    "feels_like": 16.25,
                    "temp_min": 16.03,
                    "temp_max": 16.03,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 948,
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
                    "all": 65
                },
                "wind": {
                    "speed": 0.62,
                    "deg": 236,
                    "gust": 0.54
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-27 18:00:00"
            },
            {
                "dt": 1709067600,
                "main": {
                    "temp": 15.46,
                    "feels_like": 15.62,
                    "temp_min": 15.46,
                    "temp_max": 15.46,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 947,
                    "humidity": 98,
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
                    "all": 30
                },
                "wind": {
                    "speed": 0.74,
                    "deg": 226,
                    "gust": 0.69
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-02-27 21:00:00"
            },
            {
                "dt": 1709078400,
                "main": {
                    "temp": 16.89,
                    "feels_like": 17.01,
                    "temp_min": 16.89,
                    "temp_max": 16.89,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 949,
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
                    "all": 40
                },
                "wind": {
                    "speed": 0.42,
                    "deg": 212,
                    "gust": 0.63
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-28 00:00:00"
            },
            {
                "dt": 1709089200,
                "main": {
                    "temp": 25.35,
                    "feels_like": 25.32,
                    "temp_min": 25.35,
                    "temp_max": 25.35,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 951,
                    "humidity": 53,
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
                    "all": 64
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 60,
                    "gust": 2.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-02-28 03:00:00"
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
            "sunrise": 1708643407,
            "sunset": 1708685662
        }
    }
}



// <!-- ## Logout: `/logout`

// Method: POST

// ## Read me: `/me`

// Method: GET

// Response

// ```json
// {
//   "message": "Lấy người dùng thành công",
//   "data": {
//     "_id": "6098f5b516905536e818f8cc",
//     "roles": ["User"],
//     "email": "user@gmail.com",
//     "name": "Real",
//     "date_of_birth": null,
//     "address": "",
//     "phone": "",
//     "createdAt": "2021-05-10T08:58:29.081Z",
//     "updatedAt": "2021-05-10T08:58:29.081Z"
//   }
// }
```

<!-- ## Read Products: `/products`

Ví du: `products?page=1&limit=30`
Method: GET

Query Params:
`page`: number. Số trang. Mặc định là 1
`limit`: number. Số product trên 1 trang. Mặc định là 30
`order`: 'desc' || 'asc'. Sắp xếp theo thứ tự. Mặc định là 'desc'
`sort_by`: 'createdAt' || 'view' || 'sold' || 'price'. Sắp xếp theo trường. Mặc định là 'createdAt'.
`category`: categoryId. Lọc sản phẩm theo category
`exclude`: productId. Loại trừ sản phẩm nào đó
`rating_filter`: number. Lọc sản phẩm có số sao lớn hơn hoặc bằng rating_filter
`price_max`: number. Giá cao nhất
`price_min`: number. Giá thấp nhất
`name`: string. Tên sản phẩm (lưu ý Tên sản phẩm tiếng Việt phải gõ đầy đủ dấu)

Response

```json
{
  "message": "Lấy các sản phẩm thành công",
  "data": {
    "products": [],
    "pagination": {
      "page": 1,
      "limit": 30,
      "page_size": 2
    }
  }
}
```

## Read Product Detail: `/products/productId`

Method: GET

## Add To Cart: `/purchases/add-to-cart`

Method: POST

Body

```json
{
  "product_id": "60afb1c56ef5b902180aacb8",
  "buy_count": 3
}
```

## Read Purchases: `/purchases`

Method: GET
Query Params:
`status`: Trạng thái đơn hàng

Thông tin `status`:
-1: Sản phẩm đang trong giỏ hàng
0: Tất cả sản phâm
1: Sản phẩm đang đợi xác nhận từ chủ shop
2: Sản phẩm đang được lấy hàng
3: Sản phẩm đang vận chuyển
4: San phẩm đã được giao
5: Sản phẩm đã bị hủy

## Update purchase: `/purchases/update-purchase`

Method: PUT
Body:

```json
{
  "product_id": "60afb1c56ef5b902180aacb8",
  "buy_count": 3
}
```

## Delete purchases: `/purchases`

Method: DELETE
body: mảng các `purchase_id`

```json
["purchase_id"]
```

## Buy purchases: `/purchases/buy-products`

Method: POST
body: Mảng các object

```json
[{ "product_id": "60afb1c56ef5b902180aacb8", "buy_count": 2 }]
```

## Update me: `/user`

Method: PUT
Body:

```json
{
  "address": "Việt Nam",
  "date_of_birth": "1907-02-18T17:17:56.000Z",
  "name": "Dư Thanh Được",
  "phone": "04511414",
  "avatar": "URL Avatar",
  "password": "Mật khẩu cũ",
  "new_password": "Mật khẩu mới"
}
```

Rules

- name: maxLength = 160
- phone: maxLength = 20
- address: maxLength = 160
- date_of_birth: ISO8601
- password: length: 6-160
- new_password: length: 6-160 --> -->
