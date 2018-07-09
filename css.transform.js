module.exports = function(css){
    console.log(css);
    console.log(window.innerWidth);
    if(window.innerWidth>=375){
        return css.replace('red','blue');
    }else{
        return css.replace('red','green');
    }
}