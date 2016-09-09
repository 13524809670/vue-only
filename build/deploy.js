var ghpages = require('gh-pages');

var path = require('path')
// console.log("__dirname",__dirname,path.join(__dirname, '../dist'))

ghpages.publish(path.join(__dirname, '../dist'),{ 
    repo: 'https://github.com/13524809670/vue-only.git',
    branch: 'gh-pages'
}, function(err) { 
    if(err) return console.log('  → '+"error!"+err);
    console.log(success('\n\n   '+"Push success!!"));
});
