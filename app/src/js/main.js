/**
 * @author Jothi
 */
var portfolio = function() {
	var me = "I'm Jothi Venkataraman. I am a Software Engineer by profession. I am an all-round web developer " +
	"with good knowledge of front-end techniques. I love learning new techniques and I insist on code quality. " +
	"I love spending time on fixing little details and optimizing web apps. Also I like working in a team. ";
	function initialize () {
		var today = new Date();
		$("#today")[0].innerHTML = today.toDateString();
		aboutMe();
	};
	
	function aboutMe () {
		$("li#aboutMe").addClass("active"); 
		$("#aboutMeContents").removeClass("hide");
		$("#aboutMeContents").addClass("show");
		var content = $("#aboutMeContents .text")[0];
		content.innerHTML = me;
	};
	return {
		initialize: initialize,
		aboutMe: aboutMe
	}
}();