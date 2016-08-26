(function () {
  angular
    .module('app')
    .controller('DasboardCtrl', DasboardCtrl);

  function DasboardCtrl() {
    var vm = this;

    vm.project = {
      "scale":"14",
      "unit":"rem",
      "colorFormat":"css-rgba",
      "artboards":[
        {
          "layers":[
            {
               "objectID":"D5E469ED-91FB-424C-A836-DB748798551C",
               "type":"shape",
               "name":"Mask",
               "rect":{
                  "x":0,
                  "y":-1,
                  "width":750,
                  "height":1334,
                  "maxX":750,
                  "maxY":1333
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":""
            },
            {
               "objectID":"7582ADB5-93AC-4FB0-A404-98B50777010C",
               "type":"shape",
               "name":"11",
               "rect":{
                  "x":0,
                  "y":-1,
                  "width":750,
                  "height":1334
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":""
            },
            {
               "objectID":"8AEA7EAE-9686-42D2-A296-B279FE4DF0FC",
               "type":"shape",
               "name":"grid",
               "rect":{
                  "x":0,
                  "y":88,
                  "width":750,
                  "height":1053
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":0.4,
                        "color-hex":"#FFFFFF 40%",
                        "argb-hex":"#66FFFFFF",
                        "css-rgba":"rgba(255,255,255,0.4)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.40)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: rgba(255,255,255,0.40);"
               ]
            },
            {
               "objectID":"999D7CEF-523F-4661-B06A-87E907E8FCE4",
               "type":"shape",
               "name":"Rectangle 103",
               "rect":{
                  "x":0,
                  "y":1142,
                  "width":750,
                  "height":192
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":0,
                        "g":0,
                        "b":0,
                        "a":0.25,
                        "color-hex":"#000000 25%",
                        "argb-hex":"#40000000",
                        "css-rgba":"rgba(0,0,0,0.25)",
                        "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.25)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: rgba(0,0,0,0.25);"
               ]
            },
            {
               "objectID":"466E3739-CEE5-476A-BCCC-F74AA2356A80",
               "type":"shape",
               "name":"Rectangle 149",
               "rect":{
                  "x":80,
                  "y":1206,
                  "width":120,
                  "height":64
               },
               "rotation":0,
               "radius":40,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":0,
                        "g":0,
                        "b":0,
                        "a":0.5,
                        "color-hex":"#000000 50%",
                        "argb-hex":"#80000000",
                        "css-rgba":"rgba(0,0,0,0.5)",
                        "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.50)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: rgba(0,0,0,0.50);",
                  "border-radius: 40px;"
               ]
            },
            {
               "objectID":"41CEDB46-4387-410D-99C0-20CDB378CEAB",
               "type":"text",
               "name":"4:3",
               "rect":{
                  "x":127,
                  "y":1222,
                  "width":27,
                  "height":33
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "content":"4:3",
               "color":{
                  "r":255,
                  "g":255,
                  "b":255,
                  "a":1,
                  "color-hex":"#FFFFFF 100%",
                  "argb-hex":"#FFFFFFFF",
                  "css-rgba":"rgba(255,255,255,1)",
                  "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
               },
               "fontSize":26,
               "fontFace":"Futura-CondensedMedium",
               "textAlign":"center",
               "letterSpacing":null,
               "lineHeight":0,
               "css":[
                  "font-family: Futura-CondensedMedium;",
                  "font-size: 26px;",
                  "color: #FFFFFF;"
               ]
            },
            {
               "objectID":"C83B8142-29FB-4710-81E1-F1BB7D18650C",
               "type":"shape",
               "name":"Oval 8",
               "rect":{
                  "x":315,
                  "y":1178,
                  "width":120,
                  "height":120
               },
               "rotation":0,
               "radius":0,
               "borders":[
                  {
                     "fillType":"color",
                     "position":"outside",
                     "thickness":6,
                     "color":{
                        "r":0,
                        "g":0,
                        "b":0,
                        "a":0.6,
                        "color-hex":"#000000 60%",
                        "argb-hex":"#99000000",
                        "css-rgba":"rgba(0,0,0,0.6)",
                        "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.60)"
                     }
                  }
               ],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;",
                  "border: 6px solid rgba(0,0,0,0.60);"
               ]
            },
            {
               "objectID":"A8599997-7FE7-4D7C-89AA-81B00AC23E2F",
               "type":"shape",
               "name":"Rectangle 99",
               "rect":{
                  "x":550,
                  "y":1206,
                  "width":120,
                  "height":64
               },
               "rotation":0,
               "radius":40,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":0,
                        "g":0,
                        "b":0,
                        "a":0.5,
                        "color-hex":"#000000 50%",
                        "argb-hex":"#80000000",
                        "css-rgba":"rgba(0,0,0,0.5)",
                        "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.50)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: rgba(0,0,0,0.50);",
                  "border-radius: 40px;"
               ]
            },
            {
               "objectID":"D620D7EE-5890-4031-8831-FC7A569E1DFD",
               "type":"text",
               "name":"0.15s",
               "rect":{
                  "x":589,
                  "y":1222,
                  "width":43,
                  "height":33
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "content":"0.15s",
               "color":{
                  "r":255,
                  "g":255,
                  "b":255,
                  "a":1,
                  "color-hex":"#FFFFFF 100%",
                  "argb-hex":"#FFFFFFFF",
                  "css-rgba":"rgba(255,255,255,1)",
                  "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
               },
               "fontSize":26,
               "fontFace":"Futura-CondensedMedium",
               "textAlign":"center",
               "letterSpacing":null,
               "lineHeight":0,
               "css":[
                  "font-family: Futura-CondensedMedium;",
                  "font-size: 26px;",
                  "color: #FFFFFF;"
               ]
            },
            {
               "objectID":"F85E0738-5FA8-4F91-8148-F97872438E69",
               "type":"shape",
               "name":"topbar",
               "rect":{
                  "x":0,
                  "y":-2,
                  "width":750,
                  "height":90
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":0,
                        "g":0,
                        "b":0,
                        "a":0.25,
                        "color-hex":"#000000 25%",
                        "argb-hex":"#40000000",
                        "css-rgba":"rgba(0,0,0,0.25)",
                        "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.25)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: rgba(0,0,0,0.25);"
               ]
            },
            {
               "objectID":"833E355C-22DD-4596-827D-E93ABF52AEA2",
               "type":"shape",
               "name":"Rectangle 202",
               "rect":{
                  "x":642,
                  "y":20,
                  "width":48,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":""
            },
            {
               "objectID":"D171C006-ABA9-4B9C-A564-D44459888DF0",
               "type":"shape",
               "name":"Shape",
               "rect":{
                  "x":642,
                  "y":23,
                  "width":48,
                  "height":42
               },
               "rotation":0,
               "radius":0,
               "borders":[
                  {
                     "fillType":"color",
                     "position":"inside",
                     "thickness":3,
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "border: 3px solid #FFFFFF;"
               ]
            },
            {
               "objectID":"7EAE61FD-7CD5-4971-913B-6F88B3AECD7B",
               "type":"shape",
               "name":"Shape",
               "rect":{
                  "x":652,
                  "y":42,
                  "width":21,
                  "height":16
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"A579FF94-5B9A-463C-9F87-CB5013531F8F",
               "type":"shape",
               "name":"Shape",
               "rect":{
                  "x":659,
                  "y":35,
                  "width":21,
                  "height":16
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"C3414AA3-50B3-4AA1-A7F8-5F34357F01D1",
               "type":"shape",
               "name":"Rectangle 201",
               "rect":{
                  "x":495,
                  "y":20,
                  "width":48,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":""
            },
            {
               "objectID":"E4F1361A-9DA4-48FF-ADB9-10A4ACF7BB87",
               "type":"shape",
               "name":"Oval 28",
               "rect":{
                  "x":495,
                  "y":20,
                  "width":48,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"361CE5E1-F453-4686-98E7-1EF767220C37",
               "type":"shape",
               "name":"Shape",
               "rect":{
                  "x":509,
                  "y":33,
                  "width":14,
                  "height":18
               },
               "rotation":10,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "transform: rotate(-10deg);",
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"7220FAA2-71D8-4E86-8A43-C1CBAF72C80F",
               "type":"shape",
               "name":"Rectangle 200",
               "rect":{
                  "x":350,
                  "y":20,
                  "width":48,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":""
            },
            {
               "objectID":"6B4FD93E-694E-48C6-B9A6-817371DCCDA8",
               "type":"shape",
               "name":"Rectangle 106",
               "rect":{
                  "x":350,
                  "y":20,
                  "width":48,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[
                  {
                     "fillType":"color",
                     "position":"inside",
                     "thickness":3,
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "fills":[],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "border: 3px solid #FFFFFF;"
               ]
            },
            {
               "objectID":"A60745FF-7ADD-4F8A-B4EF-54699B0147C1",
               "type":"shape",
               "name":"Rectangle 107",
               "rect":{
                  "x":350,
                  "y":20,
                  "width":48,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"DB2EA20D-2614-4215-A06E-7DC451578392",
               "type":"shape",
               "name":"shot-flash-on",
               "rect":{
                  "x":212,
                  "y":20,
                  "width":33,
                  "height":48
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"34E5FE1F-C5F7-4E2D-9152-B849CFDEF79D",
               "type":"shape",
               "name":"Rectangle 205 Copy",
               "rect":{
                  "x":214,
                  "y":31,
                  "width":27,
                  "height":31
               },
               "rotation":40,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "transform: rotate(-40deg);",
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"7C3AC8C0-DB08-414A-A112-9DDA621F496C",
               "type":"shape",
               "name":"Rectangle 151",
               "rect":{
                  "x":64,
                  "y":24,
                  "width":40,
                  "height":40
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"BCB04856-A3A8-420A-A244-9EAF6403BAB2",
               "type":"shape",
               "name":"camera-exposure-focus",
               "rect":{
                  "x":544,
                  "y":582,
                  "width":60,
                  "height":60
               },
               "rotation":0,
               "radius":0,
               "borders":[
                  {
                     "fillType":"color",
                     "position":"inside",
                     "thickness":4,
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":0,
                        "g":0,
                        "b":0,
                        "a":0.2,
                        "color-hex":"#000000 20%",
                        "argb-hex":"#33000000",
                        "css-rgba":"rgba(0,0,0,0.2)",
                        "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.20)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: rgba(0,0,0,0.20);",
                  "border: 4px solid #FFFFFF;"
               ]
            },
            {
               "objectID":"27A94F8E-ACF1-4E59-A4B7-4D5A4C3897FD",
               "type":"shape",
               "name":"camera-exposure-bar",
               "rect":{
                  "x":661,
                  "y":501,
                  "width":3,
                  "height":240
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            },
            {
               "objectID":"3E14DE19-C50C-4859-9FD9-8612CBAB032B",
               "type":"shape",
               "name":"camera-exposure-highlight",
               "rect":{
                  "x":634,
                  "y":581,
                  "width":56,
                  "height":39
               },
               "rotation":0,
               "radius":0,
               "borders":[],
               "fills":[
                  {
                     "fillType":"color",
                     "color":{
                        "r":255,
                        "g":255,
                        "b":255,
                        "a":1,
                        "color-hex":"#FFFFFF 100%",
                        "argb-hex":"#FFFFFFFF",
                        "css-rgba":"rgba(255,255,255,1)",
                        "ui-color":"(r:1.00 g:1.00 b:1.00 a:1.00)"
                     }
                  }
               ],
               "shadows":[],
               "opacity":1,
               "styleName":"",
               "css":[
                  "background: #FFFFFF;"
               ]
            }
          ],
          "notes":[],
          "pageName":"Page 1",
          "pageObjectID":"50CECF4B-C5F4-46BC-932E-9A0212035B05",
          "name":"Camera",
          "objectID":"5C84DB42-335D-406A-90A4-CA96E0C996F8",
          "width":750,
          "height":1334,
          "imagePath":"images/preview/page-1-camera.png"
        }
      ],
       "slices":[],
       "colors":[]
    };

    vm.project.selectArtBoard = selectArtBoard;
    vm.selectedArtBoard = {
      obj: null,
      ruler: {
        isHidden: true,
        vertical: {
          width: 0,
          left: 0
        },
        horizontal: {
          height: 0,
          top: 0
        }
      },
      screenStyle: getBoardScreenStyle,
      screenParentStyle: getBoardParentScreenStyle,
      layerStyle: getLayerStyle,
      vRulersStyle: getVRulersStyle,
      hRulersStyle: getHRulersStyle,

      layerMouseEnter: layerMouseEnter,
      layerMouseLeave: layerMouseLeave,
      selectLayer: selectLayer,
      zoomIn: zoomIn,
      zoomOut: zoomOut,

      zoomSize: zoomSize,
      unitSize: unitSize,
      isNumber: isNumber,
      round: round
    }

    activate();

    function activate() {
      vm.selectedArtBoard.obj = vm.project.artboards[0];
      vm.project.configs = getConfigs(
        vm.project.scale, vm.project.unit, vm.project.colorFormat, vm.selectedArtBoard.obj.height
      );
    }

    function getConfigs(scale, unit, colorFormat, height) {
      return {
        scale: scale,
        unit: unit,
        colorFormat: colorFormat,
        zoom: getZoomPercentage(height)
      };
    }

    function getZoomPercentage(height) {
      var proportion = $(document).height() / height;
      if (proportion >= .8) {
          return 1;
      } else if (proportion >= .7) {
          return 0.75;
      } else {
          return 0.5;
      }
    }

    function zoomSize(size) {
      return (size * vm.project.configs.zoom);
    }

    function unitSize(length, isText){
      var length = Math.round( length / vm.project.configs.scale * 10 ) / 10,
        units = vm.project.configs.unit.split("/"),
        unit = units[0];

      if( units.length > 1 && isText){
        unit = units[1];
      }

      return length + unit;
    }

    function isNumber(input) {
      return angular.isNumber(input);
    }

    function round(input) {
      return Math.round(input);
    }

    function getBoardScreenStyle() {
      if (!vm.selectedArtBoard.obj) return;
      return {
        'width': zoomSize(vm.selectedArtBoard.obj.width),
        'height': zoomSize(vm.selectedArtBoard.obj.height),
        'background': '#FFF url(' +
        (vm.selectedArtBoard.obj.imageBase64 || vm.selectedArtBoard.obj.imagePath) +
        ') no-repeat',
        'backgroundSize': zoomSize(vm.selectedArtBoard.obj.width) + 'px ' + zoomSize(vm.selectedArtBoard.obj.height) + 'px',
      };
    }

    function getBoardParentScreenStyle() {
      if (!vm.selectedArtBoard.obj) return;
      return {
        'width': zoomSize(vm.selectedArtBoard.obj.width),
        'height': zoomSize(vm.selectedArtBoard.obj.height)
      };
    }

    function getLayerStyle(layer) {
      return {
        'left': zoomSize(layer.rect.x) + 'px',
        'top': zoomSize(layer.rect.y) + 'px',
        'width': zoomSize(layer.rect.width) + 'px',
        'height': zoomSize(layer.rect.height) + 'px'
      }
    }

    function layerMouseEnter(layer) {
      if (!layer.selected) {
        layer.hover = true;
        setRuler(layer);
        vm.selectedArtBoard.ruler.isHidden = false;
      }
    }

    function layerMouseLeave(layer) {
      layer.hover = false;
      vm.selectedArtBoard.ruler.isHidden = true;
    }

    function selectLayer(layer) {
      _.each(vm.selectedArtBoard.obj.layers, function (layer) {
        layer.selected = false;
      });
      layer.selected = true;
      layer.hover = false;
      vm.selectedArtBoard.ruler.isHidden = true;
      vm.selectedArtBoard.selectedLayer = layer;
    }

    function setRuler(layer) {
      var ruler = vm.selectedArtBoard.ruler;
      ruler.vertical.width = zoomSize(layer.rect.width);
      ruler.vertical.left = zoomSize(layer.rect.x);
      ruler.horizontal.height = zoomSize(layer.rect.height);
      ruler.horizontal.top = zoomSize(layer.rect.y);
    }

    function getVRulersStyle(layer) {
      return {
        'width': vm.selectedArtBoard.ruler.vertical.width + 'px',
        'left': vm.selectedArtBoard.ruler.vertical.left + 'px'
      }
    }

    function getHRulersStyle(layer) {
      return {
        'height': vm.selectedArtBoard.ruler.horizontal.height + 'px',
        'top': vm.selectedArtBoard.ruler.horizontal.top + 'px'
      }
    }

    function zoomIn() {
      vm.project.configs.zoom -= .25;
    }

    function zoomOut() {
      vm.project.configs.zoom += .25;
    }

    function selectArtBoard(artBoard) {
      vm.selectedArtBoard.obj = artBoard;
    }


  }
})();
