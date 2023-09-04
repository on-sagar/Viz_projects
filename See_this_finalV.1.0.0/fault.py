import geopandas as gpd
import matplotlib.pyplot as plt

# Read the GeoJSON file into a GeoDataFrame
gdf = gpd.read_file('fault_trial.geojson')
# gdf.plot()
# plt.show()


index_to_delete=range(0,18)

gdf=gdf.drop([3,4,13,16,0])
gdf.to_file('hindukush_fault.geojson',driver='GeoJSON')
gdf.plot()
plt.show()

# Access the features (geometries and attributes)
# for index, row in gdf.iterrows():
#     feature_geometry = row.geometry  # Access the geometry of the feature
#     feature_properties = row.to_dict()  # Access the attributes/properties as a dictionary
#     print(f"Feature {index + 1} Geometry: {feature_geometry}")
#     print(f"Feature {index + 1} Properties: {feature_properties}")

