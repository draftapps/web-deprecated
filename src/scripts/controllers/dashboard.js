(function () {
  angular
    .module('app')
    .controller('DasboardCtrl', DasboardCtrl);

  function DasboardCtrl(project) {
    var vm = this;

    vm.project = project.data;
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

      unselectLayer: unselectLayer,
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
      }
      // right and top
      else if( x >= vm.selectedArtBoard.obj.width && y <= 0 ){
          x = vm.selectedArtBoard.obj.width;
          y = -10;
      }

      // right and bottom
      else if( x >= vm.selectedArtBoard.obj.width && y >= vm.selectedArtBoard.obj.height ){
          x = vm.selectedArtBoard.obj.width;
          y = vm.selectedArtBoard.obj.height;
      }

      // left and bottom
      else if( x <= 0 && y >= vm.selectedArtBoard.obj.height ){
          x = -10;
          y = vm.selectedArtBoard.obj.height;
      }

      // top
      else if( y <= 0 && xScope ){
          x = 0;
          y = -10;
          width = vm.selectedArtBoard.obj.width;
      }

      // right
      else if( x >= vm.selectedArtBoard.obj.width && yScope ){
          x = vm.selectedArtBoard.obj.width;
          y = 0;
          height = vm.selectedArtBoard.obj.height;
      }

      // bottom
      else if( y >= vm.selectedArtBoard.obj.height && xScope ){
          x = 0;
          y = vm.selectedArtBoard.obj.height;
          width = vm.selectedArtBoard.obj.width;
      }

      // left
      else if( x <= 0 && yScope ){
          x = -10;
          y = 0;
          height = vm.selectedArtBoard.obj.height;
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

    function unselectLayer() {
      vm.selectedArtBoard.ruler = {
        isHidden: true,
        vertical: {
          width: 0,
          left: 0
        },
        horizontal: {
          height: 0,
          top: 0
        }
      };
      vm.selectedArtBoard.distance = {
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
      };
      vm.selectedArtBoard.selectedLayer = null;

      _.each(vm.selectedArtBoard.obj.layers, function (layer) {
        layer.selected = false;
      });
    }

    function screenMouseMove(event) {
      if (!vm.selectedArtBoard.selectedLayer) return;
      distance(getEdgeRect(event), getRect(vm.selectedArtBoard.selectedLayer));
    }

    function layerMouseMove(layer) {
      if (!vm.selectedArtBoard.selectedLayer) return;
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
      unselectLayer();
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
