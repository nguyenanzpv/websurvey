websurvey.service('calculator', function() {
    
    this.sum = function (x, y) {
        return x+y;
    }

    this.tru=function(x,y){
    	return x-y;
    }

    this.nhan=function(x,y){
    	return x*y;
    }

    this.chia=function(x,y){
    	return x/y;
    }
});



