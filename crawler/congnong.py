import requests as req
import json
from lxml import html
url = "https://nongnghiep.vn/"
res = req.get(url)
doc1 = html.fromstring(res.text)

title = doc1.xpath("//li[@class='news-home-item']//h3/a/text()")
title = [x.strip() for x in title]
link = doc1.xpath("//li[@class='news-home-item']/a/@href")
des = doc1.xpath("//li[@class='news-home-item']//p/text()")
des = [x.strip() for x in des]
image = doc1.xpath("//li[@class='news-home-item']/a//img/@src")

with open('crawler/data/output.json','w', encoding='utf-8') as file:
    json.dump([
        {
            "title": title[i],
            'image':image[i],
            'description' : des[i],
            "link" : link[i]
        } for i in range(len(title))
    ], file,ensure_ascii=False)
