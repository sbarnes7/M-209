

function makeVisible(name){
	
	var abTab = document.getElementById('aboutTab');
	var useTab = document.getElementById('useTab');
    var worksTab = document.getElementById('worksTab');

    var abCont = document.getElementById('about');
    var useCont = document.getElementById('use');
    var workCont = document.getElementById('works');

    var ab1 = document.getElementById('ab1');
    var ab2 = document.getElementById('ab2');

    var ab3 = document.getElementById('ab3');




	
    if (name == 'works') {

        abCont.setAttribute("class", "unselected_cont");
        useCont.setAttribute("class", "unselected_cont");
        workCont.setAttribute("class", "selected_cont");


	//document.getElementById(name).style.cssText = 'display: inline;';
	//document.getElementById('about').style.cssText = 'display: none';



        // document.getElementById('use').style.cssText = 'display: none';
        worksTab.setAttribute("class", "selected");

	abTab.setAttribute("class", "unselected");
        useTab.setAttribute("class", "unselected");

        
            
        ab1.setAttribute("class", "unselectedimg");
        ab2.setAttribute("class", "unselectedimg");
        ab3.setAttribute("class", "unselectedimg");




           
        
   
	
	} else if(name == 'about'){
		//document.getElementById(name).style.cssText = 'display: inline;';
		//document.getElementById('works').style.cssText = 'display: none';
		//document.getElementById('use').style.cssText = 'display: none';

        abCont.setAttribute("class", "selected_cont");
        useCont.setAttribute("class", "unselected_cont");
        workCont.setAttribute("class", "unselected_cont");
		abTab.setAttribute("class", "selected");
		worksTab.setAttribute("class", "unselected");
        useTab.setAttribute("class", "unselected");

        ab1.setAttribute("class", "selectedimg");
        ab2.setAttribute("class", "selectedimg");
        ab3.setAttribute("class", "selectedimg");


	} else {
		//document.getElementById(name).style.cssText = 'display: inline;';
		//document.getElementById('works').style.cssText = 'display: none';
		//document.getElementById('about').style.cssText = 'display: none';
        abCont.setAttribute("class", "unselected_cont");
        useCont.setAttribute("class", "selected_cont");
        workCont.setAttribute("class", "unselected_cont");
		abTab.setAttribute("class", "unselected");
		worksTab.setAttribute("class", "unselected");
        useTab.setAttribute("class", "selected");

        ab1.setAttribute("class", "selectedimg");
        ab2.setAttribute("class", "selectedimg");
        ab3.setAttribute("class", "unselectedimg");
	}
	
}