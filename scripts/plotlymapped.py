from urllib.request import urlopen
import json
import pandas as pd
import plotly.express as px

with urlopen('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json') as response:
    counties = json.load(response)
#count = pd.read_json('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json')

df = pd.read_csv("https://raw.githubusercontent.com/plotly/datasets/master/fips-unemp-16.csv",
                   dtype={"fips": str})

gf = pd.read_csv('https://raw.githubusercontent.com/tuttlepower/Vote_Map_2000-2016/master/data/reworkedcountrypres.csv')
print(gf.columns)
#print(count.head())

fig = px.choropleth(gf, geojson=counties, locations='fips',
                      
                           scope="usa",
                           #labels={'unemp':'color'}
                          )
#fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
fig.show()