(function(){
 	// VARIABLES
 	const showMoreBtn = document.querySelectorAll(".show-more-btn");

	/** 	This function does a quick check if the SVG 
				or the anchor was clicked.  If the SVG it goes up a node the container.
				the second paragraph is then toggled 	*/
	function hideContent(e) {
		e.preventDefault();
		var container = e.target.parentNode.parentNode;
		if(container.nodeName != 'DIV') {
			container = container.parentNode;
		}
		container.nodeName == "BODY" ? console.log("nopers") : // SOOO if you click the spacbetween SEE MORE and the arrow the event goes into the body and toggles the first see more.  So this just stops that.  Easier than writing another chain of selectors 	
			container.querySelector('.second').classList.toggle('hidden');
	}
	
	showMoreBtn.forEach((el)=>{
		let x = el.parentNode.querySelector(".second").classList;
		el.addEventListener('click', hideContent ,false);
	});
	
 })();