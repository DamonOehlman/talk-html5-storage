module.exports = function(processor, input, callback) {
    var section = input,
        iframe = '<iframe scrolling="no" height="300px" width="100%" ' + 
            'src="http://caniuse.com/' + section + '/embed/eras=-2,2&agents=desktop,ios_saf,op_mob,android&stats=none">' + 
            '</iframe>';
    
    callback(null, iframe);
};