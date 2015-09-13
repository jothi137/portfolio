/**
 * @author Jothi
 */
var portfolio = function() {
	var me = "I'm Jothi ";
	function initialize () {
		var today = new Date();
		$("#today")[0].innerHTML = today.toDateString();
		$("li#aboutMe").addClass("active");
	};
	
	function aboutMe () {
		console.log("aboutMe");
	};
	return {
		initialize: initialize,
		aboutMe: aboutMe
	}
}();