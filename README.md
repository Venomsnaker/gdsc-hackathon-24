# Smart Harvest
Smart Harvest is a solution for farmers in Vietnam. The solution's main target is in line with the second goal of the UN Sustainable Development Goals. The main features are: 
- Field management
- Disease classification
- Weather forecast
- Agriculture news
# Target Devices
Android and iOS (in development)
# Where to start?
APK File
# Models
**Rice Leaf Diseases Classification**
- Dataset: https://www.kaggle.com/datasets/loki4514/rice-leaf-diseases-detection
- Notebook: https://www.kaggle.com/code/venomsnaker/rice-leaf-diseases-classification
- Reference Notebook: https://www.kaggle.com/datasets/shrupyag001/philippines-rice-diseases
# Comments
- The solution is still in early development.



# Mấy cái của Tư ở dưới
# Thông tin API

URL: `https://api-ecom.duthanhduoc.com/`
Đối với các route cần xác thực => Gửi token lên bằng headers với key là `authorization`. Token phải bắt đầu bằng 'Bearer '

## Format trả về

Là một object

```ts
interface Response {
  message: string
  data: any
}
```

## Lưu ý : trả về không có data: {} nghĩa là có lỗi

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
  "message": "Email đã tồn tại",
  "data": {}
}
```

### Trong trường hợp lỗi còn lại

```json
{
    "message": "Lỗi do abcxyz",
    "data": {}
}
```

## Register: `/auth/register`

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
    "message": "Register success",
    "data": {
        "user_id": "-NrJivU6cWchrT3RlBHw",
        "email": "dotu30357",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcXAJB6hubpKgNC95BByFgMzQRe37d1o9eA&usqp=CAU"
    }
}
```
Or 
```json
{
    "message": "User already exist",
    "data": {}
}
```
Or
```json
{
    "message": "Password is required",
    "data": {}
}
```
Or
```json
{
    "message": "Email is required",
    "data": {}
}
```

## Login: `/auth/login`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```
Or
```json
{
    "message": "User not found",
    "data": {}
}
```
Or
```json
{
    "message": "Password is required",
    "data": {}
}
```
Or
```json
{
    "message": "Email is required",
    "data": {}
}
```

Response

```json
{
    "message": "login success",
    "data": {
        "user_id": "-NrJhxxPkzi7fidzsMs2",
        "email": "dotu30157",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcXAJB6hubpKgNC95BByFgMzQRe37d1o9eA&usqp=CAU"
    }
}
```

## Đôit mật khẩu : /auth/change-password/

Method: POST

boyd :
```json
{
    "email" : "dotu30257" , 
    "new_password" : "a",
    "password" : "a"
}
```
Response 
```json
{
    "message": "Password changed successfully",
    "data": {
        "id": "-NrJhk4ATrF82aAlL9XH",
        "email": "dotu30257",
        "password": "a",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcXAJB6hubpKgNC95BByFgMzQRe37d1o9eA&usqp=CAU"
    }
}
```
Or 
```json 
{
    "message": "User not found",
    "data": {}
}
```
Or 
```json 
{
    "message": "Password is incorrect",
    "data": {}
}
```
Or 
```json 
{
    "message": "new_password is required",
    "data": {}
}
```

## get me : /auth/me/:user_id

Method: GET

Response 
```json
{
    "message": "Get user successfully",
    "data": {
        "user_id": "-NrJhk4ATrF82aAlL9XH",
        "email": "dotu30257",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcXAJB6hubpKgNC95BByFgMzQRe37d1o9eA&usqp=CAU"
    }
}
```
```json
{
    "message": "User not found",
    "data": {}
}
```
Or 
```json
{
    "message": "user_id is required",
    "data": {}
}
```

## Tin tức nông nghiệp : http://35.247.138.127/api-ai/news

Method: GET

