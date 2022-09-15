<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="../../other/font.css">
    <link rel="stylesheet" href="../../icon/font-class/iconfont.css" />
    <link rel="stylesheet" href="../../other/color-brewer.css">
    <!-- luckysheet -->
    <link rel='stylesheet' href='../../lucky-sheet/2.1.13/plugins/css/pluginsCss.css' />
    <link rel='stylesheet' href='../../lucky-sheet/2.1.13/plugins/plugins.css' />
    <link rel='stylesheet' href='../../lucky-sheet/2.1.13/css/luckysheet.css' />
    <link rel='stylesheet' href='../../lucky-sheet/2.1.13/assets/iconfont/iconfont.css' />
    <title>Ami - The world's most popular Vue UI framework</title>
    <meta name="description" content="Ami，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库" />
  </head>
  <body>
    <script>
      if (!window.Promise) {
        document.write('<script src="../../other/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>')
      }
    </script>
    <div id="app"></div>
    <% if (process.env.NODE_ENV === 'production') { %>
      <script src="../../vue/2.5.21/vue.runtime.min.js"></script>
      <script src="../../vue-router/3.0.1/vue-router.min.js"></script>
      <script src="../../other/highlight.pack.js"></script>
    <% } %>
  </body>
  <% if (process.env.NODE_ENV === 'production') { %><script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-84335471-1', 'auto');
    ga('send', 'pageview');

    window.addEventListener('hashchange', function () {
      ga('set', 'page', window.location.href);
      ga('send', 'pageview');
    });
  </script><% } %>
  <% if (process.env.NODE_ENV !== 'production') { %><script>
    var ga = function() {
      console.log(arguments)
    };
  </script><% } %>
    <script src="../../echarts/5.2.2/echarts.min.js"></script>
      <script src="../../lucky-sheet/2.1.13/plugins/js/plugin.js"></script>
      <script src="../../lucky-sheet/2.1.13/luckysheet.umd.js"></script>
      <script  src="../../lucky-excel/0.0.1/luckyexcel.umd.js"></script>
</html>
