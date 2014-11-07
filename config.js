_configOptions = {
	
	//Enter a title, if no title is specified, the webmap's title is used.
	//title should be readable from ArcGIS.com viewer TOC
	//title: "Your title here",
	
	//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
	//subtitle: "Your subtitle here",
	
	//id for satellite (or intended large scale) web map
	webmap_largescale: "aaeeb088f21e42d6abf6204fac61aeb8", 
	
	//id for overview web map; this is the map that contains the content point layer
	/mine webmap_overview: "3b440d4b507e4210a2b3f105da5bbf5d",
	webmap_overview: "caca75ada5f14f1dad84a560db831a50",
	//layer in overview webmap which provides the countdown content
	contentLayer: "top99", 
	fieldName_Rank: "rank",
	fieldName_Name: "name",
	//NOTE: if level field doesn't exist, app will use defaultLargeScaleZoomLevel
	//fieldName_Level: "level",

	//Initial zoom level for overview map
	initialZoomLevel: 5,
	
	//Initial overview map zoom level for wider map aspect ratios
	initialZoomLevelWide: 6,
	
	//If no zoom level is encoded for the feature, use this zoom 
	//level for the large scale map
	defaultLargeScaleZoomLevel: 10,
	
	showIntro: false,
	popupHeight: 300,
	popupLeftMargin: 30
	
}
