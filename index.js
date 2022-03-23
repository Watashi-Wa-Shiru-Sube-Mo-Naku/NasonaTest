if(event.skill.id==bloodflower_id) {
			clearTimeout(isCD_bloodflower_timeOut)
			isCD_bloodflower = true
			isCD_bloodflower_timeOut = setTimeout(function () {
				isCD_bloodflower = false
			}, event.cooldown)
		}
		if(event.skill.id==windslash_id) {
			clearTimeout(isCD_windslash_timeOut)
			isCD_windslash = true
			isCD_windslash_timeOut = setTimeout(function () {
				isCD_windslash = false
			}, event.cooldown)
		}		
		if(event.skill.id==runeburst_id) {
			clearTimeout(isCD_runeburst_timeOut)
			isCD_runeburst = true
			isCD_runeburst_timeOut = setTimeout(function () {
				isCD_runeburst = false
			}, event.cooldown)
		}
		if(event.skill.id==balders_id) {
			clearTimeout(isCD_balders_timeOut)
			isCD_balders = true
			isCD_balders_timeOut = setTimeout(function () {
				isCD_balders = false
			}, event.cooldown)
		}
		if(event.skill.id==reclamation_id) {
			clearTimeout(isCD_reclamation_timeOut)
			isCD_reclamation = true
			isCD_reclamation_timeOut = setTimeout(function () {
				isCD_reclamation = false
			}, event.cooldown)
		}
