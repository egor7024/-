// your code goes he// Создаем объект с месяцами и событиями
const monthEvents = {
    "январь": "15 января 2001 года - запущена Википедия – крупнейшая онлайн-энциклопедия.",
    "февраль": "2 февраля 2013 года - в Австралии кенгуру ворвался в дом и избил полицейского, пытавшегося его выгнать.",
    "март": "14 марта 2011 года - в США кот по имени Стаббс стал почётным мэром города (Талкитна, Аляска) и правил 20 лет.",
    "апрель": "22 апреля 2016 года - в Германии овца сбежала из загона и три дня пряталась в кинотеатре, смотря фильмы.",
    "май": "28 мая 1959 года - в США запустили первых космических обезьян, Эйбл и Мисс Бейкер. После приземления Мисс Бейкер… вышла замуж за другого шимпанзе и жила до 1984 года.",
    "июнь": "15 июня 2017 года - в Индии обезьяны украли важные правительственные документы, требуя выкуп в виде бананов. Чиновникам пришлось согласиться.",
    "июль": "10 июля 2018 года - в Германии ёжик устроил погром в баре, катаясь по полу в пьяном угаре (на самом деле он надышался парами разлитого пива).",
    "август": "20 августа 2016 года - в Норвегии лось ворвался в библиотеку и начал «читать» книгу про… лосей.",
    "сентябрь": "17 сентября 2021 года - в Испании попугай выучил ругательства и оскорблял прохожих с балкона. Хозяин извинялся перед соседями.",
    "октябрь": "7 октября 1966 года - в Великобритании попугай сорвал свадьбу, крича 'Она ему изменяет!' в момент произнесения клятв. Птица оказалась права — через год пара развелась.",
    "ноябрь": "20 ноября 2020 года - в Турции кот победил на выборах в совет района. Его программа: 'Больше корма — меньше собак'.",
    "декабрь": "15 декабря 1977 года - в СССР белка украла ёлочные игрушки с главной городской ёлки и украсила своё дупло."
  };
  
  // Получаем элементы DOM
  const enterDateElement = document.querySelector('.enterdate');
  const sentElement = document.querySelector('.sent');
  
  // Создаем модальное окно
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '20px';
  modal.style.borderRadius = '10px';
  modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  modal.style.zIndex = '1000';
  modal.style.display = 'none';
  modal.style.maxWidth = '80%';
  modal.style.textAlign = 'center';
  
  // Добавляем кнопку закрытия
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Закрыть';
  closeButton.style.marginTop = '15px';
  closeButton.style.padding = '5px 15px';
  closeButton.style.borderRadius = '5px';
  closeButton.style.border = 'none';
  closeButton.style.backgroundColor = '#7095B4';
  closeButton.style.color = 'white';
  closeButton.style.cursor = 'pointer';
  
  modal.appendChild(closeButton);
  document.body.appendChild(modal);
  
  // Функция для отображения события
  function showEvent(month) {
    const lowerMonth = month.toLowerCase();
    if (monthEvents.hasOwnProperty(lowerMonth)) {
      const eventText = document.createElement('p');
      eventText.textContent = monthEvents[lowerMonth];
      eventText.style.marginBottom = '15px';
      
      // Очищаем предыдущий текст перед добавлением нового
      while (modal.firstChild !== closeButton) {
        modal.removeChild(modal.firstChild);
      }
      
      modal.insertBefore(eventText, closeButton);
      modal.style.display = 'block';
    } else {
      alert('Пожалуйста, введите корректное название месяца (например, "январь")');
    }
  }
  
  // Обработчик клика по кнопке "отправить"
  sentElement.addEventListener('click', function() {
    const month = enterDateElement.textContent.trim();
    if (month) {
      showEvent(month);
    } else {
      alert('Пожалуйста, введите месяц');
    }
  });
  
  // Обработчик клика по кнопке закрытия
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    enterDateElement.textContent = ''; // Очищаем поле ввода
  });
  
  // Делаем поле ввода редактируемым
  enterDateElement.contentEditable = true;
  enterDateElement.style.display = 'flex';
  enterDateElement.style.justifyContent = 'center';
  enterDateElement.style.alignItems = 'center';

// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Сохраняем состояние темы в localStorage
const isDark = document.body.classList.contains('dark-theme');
localStorage.setItem('darkTheme', isDark);
}
  
  // Проверяем сохранённую тему при загрузке
document.addEventListener('DOMContentLoaded', () => {
const savedTheme = localStorage.getItem('darkTheme');
if (savedTheme === 'true') {
    document.body.classList.add('dark-theme');
}
    
    // Инициализируем иконку в зависимости от текущей темы
const themeIcon = document.querySelector('.theme-icon');
if (document.body.classList.contains('dark-theme')) {
    themeIcon.src = "https://cdn-icons-png.flaticon.com/512/979/979585.png"; // Солнце
} else {
    themeIcon.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png"; // Луна
}
});
  
  // Добавляем обработчик клика на переключатель темы
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', function() {
toggleTheme();
    
    // Меняем иконку после переключения темы
const themeIcon = document.querySelector('.theme-icon');
if (document.body.classList.contains('dark-theme')) {
    themeIcon.src = "https://cdn-icons-png.flaticon.com/512/979/979585.png"; // Солнце
} else {
    themeIcon.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png"; // Луна
}
});
