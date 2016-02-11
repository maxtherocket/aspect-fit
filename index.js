var fit = function(width, height, parentWidth, parentHeight){
    var scale = Math.min(parentWidth/width, parentHeight/height);
    var newWidth = width*scale;
    var newHeight = height*scale;
    return {scale:scale, width:newWidth, height:newHeight};
}

module.exports = fit;