(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBroadcastMessage = handleBroadcastMessage;

function handleBroadcastMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlQnJvYWRjYXN0TWVzc2FnZSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxzQkFBVCxPQUF1RDtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDMURDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGdCQUE2QkQsT0FBN0I7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVCcm9hZGNhc3RNZXNzYWdlKHsgbWVzc2FnZSwgbmlja25hbWUgfSkge1xyXG4gICAgY29uc29sZS5sb2coYCR7bmlja25hbWV9IDogJHttZXNzYWdlfWApO1xyXG59XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io('/');

function setMessage(message) {
  socket.emit('newMessage', {
    message: message
  });
  console.log("Me : ".concat(message));
}

function setNickname(nickname) {
  socket.emit('setNickname', {
    nickname: nickname
  });
}

socket.on('broadcastMessage', _chat.handleBroadcastMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTQ4ZWQ3MmMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZXRNZXNzYWdlIiwibWVzc2FnZSIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsIm9uIiwiaGFuZGxlQnJvYWRjYXN0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCO0FBQ3pCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNIOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzNCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNIOztBQUVEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxrQkFBVixFQUE4QkMsNEJBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQnJvYWRjYXN0TWVzc2FnZSB9IGZyb20gJy4vY2hhdCc7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbygnLycpO1xyXG5cclxuZnVuY3Rpb24gc2V0TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBzb2NrZXQuZW1pdCgnbmV3TWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGBNZSA6ICR7bWVzc2FnZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcclxuICAgIHNvY2tldC5lbWl0KCdzZXROaWNrbmFtZScsIHsgbmlja25hbWUgfSk7XHJcbn1cclxuXHJcbnNvY2tldC5vbignYnJvYWRjYXN0TWVzc2FnZScsIGhhbmRsZUJyb2FkY2FzdE1lc3NhZ2UpO1xyXG4iXX0=
},{"./chat":1}]},{},[2])