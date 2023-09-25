var count = 2;
$('#addrows').click(function(){
    $('#table_ibdr_reg').append('<tr class = "line">\
           <td><input type="text" class="form-control" id="" name="rownum" value="'+count+'" disabled></td>\
           <td class="text-center">\
                <textarea class="form-control" rows ="2" id="" name="fio" value="" placeholder="Иванов Иван Иванович,\
ОУР ОМВД России по Октябрьскому району г.Томска"></textarea>\
            </td> \
           <td><input class="form-control" type="text" name="doljn" value="" placeholder="Начальник"></td> \
           <td><input class="form-control" type="text" name="sudis_mail" value="" placeholder="iivanov@mvd.ru"></td> \
           <td><input class="form-control"type="text" name="ip" value="" placeholder="10.05.202.99"></td> \
           <td><input class="form-control" type="text" name="telephone" value="" placeholder="8-(3822)-111-111"></td> \
           			<td>\
				<select class="form-control" name="vid_uch[]" multiple>\
				<option value="РОЗЫСКНЫЕ">Розыскные</option>\
				<option value="КРИМИНАЛИСТИЧЕСКИЕ">Криминалистические</option>\
				<option value="СПРАВОЧНЫЕ">Справочные</option>\
				<option value="АБД ОСК (СТОРОЖОК)">АБД ОСК (Сторожок)</option>\
				<option value="ОСК">ОСК</option>\
				<option value="АБОНЕНТ СВЯЗИ">Абонент связи</option>\
				<option value="ДЕЖУРНЫЕ ЧАСТИ">Дежурные части</option>\
				</select>\
			</td>\
\
			<td>\
				<select class="form-control"  name="vid_zap[]" multiple>\
				<option value="ВВОД ДОКУМЕНТОВ">Ввод документов</option>\
				<option value="СПРАВОЧНЫЕ ЗАПРОСЫ">Справочные запросы</option>\
				<option value="ПОИСКОВЫЕ ЗАПРОСЫ">Поисковые запросы</option>\
				<option value="АДМПРАКТИКА(ВВОД)">Адмпрактика(ввод)</option>\
				<option value="ЗАДЕРЖАННЫЕ(ВВОД)">Задержанные(ввод)</option>\
				<option value="ДОСТАВЛЕННЫЕ(ВВОД)">Доставленные(ввод)</option>\
				<option value="НАРКОТИКИ(ВВОД)">Наркотики(ввод)</option>\
				<option value="СТАТИСТИКА(ВВОД)">Статистика(ввод)</option>\
				<option value="СТАТИСТИКА(ОМ)">Статистика(ОМ)</option>\
				<option value="МЕСТНЫЙ РОЗЫСК(WEB)">Местный розыск(Web)</option>\
				</select>\
			</td>\
           <td><select class="form-select" name="mej_reg">\
            <option selected></option>\
            <option value="ДА">да</option>\
            <option value="НЕТ">нет</option>\
           </select></td>  \
        </tr>');
    count++;
    //console.log(count);
}); 
