const { Category, Product } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          title: 'Еда',
          Products: [
            {
              title: 'Батон нарезной',
              description: 'Свежий хлеб, из высшего сорта пшеничной муки.',
              price: 30,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Варёная колбаса',
              description: 'Докторская варёная колбаса из свинины',
              price: 220.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Яйца куриные',
              description:
                'Яйца куриные сорт: 0. Большие и очень желтым желтком.',
              price: 125.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Сыр Чеддер',
              description:
                'Сыр Чеддер, выдержанный 12 месяцев. Идеально подходит для бургеров.',
              price: 180.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Оливки зеленые',
              description: 'Зелёные оливки, маринованные в оливковом масле.',
              price: 90.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Мед натуральный',
              description:
                'Натуральный мед, собранный в экологически чистых районах.',
              price: 150.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Картошка фри',
              description:
                'Картошка фри, приготовленная с использованием специальных приправ.',
              price: 80.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Свежевыжатый апельсиновый сок',
              description: 'Сок из свежих апельсинов, богатый витамином C.',
              price: 120.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Шоколадные печенья',
              description: 'Печенья с кусочками шоколада, нежные и ароматные.',
              price: 50.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Молоко коровье',
              description: 'Свежее молоко от здоровых коров, богатое кальцием.',
              price: 60.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Курица целиком',
              description:
                'Курица целиком, свежая и нежная. Подходит для жарки и запекания.',
              price: 180.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Говядина мраморная',
              description:
                'Мраморная говядина, отличается нежностью и богатым вкусом.',
              price: 250.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Печенье с орехами',
              description:
                'Печенье с добавлением грецких орехов, ароматное и хрустящее.',
              price: 60.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Мороженое ванильное',
              description:
                'Ванильное мороженое, созданное из натуральных ингредиентов.',
              price: 70.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Гречка отварная',
              description:
                'Отварная гречка, идеальное гарнир для вашего обеда.',
              price: 40.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Фруктовый салат',
              description:
                'Свежий фруктовый салат с добавлением разнообразных фруктов.',
              price: 90.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Сырок глазированный',
              description:
                'Сырок в глазури, нежный десерт для настоящих гурманов.',
              price: 35.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Пельмени домашние',
              description:
                'Домашние пельмени с мясным фаршем, готовы к варке или жарке.',
              price: 55.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Кефир натуральный',
              description:
                'Натуральный кефир, богатый пробиотиками для поддержания здоровья кишечника.',
              price: 25.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
            {
              title: 'Помидоры черри',
              description:
                'Сладкие и сочные помидоры черри, идеальные для салатов и закусок.',
              price: 80.0,
              img: 'https://miro.medium.com/v2/resize:fit:1400/1*ux3AysWDzP_JuL6aiu8NHQ.jpeg',
            },
          ],
        },
        {
          title: 'Одежда',
          Products: [
            {
              title: 'Футболка поло',
              description: 'Классическая футболка поло из мягкого хлопка.',
              price: 25.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Джинсы скинни',
              description:
                'Джинсы скинни с высокой посадкой, идеальные для повседневной носки.',
              price: 50.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Куртка бомбер',
              description:
                'Стильная куртка бомбер, подходит для прохладной погоды.',
              price: 80.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Кроссовки для бега',
              description:
                'Удобные кроссовки для бега с амортизацией в подошве.',
              price: 70.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Платье коктейльное',
              description: 'Элегантное коктейльное платье для особых случаев.',
              price: 120.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Пальто пуховое',
              description: 'Теплое пуховое пальто для холодных зимних дней.',
              price: 180.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Блузка с воланами',
              description: 'Блузка с воланами, создает женственный образ.',
              price: 60.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Пиджак классический',
              description: 'Классический пиджак для офисного стиля.',
              price: 150.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Шорты джинсовые',
              description: 'Джинсовые шорты для летнего стиля.',
              price: 40.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Костюм спортивный',
              description: 'Спортивный костюм для активного отдыха.',
              price: 90.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Юбка мини',
              description: 'Мини-юбка для стильных образов.',
              price: 35.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Свитер с капюшоном',
              description: 'Теплый свитер с капюшоном для холодного сезона.',
              price: 55.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Туфли на каблуке',
              description: 'Туфли на каблуке для элегантных образов.',
              price: 70.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Пижама комбинезон',
              description: 'Удобная пижама-комбинезон для домашнего отдыха.',
              price: 45.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
            {
              title: 'Кепка с логотипом',
              description: 'Кепка с логотипом для спортивного стиля.',
              price: 20.0,
              img: 'https://cdn5.vedomosti.ru/image/2022/7b/zcp8b/original-19tf.jpg',
            },
          ],
        },
        {
          title: 'Электроника',
          Products: [
            {
              title: 'Наушники беспроводные',
              description: 'Беспроводные наушники с качественным звуком.',
              price: 100.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Умные часы',
              description: 'Умные часы с функцией отслеживания активности.',
              price: 150.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Фотоаппарат зеркальный',
              description:
                'Зеркальный фотоаппарат для профессиональной съемки.',
              price: 500.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Ноутбук с SSD',
              description: 'Ноутбук с быстрым твердотельным накопителем.',
              price: 800.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Смартфон с высоким разрешением',
              description:
                'Смартфон с качественным дисплеем высокого разрешения.',
              price: 600.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Планшет с стилусом',
              description:
                'Планшет с сенсорным экраном и стилусом для рисования.',
              price: 300.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Видеокамера для стриминга',
              description:
                'Видеокамера высокого разрешения для профессионального стриминга.',
              price: 250.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Геймерский компьютер',
              description:
                'Мощный компьютер для игр с высокой производительностью.',
              price: 1200.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Принтер с Wi-Fi',
              description:
                'Принтер с беспроводной связью для удобной печати документов.',
              price: 100.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Внешний жесткий диск',
              description:
                'Внешний жесткий диск большой емкости для хранения данных.',
              price: 80.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Беспроводной роутер',
              description:
                'Маршрутизатор с технологией беспроводной связи для высокоскоростного интернета.',
              price: 60.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Гарнитура с шумоподавлением',
              description:
                'Беспроводная гарнитура с технологией шумоподавления.',
              price: 90.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Электронная книга',
              description: 'Современная электронная книга с подсветкой экрана.',
              price: 70.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Умный домашний кинотеатр',
              description:
                'Комплексное решение для создания умного домашнего кинотеатра.',
              price: 500.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Монитор с тонкими рамками',
              description:
                'Монитор с высоким разрешением и тонкими рамками для стильного дизайна.',
              price: 180.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Смарт-пульт дистанционного управления',
              description:
                'Смарт-пульт для управления всеми устройствами в доме.',
              price: 40.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Игровая мышь с подсветкой',
              description:
                'Продвинутая игровая мышь с настраиваемой подсветкой.',
              price: 60.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Смарт-термостат для дома',
              description:
                'Умный термостат для автоматического контроля температуры в доме.',
              price: 120.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Веб-камера высокого разрешения',
              description:
                'Веб-камера с высоким разрешением для качественных видеозвонков.',
              price: 45.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Беспроводная клавиатура с тачпадом',
              description:
                'Компактная беспроводная клавиатура с встроенным тачпадом.',
              price: 80.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
            {
              title: 'Смартфон с двойной камерой',
              description:
                'Смартфон с двойной камерой для качественных фотоснимков.',
              price: 200.0,
              img: 'https://www.iguides.ru/upload/medialibrary/292/pcxqntinm70kft3ydt3tzjd72kd0jr1k.png',
            },
          ],
        },
      ],
      { include: [Product] }
    );
  },

  async down(queryInterface, Sequelize) {
    await Category.destroy({ truncate: { cascade: true } });
  },
};

