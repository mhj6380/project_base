import os
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import pymysql

# backend 환경변수 주입 
load_dotenv(dotenv_path="./backend/.env",verbose=True)
 

# DB 정보  
DB_HOST = os.getenv('DB_HOST') 
DB_USERNAME = os.getenv('DB_USERNAME') 
DB_PASSWORD = os.getenv('DB_PASSWORD') 
DB_DATABASE = os.getenv('DB_DATABASE') 

# DB CONNECT 
con = pymysql.connect(host=DB_HOST, user=DB_USERNAME, password=DB_PASSWORD,
                       db=DB_DATABASE, charset='utf8') # 한글처리 (charset = 'utf8')

# 커서 생성 
cur = con.cursor(pymysql.cursors.DictCursor)
insert_data = [{'email': 'py1', 'username': "pyusername1"}, 
               {'email': 'py2', 'username': "pyusername2"},
               {'email': 'py3', 'username': "pyusername3"}]
 
insert_sql = "INSERT INTO `user` (email, username) VALUES (%(email)s, %(username)s);"
cur.executemany(insert_sql, insert_data)
con.commit()
 
# DB DISCONNECT 
con.close()

url = 'https://ridibooks.com/category/new-releases/2200'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text 
 
soap = BeautifulSoup(html, 'html.parser')

bookservices = soap.select('.title_text') 
for no, book in enumerate(bookservices, 1): 
  print(no, book.text.strip())  
 
print(DB_PASSWORD)