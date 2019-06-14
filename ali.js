function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1KgzB0_8Wnwv2gtRtM0WTClhJTkOyeZbHkpho2x3QY5U/edit?usp=sharing',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
