import * as Cesium from "cesium";

async function addBuildingGeoJSON(viewer) {
  const geoJSONURL = await Cesium.IonResource.fromAssetId(1186917);
  const geoJSON = await Cesium.GeoJsonDataSource.load(geoJSONURL, {
    clampToGround: true,
  });
  const dataSource = await viewer?.dataSources.add(geoJSON);
  for (const entity of dataSource.entities.values) {
    entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;
  }
}
const buildingStyle = (buildingsTileset) => {
  buildingsTileset.style = new Cesium.Cesium3DTileStyle({
    // Create a style rule to control each building's "show" property.
    show: {
      conditions: [
        // Any building that has this elementId will have `show = false`.
        ["${elementId} === 532245203", false],
        ["${elementId} === 332469316", false],
        ["${elementId} === 332469317", false],
        ["${elementId} === 235368665", false],
        ["${elementId} === 530288180", false],
        ["${elementId} === 530288179", false],
        // If a building does not have one of these elementIds, set `show = true`.
        [true, true],
      ],
    },
    // Set the default color style for this particular 3D Tileset.
    // For any building that has a `cesium#color` property, use that color, otherwise make it white.
    color:
      "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')",
  });
};

const addBuilding = (viewer) => {
  const newBuildingTileset = viewer?.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(1183452),
    })
  );
  viewer.flyTo(newBuildingTileset);
  return newBuildingTileset;
};
export const Building = (viewer) => {
  const buildingsTileset = viewer?.scene?.primitives.add(
    Cesium.createOsmBuildings()
  );
  addBuildingGeoJSON(viewer);
  buildingStyle(buildingsTileset);
  const addBuildingdata = addBuilding(viewer);
  return addBuildingdata;
};
