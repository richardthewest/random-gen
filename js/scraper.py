import requests
from bs4 import BeautifulSoup

URL = "https://www.whats-on-netflix.com/library/categories/"
page = requests.get(URL)
soup = BeautifulSoup(page.text,'html.parser')
results = soup.find(id="devices")


#print(results.text)
with open('movies.txt', 'w') as f:
    f.write(results.text.strip())