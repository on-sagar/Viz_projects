import geopandas as gpd
import pandas as pd

gdf=gpd.read_file('nepal-districts-new.geojson')
print(gdf.head())

# new_gdf=gdf[:2]
# print(new_gdf)
gdf.to_file('formatted_nepal-districts-new.geojson', driver='GeoJSON')