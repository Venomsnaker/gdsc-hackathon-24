from pathlib import Path

import scrapy


class QuotesSpider(scrapy.Spider):
    name = "html-rice"

    def start_requests(self):
        urls = [
            "https://vietnambiz.vn/gia-lua-gao-hom-nay-232-nep-long-an-tuoi-tang-200-dongkg-202422217301479.htm"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f"quotes-{page}.html"
        Path(filename).write_bytes(response.body)
        self.log(f"Saved file {filename}")
