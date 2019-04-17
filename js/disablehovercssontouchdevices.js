;(function(){
				var isTouch = false
				var isTouchTimer 
				var curRootClass = ''
				function addtouchclass(e){
					clearTimeout(isTouchTimer)
					isTouch = true
					if (curRootClass != 'can-touch'){
						curRootClass = 'can-touch'
						document.documentElement.classList.add(curRootClass)
					}
				isTouchTimer = setTimeout(function(){isTouch = false}, 500)
				}
	
			function removetouchclass(e){
					if (!isTouch && curRootClass == 'can-touch'){
						isTouch = false
						curRootClass = ''
						document.documentElement.classList.remove('can-touch')
					}
				}
	
				document.addEventListener('touchstart', addtouchclass, false)
				document.addEventListener('mouseover', removetouchclass, false)
			})();