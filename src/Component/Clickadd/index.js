import * as Cesium from "cesium";

export const arrayPoint = [];
const arrPointCartesian3 = [];
const drawLine = (viewer) => {
  const entity = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(arrPointCartesian3),
      width: 5,
      material: Cesium.Color.RED,
    },
  });
  //viewer.zoomTo(viewer.entities);

  const polyline = entity.polyline; // For upcoming examples
};

const drawPolygon = (viewer) => {
  console.log(arrPointCartesian3);
  const polygonData = {
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights(arrPointCartesian3),
      height: 50000,
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK,
    },
  };
  viewer.entities.add(polygonData);
};

export const clearPoint = (viewer) => {
  arrayPoint.forEach((item) => viewer.entities.removeById(item));
  arrayPoint.splice(0, arrayPoint.length);
  arrPointCartesian3.splice(0, arrPointCartesian3.length);
  console.log(arrayPoint);
  console.log(arrPointCartesian3);
};

export const addPoint = (viewer) => {
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
  handler.setInputAction(function (movement) {
    const feature = viewer.scene.pickPosition(movement.position);
    //console.log(feature);

    arrPointCartesian3.push(feature.x);
    arrPointCartesian3.push(feature.y);
    arrPointCartesian3.push(feature.z);
    //console.log(arrPointCartesian3);
    const point = {
      id: arrayPoint.length,
      description: "test",
      position: feature,
      point: { pixelSize: 10, color: Cesium.Color.RED },
    };
    arrayPoint.push(point.id);
    viewer.entities.add(point);

    console.log(arrayPoint.length);
    if (arrayPoint.length == 2) {
      //drawLine(viewer);
      console.log("vào1");
    } else if (arrayPoint.length > 2) {
      console.log("vào");
      drawPolygon(viewer);
    }
    //feature.show = false;
  }, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
};