Response 
```json

{
    "message": "Tin tức mới nhất",
    "data": [
        {
            "author": "Công Tâm",
            "date": "Thứ sáu, ngày 23/02/2024 18:36 PM (GMT+7)",
            "description": "Trung tâm Dịch vụ Hậu cần – Kỹ thuật đảo Trường Sa (thuộc Hải đoàn 129 Hải quân) vừa khắc phục thành công sự cố tàu cá KH 94848 TS và tàu sẽ tiếp tục hành trình đi đánh bắt hải sản.",
            "text": [
                "Chiều  23/2, Trung tâm Dịch vụ Hậu cần – Kỹ thuật đảo Trường Sa (thuộc Hải đoàn 129 Hải quân) đã khắc phục thành công sự cố tàu cá KH 94848 TS, sau khi khắc phục xong tàu sẽ tiếp tục đi đánh bắt hải sản.",
                "Được biết, tàu cá KH 94848 TS do ông Lê Hữu Hà, thường trú tại Hòn Rớ,TP.Nha Trang (Khánh Hòa) làm thuyền trưởng, xuất bến ngày 5/2, làm nghề câu cá ngừ.",
                "Vào chiều 21/2, đang khai thác hải sản ở khu vực biển Đông Bắc đảo Trường Sa 12 hải lý thì gặp sự cố, mất khả năng cơ động. Tàu cá đã liên hệ với Trung tâm Dịch vụ Hậu cần – Kỹ thuật đảo Trường Sa để được hướng dẫn vào Âu tàu đảo Trường Sa sửa chữa.",
                "Đến ngày 22/2, tàu cá KH 94848 TS được tàu cá KH 97272 TS lai dắt vào cập cảng Âu tàu đảo Trường Sa an toàn. Trung tâm Dịch vụ Hậu cần – Kỹ thuật đảo Trường Sa, Hải đoàn 129 Hải quân đã cử nhân viên kỹ thuật xuống tàu cá KH 94848 TS khảo sát sự cố, xác định tàu cá bị hỏng hộp số và tháo rời đưa về xưởng để sửa chữa.",
                "Đến chiều 23/2, sự cố hộp số của tàu cá KH 94848 TS đã được khắc phục, lắp đặt thành công và kiểm tra hoạt động ổn định, tàu cá đã rời Trung tâm tiếp tục đi khai thác hải sản.",
                "Trong thời gian sửa chữa, cán bộ Trung tâm kết hợp tuyên truyền Chỉ thị 45/CT-TTg của Thủ tướng Chính phủ; giới thiệu hoạt động của các âu tàu, làng chài tại huyện đảo Trường Sa; tặng cờ Tổ quốc, áo phao cá nhân, 2.000 lít nước ngọt và một số nhu yếu phẩm, thuốc men cho ngư dân trên tàu cá.",
                "Đây là hoạt động thường xuyên của các âu tàu, làng chài tại quần đảo Trường Sa thực hiện chương trình \"Hải quân Việt Nam làm điểm tựa cho ngư dân vươn khơi bám biển\" và chung tay cùng cả nước khắc phục thẻ vàng của Liên minh châu Âu."
            ],
            "title": "Sửa chữa tàu đánh bắt cá ngừ của Khánh Hòa bị hư hỏng trên vùng biển"
        },
        {
            "author": "Thắng Tình",
            "date": "Thứ sáu, ngày 23/02/2024 14:10 PM (GMT+7)",
            "description": "UBND tỉnh Nghệ An vừa có quyết định công nhận thêm 9 sản phẩm OCOP đạt 4 sao. Đồng thời, 2 sản phẩm đang trình Hội đồng đánh giá, phân hạng xem xét công nhận sản phẩm OCOP cấp Quốc gia 5 sao.",
            "text": [
                "UBND tỉnh Nghệ An vừa ban hành Quyết định 348/QĐ-UBND về việc Phê duyệt kết quả đánh giá, phân hạng sản phẩm tham gia Chương trình \"Mỗi xã một sản phẩm\" tỉnh Nghệ An năm 2023.",
                "Đồng thời, phê duyệt kết quả chấm điểm, trình Hội đồng đánh giá, phân hạng cấp Trung ương xem xét công nhận sản phẩm OCOP cấp Quốc gia (5 sao) đối với 2 sản phẩm gồm: Nhóm hộp quà tặng mây tre và nhóm đèn bàn mây tre của Công ty TNHH Đức Phong.",
                "Cụ thể, 9 sản phẩm OCOP cấp tỉnh năm 2023 của 7 chủ thể, đạt OCOP hạng 4 sao. Trong đó, có 6 sản phẩm đánh giá lại gồm: Rượu mú từn của Công ty TNHH Long Lưu; Hương trầm Liên Đức của Công ty TNHH hương trầm Bảy Lương; Trà túi lọc cà gai leo, trà túi lọc dây thìa canh và trà túi lọc giảo cổ lam của Công ty cổ phần Dược liệu Pù Mát; Nước mắm hạ thổ của Công ty cổ phần Thủy sản Vạn Phần Diễn Châu.",
                "Bên cạnh đó, có 1 sản phẩm nâng hạng là Giò bê Lâm Ngọc của hộ sản xuất, kinh doanh giò bê Lâm Ngọc. Hai sản phẩm đánh giá lần đầu gồm: Nhóm gương mây tre của Công ty TNHH Đức Phong; Nước mắm Cửa Lò CL28 và Cửa Hội CH20, CH25 của Công ty cổ phần Thủy sản Nghệ An.",
                "Các sản phẩm đạt hạng sao nêu trên được UBND tỉnh cấp Giấy chứng nhận và được sử dụng tem, nhãn hiệu OCOP và thứ hạng sao đạt được in trên bao bì sản phẩm; được thưởng theo quy định. Kết quả đánh giá phân hạng này có giá trị trong vòng 3 năm.",
                "Thực hiện chương trình \"Mỗi xã một sản phẩm\", với quyết tâm cao của cấp ủy, chính quyền và sự đồng tình, hưởng ứng của doanh nghiệp, người dân, đến nay Chương trình \"Mỗi xã một sản phẩm\" ở Nghệ An đã thực sự đi vào cuộc sống, tạo sức lan tỏa lớn.",
                "Các địa phương trên địa bàn tỉnh Nghệ An đã đưa các loại cây trồng, vật nuôi có hiệu quả kinh tế cao vào sản xuất để phát triển sản phẩm OCOP.",
                "Hiện nay, Nghệ An có hơn 400 sản phẩm đạt tiêu chuẩn OCOP 3 sao trở lên. Nghệ An đứng thứ 2 của cả nước về số lượng sản phẩm OCOP. Đây cũng là 1 trong 10 kết quả nổi bật của tỉnh Nghệ An, vượt xa với mục tiêu của đề án \"Mỗi xã một sản phẩm tỉnh Nghệ An giai đoạn 2019 - 2020, định hướng đến năm 2030\"."
            ],
            "title": "Thêm nhiều sản phẩm nông nghiệp, nông thôn của Nghệ An đạt OCOP 4 sao"
        },
        {
            "author": "Hải Anh",
            "date": "Thứ sáu, ngày 23/02/2024 17:56 PM (GMT+7)",
            "description": "Người tiêu dùng đang ngày một quan tâm đến chất lượng các sản phẩm thực phẩm, đồ uống, đặc biệt trong dịp năm mới này.",
            "text": [
                "Trong muôn vàn điều ước cho dịp năm mới, sức khoẻ luôn là điều đuợc mong ước nhiều nhất. Không phải tự nhiên mà lời chúc \"An khang, cát tường\" luôn được nhắc đến trong các dịp tụ tập, sum họp ngày đầu năm. Trong bối cảnh người tiêu dùng đang ngày một chú trọng đến sức khoẻ, đặc biệt trong dịp năm mới, những sản phẩm đồ uống, thực phẩm lành mạnh đang được quan tâm hơn bao giờ hết.",
                "Theo Báo cáo Chỉ số Tetra Pak 2023, người tiêu dùng Việt Nam hiện đang ưa chuộng các sản phẩm có nguồn gốc tự nhiên, tốt cho sức khoẻ. Kết quả điều tra về xu hướng tiêu dùng năm 2023 cũng cho thấy thị trường hàng tiêu dùng nước ta đang dần phát triển về chiều sâu, khách hàng yêu cầu ngày càng cao về xuất xứ, nguồn gốc sản phẩm và các thành phần, nguyên liệu trong đó.",
                "\"Vì sức khỏe cộng đồng\" là giá trị mà Tập đoàn TH (đơn vị sở hữu thương hiệu TH true MILK) theo đuổi ngay từ những ngày đầu bước chân vào thị trường sữa tươi sạch. Đến nay, Tập đoàn đã nghiên cứu, phát triển và cho ra mắt hơn 170 sản phẩm sữa, đồ uống và thực phẩm tốt cho sức khỏe.",
                "Bộ sản phẩm đồ uống TH gồm: Trà tự nhiên TH true TEA, Nước uống sữa trái cây TH true JUICE milk, Nước gạo rang TH true RICE và Nước trái cây tự nhiên TH true JUICE với thành phần hoàn toàn từ thiên nhiên, được tuyển chọn từ những nguyên liệu cao cấp, đã được khoác lên \"giao diện\" mới với bao bì đẹp, trang trọng cho dịp năm mới 2024. Không chỉ là những món uống thanh nhẹ, giảm hoặc không sử dụng đường tinh luyện trong thành phần, bao bì rực rỡ cũng là yếu tố giúp bộ sản phẩm đồ uống TH trở thành món đồ uống lý tưởng để chào đón năm mới.",
                "Trong đó, bộ đôi Trà tự nhiên TH true TEA hương vị trà xanh vị chanh tự nhiên và trà Ô long tự nhiên với công thức kết hợp lá trà đặc sản tinh túy từ những vùng nguyên liệu nổi tiếng của Việt Nam với nguồn nước ngầm núi lửa triệu năm tại Núi Tiên (Nghệ An) được xử lý với công nghệ siêu lọc hàng đầu thế giới từ lâu đã được giới trẻ cực kỳ ưa chuộng. Không chỉ có hương vị đậm trà thơm mát, sảng khoái, sản phẩm trà xanh vị chanh tự nhiên cung cấp EGCG và các hoạt chất chống oxy hóa dồi dào cùng các axit amin có tác dụng giảm căng thẳng, tăng cường miễn dịch. Còn TH true TEA Trà Ô long tự nhiên cung cấp các polyphenol giúp chống oxy hóa, mang lại nhiều lợi ích cho sức khỏe.",
                "Sản phẩm nước gạo TH true RICE cùng hai hương vị gạo rang và gạo lứt đỏ chính là sự lựa chọn hàng đầu dành cho các \"tín đồ\" ăn sạch - uống lành. Sản phẩm hoàn toàn không chứa đường tinh luyện mà mang vị ngọt tự nhiên từ thành phần gạo đặc sản được Tập đoàn TH trồng tại Thái Bình và Nghệ An với quy trình chuẩn, sạch. Không cholesterol, ít gây béo, cung cấp nguồn dưỡng chất lành mạnh cùng Vitamin nhóm B và E hỗ trợ giữ dáng, đẹp da, TH true RICE là thức uống phù hợp để gia đình \"giải ngấy\" trên bàn tiệc dịp đầu năm mới.",
                "Với nhiều dự định, mong muốn thực hiện trong năm mới, nhiều người thường có thói quen \"bỏ quên\" việc chăm sóc bản thân. Một chai sữa nước uống sữa trái cây TH true JUICE milk dồi dào năng lượng đến từ dưỡng chất của dòng sữa tươi sạch và vitamin, khoáng chất của trái cây tự nhiên sẽ giúp bạn F5 sức khỏe để đón một năm mới với nhiều cơ hội mới.",
                "Hiện nay, nhiều bạn trẻ thường có cho mình những thực đơn ăn uống nhiều đạm, chất béo nhưng lại thiếu các loại vitamin, khoáng chất cần thiết cho cơ thể. TH true JUICE là sản phẩm nước trái cây với thành phần hoàn toàn từ trái cây thật cùng nguyên liệu tuyển chọn, đa dạng hương vị như cam, táo, táo-đào,... sẽ là những \"trợ thủ\" đắc lực để bổ sung vitamin và khoáng chất cần thiết cho cơ thể. Vị thanh ngọt tự nhiên, tươi mát từ trái cây tươi, không chứa đường tinh luyện và bảng thành phần hoàn toàn từ thiên nhiên chính là những \"điểm cộng\" giúp TH true JUICE trở thành sự lựa chọn lý tưởng trong dịp năm mới này.",
                ""
            ],
            "title": "Đồ uống tốt cho sức khoẻ - xu hướng của năm mới 2024"
        },
        {
            "author": "Thanh Ngân",
            "date": "Thứ sáu, ngày 23/02/2024 12:52 PM (GMT+7)",
            "description": "Chỉ với 3.000m2 đất, trồng dâu tây theo tiêu chuẩn VietGAP kết hợp làm du lịch, anh Đỗ Văn Tuấn – Bí thư Huyện đoàn Than Uyên (Lai Châu) lãi trên dưới 300 triệu đồng mỗi vụ.",
            "text": [
                "Dẫn chúng tôi đi thăm vườn dâu tây phía sau nhà, chỉ vào những quả dâu tây chín đỏ, bắt mắt, anh Tuấn vui vẻ giới thiệu: Đây là giống tây Hana, được lấy từ Đà Lạt về trồng theo tiêu chuẩn VietGAP nên khá đảm bảo về vệ sinh an toàn thực phẩm. Nhiều du khách rất thích thú khi đến thăm quan, trải nghiệm hái và ăn dâu tây ngay tại vườn.",
                "Đúng như lời giới thiệu của anh Bí thư Huyện đoàn năng động, vườn dâu tây của anh Tuấn ở bản Mé (Mường Cang, Than Uyên) luống nào, luống nấy cũng thẳng tắp, sạch sẽ. Trên mặt luống được phủ lớp nilon, chi chít những quả dâu tây chín mọng, thơm ngon, ai thấy cũng mê.",
                "Qua câu chuyện với anh Tuấn, được biết: Năm 2016, anh Tuấn bắt đầu trồng thử nghiệm dâu tây. Qua một người chị ở trong Đà Lạt, anh lấy mấy chục cây giống dâu tây cấy mô về trồng thử tại vườn nhà. Sau một thời gian chăm sóc, số cây dâu tây trồng thử nghiệm sinh trưởng, phát triển tốt, ra quả to, đẹp, ăn ngon.",
                "Năm 2018, anh Tuấn quyết định nhân rộng diện tích. Được mẹ vợ cho mượn mảnh đồi tạp sau nhà, tranh thủ những ngày nghỉ cuối tuần, anh Tuấn thuê máy san gạt, cải tạo để trồng dâu tây.",
                "Chỉ vào vườn dâu tây rộng rãi, anh Tuấn cho hay: Khu đất này trước đây là đồi tạp, rộng chừng 3000m2. Năm 2018, tôi cải tạo lại song không dám làm hết diện tích, mà chỉ trồng 2000m2. Qua một vụ trồng, nhận thấy cây dâu tây cho giá trị kinh tế cao, tôi mới tiếp tục nhân rộng lên 3000m2. Thay vì mua ngó về trồng, tôi lấy cây cấy mô về trồng và tự nhân giống. Tôi mua giống dâu tây Hana tít trong thành phố Đà Lạt về trồng đấy.",
                "Vì là người đầu tiên trồng dâu tây ở Than Uyên nên anh Tuấn phải tự mầy mò học hỏi qua sách, báo và vừa làm vừa rút kinh nghiệm. Và anh đã thành công khi cây dâu tây Hana sinh trưởng, phát triển tốt trên đất mới. Đặt vấn đề vệ sinh an toàn thực phẩm lên hàng đầu, nên anh Tuấn tuân thủ nghiêm ngặt các khâu, từ làm đất cho đến trồng và chăm sóc. Anh Tuấn trồng dâu tây theo tiêu chuẩn VietGAP. Vườn dâu tây của anh Tuấn cũng đã được cấp giấy chứng nhận VietGAP từ năm 2019.",
                "Theo anh Tuấn, trồng dâu tây yêu cầu khắt khe về kĩ thuật. Nếu chăm sóc không tốt thì sản lượng sẽ không cao, quả dâu tây cũng không to, đẹp, thơm ngon.",
                "\"Cái khó nhất là thuần cây giống cấy mô. Vì khí hậu ở Đà Lạt và Than Uyên khác nhau, nên khi vận chuyển cây giống từ Đà Lạt ra sẽ không tránh khỏi bị sốc nhiệt. Nắm bắt được điều này, nên khi cây giống được đưa từ Đà Lạt ra, tôi để chúng ở nơi dâm mát 2 ngày, sau đó mới đưa cây giống ra tập nắng cho quen với thời tiết nơi mới khoảng 2 tuần. Khi đưa ra trồng, tôi phủ lưới đen toàn bộ, sau đó nâng dần việc tiếp sáng cho cây giống\" – Bí thư Huyện đoàn Than Uyên cho hay.",
                "Chia sẻ về quy trình kĩ thuật trồng dâu tây, anh Tuấn vui vẻ nói: \"Trước khi trồng dâu tây, cần phải làm đất tơi xốp, lên luống cao từ 35-40cm, để khi cây ra quả không bị chạm đất. Tôi thường trộn phân chuồng ủ hoai mục, phân lân và vôi với đất tơi xốp, sau đó lên luống và đưa cây giống vào trồng. Luống trồng dâu tây được phủ kín nilon. Sau khi trồng, cứ cách 1 tuần tôi lại cho chúng \"ăn\" phân cá một lần. Cách 1 tháng sau trồng thì tôi sử dụng phân chuối bón cho vườn dâu tây\".",
                "Được biết, anh Tuấn đưa cây giống cấy mô vào trồng để nhân giống từ tháng 5 hằng năm. Anh Tuấn dùng viên nén sơ dừa để nhân giống bằng cách tách ngó. Thay vì tách được cây nào trồng cây nấy, anh Tuấn ủ thành bãi, sau đó mới đưa ra trồng đồng loạt vào tháng 10.",
                "Cùng với việc tuân thủ quy trình bón phân, anh Tuấn sử dụng các sản phẩm thảo mộc kháng vi rút và phòng trừ sâu bệnh cho vườn dâu tây. Từ khi trồng đến khi thu hoạch, cứ cách 2 tuần anh Tuấn lại xử lý một lần, để kiểm soát sâu bệnh hại vườn dâu tây.",
                "Anh Tuấn cho vườn dâu tây \"ăn\" phân qua hệ thống tưới nhỏ giọt và tưới nước đều đặn mỗi ngày cho dâu tây vào buổi sáng. Được chăm sóc theo đúng quy trình kĩ thuật, vườn dâu tây của anh Tuấn sinh trưởng, phát triển tốt. Sau hơn 2 tháng trồng, vườn dâu tây của anh Tuấn đã cho lứa quả đầu tiên. Thời gian cho thu quả kéo dài khoảng 3 tháng.",
                "\"Tôi bắt đầu mở vườn dâu tây cho khách đến thăm quan, trải nghiệm hái dâu tây tại vườn từ ngày mồng 1 tết nguyên đán hằng năm. Mỗi ngày, vườn dâu tây của gia đình tôi thu hút từ 100 – 150 lượt khách đến thăm quan, hái quả dâu tây. Làm theo cách này, quả dâu tây bán được giá cao và ổn định hơn, khoảng 150.000 đồng/kg. Mỗi vụ, gia đình tôi lãi trên dưới 300 triệu đồng từ vườn dâu tây này đấy\" – anh Tuấn thông tin."
            ],
            "title": "Trồng loại quả ngon, đồi đẹp như phim, một thanh niên Lai Châu lãi 300 triệu/vụ"
        },
        {
            "author": "Phước Giang",
            "date": "Thứ sáu, ngày 23/02/2024 18:58 PM (GMT+7)",
            "description": "Hơn 4 năm trước, ông Huỳnh Văn Tiếng, nông dân xã Phú Đức, (huyện Long Hồ, tỉnh Vĩnh Long) thả nuôi 20 con cua đinh bố mẹ. Và những năm trở lại đây, con cua đinh bắt đầu sinh sản đem lại hiệu quả kinh tế khá cho gia đình ông.",
            "text": [
                "Theo ông Huỳnh Văn Tiếng, nông dân xã Phú Đức, (huyện Long Hồ, tỉnh Vĩnh Long), môi trường nuôi con đặc sản như con cua đinh có ảnh hưởng rất lớn đến việc quyết định năng suất sinh sản và chất lượng trứng cua đinh.",
                "Tham quan mô hình nuôi cua đinh nhà ông Huỳnh Văn Tiếng, nông dân xã Phú Đức, (huyện Long Hồ, tỉnh Vĩnh Long).",
                "Xác định được yếu tố môi trường là rất quan trọng, quyết định thành bại nên ông Tiếng xây bể nuôi cua đinh có không gian yên tĩnh, kín đáo, quang đãng, dễ thoát nước.",
                "Bể nuôi cua đinh không bị úng ngập và quan trọng là có nguồn nước độc lập để bảo đảm cấp nước sạch.",
                "Diện tích bể nuôi cua đinh tùy điều kiện mỗi gia đình, nhưng theo ông Tiếng thì bể thích hợp nhất là khoảng 500m2.",
                "Mực nước trong bể xi măng thích hợp cho nuôi cua đinh thịt là từ 1,5- 2m, mực nước chứa thường xuyên từ 1- 1,2m.",
                "Thời kỳ nắng nóng và mùa lạnh, cho nước sâu thêm 20- 30cm nước vào trong bể nuôi và cần tạo chỗ cho cua đinh nghỉ ngơi dưới nước cũng như trên bờ, có chỗ cố định cho cua đinh ăn để tiện theo dõi.",
                "Ông Huỳnh Văn Tiếng và những con cua đinh bố mẹ.",
                "Ông Tiếng chia sẻ kinh nghiệm nuôi cua đinh sinh sản như sau: “Nuôi cua đinh thì việc quan trọng nhất là cho ăn phải kỹ, thức ăn vừa đủ.",
                "Vì nếu thức ăn dư sẽ ảnh hưởng đến nguồn nước, làm nước bị hôi thối con cua đinh dễ bị yếu và chết. Khi nguồn nước bị ô nhiễm sẽ ảnh hưởng đến sức khỏe, quá trình sinh trưởng của cua đinh. Do đó, trong quá trình nuôi con đặc sản này, phải theo dõi thường xuyên nguồn nước”.",
                "Ông Tiếng cho chúng tôi biết cua đinh giống bán ra với giá khá cao. Cụ thể con cua đinh giống được chia làm 3 loại như sau: cua đinh giống loại 1 (2 tuần tuổi) bán với giá 300.000 đồng/con; con cua đinh giống loại 2 (1- 2 tháng tuổi) bán với giá 500.000 đồng/con và con cua đinh giống loại 3 (3 - 4 tháng tuổi) bán với giá 600.000 đồng/con.",
                "Cua đinh giống nuôi và cung cấp bởi ông Huỳnh Văn Tiếng, nông dân xã Phú Đức, (huyện Long Hồ, tỉnh Vĩnh Long).",
                "Để có được cua đinh bố mẹ, người nuôi phải bỏ ra khoảng 3 năm để nuôi cua đinh. Khi cua đinh đạt 4- 5 kg/con thì chọn cho sinh sản.",
                "Mỗi năm, cua đinh đẻ 3- 4 lứa, mỗi lứa 8- 15 trứng. Mùa sinh sản của chúng từ tháng 12 âm lịch năm trước đến tới tháng 7 âm lịch năm sau.",
                "Cua đinh đẻ trên cát như ba ba, chúng lấp trứng lại và bỏ đi. Thường 100 ngày là trứng con cua đinh nở, tỷ lệ ấp trứng nở khoảng 70%.",
                "Cua đinh có nguồn thức ăn khá đa dạng, từ đầu tôm tép, cá tạp, ốc bươu vàng, cá biển đến thức ăn công nghiệp.",
                "Ngoài ra, để tăng lợi nhuận và giảm bớt chi phí, người nuôi có thể kiếm thức ăn tự nhiên cho cua đinh. Các loại dễ kiếm nhất là cá tạp, ốc bươu vàng.",
                "Nói về hiệu quả kinh tế từ việc nuôi cua đinh sinh sản, ông Tiếng cho biết như sau: “Tôi nuôi được 20 con cua đinh bố mẹ để sinh sản, tầm khoảng 2 năm trở lại đây cua bắt đầu cho sinh sản thì thu nhập của gia đình tôi từ đó cũng được nâng lên đáng kể.",
                "Vì nguồn thức ăn cho cua có nhiều trong tự nhiên nên chi phí cũng thấp. Năm nay, đàn cua đinh nhà tôi đẻ được 200 trứng, trừ đi tất cả chi phí năm nay tôi thu lời khoảng 60 triệu đồng”.",
                "Khi chúng tôi thực hiện bài viết này, ông Tiếng cũng đang chuẩn bị mở rộng diện tích nuôi, bởi theo ông, mô hình nuôi cua đinh của ông đem lại hiệu quả kinh tế cao, rủi ro lại thấp."
            ],
            "title": "Nuôi có 20 con đặc sản to bự trong bể xi măng, một nông dân Vĩnh Long cứ nói bán là hết sạch"
        },
        {
            "author": "P.V",
            "date": "Thứ sáu, ngày 23/02/2024 18:14 PM (GMT+7)",
            "description": "Theo Bộ NNPTNT, việc xây dựng Nghị định quy định về việc tạm sử dụng rừng phục vụ thi công dự án nguồn điện và lưới điện để phát triển kinh tế - xã hội vì lợi ích quốc gia, công cộng là rất cần thiết, nhất là các tuyến đường dây truyền tải 500kV.",
            "text": [
                "Ngày 20/2/2024, Bộ Nông nghiệp và PTNT có Tờ trình số 1134/TT-BNN-KL do Thứ trưởng Nguyễn Quốc Trị ký trình Chính phủ Dự thảo Nghị định quy định về việc tạm sử dụng rừng phục vụ thi công dự án nguồn điện và lưới điện để phát triển kinh tế - xã hội vì lợi ích quốc gia, công cộng.",
                "Theo Bộ NNPTNT, hiện nay Quy chế quản lý rừng được ban hành tại Nghị định số156/2018/NĐ-CP ngày 16/11/2018, nhưng mới quy định về quản lý, chuyển mục đích sử dụng rừng tự nhiên sang mục đích khác (chuyển vĩnh viễn sang làm các công trình, dự án) mà chưa quy định đối với việc “tạm sử dụng rừng” để làm các công trình tạm (đường công vụ, bãi tập kết vật liệu, lán trại…) phục vụ thi công các dự án, đây là vấn đề phát sinh trong thực tiễn, chưa được đánh giá, phán ảnh trong quá trình xây dựng Nghị định số 156/2018/NĐ-CP.",
                "Tuy nhiên, do tính chất đặc thù của các tuyến đường dây lưới điện, đặc biệt là các tuyến đường dây truyền tải 500kV phần lớn đi vượt rừng, núi có địa hình phức tạp nên các vị trí móng cột điện nằm xa các tuyến đường giao thông hiện hữu, nếu không có các hạng mục tạm (như các tuyến đường tạm, bãi tạm tập kết là các hạng mục phụ trợ phục vụ cho việc thi công móng cột điện, vận chuyển vật tư, máy móc, thiết bị…) thì không thể thi công xây dựng các hạng mục như móng, cột điện, hệ thống dây truyền tải điện...",
                "Xuất phát từ yêu cầu trên, nhu cầu sử dụng tạm thời diện tích đất có rừng trong quá trình thi công, không chuyển mục đích sử dụng rừng là rất cần thiết và cấp bách, Ban Chỉ đạo Nhà nước các chương trình, công trình, dự án quan trọng quốc gia, trọng điểm ngành năng lượng, Tập đoàn Điện lực Việt Nam, các địa phương có dự án lưới điện đi qua đã có nhiều văn bản kiến nghị, đề xuất cho tạm sử dụng rừng để thực hiện các dự án lưới điện.",
                "Nhận thức được tầm quan trọng của việc tạm sử dụng rừng để thi công các dự án nguồn điện, lưới điện, ngày 23/02/2023 Chính phủ đã ban hành Nghị quyết số 23/NQ-CP về thí điểm cho phép tác động vào rừng tự nhiên để làm một số công trình tạm (đường công vụ, bãi tập kết vật liệu) phục vụ thi công dự án đường dây 500kV Monsoon - Thạnh Mỹ trên địa bàn huyện Nam Giang, tỉnh Quảng Nam đối với 4,2517 ha rừng tự nhiên; đồng thời Chính phủ giao Bộ Nông nghiệp và Phát triển nông thôn “nghiên cứu, bổ sung quy định về tác động sử dụng rừng để làm các công trình tạm phục vụ thi công các công trình, dự án trong quá trình sửa đổi, bổ sung Nghị định số 156/2018/NĐ-CP, đảm bảo chặt chẽ, khả thi, đúng thẩm quyền, áp dụng thống nhất trên phạm vi toàn quốc.",
                "Trước mắt tập trung nội dung bổ sung quy định về việc tạm sử dụng rừng để triển khai ngay các công trình xây dựng tạm phục vụ thi công dự án đường dây 500 kV mạch 3 Quảng Trạch-Phố Nối và các dự án truyền tải điện cấp thiết khác theo trình tự, thủ tục rút gọn, ban hành Nghị định trước ngày 28/02/2024, bảo đảm đóng điện đúng kế hoạch được giao và an ninh năng lượng quốc gia; việc sửa đổi, bổ sung các nội dung khác được thực hiện theo đúng quy định của Luật Ban hành văn bản quy phạm pháp luật.",
                "\"Xuất phát từ những lý do nêu trên, việc xây dựng Nghị định quy định về việc tạm sử dụng rừng phục vụ thi công dự án nguồn điện và lưới điện để phát triển kinh tế - xã hội vì lợi ích quốc gia, công cộng là rất cần thiết\", Bộ NNPTNT nhấn mạnh.",
                ""
            ],
            "title": "Phục vụ thi công dự án đường dây truyền tải 500kV, Bộ NNPTNT báo cáo Chính phủ việc tạm sử dụng rừng"
        },
        {
            "author": "Tuyết Nhung - Trương Hồng",
            "date": "Thứ sáu, ngày 23/02/2024 05:36 AM (GMT+7)",
            "description": "Những ngày sau Tết Nguyên đán Giáp Thìn 2024 cũng là lúc vào mùa ốc gạo (ốc lể, ốc ruốc). Nhiều ngư dân trên địa bàn thành phố Đà Nẵng phấn khởi ra biển từ sáng sớm để hành nghề đi thụt lùi cào ốc gạo. Nhờ ngâm mình dưới nước biển lạnh, mỗi ngư dân đã đút túi cả triệu đồng mỗi ngày.",
            "text": [
                "",
                ""
            ],
            "title": "Ở biển Đà Nẵng dân đi thụt lùi để bắt con đặc sản bé tí này, mỗi ngày cũng bỏ túi tiền triệu"
        },
        {
            "author": "Quang Sung",
            "date": "Thứ sáu, ngày 23/02/2024 10:00 AM (GMT+7)",
            "description": "Đóng góp vào công cuộc phát triển nông nghiệp công nghệ cao của TP.HCM, đang có sự chung tay của những người trẻ đã và đang mạnh dạn, đầu tư, phát triển những mô hình nông nghiệp mới, có hiệu quả.",
            "text": [
                "Bỏ việc ổn định để theo nghề nông",
                "Chị Lê Thị Minh Phượng (sinh năm 1988, phường Tân Tạo A, quận Bình Tân, TP.HCM) quyết định bỏ nghề thợ may, dấn thân sang trồng dưa leo bằng giàn lưới, áp dụng công nghệ tưới nhỏ giọt tự động.",
                "Phương pháp trồng dưa leo này của chị Phượng tiết kiệm được chi phí như công làm đất, làm cỏ, bón phân, tưới nước. Đặc biệt là hạn chế được rất nhiều đối tượng sinh vật gây hại lên cây dưa. Điều này cho giá trị kinh tế cao trên đơn vị diện tích đất canh tác, phương pháp canh tác khá thân thiện với môi trường.",
                "Giống dưa leo chị Lê Thị Minh Phượng chọn trồng là dưa leo Mỹ lai F1 napali 64, thời gian thu hoạch khoảng 2-3 tháng, có thể trồng 3-4 vụ/năm. Ước tính, năng suất trung bình vườn dưa leo của chị Phượng đạt 6 - 7 tấn/250m2/năm, giá bán lẻ 45.000 đồng/kg, thu nhập mỗi năm từ 200 - 250 triệu đồng. Trừ đi các khoản chi phí, chị Phượng thu lời khoảng 130-150 triệu đồng mỗi năm.",
                "Hệ thống tưới nhỏ giọt, các giàn treo, chậu, nhà lưới tiếp tục được tái sử dụng ở các vụ trồng dưa tiếp theo nên lợi nhuận năm sau tăng hơn năm trước.",
                "Cùng sinh năm 1988 như chị Phượng, anh Trần Thanh Bình xuất thân là sinh viên của Trường Đại học Bách khoa TP.HCM, có được công việc có thu nhập cao. Nhưng anh đã nghỉ việc trước sự ngỡ ngàng của nhiều người và chọn khởi nghiệp từ mô hình trồng rau thủy canh.",
                "\"Lần đầu nghe ý tưởng của tôi là đầu tư hàng trăm triệu đồng để chỉ trồng rau thủy canh, gia đình tôi đều tỏ ra ái ngại, lo lắng. Nhưng với niềm tin, quyết tâm và nỗ lực thuyết phục, tôi bắt tay thực hiện mô hình vào cuối năm 2020\"- anh Bình tâm sự.",
                "Ngay từ khi bắt đầu thực hiện dự án trồng rau thủy canh, anh Bình đã trăn trở đến việc tìm đầu ra trên thị trường để bảo đảm rau không bị ế. Anh xác định tiêu chuẩn sản phẩm hướng đến khách hàng của mình là các siêu thị và hệ thống rau sạch tại TP.HCM.",
                "Qua đó, anh thành lập Công ty cổ phần Sản xuất thương mại nông sản Hitech để cung ứng sản phẩm của chất lượng tiêu chuẩn quốc tế ISO; HACCP; HALAL… và các tiêu chuẩn thực hành, sản xuất nông nghiệp sạch: Global G.A.P - Viet GAP.",
                "Sau 3 năm xây dựng mô hình trồng rau thủy canh nhà màng, Trần Thanh Bình đã mở rộng quy mô với 2 farm tại huyện Củ Chi và TP.Thủ Đức, mỗi farm rộng 2.000m2. Bình quân mỗi tuần, vườn rau thu hoạch khoảng 2-3 tấn rau xà lách mỡ chủ yếu cung cấp tại các siêu thị và hệ thống Winmart, Genshai, Emart, Lotte Mart. Giá bán trung bình từ 30.000 - 50.000 đồng/kg, tùy theo các loại rau.",
                "Góp phần thay đổi tư duy nông nghiệp",
                "Hiện nay, nông nghiệp đô thị, nông nghiệp công nghệ cao là hướng đi tất yếu của TP.HCM. Tại hội nghị tổng kết ngành nông nghiệp năm 2023 và triển khai nhiệm vụ năm 2024, ông Võ Văn Hoan nhấn mạnh, ngành nông nghiệp thành phố cần phải thay đổi từ tư duy sản xuất nông nghiệp sang kinh tế nông nghiệp. TP.HCM phải sản xuất nông nghiệp theo hướng nghiên cứu, thử nghiệm trình diễn và lan tỏa những mô hình có hiệu quả cao.",
                "TS Đỗ Xuân Hồng - Giám đốc Trung tâm Ươm tạo doanh nghiệp công nghệ (Đại học Nông Lâm TP.HCM) cho biết, với thực trạng thiếu nhân lực trẻ cho ngành nông nghiệp nước nhà hiện nay, việc các bạn trẻ chọn khởi nghiệp lĩnh vực nông nghiệp là tín hiệu rất khả quan.",
                "Đặc biệt trong đó phải nói đến những bạn trẻ mang kiến thức học được từ nhiều nơi, về cống hiến cho quê hương.",
                "Tại TP.HCM, nông nghiệp càng phải đẩy mạnh việc phát triển theo hướng công nghệ cao, ứng dụng chuyển đổi số trong sản xuất, đảm bảo phù hợp với sự phát triển chung của thành phố.",
                "\"Thực sự với nông nghiệp chuyển đổi số là chuyến tàu không thể lỡ. Muốn tiết giảm chi phí; giảm bớt các khâu trung gian; minh bạch lý lịch sản phẩm; minh bạch quá trình sản xuất; người thu mua, người tiêu dùng có thể giám sát từ xa… chuyển đổi số là con đường tất yếu. Và người trẻ về quê làm nông nghiệp, nếu kiên định với con đường chuyển đổi số thì chắc chắn sẽ gặt hái được những thành công, cả về mặt kinh tế và thương hiệu một cách bền vững, mà không bị lụi tàn\" - ông Đặng Dương Minh Hoàng - Chủ nhiệm mạng lưới Lương Định Của toàn quốc nhấn mạnh.",
                "Tại Hội nghị đào tạo và phát triển nguồn nhân lực nông nghiệp và phát triển nông thôn khu vực phía Nam, Bộ trưởng Bộ NNPTNT Lê Minh Hoan cho biết, đào tạo nguồn nhân lực nông nghiệp phải theo chuỗi giá trị. Đào tạo nguồn nhân lực nông nghiệp không chỉ để làm thuê cho doanh nghiệp, mà còn phải tạo ra những người làm chủ.",
                "Bộ trưởng Bộ NNPTNT cho rằng, đào tạo phải gắn liền nhu cầu cuộc sống, chính là cuộc sống chứ không phải chuẩn bị cho cuộc sống. Cho nên khởi nghiệp nông nghiệp trong các trường học cũng không nên làm theo phong trào. Khởi nghiệp không nên là sân chơi mà phải là làm thật, tạo ra hiệu quả và giá trị thật."
            ],
            "title": "Người trẻ mạnh dạn, đi đầu trong phát triển nông nghiệp công nghệ cao ở TP HCM"
        },
        {
            "author": "L.V.S",
            "date": "Thứ sáu, ngày 23/02/2024 09:28 AM (GMT+7)",
            "description": "Không khí lạnh lệch đông khiến miền Bắc chuyển lạnh, kèm theo mưa nhỏ. Nhiệt độ thấp nhất ở đồng bằng không xuống quá thấp, dao động 17-19 độ C. Hình thái thời tiết trên khiến nhiều người đặt ra câu hỏi: Miền Bắc nồm ẩm kéo dài đến khi nào?",
            "text": [
                "Theo Dự báo của Trung tâm Khí tượng thủy văn quốc gia, ngày 23/2, không khí lạnh chi phối toàn bộ thời tiết khu vực Đông Bắc Bộ và tiếp tục ảnh hưởng đến một số nơi ở phía Tây Bắc Bộ, Bắc Trung Bộ. Nhiệt độ tại nhiều nơi thấp hơn 5-7 độ C so với một ngày trước.",
                "Tại Đông Bắc Bộ và các tỉnh Lào Cai, Yên Bái, Hòa Bình, Thanh Hóa, thời tiết chuyển lạnh, vùng núi chuyển rét. Nhiệt độ thấp nhất phổ biến 17-20 độ C, vùng núi 15-17 độ C, khu vực núi cao có nơi dưới 12 độ C.",
                "Đồng thời, mưa nhỏ tiếp diễn ở miền Bắc trong hôm nay và kéo dài đến hết ngày 24/2. Sau đó, khu vực bước vào giai đoạn mưa phùn và sương mù sáng sớm, duy trì đến hết tuần sau.",
                "Dự báo thời tiết chủ đạo tại Hà Nội trong 5 ngày tới là mưa nhỏ rải rác, trời nhiều mây và âm u. Nhiệt độ thấp nhất phổ biến 18-20 độ C, cao nhất không quá 22 độ C, trời lạnh.",
                "Những ngày sau đó, Hà Nội tiếp tục hình thái thời tiết nhiều mây, có mưa nhỏ, nhiệt độ cao nhất từ 24-26 độ, nhiệt độ thấp nhất 19-21 độ. Độ ẩm không khí tăng cao, trời nồm ẩm kéo dài.",
                "Tại Tây Bắc, thời tiết vẫn hửng nắng về trưa và chiều, đồng thời nền nhiệt ở mức cao nhất 26-29 độ C. Không khí lạnh lệch đông nên không tác động nhiều đến khu vực này.",
                "Ngày 23-24/2, Bắc Trung Bộ cũng có mưa, cục bộ mưa rào và dông. Người dân đề phòng hiện tượng lốc, sét, mưa đá và gió giật mạnh có thể ảnh hưởng đến sản xuất nông nghiệp, làm gãy đổ cây cối, hư hại nhà cửa, các công trình giao thông, cơ sở hạ tầng.",
                "Trên biển, phía bắc vịnh Bắc Bộ có gió Đông Bắc mạnh dần lên cấp 5, giật cấp 7. Sóng biển cao 1-2,5m. Vùng biển phía đông bắc của khu vực bắc Biển Đông có gió mạnh cấp 6, giật cấp 7-8; sóng cao 2-4m, biển động.",
                "Trung tâm Dự báo Khí tượng Thuỷ văn Quốc gia nhận định, trong cuối tháng 2 và đầu tháng 3, khu vực Bắc Bộ và Trung Bộ có khả năng xuất hiện nhiều đợt mưa, mưa rào và dông, riêng khu vực Đông Bắc Bộ tiếp tục có nhiều ngày mưa nhỏ, mưa phùn.",
                "Tin về không khí lạnh và diễn biến trong những ngày tới",
                "Sáng sớm nay (23/02), không khí lạnh đã ảnh hưởng đến hầu khắp khu vực Đông Bắc Bắc Bộ.",
                "Dự báo diễn biến không khí lạnh:",
                "Trên đất liền: ngày 23/02, không khí lạnh tiếp tục ảnh hưởng đến các nơi khác ở phía Đông Bắc Bộ, một số nơi ở phía Tây Bắc Bộ và Bắc Trung Bộ. Gió Đông Bắc trong đất liền mạnh cấp 2-3.",
                "Từ ngày 23/02, ở khu vực phía Đông Bắc Bộ, Lào Cai, Yên Bái, Hòa Bình và Thanh Hóa trời chuyển lạnh, vùng núi trời chuyển rét. Trong đợt không khí lạnh này nhiệt độ thấp nhất ở những khu vực trên phổ biến từ 17-20 độ, khu vực vùng núi Bắc Bộ từ 15-17 độ, vùng núi cao có nơi dưới 12 độ.",
                "Trên biển: ở khu vực phía Bắc vịnh Bắc Bộ có gió Đông Bắc mạnh cấp 5, giật cấp 7, sóng biển cao 1,0-2,5m. Vùng biển phía Đông Bắc của khu vực Bắc Biển Đông có gió Đông Bắc mạnh cấp 6, giật cấp 7-8, sóng biển cao 2,0-4,0m, biển động.",
                "Từ ngày 23-24/02, khu vực phía Đông Bắc Bộ có mưa và mưa nhỏ rải rác; khu vực Bắc Trung Bộ có mưa, mưa rào rải rác. Khả năng tác động đến môi trường, điều kiện sống, cơ sở hạ tầng, các hoạt động kinh tế - xã hội. Gió mạnh và sóng lớn trên biển có khả năng ảnh hưởng đến hoạt động của tàu thuyền và các hoạt động khác."
            ],
            "title": "Nồm ẩm ở miền Bắc kéo dài đến khi nào?"
        },
        {
            "author": "P.V",
            "date": "Thứ sáu, ngày 23/02/2024 08:44 AM (GMT+7)",
            "description": "Năm học 2023 - 2024, Công ty Cổ phần thực phẩm xuất khẩu Đồng Giao - Doveco dành nhiều ưu tiên cho những sinh viên của Học viện Nông nghiệp Việt Nam đến thực tập,",
            "text": [
                "Cụ thể, trong năm học 2023-2024, Doveco tiếp nhận 200 sinh viên các khoa Công nghệ thực phẩm, Nông học, Khoa Kinh tế và Phát triển nông thôn, Kế toán và Quản trị kinh doanh thăm quan trải nghiệm ở 2 cơ sở sản xuất, kinh doanh của Tập đoàn tại Ninh Bình và Sơn La với tổng kinh phí gần 85 triệu đồng hỗ trợ việc đi lại, ăn ở của đoàn.",
                "Chương trình này trở thành hoạt động sinh hoạt chuyên môn ngoại khoá mang lại nhiều ý nghĩa không chỉ đối với sinh viên mà đối với cả cán bộ, giảng viên trẻ của Học viện Nông nghiệp Việt Nam hướng dẫn đoàn sinh viên thăm quan trải nghiệm.",
                "Không những vậy, cũng trong năm học này, Tập đoàn Doveco hỗ trợ 250 triệu đồng học bổng dành cho sinh viên. Từ nguồn hỗ trợ đó, một loại học bổng mới được Học viện Nông nghiệp Việt Nam và Tập đoàn tạo lập, đó là Học bổng sinh viên lập nghiệp dành cho người học khoá cuối đi thực tập tốt nghiệp.",
                "Số tiền học bổng do Tập đoàn Doveco trao tặng đã trải đều cho tất cả các nhóm sinh viên, từ sinh viên khoá mới, qua sinh viên các khoá đang học tập tại Học viện, đến sinh viên khoá cuối, kỳ cuối được đào tạo tại Học viện.",
                "Sự đồng hành của Tập đoàn Doveco với sinh viên Học viện Nông nghiệp Việt Nam còn bao gồm việc sẽ tiếp nhận 20-25 sinh viên về thực tập tại Nhà máy Gia Lai, 20-25 sinh viên tại Nhà máy Sơn La, 10 sinh viên tại Nhà máy và Trụ sở công ty ở Ninh Bình.",
                "Mỗi sinh viên thực tập 4 tới 6 tháng được hỗ trợ kinh phí ăn ở đi lại, đồng thời được hỗ trợ sinh hoạt phí tùy theo khả năng và vị trí công việc mà sinh viên có thể đảm nhận. Bằng cách này, sinh viên sẽ được học hỏi nhiều kiến thức sản xuất, kinh doanh, công nghệ, quản lý, đồng thời được đào tạo thêm về kỹ năng lao động, thái độ làm việc trước khi trở thành một người lao động có chuyên môn thực sự.",
                "Trong năm 2023-2024, Deveco cam kết tuyển dụng 45 nhân sự các ngành được đào tạo tại Học viện Nông nghiệp Việt Nam. Đồng thời, xem xét đặt hàng Học viện đào tạo nguồn nhân lực riêng do Doveco trong các lĩnh vực như Tin học, phân tích hoạt động tài chính, kế toán, kiểm toán; đào tạo chuyên môn về Công nghệ thực phẩm, Khoa học cây trồng, Cơ Điện ...những lớp này sẽ do Tập đoàn tuyển chọn giới thiệu và đầu tư kinh phí.",
                "Điều này sẽ mở ra nhiều cơ hội hợp tác mới, bền vững giữa cơ sở đào tạo và doanh nghiệp – một hướng đi mới đang được Học viện Nông nghiệp Việt Nam ưu tiên thúc đẩy.",
                "",
                "Học viện Nông nghiệp Việt Nam hiện là cơ sở đào tạo nguồn nhân lực chất lượng cao, đồng thời là cơ sở nghiên cứu, chuyển giao công nghệ hàng đầu tại Việt Nam. Trong khi đó, nguồn nhân lực và công nghệ đó vô cùng quan trọng và cần thiết đối với Doveco, tập đoàn hàng đầu đưa rau quả nông sản Việt Nam vào thị trường thế giới với mô hình sản xuất khép kín theo chuỗi giá trị từ sản xuất nông nghiệp, chế biến, kinh doanh và xuất khẩu.",
                "Đồng thời, là một tập đoàn kinh tế lớn, Doveco không chỉ có chiến lược đào tạo nhân lực, phát triển khoa học, công nghệ cho chính mình mà còn có sứ mạng đóng góp vào sự phát triển nguồn nhân lực chất lượng cao, vào sự phát triển khoa học công nghệ cho cộng đồng, cho đất nước.",
                "Điều này được nhân lên, được thúc đẩy mạnh mẽ khi Tập đoàn thiết lập mối quan hệ hợp tác chiến lược với Học viện – một cơ sở hàng đầu của cả nước về đào tạo, phát triển khoa học công nghệ, đặc biệt lĩnh vực nông nghiệp và phát triển nông thôn.",
                "Những giá trị lớn lao mà đôi bên mang đến cho nhau đã được thực tiễn kiểm chứng minh trong nhiều năm qua. Nguồn nhân lực là các lứa sinh viên Học viện Nông nghiệp Việt Nam sau khi tốt nghiệp đã đầu quân vào làm việc tại nhiều công đoạn quản lý điều hành, sản xuất kinh doanh, trong đó có nhiều cựu sinh viên đang nắm giữ các cương vị lãnh đạo chủ chốt tại Tập đoàn kinh tế Doveco.",
                "Như vậy, sự lớn mạnh của tập đoàn kinh tế này có phần đóng góp từ nguồn nhân lực được đào tạo bởi Học viện Nông nghiệp Việt Nam. Ở chiều ngược lại, Doveco đã góp phần giải quyết việc làm cho nhiều lứa sinh viên của Học viện.",
                "Doveco còn đang làm nhiều hơn thế cho sinh viên ngôi trường số một quốc gia về nông nghiệp bằng nhiều cách khác nhau, như tiếp nhận sinh viên thực hiện các hoạt động thăm quan trải nghiệm, rèn nghề, thực tập tốt nghiệp...",
                ""
            ],
            "title": "Doveco \"đặt hàng\" Học viện Nông nghiệp Việt Nam đào tạo nguồn nhân lực riêng ở một số ngành \"hot\""
        },
        {
            "author": "Hoàng Hữu",
            "date": "Thứ sáu, ngày 23/02/2024 08:00 AM (GMT+7)",
            "description": "Bắt nhịp với chuyển đổi số, các hợp tác xã, tổ hợp tác trên địa bàn tỉnh Yên Bái đã chú trọng ứng dụng công nghệ thông tin trong công tác vận hành, sản xuất hàng hóa... Nhờ đó, hiệu quả sản xuất, kinh doanh được nâng cao, mang lại giá trị, thu nhập cao cho cả HTX và hội viên, người lao động.",
            "text": [
                "Trong những năm qua, để sản phẩm chè Shan Tuyết được giữ vững và trở thành thương hiệu, HTX Suối Giàng (huyện Văn Chấn, tỉnh Yên Bái) đã tăng cường phối hợp quảng bá thương hiệu bằng cách kết hợp giữa văn hóa chè, văn hóa bản địa, với phát triển du lịch. Đồng thời, HTX còn ứng dụng công nghệ trong quảng bá thương hiệu, xúc tiến thương mại; linh hoạt sử dụng các nền tảng thương mại điện tử, mạng xã hội để giới thiệu, quảng bá các sản phẩm chủ lực của HTX.",
                "Bên cạnh đó, vừa qua, HTX Suối Giàng đã được tỉnh Yên Bái hỗ trợ chuyển đổi số với 5 nội dung, nổi bật là triển khai truy xuất nguồn gốc thông minh cho sản phẩm chè Shan Tuyết đến tận gốc cây chè cổ thụ. Bước đầu đã thí điểm gắn nhãn truy xuất nguồn gốc cho 100 cây chè Shan Tuyết cổ thụ Suối Giàng và bộ tem dán trên sản phẩm chè khô đóng gói, chia theo 4 nhóm tuổi gồm: 500 tuổi trở lên, trên 400 tuổi, trên 200 tuổi và từ 100 tuổi trở lên.",
                "Bà Lâm Thị Kim Thoa - Chủ tịch HĐQT, Giám đốc HTX Suối Giàng cho biết: \"Bước đầu thí điểm triển khai truy xuất nguồn gốc đối với cây chè Shan Tuyết cổ thụ Suối Giàng cho thấy hiệu quả rõ nét, tạo ra sự khác biệt cho sản phẩm, góp phần nâng cao giá trị thương hiệu, sản phẩm chè Shan Tuyết Suối Giàng. Đồng thời cũng giúp du khách đến với vùng chè Shan Tuyết cổ thụ Suối Giàng có thêm trải nghiệm thú vị khi quét mã QR có thể xem được các thông tin, câu chuyện kể về cây chè cổ thụ hàng trăm năm tuổi. Ngoài ra, việc truy xuất nguồn gốc này cũng góp phần quan trọng trong việc nâng cao nhận thức, ý thức, trách nhiệm của bà con trong bảo tồn, giữ gìn cây chè quý\".",
                "Được biết, hiện nay, HTX Suối Giàng đã có 4 dòng sản phẩm mang tên \"Tuyết Sơn Trà\" gồm: Hồng trà, Hoàng trà, Diệp trà và Bạch trà được xếp hạng sản phẩm OCOP 4 sao, chất lượng tốt, mẫu mã đẹp đảm bảo các chỉ tiêu về an toàn thực phẩm... xuất khẩu sang thị trường Anh Quốc, Nhật Bản và Hàn Quốc.",
                "Cũng là một trong những đơn vị tiên phong trong chuyển đổi số, HTX chè Shan tuyết Phình Hồ (huyện Trạm Tấu, tỉnh Yên Bái) đã đẩy mạnh ứng dụng công nghệ, quảng bá hình ảnh cây chè Shan Tuyết và thương hiệu của HTX trên các sàn thương mại điện tử như: Shopee, Lazada, Tiktok shop, Tiktok, Facebook…",
                "Anh Đỗ Tuấn Lương - Giám đốc HTX chè Shan Tuyết Phình Hồ cho biết: \"Sau gần 1 năm áp dụng chuyển đổi số trong quản lý, sản xuất, kinh doanh, HTX đã bao tiêu toàn bộ sản phẩm cho các hộ thành viên. Sản lượng chè thành phẩm đạt 3 tấn, giá ổn định và đã bán lẻ ra thị trường đến thời điểm hiện tại là 2,5 tấn. Thương hiệu chè Shan Tuyết Phình Hồ đã cán mốc 15 triệu lượt xem trên các nền tảng Tiktok và Facebook\".",
                "Cũng theo anh Đỗ Tuấn Lương, với những kết quả đạt được về thị trường, thương hiệu trong chuyển đổi số, bước sang năm 2024, HTX dự kiến  sản xuất 15 tấn chè thành phẩm và cam kết thu mua giá chè đầu vào tăng 5% so với năm 2023.",
                "Hiện toàn tỉnh Yên Bái có 727 HTX với 31.989 thành viên và 5.397 THT với trên gần 27.000 thành viên. Qua đánh giá cho thấy, các HTX đã bước đầu ứng dụng khoa học, công nghệ trong canh tác, nuôi trồng, bảo quản; áp dụng công nghệ sinh học, ứng dụng công nghệ thông tin, phần mềm trong quản lý sản xuất kinh doanh.",
                "Cùng với đó, các HTX, THT đã nhiều có sản phẩm, hàng hóa được quảng bá, giao dịch trên nền tảng thương mại điện tử, sử dụng website để giới thiệu, quảng bá, bán hàng, thực hiện phương thức tiếp thị trên các nền tảng số, quảng cáo trên Facebook, Google, tiêu biểu như: HTX Dịch vụ nông - lâm nghiệp tổng hợp Công Tâm (Văn Yên); HTX Suối Giàng, HTX DVTH Kiến Thuận (Văn Chấn), HTX nông nghiệp hữu cơ Mù Cang Chải (Mù Cang Chải)...",
                "Có thể thấy, việc chuyển đổi số hoạt động sản xuất, kinh doanh bước đầu đã làm thay đổi tổ chức và quản trị hoạt động của HTX so với phương thức quản lý truyền thống; nâng cao chất lượng, hiệu quả hoạt động của HTX.",
                "Tuy nhiên hiện nay, tại khu vực kinh tế tập thể, nhất là các HTX nông nghiệp, việc thực hiện chuyển đổi số còn gặp nhiều khó khăn, hạn chế. Bên cạnh đó, hạ tầng công nghệ thông tin của các HTX còn lạc hậu, nhiều đơn vị chưa có máy tính, thiết bị kết nối mạng Internet và còn xa lạ với các phần mềm, tiện ích như phần mềm kế toán, quản lý sản xuất, phần mềm quản lý bán hàng... Mặt khác, nguồn vốn đầu tư cho chuyển đổi số còn hạn hẹp, nguồn nhân sự có năng lực, trình độ về số hóa, công nghệ thông tin còn hạn chế...",
                "Theo ông Đỗ Nhân Đạo - Chủ tịch Liên minh Hợp tác xã tỉnh Yên Bái, thời gian tới, đơn vị tiếp tục tăng cường và nâng cao hiệu quả công tác tuyên truyền về chuyển đổi số. Từ đó giúp các HTX thay đổi tư duy, nhận thức rõ về chuyển đổi số, chấp nhận điều chỉnh cấu trúc, quy trình hoặc văn hóa kinh doanh.",
                "Bên cạnh đó, Liên minh HTX Yên Bái còn triển khai các chính sách hỗ trợ đầu tư hạ tầng công nghệ, tạo hành lang thuận lợi để các HTX, thành viên, đồng bào dân tộc thiểu số và miền núi ứng dụng công nghệ vào hoạt động quản lý và sản xuất, kinh doanh. Đồng thời khuyến khích, hỗ trợ các HTX, thành viên tham gia vào các mạng lưới chuyên nghiệp để trao đổi, tìm hiểu và thí điểm các giải pháp kỹ thuật số chung; học tập kinh nghiệm thực tế các mô hình ứng dụng công nghệ thông tin hiệu quả."
            ],
            "title": "Hợp tác xã ở Yên Bái chuyển đổi số, khách hàng có thể truy xuất nguồn gốc đến tận cây"
        },
        {
            "author": "Trần Khánh",
            "date": "Thứ sáu, ngày 23/02/2024 06:00 AM (GMT+7)",
            "description": "Công ty TNHH MTV Khai thác thủy lợi Miền Nam không được hưởng lợi từ rất nhiều hoạt động khai thác cát, điện mặt trời, trồng rừng, nuôi trông thủy sản trên công trình thủy lợi Dầu Tiếng – Phước Hòa (trên địa bàn tỉnh Tây Ninh).",
            "text": [
                "Ngày 22/2, Thứ Trưởng Bộ NNPTNT Hoàng Trung cùng đoàn công tác đã thị sát công trình thủy lợi Dầu Tiếng - Phước Hòa (Tây Ninh) nhằm đánh giá kết quả sản xuất kinh doanh của Công ty TNHH MTV Khai thác thủy lợi Miền Nam.",
                "Công ty TNHH MTV Khai thác thủy lợi Dầu Tiếng – Phước Hòa là tiền thân của Công ty TNHH MTV Khai thác thủy lợi Miền Nam hiện nay.",
                "Ông Nguyễn Việt Anh - Tổng Giám đốc Công ty TNHH MTV Khai thác thủy lợi Miền Nam cho biết, đơn vị đang quản lý, vận hành, khai thác hệ thống thủy lợi Dầu Tiếng – Phước Hòa và hệ thống 5 công trình thủy lợi vùng ĐBSCL.",
                "Các công trình thủy lợi này được công ty quản lý theo hướng đa mục tiêu, phát huy tối đa tiềm năng, giá trị.",
                "Công trình thủy lợi thủy lợi Dầu Tiếng – Phước Hòa có dung tích 1,58 tỷ m3 nước, diện tích mặt nước 2.700ha. Qua gần 40 năm vận hành khai thác, công trình đã có những đóng góp đáng kể trong sự phát triển kinh tế xã hội và cải thiện điều kiện môi trường cho những vùng hưởng lợi.",
                "Ngoài nhiệm vụ cung cấp nước phục vụ sản xuất nông nghiệp, công nghiệp và sinh hoạt cho 5 tỉnh thành (Tây Ninh, Bình Dương, Bình Phước, Long An và TP.HCM), công trình còn có nhiệm vụ phòng - cắt lũ, đẩy mặn và cải tạo môi trường cho hạ du.",
                "Hiện nay, trên hệ thống thủy lợi Dầu Tiếng – Phước Hòa đang có rất nhiều hoạt động sản xuất, kinh doanh của các tổ chức, cá nhân như khai thác cát, điện mặt trời, trồng rừng, nuôi trông thủy sản, giao thông thủy.",
                "Ông Nguyễn Việt Anh cho biết, các hoạt động này cơ bản được các cấp, ngành, chính quyền và công ty quản lý chặt chẽ, đáp ứng yêu cầu đảm bảo an toàn công trình, môi trường chất lượng nước.",
                "\"Tuy nhiên, do chưa có cơ chế, chính sách, công ty không được hưởng lợi nguồn thu từ các hoạt động trên\", ông Việt Anh nhấn mạnh.",
                "Trước đây, Công ty TNHH MTV Khai thác thủy lợi Miền Nam đã phối hợp với Viện Khoa học Thủy lợi Việt Nam xây dựng Kế hoạch sử dụng đa mục tiêu trong lòng hồ và vùng bán ngập của hồ Dầu Tiếng – Phước Hòa.",
                "UBND tỉnh Tây Ninh cũng xây dựng Đề án phát triển tổng thể đa mục tiêu hồ Dầu Tiếng giai đoạn 2022-2030, tầm nhìn 2050 theo chỉ đạo của Bộ NNPTNT để trình cấp có thẩm quyền phê duyệt, triển khai thực hiện.",
                "Tuy nhiên, do liên quan nhiều bộ luật, nhóm lĩnh vực, quy hoạch và thẩm quyền phê duyệt, đến nay, đề án đang tạm dừng.",
                "Để phát huy hiệu quả việc quản lý vận hành, khai thác và bảo vệ hệ thống công trình thủy lợi, công ty kiến nghị Bộ NNPTNT cho chủ trương thực hiện các dự án đầu tư phát triển.",
                "Cụ thể là trên các lĩnh vực như nạo vét lòng hồ, khai thác tiềm năng quỹ đất hiện có, điện mặt trời, trồng rừng, du lịch sinh thái, nuôi trồng thủy sản.",
                "\"Các dự án, lĩnh vực này có thể thực hiện theo hướng liên doanh, liên kết, tận dụng các nguồn lực để kinh doanh tổng hợp nhằm vừa đáp ứng nhu cầu xã hội, vừa tạo nguồn thu cho công ty\", ông Việt Anh kiến nghị.",
                "Theo Thứ trưởng Bộ NNPTNT Hoàng Trung, Công ty TNHH MTV khai thác thủy lợi Miền Nam là một trong những doanh nghiệp công ích có quy mô lớn trực thuộc Bộ. Công ty đang quản lý, vận hành nhiều công trình thủy lợi trọng điểm, có tác động trực tiếp đến kinh tế xã hội và an ninh quốc gia.",
                "Thứ trưởng Hoàng Trung cho biết, sứ mệnh của ngành thủy lợi là phát triển theo hướng đa mục tiêu. Mặc dù còn tồn tại một số vướng mắc nhưng Bộ NNPTNT rất quan tâm về vấn đề này.",
                "Thứ trưởng đề nghị công ty tiếp tục phối hợp với các địa phương xây dựng, hoàn thiện đề án thủy lợi đa mục tiêu và thực hiện theo từng bước một, có trọng tâm, trọng điểm."
            ],
            "title": "Hồ Dầu Tiếng ở Tây Ninh sản xuất kinh doanh thế nào mà Công ty KT thủy lợi Miền Nam không được lợi?"
        },
        {
            "author": "Hà Thanh - Kiều Hải",
            "date": "Thứ sáu, ngày 23/02/2024 05:47 AM (GMT+7)",
            "description": "Chuyển qua nhiều mô hình chăn nuôi khác nhau, ông Vũ Chí Long, thị trấn Sông Cầu, huyện Đồng Hỷ (Thái Nguyên) quyết định gắn bó và chuyên tâm với việc nuôi hươu sao lấy nhung. Ông nuôi hươu thả đồi để con vật có nguồn gốc động vật hoang dã này phát triển tốt.",
            "text": [
                "Từ những năm 2.000 trở về trước, gia đình ông Vũ Chí Long, Tổ dân phố 5, thị trấn Sông Cầu, huyện Đồng Hỷ (tỉnh Thái Nguyên) thuộc diện hộ nghèo của xóm. Sau này, nhờ nuôi lợn và bò, gia đình ông đã thoát nghèo vào năm 2002.",
                "Đến năm 2008, do chăn nuôi bò thua lỗ với số tiền lớn, ông Long bắt tay vào nuôi lợn rừng với số lượng vài trăm con.",
                "Tuy nhiên do diện tích đất của gia đình tương đối rộng (khoảng 4ha) nên ông Long đã nghiên cứu, tìm hiểu, nhận thấy hươu có giá cả ổn định, hiệu quả kinh tế cao, lại ít dịch bệnh nên ông đã quyết định đưa thêm huơu sao vào nuôi từ năm 2010.",
                "Ban đầu ông mua hươu giống từ tận trong Hương Sơn, Hà Tĩnh với khởi điểm 3 con huơu giống, trị giá gần 70 triệu đồng.",
                "Khi mới đến với mô hình chăn nuôi này, ông Long cũng gặp phải nhiều khó khăn.",
                "Khó khăn vì kỹ thuật nuôi hươu không có, không rành về vật nuôi vốn có nguồn gốc từ động vật hoang dã này thời điểm đó, ở trong vùng chưa có ai phát triển mô hình nuôi huơu sao này nên không thể học hỏi kinh nghiệm từ ai.",
                "Năm 2010, ông Long, nông dân Tổ dân phố 5, thị trấn Sông Cầu, huyện Đồng Hỷ (tỉnh Thái Nguyên) chính thức bắt tay vào nuôi hươu sao. Ảnh: Hà Thanh.",
                "Toàn bộ quy trình chăm sóc hươu đều do ông từ mày mò, nghiên cứu và rút kinh nghiệm dần, nhưng may mắn thay, trong suốt trong quá trình chăn nuôi huơu, ông Long chưa để một con hươu nào phải mắc bệnh mà chết.",
                "Đến năm 2019, ông quyết định chỉ tập trung, chuyên tâm vào nuôi hươu nên đã bỏ mô hình lợn rừng.",
                "Đối với nuôi hươu, theo ông Long, chi phí đầu tư cho chuồng trại không quá lớn do hệ thống chuồng trại được ông thiết kế tương đối đơn giản.",
                "Điểm đặc biệt, loài hươu sao được ông Long thả đồi nên chất lượng nhung khác hẳn so với hươu nhốt chuồng.",
                "Chuồng trại chỉ để phục vụ những lúc hươu chuẩn bị được cắt nhung thì cho hươu vào chuồng để bảo vệ nhung khỏi bị xây xước, ảnh hưởng đến chất lượng nhung.",
                "Hơn nữa, hươu là loại động vật có sức đề kháng tốt, ít khi bị mắc bệnh, chỉ có hay bệnh thường gặp là đường ruột, đầy hơi chướng bụng vào mùa nồm ẩm, nên trong quá trình cho ăn sẽ kết hợp các loại lá cây thuốc để phòng hai bệnh này.",
                "Hiện ông Long, nông dân Tổ dân phố 5, thị trấn Sông Cầu, huyện Đồng Hỷ (tỉnh Thái Nguyên) đang trồng khoảng 1 mẫu cỏ voi để nuôi hươu sao. Ảnh: Hà Thanh.",
                "Để đảm bảo nguồn thức ăn cho huơu, gia đình ông Long đã trồng cỏ voi và trồng ngô lấy lá, lấy hạt, kết hợp trồng chuối với diện tích khoảng 7.200m2.",
                "Do tự túc được nguồn thức ăn, nên chi phí thức ăn cho huơu không lớn, bởi vậy lợi nhuận thu về tương đối cao.",
                "Hiện gia đình ông Long đang có khoảng 40 – 50 con hươu các loại chủ yếu bán nhung và một phần cung cấp hươu giống cho bà con có nhu cầu.",
                "Với 2 chuồng nuôi hươu và diện tích chăn thả có tổng diện tích khoảng trên 3.600m2. Thời điểm gia đình ông Long nuôi nhiều nhất lên tới 70 con hươu.",
                "Ông Vũ Chí Long, nông dân nuôi hươu sao lấy nhung, bán hươu giống ở thị trấn Sông Cầu, huyện Đồng Hỷ (Thái Nguyên)Bên cạnh cỏ voi, thức ăn của hươu còn là hoa quả và lá ngô. Ảnh: Hà Thanh.",
                "Đối với hươu nuôi để lấy nhung thì từ lúc hươu con được sinh ra đến khi bắt đầu có thể khai thác nhung chỉ trong khoảng thời gian 12 tháng.",
                "Do đó, thời gian thu hồi vốn tương đối nhanh. Thời điểm cắt nhung tốt nhất là vào mùa xuân (khoảng từ tháng 2 đến tháng 3 âm lịch) vì khi này chất lượng nhung sẽ đảm bảo.",
                "Giá nhung huơu ở thời điểm hiện tại được ông Long bán  2,2 triệu đồng/100gam.",
                "Còn đối với hươu sinh sản, mỗi năm sẽ sinh sản một lần với số lượng một con. Đến nay, gia đình ông Long đã cung cấp hươu giống cho 4 hộ gia đình trên địa bàn huyện Đồng Hỷ để phát triển thành công và ổn định mô hình nuôi hươu.",
                "Ngoài ra, con giống còn được đình ông cung cấp cho các huyện, thành phố trên địa bàn tỉnh Thái Nguyên với giá bán dao động từ 20 – 25 triệu đồng/con tuỳ theo trọng lượng.",
                "Để đảm bảo các hộ sau khi mua giống, hươu sẽ phát triển thuận lợi, ông Long sẽ tận tình tư vấn, hỗ trợ về kỹ thuật nuôi hươu cũng như kỹ thuật làm chuồng trại và phòng ngừa bệnh tật nên những hộ đã mua giống đều yên tâm phát triển mô hình.",
                "Theo ông Long, Thái Nguyên có lợi thế về nguồn thức ăn dồi dào, điều kiện khí hậu thuận lợi cho hươu phát triển nên có thể nhân rộng mô hình này.",
                "Về cơ bản, nuôi hươu không tốn nhiều thời gian chăm sóc, tỷ lệ rủi ro ít, lợi nhuận kinh tế cao mà lại không gây ô nhiễm môi trường.",
                "Do đó, hàng năm có rất nhiều hộ gia đình đến tham quan, học hỏi kinh nghiệm chăn nuôi hươu của gia đình ông Long. Theo ông Long chia sẻ, năm 2023 lợi nhuận từ việc bán hươu giống và nhung hươu của gia đình ông đạt khoảng 500 – 600 triệu đồng.",
                "Ông Lâm Văn Nghĩa – Chủ tịch Hội Nông dân thị trấn Sông Cầu, huyện Đồng Hỷ (tỉnh Thái Nguyên) cho biết: Trước năm 2010, kinh tế của gia đình ông Long chủ yếu phụ thuộc vào nghề trồng và chế biến chè, kết hợp chăn nuôi gà và lợn.",
                "Từ năm 2010 trở đi, ông Long đã đi học hỏi kinh nghiệm và quyết tâm đưa mô hình hươu sao về để nuôi đến nay đã được 14 năm.",
                "Bên cạnh việc phát triển hiệu quả kinh tế của gia đình, ông Long còn giúp đỡ nhiều hộ trên địa bàn phát triển mô hình nuôi hươu sao, nâng cao thu nhập cho các hộ.",
                "Chính vì vậy, ông Long đã nhiều năm nhận được giấy khen, Bằng khen của các cấp ngành vì đã có thành tích xuất sắc trong hoạt động sản xuất kinh doanh giỏi.",
                "\"Từ một hộ có điều kiện kinh tế khó khăn, đến nay gia đình ông Long đã trở thành một hộ có điều kiện kinh tế khá giả tại địa phương và có nhiều đóng góp trong các động, phong trào trên địa bàn\", ông Nghĩa cho biết thêm."
            ],
            "title": "Thả trên đồi con vật có nguồn gốc động vật hoang dã, ông nông dân Thái Nguyên tự hưởng lương cao"
        }
    ],
    
}


```

