// Toggle Nav JS
var icon = document.querySelector('.icon');
	
	document.querySelector('.icon-btn').addEventListener('click', function(e){
		e.preventDefault();	
		if (icon.getAttribute('data-state') == 'expanded'){	
			icon.setAttribute('data-state', 'collapsed');
		}else{
			icon.setAttribute('data-state', 'expanded');
		}
	});