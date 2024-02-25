import scrapy
from pathlib import Path
from scrapy.selector import Selector
class QuotesSpider(scrapy.Spider):
    name = "rice"

    def start_requests(self):
        urls = [
            "https://vietnambiz.vn/gia-gao.html"
        ]

        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        links_ele =  response.xpath("/html/body/div[2]/div[3]/div[1]/div/div[3]/div[1]/div[1]/div/div/div/h3/a").getall()
        text = [Selector(text = link).css('a::attr(href)').get() for link in links_ele]


        with open('crawler/data/link_rice.txt', 'w', encoding='utf-8') as f:
            for link in text:
                f.write('https://vietnambiz.vn' + link + '\n')        
        