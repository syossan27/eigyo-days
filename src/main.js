const UltraDate = require('UltraDate')
const {app, Menu, Tray} = require('electron')
const path = require('path')

let tray = null

var eigyo_days = 0;

var today = new UltraDate();
var last_date = (new UltraDate()).setLastDate();
var days = today.diffDate(last_date) + 1;

for(var i = 0; i < days; i++) {
  today.addDate(1);
  if (today.isWeekday()) {
    eigyo_days++;
  }
}

app.on('ready', function() {
  tray = new Tray(__dirname + '/../icon.png')
  tray.setTitle(eigyo_days + '日')
});
