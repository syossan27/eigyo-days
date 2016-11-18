'use strict';

var UltraDate = require('UltraDate');

var _require = require('electron'),
    app = _require.app,
    Menu = _require.Menu,
    Tray = _require.Tray;

var path = require('path');

var tray = null;

var eigyo_days = 0;

var today = new UltraDate();
var last_date = new UltraDate().setLastDate();
var days = today.diffDate(last_date) + 1;

for (var i = 0; i < days; i++) {
  today.addDate(1);
  if (today.isWeekday()) {
    eigyo_days++;
  }
}

app.on('ready', function () {
  tray = new Tray(__dirname + '/../icon.png');
  tray.setTitle(eigyo_days + '日');
});