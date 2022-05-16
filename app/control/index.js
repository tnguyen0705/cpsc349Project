
function createDropDown(ns, vs) {
	
	// Prepare data
	const ops = new Array()
	const cnt = ns.length
	for (let c=0; c<cnt; c++) {
		ops.push({name:ns[c].value, value:vs[c].value}) 
	}
	const context = {options: ops}
	
	// Get the template
	const xhr1 = new XMLHttpRequest()
	xhr1.open('GET', 'http://localhost:4020/dropdown.tbs')
	xhr1.responseType = 'text'
	xhr1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const body = document.getElementsByTagName('body')[0]
			//console.log(this.response)
			const template = Handlebars.compile(this.response)
			const html = template(context) 
			//console.log(html) 
			body.innerHTML = html 					
		}
	}	
	xhr1.send()				
}

document.getElementById('showOptions').addEventListener('click', function(event){
	event.preventDefault()	
	const noOptions = document.getElementById('noOptions').value
	const body = document.getElementsByTagName('body')[0]
	const values = new Array()
	const names = new Array() 
	// Display the controls 
	for (let i=0; i<noOptions; i++) {
		body.appendChild(document.createElement('br'))
		let lb = document.createElement('label')
		lb.innerText = `Option ${i+1} : `
		body.appendChild(lb)
		body.appendChild(document.createElement('br'))
		lb = document.createElement('label')
		lb.innerText = `Value: `
		body.appendChild(lb)
		let ip = document.createElement('input')
		ip.type = 'text'
		values.push(ip) 
		body.appendChild(ip)
		lb = document.createElement('label')
		lb.innerText = `Name: `
		body.appendChild(lb)
		ip = document.createElement('input')
		ip.type = 'text'
		names.push(ip) 
		body.appendChild(ip)		
	}
	body.appendChild(document.createElement('br'))
	// Add 'CREATE' button
	const btn = document.createElement('button')
	btn.innerText = 'CREATE'
	btn.addEventListener('click', function(event){
		//console.log(names)
		//console.log(values) 
		createDropDown(names, values) 
	})
	body.appendChild(btn)
})