## Tin tức giá gạo : http://35.247.138.127/api-ai/news

Method: GET

Response 
```json
{
    {
    "message": "Giá gạo mới nhất",
    "data": [
        {
            "date": "12:14 | 21/02/2024",
            "description": "Theo đó, giá lúa gạo hôm nay (21/2) không có điều chỉnh mới. Theo ghi nhận, năm 2024, dự kiến xuất khẩu gạo của Việt Nam tiếp tục khởi sắc, hướng tới cột mốc kim ngạch 5 tỷ USD.",
            "text": [
                "Khảo sát tại chợ An Giang cho thấy, giá lúa hôm nay (21/2) ổn định. Theo ghi nhận, lúa Nàng Nhen (khô) được bán với giá cao nhất trong số các loại, đạt 15.000 đồng/kg.",
                "So với ngày hôm qua, nếp vẫn có giá không đổi. Hiện, nếp Long An (tươi) với giá bán là 8.000 - 8.100 đồng/kg. Các loại nếp 3 tháng (tươi), nếp Long An (khô) và nếp đùm 3 tháng (khô) tạm dừng khảo sát vào hôm nay.",
                "Bảng giá lúa gạo hôm nay 21/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Theo khảo sát tại chợ An Giang, giá các loại gạo duy trì ổn định. Trong đó, gạo thường hiện đang có giá dao động trong khoảng 15.000 - 16.000 đồng/kg.",
                "Cám đang có giá bán ổn định trong khoảng  9.000 - 10.000 đồng/kg.",
                "Những ngày đầu tháng 2/2024, giá xuất khẩu gạo 5% tấn của Việt Nam ở mức 638 USD/tấn, cao hơn gạo cùng loại Thái Lan 10 USD/tấn và cao hơn gạo Pakistan 19 USD/tấn.",
                "Theo Hiệp hội Lương thực Việt Nam, giá gạo xuất khẩu thời gian tới khả năng cao sẽ còn được đẩy lên do nhiều quốc gia bắt đầu tăng nhập khẩu, còn Ấn Ðộ vẫn duy trì lệnh cấm xuất khẩu một số loại gạo chính khiến nguồn cung trên toàn cầu chưa có dấu hiệu tăng trở lại.",
                "Trong khi đó, thông tin từ Cục Chất lượng, Chế biến và Phát triển thị trường cho biết, sản lượng gạo toàn cầu năm 2024 có thể đạt mức gần 520 triệu tấn, đồng thời mức tiêu thụ cũng tiến sát 525 triệu tấn, nên khả năng sẽ thiếu hụt 5 triệu tấn cho các nhu cầu về gạo.",
                "Do đó, các doanh nghiệp chế biến và xuất khẩu gạo cần bám sát thị trường để thực hiện hiệu quả các đơn hàng đã ký cũng như ký mới cả về giá và chất lượng, báo Sơn La đưa tin."
            ],
            "title": "Giá lúa gạo hôm nay 21/2: Đồng loạt đứng yên"
        },
        {
            "date": "11:18 | 16/02/2024",
            "description": "Khảo sát mới nhất cho thấy, giá lúa gạo hôm nay (16/2) giảm đối với một vài giống lúa. Theo ghi nhận, ngành hàng lúa gạo tỉnh nhà có bước chuyển mình mạnh mẽ, nhất là trong sản xuất và xuất khẩu trong năm qua.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 19/2",
                "Tại chợ An Giang, giá lúa hôm nay (16/2) giảm. Cụ thể, giá lúa Đài thơm 8 hiện đang dao động trong khoảng 9.400 - 9.500 và giá lúa OM 18 là 9.200 - 9.400 đồng/kg, cùng giảm nhẹ 100 đồng/kg. Tương tự, lúa IR 50404 hiện đang được bán với giá 8.600 - 9.000 sau khi giảm 200 đồng/kg.",
                "Nếp có giá ổn định. Cụ thể, 9.600 - 9.800 đồng/kg là giá nếp Long An (khô) và 10.800 - 11.000 đồng/kg là giá nếp 3 đùm tháng (khô). Đối với nếp Long An (tươi), giá bán đã cập nhật trở lại, hiện rơi vào khoảng 8.000 - 8.100 đồng/kg.",
                "Bảng giá lúa gạo hôm nay 16/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Theo ghi nhận tại chợ An Giang, giá gạo lặng sóng. Trong đó, gạo thường tiếp tục dao động trong khoảng 16.000 - 16.500 đồng/kg.",
                "Cám vẫn được bán với giá 9.000 - 10.000 đồng/kg.",
                "Ngành hàng lúa gạo tỉnh nhà chuyển mình mạnh mẽ, nhất là trong sản xuất và xuất khẩu. Cụ thể, trong thời gian dài, gạo Việt bị gắn với hình ảnh chất lượng thấp, bán giá rẻ cho các nước kém phát triển thì nay, bằng việc áp dụng khoa học - kỹ thuật vào sản xuất, chất lượng hạt gạo Việt Nam đã được nâng lên, đáp ứng yêu cầu khắt khe của các quốc gia phát triển, như: Nhật Bản, Hoa Kỳ, EU...",
                "Chẳng những vậy, Việt Nam đã có những loại gạo ngon không thua kém các đối thủ cạnh tranh và được bình chọn (lần thứ 2) danh hiệu “Gạo ngon nhất thế giới” cho giống lúa ST 25.",
                "Hướng đến sự phát triển bền vững, trong bối cảnh biến đổi khí hậu, biến động thị trường, biến chuyển xu thế tiêu dùng, thời gian qua, bên cạnh việc đổi mới mô hình tăng trưởng, từng bước hiện đại hóa nông nghiệp thông qua việc ứng dụng khoa học - công nghệ vào sản xuất, ngành nông nghiệp đẩy mạnh chuyển đổi số, cơ giới hóa và áp dụng các tiêu chuẩn kỹ thuật, tiêu chuẩn thị trường quốc tế…",
                "Đồng thời, tham mưu cho UBND tỉnh đăng ký tham gia Đề án phát triển bền vững 1 triệu ha chuyên canh lúa chất lượng cao, phát thải thấp gắn với tăng trưởng xanh vùng ĐBSCL đến năm 2030 của Bộ Nông nghiệp và Phát triển nông thôn. Đây là bước chuyển mình mạnh mẽ trong sản xuất, báo An Giang đưa tin."
            ],
            "title": "Giá lúa gạo hôm nay 16/2: Giảm từ 100 đồng/kg đến 200 đồng/kg"
        },
        {
            "date": "13:30 | 15/02/2024",
            "description": "Năm 2023, xuất khẩu gạo ST25 đã mang về hơn 16 triệu USD, tăng 88% so với năm 2022. Như vậy, chỉ trong 4 năm trở lại đây xuất khẩu loại gạo đặc sản này đã tăng gấp 7 lần. Trong đó, Mỹ là thị trường tiêu thụ lớn nhất với thị phần chiếm gần 47%.",
            "text": [],
            "title": "Xuất khẩu gạo ST25 tăng phi mã, được ưa chuộng tại Mỹ"
        },
        {
            "date": "11:22 | 19/02/2024",
            "description": "Theo khảo sát, giá lúa gạo hôm nay (19/2) giảm đối với gạo thường, gạo Jasmine. Theo đó, ngành hàng lúa gạo đang đẩy mạnh tái cơ cấu để tăng khả năng cạnh tranh trên thị trường xuất khẩu.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 20/2",
                "Tại chợ An Giang, giá lúa hôm nay (19/2) đi ngang. Hiện, giá bán giống lúa Nhật đang thấp nhất là 7.800 - 8.000 đồng/kg. Trong khi đó, giá lúa Nàng Nhen (khô) đang cao nhất là 15.000 đồng/kg.",
                "Cùng thời điểm khảo sát, giá nếp duy trì ổn định. Theo đó, nếp Long An (tươi) và (khô) có giá trong khoảng 8.000 - 8.100 đồng/kg và 9.600 - 9.800 đồng/kg. Nếp 3 đùm tháng (khô) hiện đang dao động từ 10.800 đồng/kg đến 11.000 đồng/kg.",
                "Bảng giá lúa gạo hôm nay 19/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Theo khảo sát tại chợ An Giang, giá gạo thường giảm 500 - 1.000 đồng/kg xuống khoảng 15.000 - 16.000 đồng/kg. Đối với gạo Jasmine, giá bán giảm 500 đồng/kg hiện đang ghi nhận trong khoảng 17.500 - 18.500 đồng/kg.",
                "Giá cám tiếp tục không có biến động mới, hiện rơi vào khoảng 9.000 - 10.000 đồng/kg.",
                "Ngành lúa gạo đang đẩy mạnh tái cơ cấu để xứng tầm từ vai trò là một ngành sản xuất vì mục tiêu an ninh lương thực là chủ yếu trở thành một ngành kinh tế năng động và hiệu quả, đem lại lợi ích cho người sản xuất, người tiêu dùng trong nước và có tính cạnh tranh cao trong xuất khẩu, theo báo Hà Giang.",
                "Nhận thấy chất lượng cuộc sống tăng lên, nhu cầu sử dụng các gạo phẩm cấp cao ngày càng nhiều, từ nhiều năm trước, Hậu Giang đã dịch chuyển cơ cấu giống lúa dần từ nhóm chất lượng thấp như IR 50404, OM 576… sang các giống lúa chất lượng cao như OM 5451, OM 18, Jasmin 85, RVT, Đài Thơm 8, ST 24, ST 25… phù hợp với nhu cầu thị trường nội địa và xuất khẩu.",
                "Việc chuyển đổi giống lúa đối với người trồng lúa tại Hậu Giang không còn là trở ngại, lượng lúa giống cơ bản đáp ứng được nhu cầu sản xuất, tỷ lệ diện tích sử dụng lúa giống cấp xác nhận trong những năm vừa qua trên 85%, mục tiêu hướng đến hiện nay là nâng cao giá trị sản xuất lúa theo các vùng tập trung và kiểm soát chất lượng đạt theo yêu cầu, quy chuẩn để liên kết doanh nghiệp xuất khẩu."
            ],
            "title": "Giá lúa gạo hôm nay 19/2: Giảm từ 500 đồng/kg đến 1.000 đồng/kg"
        },
        {
            "date": "07:35 | 21/02/2024",
            "description": "Năm 2023, xuất khẩu gạo của Việt Nam sang khu vực châu Phi đã tăng hơn 6% về lượng và 27,7% về trị giá so với năm 2022. Các biện pháp hạn chế xuất khẩu của Ấn Độ đang mở ra cơ hội lớn cho gạo Việt Nam gia tăng thị phần tại châu Phi.",
            "text": [],
            "title": "Gạo Việt rộng cửa xuất khẩu vào châu Phi"
        },
        {
            "date": "11:17 | 23/02/2024",
            "description": "Ghi nhận cho thấy, giá lúa gạo hôm nay (23/2) tăng đối với nếp Long An (tươi). Thị trường lúa gạo tại ĐBSCL sôi động trở lại ngay sau kỳ nghỉ Tết, nhiều nơi nông dân tất bật vào vụ thu hoạch khi lúa Đông Xuân 2023 - 2024 đến thời kỳ chín rộ.",
            "text": [
                "Theo khảo sát tại chợ An Giang, giá lúa hôm nay (23/2) lặng sóng. Theo đó, lúa IR 50404 hiện đang có giá bán thấp nhất là 7.100 - 7.300 đồng/kg.",
                "Trong khi đó, nếp tăng giá. Cụ thể, nếp Long An (tươi) tăng 200 đồng/kg lên khoảng 7.400 - 7.800 đồng/kg.",
                "Bảng giá lúa gạo hôm nay 23/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Tại chợ An Giang, giá gạo thường ổn định trong khoảng 15.000 - 16.000 đồng/kg. Tương tự, các loại gạo khác tiếp tục có giá đi ngang.",
                "Cám được bán với giá là 9.000 - 10.000 đồng/kg.",
                "Hiện nay, nguồn cung lúa bắt đầu tăng lên khi nhiều nơi nông dân vào vụ thu hoạch. Thị trường mua bán lúa sôi động và giá lúa được dự báo sẽ còn neo ở mức cao. Tại Hậu Giang, vụ lúa Đông Xuân 2023 - 2024, nông dân trong tỉnh xuống giống được 74.392 ha, thời tiết thuận lợi, lúa phát triển tốt, theo báo Nông nghiệp Việt Nam.",
                "Ông Bạch Văn Sơn, Chi cục trưởng Chi cục Trồng trọt - BVTV Hậu Giang cho biết, hiện phần lớn diện tích lúa của tỉnh đang trong giai đoạn làm đòng đến trổ chín. Trong đó, diện tích lúa đang thời kỳ trổ - chín chiếm hơn 51.500 ha, khoảng từ rằm tháng Giêng sẽ có diện tích cho thu hoạch.",
                "Hiện giá lúa đang ở mức cao, nên nông dân tích cực thăm đồng thường xuyên, chăm sóc lúa để thu hoạch đạt năng suất cao. Theo ông Sơn, đối với trà lúa ở giai đoạn làm đòng nông dân cần chú ý quản lý sâu cuốn lá, rầy nâu và chuột gây hại. Còn lúa giai đoạn trổ - chín cần quản lý bệnh đạo ôn cổ bông và lem lép hạt."
            ],
            "title": "Giá lúa gạo hôm nay 23/2: Nếp Long An tươi tăng 200 đồng/kg"
        },
        {
            "date": "11:55 | 22/02/2024",
            "description": "Theo khảo sát, giá lúa gạo hôm nay (22/2) ghi nhận giảm nhiều giống lúa, nếp. Theo đó, gạo Việt Nam được xuất khẩu mạnh nên có kỳ vọng thêm vụ lúa “trúng mùa, được giá”.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 23/2",
                "Tại chợ An Giang, giá lúa hôm nay (22/2) giảm đối với nhiều giống lúa.",
                "Cụ thể, lúa IR 50404 giảm 1.300 đồng/kg và lúa OM 5451 giảm 1.200 - 1.500 đồng/kg, lần lượt về khoảng 7.100 - 7.300 đồng/kg và 7.200 - 7.300 đồng/kg. Đối với lúa Đài thơm 8 và lúa OM 18, giá bán cùng giảm 1.200 - 1.400 đồng/kg xuống khoảng 7.400 - 7.600 đồng/kg.",
                "Bên cạnh đó, giá nếp Long An (tươi) giảm 500 đồng/kg, hiện đang rơi vào khoảng 7.500 - 7.600 đồng/kg. Trong khi đó, nếp 3 tháng (tươi) và nếp đùm 3 tháng (khô) tạm dừng khảo sát vào hôm nay.",
                "Bảng giá lúa gạo hôm nay 22/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Theo khảo sát tại chợ An Giang, nếp ruột hiện đang dao động trong khoảng 16.000 - 18.000 sau khi giảm mạnh đến 4.000 đồng/kg.",
                "Tương tự, gạo Sóc thường và gạo thơm Đài Loan có giá giảm 1.000 - 1.500 đồng/kg, ứng với 17.000 - 18.000 đồng/kg và 20.000 đồng/kg. Trong khi đó, gạo thường vẫn duy trì trong khoảng 15.000 - 16.000 đồng/kg",
                "Giá cám hiện là 9.000 - 10.000 đồng/kg.",
                "Trên những trà lúa đông xuân 2023 - 2024 thu hoạch sớm ở các huyện: Tri Tôn, Thoại Sơn, Châu Thành, Châu Phú… nông dân rất phấn khởi bởi giá lúa trên đồng đang ở mức cao, thương lái tìm mua đông đúc, theo báo An Giang.",
                "Giá lúa đang ở mức cao là nhờ gạo Việt Nam được xuất khẩu mạnh, chất lượng hạt gạo được nâng lên,... Đây là vụ Đông Xuân thứ 2 liên tiếp, nông dân An Giang bán được lúa với giá cao.",
                "Lúa trên đồng đang ở mức cao là nhờ đầu năm nay, nhiều doanh nghiệp lương thực tiếp tục trúng được các gói thầu lớn tại thị trường nhập khẩu gạo truyền thống. Ngày 31/1/2024, Cơ quan Hậu cần quốc gia Indonesia (Bulog) đã chính thức công bố danh sách 5 doanh nghiệp Việt Nam trúng tổng cộng 8/17 gói thầu nhập khẩu 500.000 tấn gạo của nước này."
            ],
            "title": "Giá lúa gạo hôm nay 22/2: Lúa giảm mạnh tới 1.500 đồng/kg"
        },
        {
            "date": "11:25 | 20/02/2024",
            "description": "Ghi nhận cho thấy, giá lúa gạo hôm nay (20/2) giảm đối với nhiều giống lúa. Để nâng cao giá trị gia tăng ngành hàng lúa gạo, ngành nông nghiệp tỉnh Tiền Giang đã tăng cường tập huấn nhằm thay đổi tư duy trong sản xuất lúa của nông dân.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 21/2",
                "Theo khảo sát tại chợ An Giang, giá lúa hôm nay (20/2) ghi nhận giảm. Trong đó, lúa IR 50404 hiện đang có giá 8.400 - 8.600 đồng/kg và lúa OM 5451 có giá 8.400 - 8.800, lần lượt giảm trong khoảng 200 - 400 đồng/kg và 600 - 800 đồng/kg.",
                "Tương tự, giá lúa Đài thơm 8, OM 18 và Nàng Hoa 9 giảm trong khoảng 400 - 900 đồng/kg, hiện đang rơi vào cùng khoảng 8.600 - 9.000 đồng/kg.",
                "Nếp được bán với giá ổn định. Trong đó, nếp Long An (tươi) có giá 8.000 - 8.100 đồng/kg. Ba loại nếp Long An (khô), nếp 3 tháng (tươi) và nếp đùm 3 tháng (khô) tạm dừng khảo sát vào hôm nay.",
                "Bảng giá lúa gạo hôm nay 20/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Tại chợ An Giang, các loại gạo được bán với giá không đổi. Cụ thể, gạo thường có giá dao động trong khoảng 15.000 - 16.000 đồng/kg.",
                "Giá cám tiếp tục dao động trong khoảng 9.000 - 10.000 đồng/kg.",
                "Năm 2023, giá lúa tăng cao giúp người trồng lúa tỉnh Tiền Giang có lợi nhuận khá, tích cực đầu tư quay vòng sản xuất. Thu hoạch lúa xong là tiến hành cày ải, làm đất và xuống giống ngay. Thậm chí, nhiều người không còn quan tâm đang sản xuất vụ nào trong năm…, theo báo Hà Giang.",
                "Từ thực trạng nêu trên, ngành nông nghiệp tỉnh Tiền Giang đã tăng cường tập huấn nhằm thay đổi tư duy trong sản xuất lúa của nông dân, bảo vệ môi trường, thích ứng biến đổi khí hậu. Từ đó, nâng cao giá trị gia tăng ngành hàng lúa gạo, bảo đảm phát triển bền vững trong bối cảnh biến đổi khí hậu ngày càng khốc liệt.",
                "Để nâng cao năng suất, chất lượng sản phẩm lúa và hạn chế lạm dụng phân bón, thuốc bảo vệ thực vật hóa học trong quá trình sản xuất, tỉnh Tiền Giang tập trung tuyên truyền, khuyến cáo nông dân tích cực áp dụng các quy trình sản xuất lúa bền vững, chú trọng sử dụng giống xác nhận, giảm lượng giống gieo sạ, quản lý sâu bệnh hại theo hướng tổng hợp; giảm phân bón, thuốc hóa học trên cây lúa nhằm giúp giảm chi phí sản xuất và góp phần bảo vệ môi trường."
            ],
            "title": "Giá lúa gạo hôm nay 20/2: Lúa giảm từ 200 đồng/kg đến 900 đồng/kg"
        },
        {
            "date": "11:55 | 06/02/2024",
            "description": "Theo ghi nhận, giá lúa gạo hôm nay (6/2) tăng, giảm trái chiều. Tại Kiên Giang, Bộ Nông nghiệp và Phát triển bắt đầu triển khai kế hoạch Đề án một triệu héc-ta chuyên canh lúa chất lượng cao.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 7/2",
                "Tại chợ An Giang, giá lúa hôm nay (6/2) giảm. Cụ thể, giá giống lúa OM 18 được điều chỉnh giảm 100 - 200 đồng/kg xuống còn 9.200 - 9.400 đồng/kg. Trong khi đó, giá các loại gạo còn lại ổn định.",
                "Giá nếp hiện đang giữ mức ổn định. Theo ghi nhận, nếp Long An (khô) có giá 9.600 - 9.800 đồng/kg. Nếp 3 đùm tháng (khô) có giá nhỉnh hơn 10.800 - 11.000 đồng/kg. Nếp 3 tháng (tươi) và nếp Long An (tươi) tạm dừng khảo sát vào hôm nay.",
                "Bảng giá lúa gạo hôm nay 6/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "",
                "Khảo sát tại chợ An Giang, giá gạo Sóc Thường tăng 1.000 đồng/kg lên khoảng 18.500 - 19.000 đồng/kg. Trong khi đó, các loại gạo khác vẫn có giá không đổi. Cụ thể, giá gạo thường tiếp tục dao động từ 15.000 đồng/kg đến 16.000 đồng/kg.",
                "Giá cám duy trì trong khoảng 9.000 - 10.000 đồng/kg.",
                "Sáng 5/2/2024 tại Kiên Giang, Bộ Nông nghiệp và Phát triển nông thôn tổ chức Hội nghị triển khai Kế hoạch thực hiện “Đề án Phát triển bền vững một triệu héc-ta chuyên canh lúa chất lượng cao và phát thải thấp, gắn với tăng trưởng xanh vùng ĐBSCL đến năm 2030\".",
                "Phát biểu tại Hội nghị, Bộ trưởng Bộ Nông nghiệp và Phát triển nông thôn Lê Minh Hoan cho rằng, để triển khai Đề án một cách hiệu quả, đồng bộ chúng ta cần có câu trả lời thỏa đáng cho những câu hỏi như thế này: Nhất quán về mục tiêu, đồng thuận trong hành động. “Thịnh vượng khởi đầu từ người trồng lúa - Vì người tiêu dùng - Vì môi trường xanh” luôn là mối quan tâm xuyên suốt của Đề án.",
                "Theo đó, mục tiêu xây dựng thương hiệu và xuất khẩu gồm: Lượng gạo xuất khẩu chất lượng cao và phát thải thấp chiếm trên 20% tổng lượng gạo xuất khẩu của toàn vùng chuyên canh. Đồng thời cần tập trung vào các hợp tác xã (HTX) xây dựng vùng nguyên liệu lớn, theo Báo Đầu tư."
            ],
            "title": "Giá lúa gạo hôm nay 6/2: Biến động trái chiều"
        },
        {
            "date": "11:15 | 07/02/2024",
            "description": "Theo ghi nhận, giá lúa gạo hôm nay (7/2) lặng sóng. Thay mặt Hiệp hội Ngành hàng Lúa gạo Việt Nam, PGS.TS Bùi Bá Bổng nêu cụ thể một số hoạt động Hiệp hội trong việc triển khai thực hiện “Đề án 1 triệu ha lúa chất lượng cao”.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 15/2",
                "Theo ghi nhận tại chợ An Giang, giá lúa hôm nay (7/2) đi ngang. Trong đó, giá bán lúa Nhật hiện đang thấp nhất trong các loại là 7.800 - 8.000 đồng/kg.",
                "Nếp có giá không đổi. Hiện, giá nếp Long An (khô) và nếp 3 đùm tháng (khô) lần lượt có giá bán 9.600 - 9.800 đồng/kg và 10.800 - 11.000 đồng/kg. Trong khi đó, nếp 3 tháng (tươi) và nếp Long An (tươi) tạm dừng khảo sát vào hôm nay.",
                "Bảng giá lúa gạo hôm nay 7/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Tại chợ An Giang, giá gạo thường hiện đang dao động trong khoảng 15.000 - 16.000 đồng/kg. Trong khi đó, giá gạo Nàng Nhen giữ mức cao nhất là 26.000 đồng/kg.",
                "vẫn được bán với giá không đổi. Hiện, giá gạo thường tiếp tục dao động từ 15.000 đồng/kg đến 16.000 đồng/kg.",
                "Cám tiếp tục được bán với giá trong khoảng 9.000 - 10.000 đồng/kg.",
                "PGS.TS Bùi Bá Bổng - Chủ tịch Hiệp hội Ngành hàng Lúa gạo Việt Nam nêu cụ thể một số hoạt động Hiệp hội trong triển khai thực hiện “Đề án 1 triệu ha lúa chất lượng cao”.",
                "Thứ nhất, Hiệp hội vận động hội viên và các tác nhân trong chuỗi giá trị ngành hàng lúa gạo.",
                "Thứ hai, Hiệp hội tham gia theo dõi và tư vấn việc nông dân áp dụng các quy trình sản xuất lúa chất lượng cao và giảm phát thải; tham gia tổ chức trình diễn, quảng bá công nghệ mới trong sản xuất lúa.",
                "Thứ ba, Hiệp hội tham gia tư vấn xây dựng quy chuẩn Gạo Việt Nam các-bon thấp và chứng nhận Gạo Việt Nam các-bon thấp cho thương hiệu gạo Việt Nam sản xuất từ vùng Đề án.",
                "Thứ tư, Hiệp hội sẵn sàng tham gia với tư cách là tổ chức xã hội vào việc chi trả tín chỉ các-bon được quốc tế tài trợ cho nông dân và doanh nghiệp.",
                "Thứ năm, kết nối với các cơ quan nhà nước để truyền đạt kiến nghị của hội viên và các tác nhân trong chuỗi giá trị trong quá trình thực hiện Đề án, tham gia đánh giá kết quả về sự thực hiện các chỉ đạo và chính sách liên quan đến Đề án và kiến nghị về sửa đổi, xây dựng chính sách liên quan ngành hàng lúa gạo.",
                "Thứ sáu, tham gia hoạt động thông tin truyền thông việc thực hiện Đề án, hỗ trợ hội viên quảng bá công nghệ và sản phẩm.",
                "Thứ bảy, tham gia hợp tác quốc tế về lúa gạo và các hoạt động quảng bá hình ảnh lúa gạo Việt Nam trên thế giới, đặt biệt lúa gạo giảm phát thải, theo Nông nghiệp Việt Nam."
            ],
            "title": "Giá lúa gạo hôm nay 7/2: Các mặt hàng đi ngang"
        },
        {
            "date": "11:23 | 05/02/2024",
            "description": "Theo ghi nhận, giá lúa gạo hôm nay (5/2) giảm đối với nhiều giống lúa. Theo đó, việc triển khai Đề án 1 triệu ha lúa chất lượng cao chính là sự kỳ vọng của hàng triệu nông dân.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 6/2",
                "Theo ghi nhận tại chợ An Giang, giá lúa hôm nay (5/2) giảm. Hiện tại, lúa Đài thơm 8 và lúa OM 18 có giá giảm trong khoảng 100 - 200 đồng/kg, lần lượt xuống còn 9.300 - 9.500 đồng/kg và 9.400 - 9.500 đồng/kg.",
                "Đối với giống lúa Nàng Hoa 9, giá bán hiện đang ở mức 9.500 - 9.700 đồng/kg sau khi giảm nhẹ 100 đồng/kg. Trong khi đó, các loại lúa khác vẫn duy trì mức giá ổn định.",
                "Các loại nếp có giá đi ngang. Cụ thể, giá nếp Long An (khô) dao động trong khoảng 9.600 - 9.800 đồng/kg và giá nếp 3 đùm tháng (khô) trong khoảng 10.800 - 11.000 đồng/kg.",
                "Bảng giá lúa gạo hôm nay 5/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Tại chợ An Giang, giá gạo thường ổn định trong khoảng 15.000 - 16.000 đồng/kg. Tương tự, giá các loại gạo khác tiếp tục đứng yên.",
                "Cám có giá bán trong khoảng 9.000 - 10.000 đồng/kg.",
                "Đề án “Phát triển bền vững 1 triệu ha chuyên canh lúa chất lượng cao và phát thải thấp gắn với tăng trưởng xanh vùng ĐBSCL năm 2030” được phê duyệt có ý nghĩa đặc biệt quan trọng trong định hướng chuyển đổi phương thức canh tác lúa bền vững ở ĐBSCL và hình thành, phát triển các vùng nguyên liệu tập trung quy mô lớn ổn định lâu dài, đảm bảo chất lượng, canh tác bền vững và hiệu quả.",
                "Xây dựng vùng chuyên canh lúa chất lượng cao và phát thải thấp ở ĐBSCL mang tính đột phá trong tổ chức lại sản xuất ngành hàng lúa gạo, nâng cao giá trị gia tăng trong toàn chuỗi, bảo đảm phát triển bền vững trong bối cảnh biến đổi khí hậu ngày càng gia tăng, đóng góp vào tăng trưởng xanh và góp phần thực hiện các cam kết của Chính phủ tại Hội nghị thượng đỉnh về biến đổi khí hậu của Liên hợp quốc lần thứ 26 (COP26), hướng tới mục tiêu phát thải ròng bằng “0” vào 2050.",
                "Mục tiêu đến năm 2025, về quy mô: Diện tích canh tác vùng chuyên canh lúa chất lượng cao và phát thải thấp đạt 180.000 ha, theo báo Nông nghiệp Việt Nam."
            ],
            "title": "Giá lúa gạo hôm nay 5/2: Giảm từ 100 đồng/kg đến 200 đồng/kg"
        },
        {
            "date": "12:31 | 15/02/2024",
            "description": "Theo đó, giá lúa gạo hôm nay (15/2) biến động không đồng nhất. Theo đó, Đề án 1 triệu ha lúa chất lượng cao là “Luồng gió mới\" thể hiện quyết tâm của Chính phủ từng bước hiện đại hoá ngành sản xuất lúa gạo.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 16/2",
                "Tại chợ An Giang, giá lúa hôm nay (15/2) được ghi nhận biến động trái chiều.",
                "Trong đó, giá lúa Đài thơm 8 và lúa OM 18 cùng tăng 100 đồng/kg, lần lượt lên khoảng 9.400 - 9.600 đồng/kg và 9.300 - 9.400 đồng/kg. Trái lại, lúa Nàng Hoa 9 có giá giảm 100 đồng/kg xuống khoảng 9.500 - 9.600 đồng/kg.",
                "Giá nếp vẫn được giữ nguyên. Hiện, giá nếp Long An (khô) và nếp 3 đùm tháng (khô) lần lượt là 9.600 - 9.800 đồng/kg và 10.800 - 11.000 đồng/kg.",
                "Bảng giá lúa gạo hôm nay 15/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Khảo sát tại chợ An Giang, gạo thường được bán với giá là 16.000 - 16.500 đồng/kg - tăng từ 500 đồng/kg đến 1.000 đồng/kg. Trong khi đó, các loại gạo khác cũng đồng loạt đi ngang.",
                "Giá cám ổn định, hiện đang rơi vào khoảng 9.000 - 10.000 đồng/kg.",
                "Theo đó, Hội nghị triển khai Đề án \"Phát triển bền vững 1 triệu ha lúa chuyên canh chất lượng cao, phát thải thấp gắn với tăng trưởng xanh vùng Đồng bằng sông Cửu Long đến năm 2030\" được tổ chức tại Kiên Giang, theo báo Quảng Ninh.",
                "Đề án đưa ra mục tiêu giảm 30% chi phí đầu vào, góp phần giảm chi phí sản xuất lúa cho các hộ nông dân khoảng 9.500 tỷ đồng; tỷ suất lợi nhuận của người trồng lúa tăng 50%; góp phần giảm 10% lượng khí nhà kính phát thải.",
                "Bên cạnh đó, Đề án gắn với tổ chức lại hệ thống sản xuất theo chuỗi giá trị, áp dụng các quy trình canh tác bền vững nhằm gia tăng giá trị, phát triển bền vững của ngành lúa gạo, nâng cao hiệu quả sản xuất kinh doanh, thu nhập và đời sống của người trồng lúa, bảo vệ môi trường, thích ứng với biến đổi khí hậu và giảm phát thải khí nhà kính, góp phần thực hiện các cam kết của Việt Nam với quốc tế."
            ],
            "title": "Giá lúa gạo hôm nay 15/2: Tăng giảm trái chiều"
        },
        {
            "date": "11:59 | 02/02/2024",
            "description": "Theo ghi nhận, giá lúa gạo hôm nay (2/2) lặng sóng. Thị trường xuất khẩu gạo biến động theo thời gian, tính đến cuối năm 2023, đầu năm 2024, gạo Việt Nam vẫn được xuất khẩu với giá cao.",
            "text": [
                "Xem thêm: Giá lúa gạo hôm nay 5/2",
                "Tại chợ An Giang, giá lúa hôm nay (2/2) duy trì ổn định. Hiện tại, lúa Nhật là giống lúa có giá bán thấp nhất đang dao động trong khoảng 7.800 - 8.000 đồng/kg.",
                "Bên cạnh đó, nếp có giá ổn định. Trong đó, giá nếp Long An (khô) hiện là 9.600 - 9.800 đồng/kg. Giá nếp 3 đùm tháng (khô) trong khoảng 10.800 - 11.000 đồng/kg. Hai loại nếp 3 tháng (tươi) và nếp Long An (tươi) tạm dừng khảo sát vào hôm nay.",
                "Bảng giá lúa gạo hôm nay 2/2 tại tỉnh An Giang. (Nguồn: Sở NN&PTNT An Giang)",
                "Theo khảo sát tại chợ An Giang, giá gạo tiếp tục đứng yên. Trong đó, gạo thường vẫn được bán với giá trong khoảng 15.000 - 16.000 đồng/kg.",
                "Giá cám vẫn được các thương lại bán với giá 9.000 - 10.000 đồng/kg.",
                "Theo Bộ Nông nghiệp và Phát triển nông thôn, nước ta đã xuất khẩu khoảng 8,29 triệu tấn gạo, mang về con số 4,78 tỷ USD, so với 2022 đã tăng 16,7% về khối lượng và tăng 38,4% về giá trị.",
                "Nguyên nhân khiến giá gạo Việt Nam xuất khẩu tăng mạnh là do nhu cầu của thị trường trên thế giới tăng khi nguồn cung bị giới hạn. Đặc biệt sau khi Ấn Độ ban hành ra lệnh cấm xuất khẩu gạo, giá gạo thế giới đã tăng mức kỷ lục.",
                "Trước ảnh hưởng của biến đổi khí hậu, Việt Nam đã chủ động áp dụng những tiến bộ kỹ thuật giúp nâng cao sản lượng, tăng chất lượng gạo. Tính đến thời điểm hiện nay, Việt Nam tự hào với lợi thế về giống lúa ngắn ngày đạt chất lượng cao so với thị trường thế giới.",
                "Tận dụng thời cơ khi nhiều dự báo cho rằng năm 2024, tình hình lúa gạo thế giới vẫn tiếp tục sôi động vì nguồn cung thiếu hụt so với nhu cầu. Việt Nam nêu cao tinh thần nắm bắt cơ hội để vươn lên làm chủ thị trường thế giới về sản lượng và giá trị xuất khẩu, theo báo Trà Vinh."
            ],
            "title": "Giá lúa gạo hôm nay 2/2: Duy trì đà đi ngang"
        },
        {
            "date": "07:25 | 02/02/2024",
            "description": "Do ảnh hưởng của El Nino, sản lượng gạo của Thái Lan dự kiến sẽ giảm 5,9% trong năm nay, do đó khối lượng gạo xuất khẩu của nước này  có thể chỉ đạt 7,5 triệu tấn, giảm 14,4% so với năm ngoái.",
            "text": [
                "Theo phóng viên TTXVN tại Bangkok, Bộ Thương mại Thái Lan ngày 1/2 cho biết khối lượng gạo xuất khẩu của nước này năm nay có thể chỉ đạt 7,5 triệu tấn, giảm 14,4% so với năm ngoái, do sản lượng thấp hơn và cạnh tranh gia tăng.",
                "Do ảnh hưởng của hiện tượng khí hậu El Nino, sản lượng gạo của Thái Lan dự kiến sẽ giảm 5,9% trong năm nay. Bên cạnh đó, quốc gia xuất khẩu gạo lớn thứ hai trên thế giới sau Ấn Độ này cũng đối mặt với sự cạnh tranh và nhiều thách thức, khi nguồn cung toàn cầu dự kiến sẽ cao hơn và nhập khẩu của các đối tác thương mại giảm.",
                "Tuy nhiên, Bộ Thương mại Thái Lan cho biết xuất khẩu gạo của nước này trong tháng 1 đã tăng vọt tới 44% so với cùng kỳ năm ngoái lên 1,12 triệu tấn.",
                "Năm 2023, Thái Lan xuất khẩu 8,76 triệu tấn gạo, tăng 13,6% về khối lượng và 28,4% về giá trị so với năm 2022. Xuất khẩu gạo năm ngoái chiếm 1,8% tổng kim ngạch xuất khẩu của Thái Lan."
            ],
            "title": "Xuất khẩu gạo của Thái Lan có thể giảm mạnh trong năm 2024 do El Nino"
        },
        {
            "date": "06:41 | 05/02/2024",
            "description": "Giới chuyên gia Ấn Độ mới đây nhận định tình trạng thiếu gạo trên toàn cầu sẽ trở nên tồi tệ hơn khi xuất khẩu các loại gạo cao cấp của Ấn Độ gặp phải rào cản mới do chi phí vận chuyển tăng vọt.",
            "text": [],
            "title": "Thị trường gạo trước nguy cơ tiếp tục khó khăn"
        }
    ],
    
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
