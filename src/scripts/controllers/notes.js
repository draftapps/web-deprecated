(function () {
  angular
    .module("app")
    .controller("NotesCtrl", NotesCtrl);

  function NotesCtrl($scope, $stateParams, $location, projectService) {
    var vm = this;

    $scope.page = "notes";

    $scope.project = {
      id: $stateParams.id,
      slug: $stateParams.slug,
      artboardId: $stateParams.artboardId
    };

    var info = {
      id: $stateParams.id,
      slug: $stateParams.slug
    }
    projectService.getProject(info.id, info.slug)
      .then(function(p) {
        info.currentArtboard = _.findWhere(p.artboards, {id: parseInt($stateParams.artboardId)})
        initialize(p, info);
      }, function() {
        // console.log("Server did not send project data!");
      });

    function initialize(project, info) {
      vm.project = project;
      vm.project.selectArtBoard = selectArtBoard;
      vm.project.unitsData = [
        {
          units: [
            {
              name: "Standard",
              unit: "px",
              scale: 1
            }
          ]
        },
        {
          name: "iOS Devices",
          units: [
            {
              name: "Points @1x",
              unit: "pt",
              scale: 1
            },
            {
              name: "Retina @2x",
              unit: "pt",
              scale: 2
            },
            {
              name: "Retina HD @3x",
              unit: "pt",
              scale: 3
            }
          ]
        },
        {
          name: "Android Devices",
          units: [
            {
              name: "LDPI @0.75x",
              unit: "dp/sp",
              scale: .75
            },
            {
              name: "MDPI @1x",
              unit: "dp/sp",
              scale: 1
            },
            {
              name: "HDPI @1.5x",
              unit: "dp/sp",
              scale: 1.5
            },
            {
              name: "XHDPI @2x",
              unit: "dp/sp",
              scale: 2
            },
            {
              name: "XXHDPI @3x",
              unit: "dp/sp",
              scale: 3
            },
            {
              name: "XXXHDPI @4x",
              unit: "dp/sp",
              scale: 4
            }
          ]
        },
        {
          name: "Web View",
          units: [
            {
              name: "CSS Rem 12px",
              unit: "rem",
              scale: 12
            },
            {
              name: "CSS Rem 14px",
              unit: "rem",
              scale: 14
            }
          ]
        }
      ];
      vm.project.selectedResolution = vm.project.unitsData[0].units[0].name;
      vm.selectedArtBoard = {
        obj: null,
        currentopenedNote: {
          obj: null,
          isOpened: false,
          newMessgae: ""
        },
        openNote: openNote,
        createNote: createNote,
        closeNote: closeNote,
        addNewReply: addNewReply,
        screenStyle: getBoardScreenStyle,
        screenParentStyle: getBoardParentScreenStyle,
        notesStyle: getNotesStyle,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        zoomSize: zoomSize
      };
      activate();
      selectArtBoard(info.currentArtboard);
      $scope.artboardIndex = _.findIndex(project.artboards, { id: info.currentArtboard.id});
    }

    function activate() {
      vm.selectedArtBoard.obj = _.findWhere(vm.project.artboards, {id: parseInt($stateParams.artboardId)});
      vm.project.configs = getConfigs(
        vm.project.scale, vm.project.unit, vm.project.colorFormat, vm.selectedArtBoard.obj.height
      );
    }

    function openNote(note, $index) {
      vm.selectedArtBoard.currentopenedNote.obj = note;
      vm.selectedArtBoard.currentopenedNote.index = $index;
    }

    function createNote(event) {
      if(!$(event.toElement).is("#screen") && !$(event.toElement).is(".add-new")) {
        return;
      }
      if($("#notes .is-open").length !== 0) {
        return;
      }
      if($(event.toElement).is(".add-new")) {
        var x = -9999;
        var y = -9999;
      } else {
        var offset = $("#screen").offset();
        var x = (event.pageX - offset.left) / vm.project.configs.zoom;
        var y = (event.pageY - offset.top) / vm.project.configs.zoom;
      }
      vm.selectedArtBoard.currentopenedNote.obj = {
        rect:{
          x: x,
          y: y,
          width: vm.selectedArtBoard.obj.width,
          height: vm.selectedArtBoard.obj.height
        },
        note: []
      };
      vm.selectedArtBoard.currentopenedNote.index = vm.selectedArtBoard.obj.notes.length + 1;
      vm.selectedArtBoard.currentopenedNote.isOpened = true;
    }

    function closeNote() {
      vm.selectedArtBoard.currentopenedNote.obj = null;
      vm.selectedArtBoard.currentopenedNote.isOpened = false;
      vm.selectedArtBoard.currentopenedNote.index = null;
    }

    function addNewReply(note, index) {
      if (note === undefined) {
        if (vm.selectedArtBoard.obj.notes.indexOf(vm.selectedArtBoard.currentopenedNote.obj) === -1) {
          vm.selectedArtBoard.obj.notes.push(vm.selectedArtBoard.currentopenedNote.obj);
        }
        vm.selectedArtBoard.currentopenedNote.obj =
          vm.selectedArtBoard.obj.notes[vm.selectedArtBoard.obj.notes.length - 1];
      } else {
        // Set the currentopenedNote to push the message to it
        openNote(note, index);
      }

      vm.selectedArtBoard.currentopenedNote.obj.note.push({
        text: vm.selectedArtBoard.currentopenedNote.newMessage,
        date: new Date(),
        userName: $scope.$parent.user.name,
        userImg: "images/demo/avatar.png"
      });
      vm.selectedArtBoard.currentopenedNote.newMessage = "";
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

    function getBoardScreenStyle() {
      if (!vm.selectedArtBoard.obj) return;
      return {
        "width": zoomSize(vm.selectedArtBoard.obj.width),
        "height": zoomSize(vm.selectedArtBoard.obj.height),
        "background": "#FFF url(" +
        (vm.selectedArtBoard.obj.imageBase64 || vm.selectedArtBoard.obj.fullImage) +
        ") no-repeat",
        "backgroundSize": zoomSize(vm.selectedArtBoard.obj.width) + "px " + zoomSize(vm.selectedArtBoard.obj.height) + "px"
      };
    }

    function getBoardParentScreenStyle() {
      if (!vm.selectedArtBoard.obj) return;
      return {
        "width": zoomSize(vm.selectedArtBoard.obj.width),
        "height": zoomSize(vm.selectedArtBoard.obj.height)
      };
    }

    function getNotesStyle(note) {
      return {
        "left": zoomSize(note.rect.x) + "px",
        "top":  zoomSize(note.rect.y) + "px"
      };
    }

    function zoomIn() {
      vm.project.configs.zoom -= .25;
    }

    function zoomOut() {
      vm.project.configs.zoom += .25;
    }

    function selectArtBoard(artBoard) {
      vm.selectedArtBoard.obj = artBoard;
      $location.path("/projects/" + $stateParams.id + "/" + $stateParams.slug + "/"+ artBoard.id + "/notes");
    }
  }
})();
