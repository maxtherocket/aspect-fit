var test = require('tape');
var fit = require('../index');

test('calculations', function(t){

    t.plan(4);

    t.deepEqual( fit(200,200,400,400), {scale:2, width:400, height:400} );

    t.deepEqual( fit(400,200,200,200), {scale:0.5, width:200, height:100} );

    t.deepEqual( fit(500,200,1000,1000), {scale:2, width:1000, height:400} );

    t.deepEqual( fit(500,800,1200,800), {scale:1, width:500, height:800} );

});