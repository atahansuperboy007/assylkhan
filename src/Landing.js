import "./landing.css";

function Landing() {
  return (
    <>
      <div class="main-screen">
        <div class="container">
          <div className="main-inner">
            <h1>Привествуем вас!</h1>
            <p>Здесь вы сможете выбрать подходящий вам товар.</p>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>О нас!</h1>
        <p>
          Мы начинающая компания, по продаже товаров. <br /> Например продажа
          электроников, смартфонов, телевизоров и компьютеров.
        </p>
        <div className="nad">
          <div className="otziv">
            <h1>Отзывы наших покупателей.</h1>
          </div>
          <div className="people">
            <div className="people-1">
              <img
                src="https://img-s3.onedio.com/id-58aac967c258b7e21c78da82/rev-0/w-635/listing/f-jpg-webp/s-3e4c28ef1c6b9273f3a9d8187dd4a72f90382f43.webp"
                alt="photo"
              />
              <h1>Сергей</h1>
              <p>
                "Спасибо огромное этой компании за отличный товар. Уже 2 неделю
                радуюсь своему смартфону!"
              </p>
            </div>
            <div className="people-4">
              <img
                src="https://img-s3.onedio.com/id-58aac967c258b7e21c78da7c/rev-0/w-635/listing/f-jpg-webp/s-447151d55f6d329e8853dfaba8a485168c710595.webp"
                alt="photo"
              />
              <h1>Андрей</h1>
              <p>
                "Отлично, что появиласть такая компания и такие хорошие
                сотрудники, которые подскажут где и когда!"
              </p>
            </div>
            <div className="people-5">
              <img
                src="http://mirfactov.com/wp-content/uploads/2016/08/5-100.jpg"
                alt="photo"
              />
              <h1>Владимир</h1>
              <p>
                "Желаю успеха вашей компании и больших покупателей. Главное
                отличное качество и обслуживание!"
              </p>
            </div>
            <div className="people-2">
              <img
                src="http://mirfactov.com/wp-content/uploads/2016/08/3-144-620x620.jpg"
                alt="photo"
              />
              <h1>Михаил</h1>
              <p>
                "Очень понравился телевизор плазменный. Такой необыкновенный и
                качество шикарное!"
              </p>
            </div>
            <div className="people-3">
              <img
                src="https://bugaga.ru/uploads/posts/2016-02/1456422938_simmetrichnye-lica-10.jpg"
                alt="photo"
              />
              <h1>Антон</h1>
              <p>
                "Спасибо вам за качественный товар и отличное обслуживание.
                Таких сотрудников, я вообще никогда не видел!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
