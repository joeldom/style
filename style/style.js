head.js(
  {modernizr: "style/system/modernizr.min.js"},
  {button: "style/plugin/button/button.js"}
);

head.ready("button", function()
{
  SimplyButtons.init();
});