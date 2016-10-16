(function () {
  angular
    .module("app")
    .controller("NotesCtrl", NotesCtrl);

  function NotesCtrl(project) {
    var vm = this;

    vm.project = project.data;
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

    function activate() {
      vm.selectedArtBoard.obj = vm.project.artboards[0];
      vm.project.configs = getConfigs(
        vm.project.scale, vm.project.unit, vm.project.colorFormat, vm.selectedArtBoard.obj.height
      );
    }

    function openNote(note, $index) {
      vm.selectedArtBoard.currentopenedNote.obj = note;
      vm.selectedArtBoard.currentopenedNote.index = $index;
      vm.selectedArtBoard.currentopenedNote.isOpened = true;
    }

    function createNote(event) {
      var offset = $("#screen").offset();
      var x = (event.pageX - offset.left) / vm.project.configs.zoom;
      var y = (event.pageY - offset.top) / vm.project.configs.zoom;
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

    function addNewReply() {
      if (vm.selectedArtBoard.currentopenedNote.index > vm.selectedArtBoard.obj.notes.length) {
        vm.selectedArtBoard.obj.notes.push(vm.selectedArtBoard.currentopenedNote.obj);
        vm.selectedArtBoard.currentopenedNote.obj =
          vm.selectedArtBoard.obj.notes[vm.selectedArtBoard.obj.notes.length - 1];
      }

      vm.selectedArtBoard.currentopenedNote.obj.note.push({
        text: vm.selectedArtBoard.currentopenedNote.newMessage,
        date: "2min ago",
        userName: "Abo El Naga",
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
        (vm.selectedArtBoard.obj.imageBase64 || vm.selectedArtBoard.obj.imagePath) +
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
    }
  }
})();
