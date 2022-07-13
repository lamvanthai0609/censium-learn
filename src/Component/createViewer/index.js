import * as Cesium from "cesium";
import React, { useContext, useEffect } from "react";
import { ViewerContext } from "../../Context/ViewContext";
//import { createBox } from "../createBox";

const CreateViewer = () => {
  const { viewer, setViewer, element } = useContext(ViewerContext);
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjOGY0YTgzNi1kMTM1LTRlYzctYWM5Mi02YjMyODQyYjU3MzMiLCJpZCI6MTAwMTEyLCJpYXQiOjE2NTcwMDg5NjV9.eE3bos64Mptb6jQFojjQqb48ajROmJer9f4Ql9q3vkY";
  useEffect(() => {
    !viewer &&
      setViewer(
        new Cesium.Viewer("cesiumcontainer", {
          terrainProvider: Cesium.createWorldTerrain({
            requestVertexNormals: true,
            requestWaterMask: true,
          }),
        })
      );
  }, [viewer]);

  useEffect(() => {
    if (viewer) {
      if (element) {
        const data = element;
        data(viewer);
      }
      // createBox(viewer);
      // Building(viewer)
    }
  }, [viewer, element]);
  return <div id="cesiumcontainer"></div>;
};

export default CreateViewer;
