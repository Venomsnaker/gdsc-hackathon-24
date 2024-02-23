import scrapy
from pathlib import Path

class QuotesSpider(scrapy.Spider):
    name = "main"

    def start_requests(self):
        urls = [
            "https://danviet.vn/nha-nong/tin-nong-nghiep.htm"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        # Sử dụng response.css() để chọn các phần tử có class là "img"
        img_links = response.css('.img::attr(href)').getall()

        # Ghi các liên kết vào tệp tin quotes.txt
        with open('crawler/data/quotes.txt', 'w', encoding='utf-8') as f:
            for link in img_links:
                f.write('https://danviet.vn' + link + '\n')
