var priceElements = document.querySelectorAll('span.priceRub');
priceElements.forEach(function(element)  {
    var priceText = element.textContent.trim();
    var priceValue = parseFloat(priceText.replace(/[^\d]/g, ''));
    var formattedPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(priceValue);
    element.textContent = formattedPrice;
});

const element = document.getElementById('input_phone');
const maskOptions = {
  mask: '+{7} (000) 000 00-00'
};
const mask = IMask(element, maskOptions);

let formBig = document.getElementsByClassName('formBlock')[0]; // Обращаемся к первому элементу с классом 'formBlock'
if (formBig) {
  let dd_typeOfConstruction = document.getElementById('dd_typeOfConstruction');
  let dd_size = document.getElementById('dd_size');
  let dd_additionalServices = document.getElementById('dd_additionalServices');
  let dd_name = document.getElementById('dd_name');
  let dd_telephone = document.getElementById('dd_telephone');
  let dd_eMail = document.getElementById('dd_eMail');
  let dd_message = document.getElementById('dd_message');
  
  formBig.addEventListener('input', function() {
    let form_user_name = document.getElementById('input_name');
    let form_user_phone = document.getElementById('input_phone');
    let form_user_email = document.getElementById('input_email');
    let form_user_comment = document.getElementById('input_message');
    let building_type = document.querySelector('#typeHome input:checked');
    let building_size = document.getElementById('sizeHome_input');
    let building_additional = document.querySelectorAll('#additionalServices input:checked');

    // console.clear();
    // console.log('Имя: ' + form_user_name.value);
    // console.log('Телефон: ' + form_user_phone.value);
    // console.log('Email: ' + form_user_email.value);
    // console.log('Комментарий: ' + form_user_comment.value);
    // console.log('Тип дома: ' + (building_type ? building_type.value : '')); 
    // console.log('Размер дома: ' + (building_size ? building_size.value : ''));


    let additionalServicesValues = [];
    building_additional.forEach(function(checkbox) {
      additionalServicesValues.push(checkbox.value);
    });
    // console.log('Дополнительные услуги: ' + additionalServicesValues.join(', '));

    dd_typeOfConstruction.value = building_type ? building_type.value : '';
    dd_size.value = building_size ? building_size.value : '';
    dd_additionalServices.value = additionalServicesValues.join(', ');
    dd_name.value = form_user_name.value;
    dd_telephone.value = form_user_phone.value;
    dd_eMail.value = form_user_email.value;
    dd_message.value = form_user_comment.value;
    
  });
}


// Найти все элементы с id="slider_" и запустить цикл foreach по элементам
document.querySelectorAll("div[id^='slider_']").forEach(function(element) {
  let slider_id = element.attributes[0].value;
  let sliderThumbs = document.querySelector("#" + slider_id + " .catalogObjects-item-gallery-thumbs");
  let sliderMain = document.querySelector("#" + slider_id + " .catalogObjects-item-gallery");
  // console.log(sliderThumbs);
  // console.log(sliderMain);

  var swiper = new Swiper(sliderThumbs, {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(sliderMain, {
    spaceBetween: 4,
    rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
    },
    thumbs: {
        swiper: swiper,
    },
  });
}) 
