import requests
from bs4 import BeautifulSoap

url = 'https://ridibooks.com/category/new-releases/2200'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text

soap = BeautifulSoap(html, 'html.parser')

bookservices = soap.select('.title_text')
for no, book in enumerate(bookservices, 1):
  print(no, book, text.strip()) 
