var I18N = {},
    webI18N = {
      "zh-Hans": "zh-cn",
      "zh-Hant": "zh-tw"
    },
    lang = NSUserDefaults.standardUserDefaults().objectForKey("AppleLanguages").objectAtIndex(0),
    language = "";

function _(str, data){
  var str = (I18N[lang] && I18N[lang][str])? I18N[lang][str]: str,
  idx = -1;
  return str.replace(/\%\@/gi, function(){
    idx++;
    return data[idx];
  });
}
