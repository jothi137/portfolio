/**
 * @author Jothi
 */
var portfolio = function() {
	var me = "I'm Jothi Venkataraman. I am a Software Engineer by profession. I am an all-round web developer " +
	"with good knowledge of front-end techniques. I love learning new techniques and I insist on code quality. " +
	"I love spending time on fixing little details and optimizing web apps. Also I like working in a team. ";
	var bachSchool = "Amrita University, India. \n 2006 - 2010.",
		bachDegree = "Information Technology"
	
	
	function initialize () {
		var today = new Date();
		$("#today")[0].innerHTML = today.toDateString();
		aboutMe();
	};
	
	function clearOldTabStatus () {
		$(".portfolio-tab-contents").removeClass("show").addClass("hide"); 
		$(".portfolio-tab").removeClass("active");
	}
	
	function aboutMe () {
		clearOldTabStatus();
		$("#aboutMe").addClass("active");
		$("#aboutMeContents").removeClass("hide").addClass("show");
		var content = $("#aboutMeContents .text")[0];
		content.innerHTML = me;
	};
	
	function education () {
		clearOldTabStatus();
		$("#education").addClass("active");
		$("#educationContents").removeClass("hide").addClass("show");	
	};
	
	function experience () {
		clearOldTabStatus();
		$("#experience").addClass("active");
		$("#experienceContents").removeClass("hide").addClass("show");	
	}
	return {
		initialize: initialize,
		aboutMe: aboutMe,
		education : education,
		experience: experience
	}
}();