import React, { Fragment } from 'react';
import { Polyline } from 'react-yandex-maps';

  const PolylineBlock = (props) => {

    const coords = props.points.map((point, indx) => {
     return  point.coor
    });
    return (
    <Fragment>
        <Polyline
          geometry={coords}
          options={{
            balloonCloseButton: false,
            strokeColor: '#0000fe',
            strokeWidth: 4,
            strokeOpacity: 1,
  
          }}
          modules={'geoObject.addon.balloon'}
          
        />
        </Fragment>
  );
        }
  
  export default PolylineBlock;

  //[[55.8, 37.5], [55.8, 37.4], [55.7, 37.5], [55.7, 37.4]]
  /*
   myPolyline.editor.options.set({
        // Задаём для меток вершин опции с постфиксами, привязанными к текущему состоянию вершины.
        // Класс макета для меток на вершинах ломаной линии.
        vertexLayout: 'default#image',
        // URL графического файла.
        vertexIconImageHref: 'images/button3.png',
        // Размеры слоя с картинкой.
        vertexIconImageSize: [16, 16],
        // Смещение картинки относительно точки привязки.
        vertexIconImageOffset: [-8, -8],

        // Опции с данным постфиксом применяются при наведении на вершину указателя мыши.
        vertexLayoutHover: 'default#image',
        vertexIconImageSizeHover: [28, 28],
        vertexIconImageOffsetHover: [-14, -14],

        // Опции с данным постфиксом применяются, когда для вершины открыто контекстное меню.
        vertexLayoutActive: 'default#image',
        vertexIconImageHrefActive: 'images/button4.png',
        vertexIconImageSizeActive: [16, 16],
        vertexIconImageOffsetActive: [-8, -8],

        // Опции с данным постфиксом применяются при перетаскивании вершины.
        vertexLayoutDrag: 'default#image',
        vertexIconImageHrefDrag: 'images/button4.png',
        vertexIconImageSizeDrag: [16, 16],
        vertexIconImageOffsetDrag: [-8, -8],

        // Задаём для промежуточных меток опции с постфиксами, привязанными к текущему состоянию промежуточных меток.
        edgeLayout: 'default#image',
        edgeIconImageHref: 'images/button1.png',
        edgeIconImageSize: [16, 16],
        edgeIconImageOffset: [-8, -8],

        // Опции с данным постфиксом применяются при наведении на промежуточную метку указателя мыши.
        edgeLayoutHover: 'default#image',
        edgeIconImageSizeHover: [28, 28],
        edgeIconImageOffsetHover: [-14, -14],

        // Опции с данным постфиксом применяются при перетаскивании промежуточной метки.
        edgeLayoutDrag: 'default#image',
        edgeIconImageHrefDrag: 'images/button2.png',
        edgeIconImageSizeDrag: [16, 16],
        edgeIconImageOffsetDrag: [-8, -8]
    });

    // Добавляем линию на карту.
    myMap.geoObjects.add(myPolyline);

    // Включаем режим редактирования.
    myPolyline.editor.startEditing();
} */
