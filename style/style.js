head.js(
  // System
  {iepngfix_tilebg: "style/system/compatibility/iepngfix/iepngfix_tilebg.js"},
  // Plugin
  {metadata: "style/plugin/metadata/metadata.js"},
  {button: "style/plugin/button/button.js"},
  {scrollto: "style/plugin/scrollto/scrollto.js"},
  {colorbox: "style/plugin/colorbox/colorbox.js"},
  {bettergrow: "style/plugin/bettergrow/bettergrow.js"}
);

head.ready("button", function()
{
  SimplyButtons.init();
});

head.ready("bettergrow", function()
{
  $("textarea.grow").BetterGrow();
});