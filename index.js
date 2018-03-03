const button = document.getElementsByTagName('button')[0];

const a = document.getElementsByTagName('a')[0];

html2canvas(document.querySelector("#c")).then(canvasPrint => {
    a.href = canvasPrint.toDataURL();
    a.download = 'test.png';
});

// Prima figura
const canvas = document.getElementsByTagName('canvas')[0];

canvas.width = 200;
canvas.height = 200;

const context = canvas.getContext('2d');

const gradient = context.createLinearGradient(0,0,0,150);
gradient.addColorStop("0","#90CAF9");
gradient.addColorStop("1.0","#1E88E5");

context.shadowColor = '#BBDEFB';
context.shadowOffsetY = 15;
context.shadowBlur = 50;

context.beginPath();
context.arc(100,100,50,0,2*Math.PI);
context.lineWidth = 20;

context.strokeStyle = gradient;
context.stroke();





// A doua figura
const canvas2 = document.getElementsByTagName('canvas')[1];

canvas2.width = 200;
canvas2.height = 200;

const context2 = canvas2.getContext('2d');

const gradient2 = context2.createLinearGradient(0,0,0,150);
gradient2.addColorStop("0","#FFAB91");
gradient2.addColorStop("1.0","#F4511E");

context2.shadowColor = '#FFCCBC';
context2.shadowOffsetY = 15;
context2.shadowBlur = 50;

context2.beginPath();
context2.moveTo(100, 100);
context2.arc(100,100,60,0.25*Math.PI,0.75*Math.PI);
context2.lineWidth = 20;
context2.closePath();

context2.fillStyle = gradient2;
context2.fill();





// A treia figura
const canvas3 = document.getElementsByTagName('canvas')[2];

canvas3.width = 200;
canvas3.height = 200;

const context3 = canvas3.getContext('2d');

const gradient3 = context3.createLinearGradient(0,0,0,150);
gradient3.addColorStop("0","#CE93D8");
gradient3.addColorStop("1.0","#8E24AA");

context3.shadowColor = '#E1BEE7';
context3.shadowOffsetY = 15;
context3.shadowBlur = 50;

context3.beginPath();
context3.moveTo(100, 40);
context3.lineTo(40, 160);
context3.lineTo(160, 160);
context3.closePath();

context3.fillStyle = gradient3;
context3.fill();





// A patra figura
const canvas4 = document.getElementsByTagName('canvas')[3];

canvas4.width = 200;
canvas4.height = 200;

const context4 = canvas4.getContext('2d');

const gradient4 = context4.createLinearGradient(0,0,0,150);
gradient4.addColorStop("0","#E6EE9C");
gradient4.addColorStop("1.0","#C0CA33");

context4.shadowColor = '#E6EE9C';
context4.shadowOffsetY = 5;
context4.shadowBlur = 50;

context4.beginPath();
context4.moveTo(80, 40);
context4.lineTo(50, 50);
context4.lineTo(40, 80);
context4.lineTo(40, 120);
context4.lineTo(50, 150);
context4.lineTo(80, 160);
context4.lineTo(120, 160);
context4.lineTo(150, 150);
context4.lineTo(160, 120);
context4.lineTo(160, 80);
context4.lineTo(150, 50);
context4.lineTo(120, 40);
context4.closePath();

context4.lineWidth = 20;

context4.strokeStyle = gradient4;
context4.stroke();





// A cincea figura
const canvas5 = document.getElementsByTagName('canvas')[4];

canvas5.width = 200;
canvas5.height = 200;

const context5 = canvas5.getContext('2d');

const gradient5 = context5.createLinearGradient(0,0,0,150);
gradient5.addColorStop("0","#EF9A9A");
gradient5.addColorStop("1.0","#E53935");

context5.shadowColor = '#FFCDD2';
context5.shadowOffsetY = 15;
context5.shadowBlur = 50;

context5.beginPath();
context5.moveTo(40, 70);
context5.lineTo(40, 130);
context5.lineTo(160, 130);
context5.lineTo(160, 70);
context5.closePath();

context5.lineWidth = 20;

context5.strokeStyle = gradient5;
context5.stroke();





// A sasea figura
const canvas6 = document.getElementsByTagName('canvas')[5];

canvas6.width = 200;
canvas6.height = 200;

const context6 = canvas6.getContext('2d');

const gradient6 = context6.createLinearGradient(0,0,0,150);
gradient6.addColorStop("0","#9FA8DA");
gradient6.addColorStop("1.0","#3949AB");

context6.shadowColor = '#C5CAE9';
context6.shadowOffsetY = 25;
context6.shadowBlur = 50;

context6.moveTo(40, 70);
context6.lineTo(160, 130);

context6.lineWidth = 20;

context6.strokeStyle = gradient6;
context6.stroke();





// A saptea figura
const canvas7 = document.getElementsByTagName('canvas')[6];

canvas7.width = 200;
canvas7.height = 200;

const context7 = canvas7.getContext('2d');

const gradient7 = context7.createLinearGradient(0,0,0,150);
gradient7.addColorStop("0","#80CBC4");
gradient7.addColorStop("1.0","#00897B");

context7.shadowColor = '#B2DFDB';
context7.shadowOffsetY = 2;
context7.shadowBlur = 50;

context7.ellipse(100, 100, 40, 60, 45 * Math.PI/180, 0, 2 * Math.PI);

context7.lineWidth = 20;

context7.strokeStyle = gradient7;
context7.stroke();





// A opta figura
const canvas8 = document.getElementsByTagName('canvas')[7];

canvas8.width = 200;
canvas8.height = 200;

const context8 = canvas8.getContext('2d');

const gradient8 = context8.createLinearGradient(0,0,0,150);
gradient8.addColorStop("0","#F48FB1");
gradient8.addColorStop("1.0","#D81B60");

context8.shadowColor = '#F8BBD0';
context8.shadowOffsetY = 2;
context8.shadowBlur = 50;

context8.beginPath();
context8.moveTo(40, 80);
context8.lineTo(40, 140);
context8.lineTo(130, 140);
context8.lineTo(130, 80);
context8.closePath();

context8.fillStyle = gradient8;
context8.fill();

context8.beginPath();
context8.moveTo(130, 140);
context8.lineTo(160, 120);
context8.lineTo(160, 60);
context8.lineTo(130, 80);
context8.closePath();

context8.fillStyle = gradient8;
context8.fill();

context8.beginPath();
context8.moveTo(40, 80);
context8.lineTo(130, 80);
context8.lineTo(160, 60);
context8.lineTo(70, 60);
context8.closePath();

context8.fillStyle = gradient8;
context8.fill();





// A saptea figura
const canvas9 = document.getElementsByTagName('canvas')[8];

canvas9.width = 200;
canvas9.height = 200;

const context9 = canvas9.getContext('2d');

const gradient9 = context9.createLinearGradient(0,0,0,150);
gradient9.addColorStop("0","#FFF59D");
gradient9.addColorStop("1.0","#FDD835");

context9.shadowColor = '#FFF9C4';
context9.shadowOffsetY = 2;
context9.shadowBlur = 50;

context9.beginPath();
context9.moveTo(100, 100);
context9.ellipse(100, 100, 40, 60, 45 * Math.PI/180, 0.25 * Math.PI, 1.75 * Math.PI);
context9.closePath();

context9.fillStyle = gradient9;
context9.fill();

