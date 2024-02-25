import scrapy
from pathlib import Path
import json
from scrapy.selector import Selector
import os
class QuotesSpider(scrapy.Spider):
    name = "rice_detail"

    def start_requests(self):
        if os.path.exists('crawler/data/rice-data.txt'):
            os.remove('crawler/data/rice-data.txt')
            print("Đã xóa tệp crawler/data/rice-data.txt")
        else:
            print("Tệp crawler/data/rice-data.txt không tồn tại")
        with open('crawler/data/link_rice.txt', 'r', encoding='utf-8') as file:
            urls = [line.strip() for line in file]
        print("uurl " , urls)
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        title = Selector(text = response.xpath("/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/h1").getall()[0]).xpath("string()").get().strip()  
        date =  Selector(text = response.xpath("/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div/span/span").getall()[0]).xpath("string()").get().strip()
        description = Selector(text = response.xpath("/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/div[1]").getall()[0]).xpath("string()").get().strip()
        p_elements =  response.xpath("/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/div[3]/p").getall()
        text = [ Selector(text = p).xpath("string()").get().strip() for p in p_elements]

        with open('crawler/data/rice-data.txt', 'a', encoding='utf-8' ) as file:
            data = {
                "title" : title,
                "date" : date,
                "description" : description,
                "text" : text
            }  

            json_data = json.dumps(data , ensure_ascii=False)

            file.write(json_data + '\n')
        