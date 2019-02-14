/*
	{
		"api":1,
		"name":"Remove Slashes",
		"description":"Removes slashes from your text",
		"author":"Ivan",
		"icon":"code",
		"tags":"strip,slashes,remove"
	}
*/

function main(){
	
	//       discuss at: http://locutus.io/php/stripslashes/
	//      original by: Kevin van Zonneveld (http://kvz.io)
	//      improved by: Ates Goral (http://magnetiq.com)
	//      improved by: marrtins
	//      improved by: rezna
	//         fixed by: Mick@el
	//      bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
	//      bugfixed by: Brett Zamir (http://brett-zamir.me)
	//         input by: Rick Waldron
	//         input by: Brant Messenger (http://www.brantmessenger.com/)
	// reimplemented by: Brett Zamir (http://brett-zamir.me)
	//        example 1: stripslashes('Kevin\'s code')
	//        returns 1: "Kevin's code"
	//        example 2: stripslashes('Kevin\\\'s code')
	//        returns 2: "Kevin\'s code"

	var result = (str + '')
	    .replace(/\\(.?)/g, function (s, n1) {
	      switch (n1) {
	        case '\\':
	          return '\\'
	        case '0':
	          return '\u0000'
	        case '':
	          return ''
	        default:
	          return n1
	    	}
    });
    
    return {success:true, result:result};
    // or {success:false, error:message};
}
