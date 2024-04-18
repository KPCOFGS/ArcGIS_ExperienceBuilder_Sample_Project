"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[83814,40353],{83814:(e,a,r)=>{r.d(a,{populateOperationalLayers:()=>o}),r(58574);var t=r(47817),n=r(72304),i=r(86519),y=r(52946),l=r(40353);async function c(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new n.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&(0,l.t)(r,t)}return!1}async function o(e,a,r){if(!a)return;const n=[];for(const e of a){const a=m(e,r);"GroupLayer"===e.layerType?n.push(w(a,e,r)):n.push(a)}const i=await(0,t.ai)(n);for(const a of i)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}r(68700),r(30286);const s={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},u={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function m(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&S(a)&&await async function(e,a,r){const t=y.a.FeatureLayer,n=await t(),i=a.featureCollection,l=i.showLegend,c=i.layers.map((e=>{const a=new n;return a.read(e,r),null!=l&&a.read({showLegend:l},r),a}));e.layers.addMany(c)}(t,a,r.context),await(0,i.t)(t,r.context),t}(await async function(e,a){const r=a.context,t=g(r);let i=e.layerType||e.type;!i&&a&&a.defaultLayerType&&(i=a.defaultLayerType);const o=t[i];let s=o?y.a[o]:y.a.UnknownLayer;const u=r&&r.portal;if(I(e)){if(e.itemId){const a=new n.default({id:e.itemId,portal:u});await a.load();const r=(await(0,l.u)(a)).className||"UnknownLayer";s=y.a[r]}}else"ArcGISFeatureLayer"===i&&(await function(e,a){return c(e,a,"notes","Map Notes")}(e,u)?s=y.a.MapNotesLayer:await function(e,a){return c(e,a,"route","Route Layer")}(e,u)?s=y.a.RouteLayer:S(e)&&(s=y.a.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(s=y.a.WMTSLayer),s()}(e,a),e,a)}function S(e){if("ArcGISFeatureLayer"!==e.layerType||I(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function I(e){return"Feature Collection"===e.type}function g(e){let a;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":a=L;break;case"ground":a=u;break;default:a=s}else switch(e.layerContainerType){case"basemap":a=f;break;case"tables":a=p;break;default:a=d}return a}async function w(e,a,r){const n=new t.ae,i=o(n,Array.isArray(a.layers)?a.layers:[],r),y=await e;if(await i,"group"===y.type)return y.layers.addMany(n),y}},52946:(e,a,r)=>{r.d(a,{a:()=>t});const t={BingMapsLayer:async()=>(await r.e(82549).then(r.bind(r,82549))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(81345),r.e(44459),r.e(51505),r.e(12135),r.e(21002)]).then(r.bind(r,21002))).default,CSVLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(81345),r.e(44459),r.e(25166)]).then(r.bind(r,7344))).default,ElevationLayer:async()=>(await Promise.all([r.e(33896),r.e(89289),r.e(94935),r.e(59039)]).then(r.bind(r,36550))).default,FeatureLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(81345),r.e(44459),r.e(71786)]).then(r.bind(r,44459)).then((function(e){return e.F}))).default,GroupLayer:async()=>(await r.e(7529).then(r.bind(r,7529))).default,GeoRSSLayer:async()=>(await r.e(89740).then(r.bind(r,89740))).default,ImageryLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(78899),r.e(88768),r.e(25012),r.e(50935)]).then(r.bind(r,50935))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(37085),r.e(89289),r.e(74970),r.e(19601),r.e(94935),r.e(88768),r.e(25012),r.e(80806)]).then(r.bind(r,80806))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(33896),r.e(74970),r.e(19601),r.e(51505),r.e(40865)]).then(r.bind(r,40865))).default,KMLLayer:async()=>(await Promise.all([r.e(37085),r.e(23194)]).then(r.bind(r,23194))).default,MapImageLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(78624),r.e(81345),r.e(2807),r.e(8079),r.e(23110)]).then(r.bind(r,8079))).default,MapNotesLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(81345),r.e(74970),r.e(44459),r.e(19601),r.e(84299)]).then(r.bind(r,60587))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(12242),r.e(41081)]).then(r.bind(r,41081))).default,PointCloudLayer:async()=>(await Promise.all([r.e(33896),r.e(86779)]).then(r.bind(r,86779))).default,RouteLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(81345),r.e(44459),r.e(98483)]).then(r.bind(r,58298))).default,SceneLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(89289),r.e(78624),r.e(81345),r.e(44459),r.e(51505),r.e(12135),r.e(72063)]).then(r.bind(r,72063))).default,StreamLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(78624),r.e(81345),r.e(95501)]).then(r.bind(r,95501))).default,TileLayer:async()=>(await Promise.all([r.e(33896),r.e(37085),r.e(78624),r.e(81345),r.e(94935),r.e(2807),r.e(41570)]).then(r.bind(r,41570))).default,UnknownLayer:async()=>(await r.e(51239).then(r.bind(r,51239))).default,UnsupportedLayer:async()=>(await r.e(9137).then(r.bind(r,9137))).default,VectorTileLayer:async()=>(await Promise.all([r.e(33896),r.e(94935),r.e(10661),r.e(3506)]).then(r.bind(r,3506))).default,WebTileLayer:async()=>(await r.e(12242).then(r.bind(r,12242)).then((function(e){return e.W}))).default,WMSLayer:async()=>(await r.e(80670).then(r.bind(r,80670))).default,WMTSLayer:async()=>(await Promise.all([r.e(12242),r.e(75749)]).then(r.bind(r,75749))).default}},40353:(e,a,r)=>{r.r(a),r.d(a,{p:()=>p,t:()=>y,u:()=>l});var t=r(47817),n=r(72304),i=r(52946);function y(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}function l(e){switch(e.type){case"Map Service":return function(e){return function(e){return d(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return o(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),y(e,"Map Notes")?{className:"MapNotesLayer"}:y(e,"Route Layer")?{className:"RouteLayer"}:1===L(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return o(e).then((a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return d(t).then((e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const i=await e.fetchData(),y=null==i?void 0:i.layerType;return"ArcGISTiledImageServiceLayer"===y?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===y?{className:"ImageryLayer"}:"map"===(null==(t=(await d(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new t.s("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function c(e){return(0,i.a[e.className])().then((a=>({constructor:a,properties:e.properties})))}function o(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((a=>L(a)>0?s(a):d(e.url).then(s)))}function s(e){return 1===L(e)&&{id:(0,t.I)(u(e))}}function u(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function L(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function d(e){return(0,t.U)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}const p=Object.freeze({__proto__:null,fromItem:function(e){return!e.portalItem||e.portalItem instanceof n.default||(e={...e,portalItem:new n.default(e.portalItem)}),function(e){return e.load().then(l).then(c)}(e.portalItem).then((a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Promise.resolve(new t(r))}))},selectLayerClassPath:l})},86519:(e,a,r)=>{r.d(a,{t:()=>i});var t=r(47817),n=r(30286);async function i(e,a,r){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(i&&"unique-value"===i.type&&i.styleOrigin){const y=await(0,n.o)(i.populateFromStyle());if((0,t.ah)(r),!1===y.ok){const r=y.error;a&&a.messages&&a.messages.push(new t.aN("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a.origin)}}}}}]);