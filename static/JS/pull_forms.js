function pull(){
	//Проверяем заполненность полей
	
	var examination = '';
	const fio = document.querySelectorAll('textarea, input[name="doljn"], input[name="sudis_mail"], select[name="vid_uch[]"], select[name="vid_zap[]"], select[name="mej_reg"]');
	var i = 0;
	var i1 = 0;
	var i2 = 0;
	
	fio.forEach((element)=>{	
		if(element.name === 'sudis_mail'){
			if(element.value.includes('@mvd.ru') == false){if(i1==0){examination += 'нет @mvd.ru\n'; i1++}}
			else if(element.value=='@mvd.ru'){if(i2==0){examination += 'помимо @mvd.ru должен быть еще и логин СУДИС!\n'; i2++}}
		}
			
		else{
			if(element.value == ''){
				if(i==0){examination += 'Вы заполнили не все поля!!\n'; i++; }
			}
		}	
	});
	
	if(examination != ''){alert(examination)}
	else{
		let arrayJSON=[];
		const objJSON = new Object();
		document.querySelectorAll('.line').forEach((tr) =>{
			tr.querySelectorAll('td').forEach((td)=>{
				const child = td.firstElementChild; 
				let vid_uch=[];  
				let vid_zap=[];  
				if(child.name == 'vid_uch[]'){for(var n = 0; n < child.length; n++){if(child.options[n].selected==true) vid_uch.push(child.options[n].value)}; objJSON['vid_uch']=vid_uch;}
				else if (child.name == 'vid_zap[]'){for(var n = 0; n < child.length; n++){if(child.options[n].selected==true) vid_zap.push(child.options[n].value)}; objJSON['vid_zap']=vid_zap;}
				else{objJSON[child.name] = child.value;}
			});
		arrayJSON.push(objJSON);
		console.log(JSON.stringify(objJSON));
		});

		$.ajax({
			type:"POST",
			url:"index.php",
			cache: false,
			contentType:"application/json; charset=UTF-8",
			dataType: "json",
			data: JSON.stringify(arrayJSON),
			success: function(msg){
				$('#my').html(msg); //Выводит ответ формы
			}
		});
		}
}