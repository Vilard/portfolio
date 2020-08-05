import React from 'react'
import Project from '../project/project'
import pgng from '../../img/pg-ng.png'
import komaroff from '../../img/komaroff.png'
const Portfolio = () => {
	return (
		<div>
			<Project 	link='http://maket.surge.sh/'
                altimg='komaroff' 
                srcimg={komaroff}
                description='
                На данном проекте выполнял роль верстальщика, ссылки работают не все, 
                тк мне сказали все перелинковывать необходимости нет. 
                Решил показать макет т.к. на рабочей версии поехала верстка (не по моей вине).
                Работал по дизайну.
                '
                stack='html/css/js/bootstrap/jQuery' />

      <Project 	link='http://pg-ng.com/'
              	altimg='pg-ng' 
              	srcimg={pgng}
              	stack='html/css/js/jQuery/nginx/gulp' 
              	description='
              	Изначально требовалость перенести сайт на новый хостинг,
              	выйяснилось что нет исходников, пришлось почти все написать с нуля.
              	Со старой версии были позаимствованны: дизайн кнопок в слайдере, текст,
              	изображения и расположение некоторых элементов, 
              	часть информации была убрана за ненадобностью.'/>
		</div>
	)
}

export default Portfolio