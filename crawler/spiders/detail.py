import scrapy
from pathlib import Path
import json
from scrapy.selector import Selector
import os
class QuotesSpider(scrapy.Spider):
    name = "detail"

    def start_requests(self):
        if os.path.exists("crawler/data/data.txt"):
            os.remove("crawler/data/data.txt")
            print("Đã xóa tệp crawler/data/data.txt")
        else:
            print("Tệp crawler/data/data.txt không tồn tại")
        with open('crawler/data/quotes.txt', 'r', encoding='utf-8') as file:
            urls = [line.strip() for line in file]
        print("uurl " , urls)
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        title_elements = response.xpath("/html/body/div/div/div/div/div/div/div/h2/span").getall()
        title = Selector(text=title_elements[0]).xpath("//text()").get().strip()
        date_elements = Selector(text = response.xpath("/html/body/div/div/div/div/div/div/div/span").getall()[1]).xpath("string()").get().strip()
        author = Selector(text = response.css(".line-datetime").css(".anots").getall()[0]).xpath("string()").get().strip()
        description = Selector( text = response.css(".sapo").getall()[0]).xpath("string()").get().strip()
        p_elements =  response.xpath("/html/body/div/div/div/div/div/div/div/div/p").getall()
        text = [ Selector(text = p).xpath("string()").get().strip() for p in p_elements]

        with open('crawler/data/data.txt', 'a', encoding='utf-8' ) as file:
            data = {
                "title" : title,
                "date" : date_elements,
                "author" : author,
                "description" : description,
                "text" : text
            }  

            json_data = json.dumps(data , ensure_ascii=False)

            file.write(json_data + '\n')
        