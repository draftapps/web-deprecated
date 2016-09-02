(function () {
  angular
    .module('app')
    .controller('DasboardCtrl', DasboardCtrl);

  function DasboardCtrl($scope) {
    var vm = this;

    vm.project = {
      "scale":"1",
      "unit":"px",
      "colorFormat":"color-hex",
      "artboards":[
        {
          "layers":[
            {
              "objectID":"8B7D1754-6643-407A-96C4-80005C5DB411",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":136,
                "width":360,
                "height":72
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"61784425-37D5-4FB4-877D-A7D4C4B04E8C",
              "type":"text",
              "name":"Product Meeting #45",
              "rect":{
                "x":72,
                "y":148,
                "width":150,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Product Meeting #45",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.87,
                "color-hex":"#000000 87%",
                "argb-hex":"#DE000000",
                "css-rgba":"rgba(0,0,0,0.87)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
              },
              "fontSize":16,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":24,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 16px;",
                "color: rgba(0,0,0,0.87);",
                "line-height: 24px;"
              ]
            },
            {
              "objectID":"67F71180-6108-4AD5-BF0F-35A3E4429D50",
              "type":"text",
              "name":"23:04",
              "rect":{
                "x":72,
                "y":171,
                "width":35,
                "height":20
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"23:04",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.5400000215,
                "color-hex":"#000000 54%",
                "argb-hex":"#8A000000",
                "css-rgba":"rgba(0,0,0,0.54)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.54)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":20,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.54);",
                "line-height: 20px;"
              ]
            },
            {
              "objectID":"8CF8B904-8BD4-4C95-B187-ED1FCA42B3D4",
              "type":"shape",
              "name":"divider",
              "rect":{
                "x":72,
                "y":207,
                "width":288,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"0664AAF9-EBE0-4F8B-8E15-06510FD576F7",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":16,
                "y":155,
                "width":40,
                "height":40,
                "maxX":56,
                "maxY":195
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"2493F79B-248B-442E-8767-2AB9982215D3",
              "type":"shape",
              "name":"Triangle 1",
              "rect":{
                "x":31,
                "y":169,
                "width":13,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":253,
                    "g":253,
                    "b":253,
                    "a":1,
                    "color-hex":"#FDFDFD 100%",
                    "argb-hex":"#FFFDFDFD",
                    "css-rgba":"rgba(253,253,253,1)",
                    "ui-color":"(r:0.99 g:0.99 b:0.99 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FDFDFD;"
              ]
            },
            {
              "objectID":"39F9BA63-7E28-44C8-9FC9-69D5889FED15",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":332,
                "y":160,
                "width":12,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"D6DA7F6A-4DEA-4CCD-B623-94D66A30B2B0",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":336,
                "y":164,
                "width":4,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.8700000047683716,
                    "color-hex":"#000000 87%",
                    "argb-hex":"#DE000000",
                    "css-rgba":"rgba(0,0,0,0.87)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"Material/Icon dark",
              "css":[
                "background: rgba(0,0,0,0.87);"
              ]
            },
            {
              "objectID":"596350FA-6C4E-48FC-9381-2B5C0C7AF166",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":208,
                "width":360,
                "height":72
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"63793FDE-8BD4-4A2A-9C2D-1F94B862BA3B",
              "type":"text",
              "name":"Product Meeting #45",
              "rect":{
                "x":72,
                "y":220,
                "width":150,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Product Meeting #45",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.87,
                "color-hex":"#000000 87%",
                "argb-hex":"#DE000000",
                "css-rgba":"rgba(0,0,0,0.87)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
              },
              "fontSize":16,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":24,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 16px;",
                "color: rgba(0,0,0,0.87);",
                "line-height: 24px;"
              ]
            },
            {
              "objectID":"F1CA47E8-F190-431C-8230-7D1B16B45768",
              "type":"text",
              "name":"23:04",
              "rect":{
                "x":72,
                "y":243,
                "width":35,
                "height":20
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"23:04",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.5400000215,
                "color-hex":"#000000 54%",
                "argb-hex":"#8A000000",
                "css-rgba":"rgba(0,0,0,0.54)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.54)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":20,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.54);",
                "line-height: 20px;"
              ]
            },
            {
              "objectID":"1372A3E3-90AE-4634-83EB-3F4FFAB5CB77",
              "type":"shape",
              "name":"divider",
              "rect":{
                "x":72,
                "y":279,
                "width":288,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"A9C62E8D-1462-486D-939A-C4ADEAAE29F0",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":16,
                "y":227,
                "width":40,
                "height":40,
                "maxX":56,
                "maxY":267
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"61E3E8C4-4A3A-4CF1-9227-40E3EA630BAE",
              "type":"shape",
              "name":"Triangle 1",
              "rect":{
                "x":31,
                "y":241,
                "width":13,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":253,
                    "g":253,
                    "b":253,
                    "a":1,
                    "color-hex":"#FDFDFD 100%",
                    "argb-hex":"#FFFDFDFD",
                    "css-rgba":"rgba(253,253,253,1)",
                    "ui-color":"(r:0.99 g:0.99 b:0.99 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FDFDFD;"
              ]
            },
            {
              "objectID":"10B6547E-4447-44BB-9280-6ABFB3240C6B",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":332,
                "y":232,
                "width":12,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"757A709A-E531-4BE2-B961-01143ADC0245",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":336,
                "y":236,
                "width":4,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.8700000047683716,
                    "color-hex":"#000000 87%",
                    "argb-hex":"#DE000000",
                    "css-rgba":"rgba(0,0,0,0.87)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"Material/Icon dark",
              "css":[
                "background: rgba(0,0,0,0.87);"
              ]
            },
            {
              "objectID":"64C008E8-6BF4-4E4B-A44C-75B2D14FA7E7",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":336,
                "width":360,
                "height":72
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"FBADF9B2-CF91-4FE2-B0AC-7E2BB237A4B8",
              "type":"text",
              "name":"23:04",
              "rect":{
                "x":72,
                "y":371,
                "width":35,
                "height":20
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"23:04",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.5400000215,
                "color-hex":"#000000 54%",
                "argb-hex":"#8A000000",
                "css-rgba":"rgba(0,0,0,0.54)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.54)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":20,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.54);",
                "line-height: 20px;"
              ]
            },
            {
              "objectID":"7EFDEFC7-61B7-42D9-B6A7-35B5478B7755",
              "type":"shape",
              "name":"divider",
              "rect":{
                "x":72,
                "y":407,
                "width":288,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"01318B0B-F210-4DB7-8C5E-729063361B9F",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":16,
                "y":355,
                "width":40,
                "height":40,
                "maxX":56,
                "maxY":395
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"C5322CCF-D63D-4C76-B029-6AA861483839",
              "type":"shape",
              "name":"Triangle 1",
              "rect":{
                "x":31,
                "y":369,
                "width":13,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":253,
                    "g":253,
                    "b":253,
                    "a":1,
                    "color-hex":"#FDFDFD 100%",
                    "argb-hex":"#FFFDFDFD",
                    "css-rgba":"rgba(253,253,253,1)",
                    "ui-color":"(r:0.99 g:0.99 b:0.99 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FDFDFD;"
              ]
            },
            {
              "objectID":"2777273C-7F47-44AF-BE01-1B5BF4FDC378",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":332,
                "y":360,
                "width":12,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"572D94A4-01BF-4204-9945-1E4C922D1EC7",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":336,
                "y":364,
                "width":4,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.8700000047683716,
                    "color-hex":"#000000 87%",
                    "argb-hex":"#DE000000",
                    "css-rgba":"rgba(0,0,0,0.87)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"Material/Icon dark",
              "css":[
                "background: rgba(0,0,0,0.87);"
              ]
            },
            {
              "objectID":"B794E868-17AC-459D-A705-E9291BF3EC60",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":408,
                "width":360,
                "height":72
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"35018F03-0B22-4645-ACD9-81F51673400C",
              "type":"text",
              "name":"Product Meeting #45",
              "rect":{
                "x":72,
                "y":420,
                "width":150,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Product Meeting #45",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.87,
                "color-hex":"#000000 87%",
                "argb-hex":"#DE000000",
                "css-rgba":"rgba(0,0,0,0.87)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
              },
              "fontSize":16,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":24,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 16px;",
                "color: rgba(0,0,0,0.87);",
                "line-height: 24px;"
              ]
            },
            {
              "objectID":"A6E0DBD7-4CF6-446E-BCE3-FD1718181359",
              "type":"text",
              "name":"23:04",
              "rect":{
                "x":72,
                "y":443,
                "width":35,
                "height":20
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"23:04",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.5400000215,
                "color-hex":"#000000 54%",
                "argb-hex":"#8A000000",
                "css-rgba":"rgba(0,0,0,0.54)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.54)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":20,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.54);",
                "line-height: 20px;"
              ]
            },
            {
              "objectID":"95C463A6-9413-4269-AADB-4C7E8CE473FF",
              "type":"shape",
              "name":"divider",
              "rect":{
                "x":72,
                "y":479,
                "width":288,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"A73A86A8-9507-4509-9EC9-18F7ECA9157A",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":16,
                "y":427,
                "width":40,
                "height":40,
                "maxX":56,
                "maxY":467
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"CC75C428-0B95-461E-9A27-1518A32168D2",
              "type":"shape",
              "name":"Triangle 1",
              "rect":{
                "x":31,
                "y":441,
                "width":13,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":253,
                    "g":253,
                    "b":253,
                    "a":1,
                    "color-hex":"#FDFDFD 100%",
                    "argb-hex":"#FFFDFDFD",
                    "css-rgba":"rgba(253,253,253,1)",
                    "ui-color":"(r:0.99 g:0.99 b:0.99 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FDFDFD;"
              ]
            },
            {
              "objectID":"950752CE-B7CF-4D7B-8F82-F248EB6B6015",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":332,
                "y":432,
                "width":12,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"60B85030-4E07-46D8-844D-6FBACD629DC9",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":336,
                "y":436,
                "width":4,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.8700000047683716,
                    "color-hex":"#000000 87%",
                    "argb-hex":"#DE000000",
                    "css-rgba":"rgba(0,0,0,0.87)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"Material/Icon dark",
              "css":[
                "background: rgba(0,0,0,0.87);"
              ]
            },
            {
              "objectID":"66F7B7FA-36B1-4919-BE93-756B41C4349A",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":480,
                "width":360,
                "height":72
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"E7EE97A8-9B0A-4DF1-8EB2-4831C07D906B",
              "type":"text",
              "name":"Product Meeting #45",
              "rect":{
                "x":72,
                "y":492,
                "width":150,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Product Meeting #45",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.87,
                "color-hex":"#000000 87%",
                "argb-hex":"#DE000000",
                "css-rgba":"rgba(0,0,0,0.87)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
              },
              "fontSize":16,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":24,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 16px;",
                "color: rgba(0,0,0,0.87);",
                "line-height: 24px;"
              ]
            },
            {
              "objectID":"6B0191B6-F28F-4B1D-AF45-C32C7B400505",
              "type":"text",
              "name":"23:04",
              "rect":{
                "x":72,
                "y":515,
                "width":35,
                "height":20
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"23:04",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.5400000215,
                "color-hex":"#000000 54%",
                "argb-hex":"#8A000000",
                "css-rgba":"rgba(0,0,0,0.54)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.54)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":20,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.54);",
                "line-height: 20px;"
              ]
            },
            {
              "objectID":"161B3733-6DF4-44D9-8F05-FEBE91046774",
              "type":"shape",
              "name":"divider",
              "rect":{
                "x":72,
                "y":551,
                "width":288,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"A0657C5A-80E3-486F-B912-4BF6F8D3ACD4",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":16,
                "y":499,
                "width":40,
                "height":40,
                "maxX":56,
                "maxY":539
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"82B9FF6B-7661-44F8-B4D7-6D57CF597CA8",
              "type":"shape",
              "name":"Rectangle 34",
              "rect":{
                "x":31,
                "y":513,
                "width":11,
                "height":13
              },
              "rotation":0,
              "radius":1,
              "borders":[

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
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FFFFFF;",
                "border-radius: 1px;"
              ]
            },
            {
              "objectID":"27C59465-F809-42A6-9B9D-8FD0EBF4C091",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":332,
                "y":504,
                "width":12,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"8442FB31-B152-48B0-BC24-688CD3403C9D",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":336,
                "y":508,
                "width":4,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.8700000047683716,
                    "color-hex":"#000000 87%",
                    "argb-hex":"#DE000000",
                    "css-rgba":"rgba(0,0,0,0.87)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.87)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"Material/Icon dark",
              "css":[
                "background: rgba(0,0,0,0.87);"
              ]
            },
            {
              "objectID":"83B3C645-6293-4A93-BE17-9E31554F01B7",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":80,
                "width":360,
                "height":48
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"CF07D52B-5AFE-4C69-9A08-C4D52472BAA7",
              "type":"text",
              "name":"Today",
              "rect":{
                "x":16,
                "y":99,
                "width":38,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Today",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.2599999905,
                "color-hex":"#000000 26%",
                "argb-hex":"#42000000",
                "css-rgba":"rgba(0,0,0,0.26)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"1087B8A8-7359-4748-8D18-075ECB82DE6D",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":0,
                "y":288,
                "width":360,
                "height":48
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"91EF999A-E092-407A-AB60-795C0A5A513F",
              "type":"text",
              "name":"28  December",
              "rect":{
                "x":16,
                "y":307,
                "width":87,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"28  December",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":0.2599999905,
                "color-hex":"#000000 26%",
                "argb-hex":"#42000000",
                "css-rgba":"rgba(0,0,0,0.26)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
              },
              "fontSize":14,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 14px;",
                "color: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"650AC6C6-728F-40F5-A383-A6B698F83BC1",
              "type":"shape",
              "name":"Rectangle 30",
              "rect":{
                "x":0,
                "y":544,
                "width":360,
                "height":48
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":250,
                    "g":250,
                    "b":250,
                    "a":1,
                    "color-hex":"#FAFAFA 100%",
                    "argb-hex":"#FFFAFAFA",
                    "css-rgba":"rgba(250,250,250,1)",
                    "ui-color":"(r:0.98 g:0.98 b:0.98 a:1.00)"
                  }
                }
              ],
              "shadows":[
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":2,
                  "blurRadius":5,
                  "spread":0,
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
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FAFAFA;",
                "box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.50);"
              ]
            },
            {
              "objectID":"CDC06937-EEBD-46AA-AF47-1958E66AB036",
              "type":"shape",
              "name":"Rectangle 32",
              "rect":{
                "x":48,
                "y":556,
                "width":24,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"F77EEFD9-1BD0-4D53-83D0-A505F4756757",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":50,
                "y":558,
                "width":20,
                "height":20
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"39A7F014-5F37-4C57-A70C-E2121693AF0A",
              "type":"shape",
              "name":"Rectangle 34",
              "rect":{
                "x":288,
                "y":556,
                "width":24,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"772DB7FB-A27A-4130-A2CD-4083FBDCAA48",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":292,
                "y":556,
                "width":16,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);"
              ]
            },
            {
              "objectID":"1A5056D0-BF9A-42F9-A294-FBA2B7D92681",
              "type":"shape",
              "name":"divider 2",
              "rect":{
                "x":0,
                "y":544,
                "width":360,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"16B24072-9526-4427-BC94-59F162E8E6EC",
              "type":"shape",
              "name":"button bg",
              "rect":{
                "x":152,
                "y":516,
                "width":56,
                "height":56
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":234,
                    "g":79,
                    "b":63,
                    "a":1,
                    "color-hex":"#EA4F3F 100%",
                    "argb-hex":"#FFEA4F3F",
                    "css-rgba":"rgba(234,79,63,1)",
                    "ui-color":"(r:0.92 g:0.31 b:0.25 a:1.00)"
                  }
                }
              ],
              "shadows":[
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":0,
                  "blurRadius":4,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.24,
                    "color-hex":"#000000 24%",
                    "argb-hex":"#3D000000",
                    "css-rgba":"rgba(0,0,0,0.24)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.24)"
                  }
                },
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":0,
                  "blurRadius":6,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #EA4F3F;",
                "box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.12), 0px 0px 4px 0px rgba(0,0,0,0.24);"
              ]
            },
            {
              "objectID":"D1D85C89-74E9-492C-B4F9-C1AE02EB9AC5",
              "type":"shape",
              "name":"Shape 2",
              "rect":{
                "x":168,
                "y":532,
                "width":24,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"EE6801C2-D9CC-49C9-B589-A8D765A02B03",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":173,
                "y":535,
                "width":14,
                "height":19
              },
              "rotation":0,
              "radius":0,
              "borders":[

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
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FFFFFF;"
              ]
            },
            {
              "objectID":"086E2152-8A2E-425D-B972-F4740A7D2A5D",
              "type":"slice",
              "name":"fab",
              "rect":{
                "x":146,
                "y":510,
                "width":68,
                "height":68
              },
              "css":[
                "opacity: 0;"
              ],
              "exportable":[
                {
                  "name":"fab",
                  "density":"",
                  "format":"png",
                  "path":"fab.png"
                }
              ]
            },
            {
              "objectID":"7DCECB8C-DFCC-433B-9155-39E807B1E3AE",
              "type":"shape",
              "name":"app bar bg",
              "rect":{
                "x":0,
                "y":24,
                "width":360,
                "height":56
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":234,
                    "g":79,
                    "b":63,
                    "a":1,
                    "color-hex":"#EA4F3F 100%",
                    "argb-hex":"#FFEA4F3F",
                    "css-rgba":"rgba(234,79,63,1)",
                    "ui-color":"(r:0.92 g:0.31 b:0.25 a:1.00)"
                  }
                }
              ],
              "shadows":[
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":2,
                  "blurRadius":4,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.24,
                    "color-hex":"#000000 24%",
                    "argb-hex":"#3D000000",
                    "css-rgba":"rgba(0,0,0,0.24)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.24)"
                  }
                },
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":0,
                  "blurRadius":4,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #EA4F3F;",
                "box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.12), 0px 2px 4px 0px rgba(0,0,0,0.24);"
              ]
            },
            {
              "objectID":"3B965069-EC92-4FAB-BB7D-9872805D7DD3",
              "type":"text",
              "name":"Recordings",
              "rect":{
                "x":16,
                "y":40,
                "width":102,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Recordings",
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
              "fontSize":20,
              "fontFace":".SFNSDisplay-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSDisplay-Regular;",
                "font-size: 20px;",
                "color: #FFFFFF;"
              ]
            },
            {
              "objectID":"4F7990A2-1782-4BB0-B59C-82565544BCB7",
              "type":"symbol",
              "name":"navbar",
              "rect":{
                "x":0,
                "y":592,
                "width":360,
                "height":48
              }
            },
            {
              "objectID":"62F5BBE2-DCD2-4DB2-931E-7A14E86D2218",
              "type":"shape",
              "name":"bg_navbar",
              "rect":{
                "x":0,
                "y":592,
                "width":360,
                "height":48
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":1,
                    "color-hex":"#000000 100%",
                    "argb-hex":"#FF000000",
                    "css-rgba":"rgba(0,0,0,1)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #000000;"
              ]
            },
            {
              "objectID":"A80C1003-AD50-41F8-83A4-019B8D390FC8",
              "type":"shape",
              "name":"recent",
              "rect":{
                "x":273,
                "y":608,
                "width":16,
                "height":16
              },
              "rotation":0,
              "radius":2,
              "borders":[
                {
                  "fillType":"color",
                  "position":"inside",
                  "thickness":2,
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

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "border: 2px solid #FFFFFF;",
                "border-radius: 2px;"
              ]
            },
            {
              "objectID":"86CA2865-7CAC-4F6C-B806-65973C1A97A8",
              "type":"shape",
              "name":"home",
              "rect":{
                "x":172,
                "y":608,
                "width":16,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[
                {
                  "fillType":"color",
                  "position":"inside",
                  "thickness":2,
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

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "border: 2px solid #FFFFFF;"
              ]
            },
            {
              "objectID":"5526CE7F-5C36-4D43-B836-4FDA22039F9F",
              "type":"shape",
              "name":"back",
              "rect":{
                "x":72,
                "y":607,
                "width":15,
                "height":17
              },
              "rotation":0,
              "radius":0,
              "borders":[
                {
                  "fillType":"color",
                  "position":"inside",
                  "thickness":2,
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

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "border: 2px solid #FFFFFF;"
              ]
            },
            {
              "objectID":"56D2677D-DAF9-481D-9B25-3D50D89FC25A",
              "type":"symbol",
              "name":"status bar",
              "rect":{
                "x":0,
                "y":0,
                "width":360,
                "height":24
              }
            },
            {
              "objectID":"E286CB8F-06B8-42C3-B7D6-181ED9FF81F3",
              "type":"shape",
              "name":"Rectangle 67",
              "rect":{
                "x":0,
                "y":0,
                "width":360,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":188,
                    "g":33,
                    "b":16,
                    "a":1,
                    "color-hex":"#BC2110 100%",
                    "argb-hex":"#FFBC2110",
                    "css-rgba":"rgba(188,33,16,1)",
                    "ui-color":"(r:0.74 g:0.13 b:0.06 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #BC2110;"
              ]
            },
            {
              "objectID":"F67F8065-B856-4892-99E3-F031294FABEC",
              "type":"shape",
              "name":"wifi mask",
              "rect":{
                "x":250,
                "y":6,
                "width":16,
                "height":12,
                "maxX":266,
                "maxY":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"62C66D83-0640-4149-AD4A-07741B9E5DFD",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":250,
                "y":6,
                "width":16,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"C59A630A-F670-4DFB-8557-0A427A9DF1E0",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":250,
                "y":9,
                "width":16,
                "height":9
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"EC38DB15-1CAB-4F84-839D-19436430A9D9",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":252,
                "y":12,
                "width":12,
                "height":6
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"3483CE93-0CF2-47C3-BB0B-FB6698871900",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":255,
                "y":15,
                "width":6,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"6073C90B-0824-4932-9D65-ED5D462895F9",
              "type":"shape",
              "name":"reception mask",
              "rect":{
                "x":276,
                "y":6,
                "width":12,
                "height":12,
                "maxX":288,
                "maxY":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"EBD378B6-D685-478F-9BDD-9B8D92D6CDB9",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":285,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"5DBE6B81-B0BB-494F-9BF6-5323A8A11976",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":282,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"1D9476B8-AAD6-4D96-92A8-A4A00DAE1F51",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":279,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"1FA165DA-44A6-4DE1-A2E6-9E475E1E518B",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":276,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"5C5572FA-6527-4786-A5D3-73E967C9F721",
              "type":"shape",
              "name":"battery mask",
              "rect":{
                "x":302,
                "y":5,
                "width":8,
                "height":13,
                "maxX":310,
                "maxY":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"1878EDA5-BA53-498C-ABCF-9BA7FB331B49",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":15,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"3F087F07-13DC-41D9-83A3-7D5067DE1FD0",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":12,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"901E97A4-4E72-45E2-BAE9-6F8C7608599F",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":9,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"8DB2D831-19A3-4CF6-88E2-262343794679",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":6,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"0A439EDC-E90F-4ADE-95EE-D57F8AB5D858",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":304,
                "y":5,
                "width":4,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"90DDA152-9491-4954-AE5D-2600C2744031",
              "type":"text",
              "name":"12:30",
              "rect":{
                "x":319,
                "y":5,
                "width":33,
                "height":15
              },
              "rotation":0,
              "radius":0,
              "borders":[

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
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"12:30",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":1,
                "color-hex":"#000000 100%",
                "argb-hex":"#FF000000",
                "css-rgba":"rgba(0,0,0,1)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:1.00)"
              },
              "fontSize":13,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 13px;",
                "color: #000000;"
              ]
            },
            {
              "objectID":"2FC1A8C7-8505-4FD0-87F4-2EF01101EA27",
              "type":"slice",
              "name":"Cell5",
              "rect":{
                "x":16,
                "y":499,
                "width":344,
                "height":53
              },
              "css":[
                "opacity: 0;"
              ],
              "exportable":[
                {
                  "name":"Cell5",
                  "density":"@1x",
                  "format":"png",
                  "path":"Cell5.png"
                }
              ]
            }
          ],
          "notes":[
            {
              "rect":{
                "x":72,
                "y":348,
                "width":113,
                "height":14
              },
              "note":"Product Meeting #45"
            }
          ],
          "pageName":"Page 1",
          "pageObjectID":"69B62C82-F584-42EA-AA3E-3A4139E60D3A",
          "name":"Home",
          "objectID":"8AB6391A-7522-4F55-99FA-20C8981F5C1A",
          "width":360,
          "height":640,
          "imagePath":"preview/page-1-home.png"
        },
        {
          "layers":[
            {
              "objectID":"DD5399D3-9EE5-42D3-8917-292B47E26C1A",
              "type":"shape",
              "name":"Rectangle 33",
              "rect":{
                "x":51,
                "y":556,
                "width":24,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"85DEBCDE-ED2A-4CE2-A32C-E44352F64103",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":56,
                "y":559,
                "width":14,
                "height":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":250,
                    "g":250,
                    "b":250,
                    "a":1,
                    "color-hex":"#FAFAFA 100%",
                    "argb-hex":"#FFFAFAFA",
                    "css-rgba":"rgba(250,250,250,1)",
                    "ui-color":"(r:0.98 g:0.98 b:0.98 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FAFAFA;"
              ]
            },
            {
              "objectID":"4571CC83-CB1D-4AF0-AABD-3E4376F83718",
              "type":"shape",
              "name":"bounds",
              "rect":{
                "x":285,
                "y":551,
                "width":24,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"61CC39A8-81CF-48B5-A642-A1423A8B6AAC",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":288,
                "y":557,
                "width":18,
                "height":13
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":250,
                    "g":250,
                    "b":250,
                    "a":1,
                    "color-hex":"#FAFAFA 100%",
                    "argb-hex":"#FFFAFAFA",
                    "css-rgba":"rgba(250,250,250,1)",
                    "ui-color":"(r:0.98 g:0.98 b:0.98 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FAFAFA;"
              ]
            },
            {
              "objectID":"2889F675-63FE-4083-8CC8-02F421B80BDE",
              "type":"shape",
              "name":"button bg",
              "rect":{
                "x":152,
                "y":516,
                "width":56,
                "height":56
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":250,
                    "g":250,
                    "b":250,
                    "a":1,
                    "color-hex":"#FAFAFA 100%",
                    "argb-hex":"#FFFAFAFA",
                    "css-rgba":"rgba(250,250,250,1)",
                    "ui-color":"(r:0.98 g:0.98 b:0.98 a:1.00)"
                  }
                }
              ],
              "shadows":[
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":0,
                  "blurRadius":4,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.24,
                    "color-hex":"#000000 24%",
                    "argb-hex":"#3D000000",
                    "css-rgba":"rgba(0,0,0,0.24)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.24)"
                  }
                },
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":0,
                  "blurRadius":6,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.12,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FAFAFA;",
                "box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.12), 0px 0px 4px 0px rgba(0,0,0,0.24);"
              ]
            },
            {
              "objectID":"96DEF15D-02AE-4C49-8ADB-8EE3CDB4A77D",
              "type":"shape",
              "name":"Shape 2",
              "rect":{
                "x":168,
                "y":532,
                "width":24,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"5685C86C-56C2-4312-B4A4-3AE4F6DBC698",
              "type":"shape",
              "name":"Rectangle 36",
              "rect":{
                "x":175,
                "y":537,
                "width":11,
                "height":15
              },
              "rotation":0,
              "radius":1,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.25999999046325684,
                    "color-hex":"#000000 26%",
                    "argb-hex":"#42000000",
                    "css-rgba":"rgba(0,0,0,0.26)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.26)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(0,0,0,0.26);",
                "border-radius: 1px;"
              ]
            },
            {
              "objectID":"F4527512-64E0-4ABF-BD93-019C8E22D638",
              "type":"text",
              "name":"Recording Time",
              "rect":{
                "x":110,
                "y":213,
                "width":140,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"Recording Time",
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
              "fontSize":20,
              "fontFace":".SFNSDisplay-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSDisplay-Regular;",
                "font-size: 20px;",
                "color: #FFFFFF;"
              ]
            },
            {
              "objectID":"B81F73D2-3724-48CA-8D05-42B440B9ED0C",
              "type":"text",
              "name":"00:00:00",
              "rect":{
                "x":52,
                "y":247,
                "width":257,
                "height":71
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"00:00:00",
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
              "fontSize":70,
              "fontFace":".SFNSDisplay-Regular",
              "textAlign":"center",
              "letterSpacing":-1.1436620950698853,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSDisplay-Regular;",
                "font-size: 70px;",
                "color: #FFFFFF;",
                "letter-spacing: -1.15px;"
              ]
            },
            {
              "objectID":"4F7990A2-1782-4BB0-B59C-82565544BCB7",
              "type":"symbol",
              "name":"navbar",
              "rect":{
                "x":0,
                "y":592,
                "width":360,
                "height":48
              }
            },
            {
              "objectID":"62F5BBE2-DCD2-4DB2-931E-7A14E86D2218",
              "type":"shape",
              "name":"bg_navbar",
              "rect":{
                "x":0,
                "y":592,
                "width":360,
                "height":48
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":1,
                    "color-hex":"#000000 100%",
                    "argb-hex":"#FF000000",
                    "css-rgba":"rgba(0,0,0,1)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #000000;"
              ]
            },
            {
              "objectID":"A80C1003-AD50-41F8-83A4-019B8D390FC8",
              "type":"shape",
              "name":"recent",
              "rect":{
                "x":273,
                "y":608,
                "width":16,
                "height":16
              },
              "rotation":0,
              "radius":2,
              "borders":[
                {
                  "fillType":"color",
                  "position":"inside",
                  "thickness":2,
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

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "border: 2px solid #FFFFFF;",
                "border-radius: 2px;"
              ]
            },
            {
              "objectID":"86CA2865-7CAC-4F6C-B806-65973C1A97A8",
              "type":"shape",
              "name":"home",
              "rect":{
                "x":172,
                "y":608,
                "width":16,
                "height":16
              },
              "rotation":0,
              "radius":0,
              "borders":[
                {
                  "fillType":"color",
                  "position":"inside",
                  "thickness":2,
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

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "border: 2px solid #FFFFFF;"
              ]
            },
            {
              "objectID":"5526CE7F-5C36-4D43-B836-4FDA22039F9F",
              "type":"shape",
              "name":"back",
              "rect":{
                "x":72,
                "y":607,
                "width":15,
                "height":17
              },
              "rotation":0,
              "radius":0,
              "borders":[
                {
                  "fillType":"color",
                  "position":"inside",
                  "thickness":2,
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

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "border: 2px solid #FFFFFF;"
              ]
            },
            {
              "objectID":"56D2677D-DAF9-481D-9B25-3D50D89FC25A",
              "type":"symbol",
              "name":"status bar",
              "rect":{
                "x":0,
                "y":0,
                "width":360,
                "height":24
              }
            },
            {
              "objectID":"E286CB8F-06B8-42C3-B7D6-181ED9FF81F3",
              "type":"shape",
              "name":"Rectangle 67",
              "rect":{
                "x":0,
                "y":0,
                "width":360,
                "height":24
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":188,
                    "g":33,
                    "b":16,
                    "a":1,
                    "color-hex":"#BC2110 100%",
                    "argb-hex":"#FFBC2110",
                    "css-rgba":"rgba(188,33,16,1)",
                    "ui-color":"(r:0.74 g:0.13 b:0.06 a:1.00)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #BC2110;"
              ]
            },
            {
              "objectID":"F67F8065-B856-4892-99E3-F031294FABEC",
              "type":"shape",
              "name":"wifi mask",
              "rect":{
                "x":250,
                "y":6,
                "width":16,
                "height":12,
                "maxX":266,
                "maxY":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"62C66D83-0640-4149-AD4A-07741B9E5DFD",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":250,
                "y":6,
                "width":16,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"C59A630A-F670-4DFB-8557-0A427A9DF1E0",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":250,
                "y":9,
                "width":16,
                "height":9
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"EC38DB15-1CAB-4F84-839D-19436430A9D9",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":252,
                "y":12,
                "width":12,
                "height":6
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"3483CE93-0CF2-47C3-BB0B-FB6698871900",
              "type":"shape",
              "name":"Oval",
              "rect":{
                "x":255,
                "y":15,
                "width":6,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"6073C90B-0824-4932-9D65-ED5D462895F9",
              "type":"shape",
              "name":"reception mask",
              "rect":{
                "x":276,
                "y":6,
                "width":12,
                "height":12,
                "maxX":288,
                "maxY":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"EBD378B6-D685-478F-9BDD-9B8D92D6CDB9",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":285,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"5DBE6B81-B0BB-494F-9BF6-5323A8A11976",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":282,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"1D9476B8-AAD6-4D96-92A8-A4A00DAE1F51",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":279,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"1FA165DA-44A6-4DE1-A2E6-9E475E1E518B",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":276,
                "y":6,
                "width":3,
                "height":12
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"5C5572FA-6527-4786-A5D3-73E967C9F721",
              "type":"shape",
              "name":"battery mask",
              "rect":{
                "x":302,
                "y":5,
                "width":8,
                "height":13,
                "maxX":310,
                "maxY":18
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"1878EDA5-BA53-498C-ABCF-9BA7FB331B49",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":15,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"3F087F07-13DC-41D9-83A3-7D5067DE1FD0",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":12,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.9,
                    "color-hex":"#FFFFFF 90%",
                    "argb-hex":"#E6FFFFFF",
                    "css-rgba":"rgba(255,255,255,0.9)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.90)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.90);"
              ]
            },
            {
              "objectID":"901E97A4-4E72-45E2-BAE9-6F8C7608599F",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":9,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"8DB2D831-19A3-4CF6-88E2-262343794679",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":302,
                "y":6,
                "width":8,
                "height":3
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"0A439EDC-E90F-4ADE-95EE-D57F8AB5D858",
              "type":"shape",
              "name":"Rectangle-path",
              "rect":{
                "x":304,
                "y":5,
                "width":4,
                "height":1
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":255,
                    "g":255,
                    "b":255,
                    "a":0.3,
                    "color-hex":"#FFFFFF 30%",
                    "argb-hex":"#4DFFFFFF",
                    "css-rgba":"rgba(255,255,255,0.3)",
                    "ui-color":"(r:1.00 g:1.00 b:1.00 a:0.30)"
                  }
                }
              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: rgba(255,255,255,0.30);"
              ]
            },
            {
              "objectID":"90DDA152-9491-4954-AE5D-2600C2744031",
              "type":"text",
              "name":"12:30",
              "rect":{
                "x":319,
                "y":5,
                "width":33,
                "height":15
              },
              "rotation":0,
              "radius":0,
              "borders":[

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
              "shadows":[

              ],
              "opacity":1,
              "styleName":"",
              "content":"12:30",
              "color":{
                "r":0,
                "g":0,
                "b":0,
                "a":1,
                "color-hex":"#000000 100%",
                "argb-hex":"#FF000000",
                "css-rgba":"rgba(0,0,0,1)",
                "ui-color":"(r:0.00 g:0.00 b:0.00 a:1.00)"
              },
              "fontSize":13,
              "fontFace":".SFNSText-Regular",
              "textAlign":"left",
              "letterSpacing":null,
              "lineHeight":0,
              "css":[
                "font-family: .SFNSText-Regular;",
                "font-size: 13px;",
                "color: #000000;"
              ]
            }
          ],
          "notes":[

          ],
          "pageName":"Page 1",
          "pageObjectID":"69B62C82-F584-42EA-AA3E-3A4139E60D3A",
          "name":"Recording",
          "objectID":"450ED0D2-7FE3-4B7B-802E-0E4E985808B0",
          "width":360,
          "height":640,
          "imagePath":"preview/page-1-recording.png"
        },
        {
          "layers":[
            {
              "objectID":"76399326-20B4-45C6-8559-B1EB96C4CF80",
              "type":"shape",
              "name":"Oval 13",
              "rect":{
                "x":48,
                "y":48,
                "width":1057,
                "height":1057
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[
                {
                  "fillType":"color",
                  "color":{
                    "r":234,
                    "g":79,
                    "b":63,
                    "a":1,
                    "color-hex":"#EA4F3F 100%",
                    "argb-hex":"#FFEA4F3F",
                    "css-rgba":"rgba(234,79,63,1)",
                    "ui-color":"(r:0.92 g:0.31 b:0.25 a:1.00)"
                  }
                },
                {
                  "fillType":"gradient",
                  "gradient":{
                    "type":"radial",
                    "from":{
                      "x":0.19962896406650543,
                      "y":0.10215379612109744
                    },
                    "to":{
                      "x":0.19962896406650543,
                      "y":1.1021537961210974
                    },
                    "colorStops":[
                      {
                        "color":{
                          "r":250,
                          "g":250,
                          "b":250,
                          "a":1,
                          "color-hex":"#FAFAFA 100%",
                          "argb-hex":"#FFFAFAFA",
                          "css-rgba":"rgba(250,250,250,1)",
                          "ui-color":"(r:0.98 g:0.98 b:0.98 a:1.00)"
                        },
                        "position":0
                      },
                      {
                        "color":{
                          "r":250,
                          "g":250,
                          "b":250,
                          "a":0,
                          "color-hex":"#FAFAFA 0%",
                          "argb-hex":"#00FAFAFA",
                          "css-rgba":"rgba(250,250,250,0)",
                          "ui-color":"(r:0.98 g:0.98 b:0.98 a:0.00)"
                        },
                        "position":1
                      }
                    ]
                  }
                }
              ],
              "shadows":[
                {
                  "type":"outer",
                  "offsetX":0,
                  "offsetY":5,
                  "blurRadius":5,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.11999999731779099,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                },
                {
                  "type":"inner",
                  "offsetX":0,
                  "offsetY":5,
                  "blurRadius":5,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.11999999731779099,
                    "color-hex":"#000000 12%",
                    "argb-hex":"#1F000000",
                    "css-rgba":"rgba(0,0,0,0.12)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.12)"
                  }
                }
              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #EA4F3F;",
                "background-image: radial-gradient(19% 110%, #FAFAFA 10%, rgba(249,249,249,0.00) 100%);",
                "box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.12), inset 0px 5px 5px 0px rgba(0,0,0,0.12);"
              ]
            },
            {
              "objectID":"2D71719D-FB5C-4A8F-88BC-948080CAFA8D",
              "type":"shape",
              "name":"Shape 2",
              "rect":{
                "x":289,
                "y":289,
                "width":578,
                "height":578
              },
              "rotation":0,
              "radius":0,
              "borders":[

              ],
              "fills":[

              ],
              "shadows":[

              ],
              "opacity":1,
              "styleName":""
            },
            {
              "objectID":"2E5A43C9-4517-4C86-88DF-DEC990A9A6A9",
              "type":"shape",
              "name":"Shape",
              "rect":{
                "x":408,
                "y":359,
                "width":337,
                "height":458
              },
              "rotation":0,
              "radius":0,
              "borders":[

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
              "shadows":[
                {
                  "type":"outer",
                  "offsetX":7,
                  "offsetY":14,
                  "blurRadius":29,
                  "spread":0,
                  "color":{
                    "r":0,
                    "g":0,
                    "b":0,
                    "a":0.21965579710144928,
                    "color-hex":"#000000 22%",
                    "argb-hex":"#38000000",
                    "css-rgba":"rgba(0,0,0,0.22)",
                    "ui-color":"(r:0.00 g:0.00 b:0.00 a:0.22)"
                  }
                }
              ],
              "opacity":1,
              "styleName":"",
              "css":[
                "background: #FFFFFF;",
                "box-shadow: 7px 14px 29px 0px rgba(0,0,0,0.22);"
              ]
            }
          ],
          "notes":[

          ],
          "pageName":"Page 1",
          "pageObjectID":"69B62C82-F584-42EA-AA3E-3A4139E60D3A",
          "name":"Icon",
          "objectID":"45EC5985-052E-44E6-83CF-45D533EF94A1",
          "width":1152,
          "height":1152,
          "imagePath":"preview/page-1-icon.png"
        }
      ],
      "slices":[
        {
          "name":"fab",
          "objectID":"086E2152-8A2E-425D-B972-F4740A7D2A5D",
          "rect":{
            "x":146,
            "y":510,
            "width":68,
            "height":68
          },
          "exportable":[
            {
              "name":"fab",
              "density":"",
              "format":"png",
              "path":"fab.png"
            }
          ]
        },
        {
          "name":"Cell5",
          "objectID":"2FC1A8C7-8505-4FD0-87F4-2EF01101EA27",
          "rect":{
            "x":16,
            "y":499,
            "width":344,
            "height":53
          },
          "exportable":[
            {
              "name":"Cell5",
              "density":"@1x",
              "format":"png",
              "path":"Cell5.png"
            }
          ]
        }
      ]
    };

    vm.project.selectArtBoard = selectArtBoard;
    vm.project.selectSlice = selectSlice;
    vm.project.sliceMouseEnter = sliceMouseEnter;
    vm.project.sliceMouseLeave = sliceMouseLeave;
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
      distance: {
        top: {
          value: 0,
          isHidden: true,
          x: 0,
          y: 0,
          h: 0
        },
        right: {
          value: 0,
          isHidden: true,
          x: 0,
          y: 0,
          w: 0
        },
        bottom: {
          value: 0,
          isHidden: true,
          x: 0,
          y: 0,
          h: 0
        },
        left: {
          value: 0,
          isHidden: true,
          x: 0,
          y: 0,
          w: 0
        }
      },
      screenStyle: getBoardScreenStyle,
      screenParentStyle: getBoardParentScreenStyle,
      layerStyle: getLayerStyle,
      vRulersStyle: getVRulersStyle,
      hRulersStyle: getHRulersStyle,
      distanceStyle: getDistanceStyle,
      notesStyle: getNotesStyle,

      screenMouseMove: screenMouseMove,
      layerMouseMove: layerMouseMove,
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

    function positive(number) {
        return number < 0 ? -number :number;
    }

    function isIntersect(selectedRect, targetRect){
        return !(
            selectedRect.maxX <= targetRect.x ||
            selectedRect.x >= targetRect.maxX ||
            selectedRect.y >= targetRect.maxY ||
            selectedRect.maxY <= targetRect.y
        );
    }

    function getRect(layer){
        return {
            x: layer.rect.x,
            y: layer.rect.y,
            width: layer.rect.width,
            height: layer.rect.height,
            maxX: layer.rect.x + layer.rect.width,
            maxY: layer.rect.y + layer.rect.height
        }
    }

    function getDistance(selected, target){
        return {
            top: (selected.y - target.y),
            right: (target.maxX - selected.maxX),
            bottom: (target.maxY - selected.maxY),
            left: (selected.x - target.x)
        }
    }

    function getEdgeRect(event) {
      var offset = $('#screen').offset();

      var x = (event.pageX - offset.left) / vm.project.configs.zoom,
          y = (event.pageY - offset.top) / vm.project.configs.zoom,
          width = 10,
          height = 10,
          xScope = ( x >= 0 && x <= vm.selectedArtBoard.obj.width ),
          yScope = ( y >= 0 && y <= vm.selectedArtBoard.obj.height );

      // left and top
      if( x <= 0 && y <= 0 ){
          x = -10;
          y = -10;
          console.log('lt');
      }
      // right and top
      else if( x >= vm.selectedArtBoard.obj.width && y <= 0 ){
          x = vm.selectedArtBoard.obj.width;
          y = -10;
          console.log('rt');
      }

      // right and bottom
      else if( x >= vm.selectedArtBoard.obj.width && y >= vm.selectedArtBoard.obj.height ){
          x = vm.selectedArtBoard.obj.width;
          y = vm.selectedArtBoard.obj.height;
          console.log('rb');
      }

      // left and bottom
      else if( x <= 0 && y >= vm.selectedArtBoard.obj.height ){
          x = -10;
          y = vm.selectedArtBoard.obj.height;
          console.log('lb');
      }

      // top
      else if( y <= 0 && xScope ){
          x = 0;
          y = -10;
          width = vm.selectedArtBoard.obj.width;
          console.log('t');
      }

      // right
      else if( x >= vm.selectedArtBoard.obj.width && yScope ){
          x = vm.selectedArtBoard.obj.width;
          y = 0;
          height = vm.selectedArtBoard.obj.height;
          console.log('r');
      }

      // bottom
      else if( y >= vm.selectedArtBoard.obj.height && xScope ){
          x = 0;
          y = vm.selectedArtBoard.obj.height;
          width = vm.selectedArtBoard.obj.width;
          console.log('b');
      }

      // left
      else if( x <= 0 && yScope ){
          x = -10;
          y = 0;
          height = vm.selectedArtBoard.obj.height;
          console.log('l');
      }

      if( xScope && yScope ){
          x = 0;
          y = 0;
          width = vm.selectedArtBoard.obj.width;
          height = vm.selectedArtBoard.obj.height;
      }

      return {
          x: x,
          y: y,
          width: width,
          height: height,
          maxX: x + width,
          maxY: y + height
      }
    }

    function hideDistance() {
      vm.selectedArtBoard.distance.top.isHidden = true;
      vm.selectedArtBoard.distance.bottom.isHidden = true;
      vm.selectedArtBoard.distance.left.isHidden = true;
      vm.selectedArtBoard.distance.right.isHidden = true;
    }

    function distance(targetRect, selectedRect) {
      var x = zoomSize(selectedRect.x + selectedRect.width / 2);
      var y = zoomSize(selectedRect.y + selectedRect.height / 2);
      hideDistance();

      if (!isIntersect(selectedRect, targetRect)) {
        if(selectedRect.y > targetRect.maxY){ //top
          vm.selectedArtBoard.distance.top = {
            x: x,
            y: zoomSize(targetRect.maxY),
            h: zoomSize(selectedRect.y - targetRect.maxY),
            value: unitSize(selectedRect.y - targetRect.maxY),
            isHidden: false
          };
        }

        if (selectedRect.maxX < targetRect.x) { //right
          vm.selectedArtBoard.distance.right = {
            x: zoomSize(selectedRect.maxX),
            y: y,
            w: zoomSize(targetRect.x - selectedRect.maxX),
            value: unitSize(targetRect.x - selectedRect.maxX),
            isHidden: false
          }
        }

        if (selectedRect.maxY < targetRect.y) { //bottom
          vm.selectedArtBoard.distance.bottom = {
            x: x,
            y: zoomSize(selectedRect.maxY),
            h: zoomSize(targetRect.y - selectedRect.maxY),
            value: unitSize(targetRect.y - selectedRect.maxY),
            isHidden: false
          }
        }

        if (selectedRect.x > targetRect.maxX) { //left
          vm.selectedArtBoard.distance.left = {
            x: zoomSize(targetRect.maxX),
            y: y,
            w: zoomSize(selectedRect.x - targetRect.maxX),
            value: unitSize(selectedRect.x - targetRect.maxX),
            isHidden: false
          }
        }

      }
      else {
        var distance = getDistance(selectedRect, targetRect);

        if (distance.top > 0) { //top
          vm.selectedArtBoard.distance.top = {
            x: x,
            y: zoomSize(targetRect.y),
            h: zoomSize(positive(distance.top)),
            value: unitSize(positive(distance.top)),
            isHidden: false
          };
        } else if (distance.top < 0) {
          vm.selectedArtBoard.distance.top = {
            x: x,
            y: zoomSize(selectedRect.y),
            h: zoomSize(positive(distance.top)),
            value: unitSize(positive(distance.top)),
            isHidden: false
          };
        }

          if (distance.right > 0) { //right
              vm.selectedArtBoard.distance.right = {
                  x: zoomSize(selectedRect.maxX),
                  y: y,
                  w: zoomSize(positive(distance.right)),
                  value: unitSize(positive(distance.right)),
                  isHidden: false
              };
          } else if (distance.right < 0) {
              vm.selectedArtBoard.distance.right = {
                  x: zoomSize(targetRect.maxX),
                  y: y,
                  w: zoomSize(positive(distance.right)),
                  value: unitSize(positive(distance.right)),
                  isHidden: false
              };
          }


          if (distance.bottom > 0) { //bottom
              vm.selectedArtBoard.distance.right = {
                  x: x,
                  y: zoomSize(selectedRect.maxY),
                  h: zoomSize(positive(distance.bottom)),
                  value: unitSize(positive(distance.bottom)),
                  isHidden: false
              };
          } else if (distance.bottom < 0) {
              vm.selectedArtBoard.distance.right = {
                  x: x,
                  y: zoomSize(targetRect.maxY),
                  h: zoomSize(positive(distance.bottom)),
                  value: unitSize(positive(distance.bottom)),
                  isHidden: false
              };
          }

          if (distance.left > 0) { //left
              vm.selectedArtBoard.distance.left = {
                  x: zoomSize(targetRect.x),
                  y: y,
                  w: zoomSize(positive(distance.left)),
                  value: unitSize(positive(distance.left)),
                  isHidden: false
              };
          } else if (distance.left < 0) {
              vm.selectedArtBoard.distance.left = {
                  x: zoomSize(selectedRect.x),
                  y: y,
                  w: zoomSize(positive(distance.left)),
                  value: unitSize(positive(distance.left)),
                  isHidden: false
              };
          }
      }
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

    function getNotesStyle(note) {
      return {
        'left': zoomSize(note.rect.x) + 'px',
        'top':  zoomSize(note.rect.y) + 'px'
      };
    }
    function screenMouseMove(event) {
      if (!vm.selectedArtBoard.selectedLayer) return;
      console.log('from edge');
      console.log(getEdgeRect(event));
      distance(getEdgeRect(event), getRect(vm.selectedArtBoard.selectedLayer));
    }

    function layerMouseMove(layer) {
      if (!vm.selectedArtBoard.selectedLayer) return;
      console.log(getRect(layer));
      distance(getRect(layer), getRect(vm.selectedArtBoard.selectedLayer));
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

    function getDistanceStyle(distance) {
      // console.log(distance);
      return  {
        'left': distance.x + 'px',
        'top': distance.y + 'px',
        'height': (distance.h) ?  distance.h : 'initial',
        'width': (distance.w) ?  distance.w : 'initial',
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

    function selectSlice(layer) {
      var slice = _.findWhere(vm.selectedArtBoard.obj.layers, {objectID: layer.objectID});
      if (slice) {
        vm.selectedArtBoard.selectLayer(slice);
      }
      else {
          alert(_('The slice not in current artboard.'));
      }
    }

    function sliceMouseEnter(layer) {
      var slice = _.findWhere(vm.selectedArtBoard.obj.layers, {objectID: layer.objectID});
      if (slice) slice.hasSlice = true;
    }

    function sliceMouseLeave(layer) {
      var slice = _.findWhere(vm.selectedArtBoard.obj.layers, {objectID: layer.objectID});
      if (slice) slice.hasSlice = false;
    }

  }
})();
