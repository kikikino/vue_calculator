<template>
  <ul class="first-page">
    <li class="the-li"><router-link to="/engine">Инженерный</router-link></li>
    <li><router-link to="/simple">Обычный</router-link></li>
  </ul>
</template>

<style>
@font-face {
  font-family: "Font";
  src: local("Font"),
  url(../assets/font2.ttf) format("truetype");
}
html {
  overflow-y: hidden;
}
body {
  margin: 0px;
}
ul {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fee36e;
}
.first-page {
  text-align: center;
  font-weight: bold;
  height: 100vh;
  background: #373e98;
}
.first-page li {
  display: block;
}
.first-page a{
  text-decoration: none;
  font-family: "Font", sans-serif;
  letter-spacing: 7px;
  position: relative;
  padding-bottom: 60px;
  margin-top:5vh;
  font-size: 170px;
  text-align:center;
  text-transform: uppercase;
  display: inline-block;
  transition: color .2s;
}
.the-li a{
  margin-top: 16vh;
}
.first-page  a, .first-page a:visited {color: #fee36e;}
.first-page a, .first-page a:hover{color: #f16775;}
.first-page a:before,
.first-page a:after {
  content: "";
  position: fixed;
  height: 4px;
  top: auto;
  right: 50%;
  bottom: 7px;
  left: 50%;
  background: #f16775;
  transition: .8s;
}
.menu-main {
  list-style: none;
  text-align: center;
  font-weight: bold;
  background: #373e98;
}
.menu-main li {
  display: inline-block;
}
.menu-main li:after {
  content: "|";
  font-size: 27px;
  color: #d3d3d3;
  font-family: "Font", sans-serif;
  display: inline-block;
  vertical-align:center;
}
.menu-main li:last-child:after {content: none;}
.menu-main a {
  text-decoration: none;
  font-family: "Font", sans-serif;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 20px;
  margin: 0 34px 0 30px;
  font-size: 27px;
  text-transform: uppercase;
  display: inline-block;
  transition: color .2s;
}
.menu-main a, .menu-main a:visited {color: #d3d3d3;}
.menu-main a.current, .menu-main a:hover{color: #f16775;}
.menu-main a:before,
.menu-main a:after {
  content: "";
  position: absolute;
  height: 4px;
  top: auto;
  right: 50%;
  bottom: 7px;
  left: 50%;
  background: #f16775;
  transition: .8s;
}
.menu-main a:hover:before, .menu-main .current:before {left: 0;}
.menu-main a:hover:after, .menu-main .current:after {right: 0;}
@media (max-width: 550px) {
  .menu-main {padding-top: 0;}
  .menu-main li {display: block;}
  .menu-main li:after {content: none;}
  .menu-main a {
    padding: 25px 0 20px;
    margin: 0 30px;
  }
}
</style>