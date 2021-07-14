var titleSelector = '#title'
	var titleFilters = document.querySelectorAll(titleSelector)
		console.log(titleFilters)
	var timesFilters = document.querySelectorAll('#time')
		console.log(timesFilters)
	
			titleFilters.forEach(function(titleFilter) {
				console.log(titleFilter)
				titleFilter.addEventListener('click', function(){
					console.log('jhnfij')
					var filterValue = document.querySelectorAll('[data-filter]')
					console.log(filterValue)
					for(i=0; i<filterValue.length; i++)
						var optionValue = filterValue[1].getAttribute('data-filter')
							console.log('this data filter value', optionValue)

						timesFilters.forEach(function(timesFilter){
							var timesValue = document.querySelectorAll('[data-time]')
								console.log(timesValue)
							for(i=0; i<timesValue.length; i++) 
								var timeValue = timesValue[3].getAttribute('data-time')
									console.log('this data filter value', timeValue)

									if(optionValue = timeValue){
										timesFilter.classList.remove('is-hidden')
									}
									else {
										timesFilter.classList.add('is-hidden')
									}
						})	
						
					
		 		});
			});
