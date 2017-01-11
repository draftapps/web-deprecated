// ToolBar.js

DraftApp.extend({
  ToolBar: function(){
    var self = this,
    identifier = "com.draft.draftappio",
    threadDictionary = NSThread.mainThread().threadDictionary(),
    ToolBar = threadDictionary[identifier];

    if(!ToolBar){
      ToolBar = NSPanel.alloc().init();
      ToolBar.setStyleMask(NSTitledWindowMask + NSFullSizeContentViewWindowMask);
      ToolBar.setBackgroundColor(NSColor.colorWithRed_green_blue_alpha(1, 1, 1, 1));
      ToolBar.setTitleVisibility(NSWindowTitleHidden);
      ToolBar.setTitlebarAppearsTransparent(true);

      ToolBar.setFrame_display(NSMakeRect(0, 0, 340, 48), false);
      ToolBar.setMovableByWindowBackground(true);
      ToolBar.becomeKeyWindow();
      ToolBar.setLevel(NSFloatingWindowLevel);

      var contentView = ToolBar.contentView(),
      getImage = function(size, name){
        var isRetinaDisplay = (NSScreen.mainScreen().backingScaleFactor() > 1)? true: false;
        suffix = (isRetinaDisplay)? "@2x": "",
        imageURL = NSURL.fileURLWithPath(self.pluginSketch + "/toolbar/" + name + suffix + ".png"),
        image = NSImage.alloc().initWithContentsOfURL(imageURL);

        return image
      },
      addButton = function(rect, toolTip, name, callAction){
        var button = NSButton.alloc().initWithFrame(rect),
        image = getImage(rect.size, name);

        button.setImage(image);
        button.toolTip = toolTip;
        button.setBordered(false);
        button.sizeToFit();
        button.setButtonType(NSMomentaryChangeButton)
          button.setCOSJSTargetFunction(callAction);
        button.setAction("callAction:");

        if (name == 'logo') {
          // button.isEnabled(false);
          // button.alpha = 1;
        }
        return button;
      },
      addImage = function(rect, name){
        var view = NSImageView.alloc().initWithFrame(rect),
        image = getImage(rect.size, name);
        view.setImage(image);
        return view;
      },
      logoButton = addButton( NSMakeRect(20, 15, 20, 20), "DraftApp", "logo",
          function(sender){
          }),
      closeButton = addButton( NSMakeRect(60, 15, 20, 20), "Close toolbar", "icon-close",
          function(sender){
            coscript.setShouldKeepAround(false);
            // threadDictionary.removeObjectForKey(identifier);
            ToolBar.close();
          }),
      notesButton = addButton( NSMakeRect(100, 15, 20, 20), "Add Note", "icon-notes",
          function(sender){
            self.updateContext();
            self.init(self.context, "mark-note");
          }),
      exportableButton = addButton( NSMakeRect(140, 15, 20, 20), "Add Slice", "icon-slice",
          function(sender){
            self.updateContext();
            self.init(self.context, "exportable");
          }),
      colorsButton = addButton( NSMakeRect(180, 15, 20, 20), "Add Color", "icon-colors",
          function(sender){
            self.updateContext();
            self.init(self.context, "color");
          }),
      exportButton = addButton( NSMakeRect(220, 15, 20, 20), "Export To Draft", "icon-export",
          function(sender){
            self.updateContext();
            self.init(self.context, "export");
          }),
      launchButton = addButton( NSMakeRect(260, 15, 20, 20), "Launch Draft", "icon-launch",
          function(sender){
            NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("http://draftapp.io"));
          }),
      settingsButton = addButton( NSMakeRect(300, 15, 20, 20), "Settings", "icon-settings",
          function(sender){
            self.updateContext();
            self.init(self.context, "settings");
          }),
      // lockedButton = addButton( NSMakeRect(500, 14, 20, 20), "icon-locked",
      //     function(sender){
      //       self.updateContext();
      //       self.init(self.context, "locked");
      //     }),
      // overlayButton = addButton( NSMakeRect(64, 14, 20, 20), "Add Overlay", "icon-overlay",
      //     function(sender){
      //       self.updateContext();
      //       self.init(self.context, "mark-overlays");
      //     }),
      // sizesButton = addButton( NSMakeRect(112, 14, 20, 20), "Mark Sizes", "icon-sizes",
      //     function(sender){
      //       self.updateContext();
      //       if(NSEvent.modifierFlags() == NSAlternateKeyMask){
      //         self.init(self.context, "mark-sizes");
      //       }
      //       else{
      //         self.init(self.context, "lite-sizes");
      //       }
      //     }),
      // spacingsButton = addButton( NSMakeRect(112, 14, 20, 20), "Add Spacing", "icon-spacings",
      //     function(sender){
      //       self.updateContext();
      //       if(NSEvent.modifierFlags() == NSAlternateKeyMask){
      //         self.init(self.context, "mark-spacings");
      //       }
      //       else{
      //         self.init(self.context, "lite-spacings");
      //       }
      //     }),
      // propertiesButton = addButton( NSMakeRect(160, 14, 20, 20), "Add Property", "icon-properties",
      //     function(sender){
      //       self.updateContext();
      //       if(NSEvent.modifierFlags() == NSAlternateKeyMask){
      //         self.init(self.context, "mark-properties");
      //       }
      //       else{
      //         self.init(self.context, "lite-properties");
      //       }
      //
      //     }),
      // hiddenButton = addButton( NSMakeRect(160, 14, 20, 20), "icon-hidden",
      //     function(sender){
      //       self.updateContext();
      //       self.init(self.context, "hidden");
      //     }),
      divider1 = addImage( NSMakeRect(50, 8, 1, 32), "divider");

      contentView.addSubview(logoButton);
      contentView.addSubview(closeButton);
      // contentView.addSubview(overlayButton);
      // contentView.addSubview(sizesButton);
      // contentView.addSubview(spacingsButton);
      // contentView.addSubview(propertiesButton);

      contentView.addSubview(notesButton);
      contentView.addSubview(exportableButton);
      contentView.addSubview(colorsButton);
      contentView.addSubview(exportButton);

      // contentView.addSubview(hiddenButton);
      // contentView.addSubview(lockedButton);
      contentView.addSubview(launchButton);
      contentView.addSubview(settingsButton);

      contentView.addSubview(divider1);

      // threadDictionary[identifier] = ToolBar;

      ToolBar.center();
      ToolBar.makeKeyAndOrderFront(nil);
    }
  }
})
