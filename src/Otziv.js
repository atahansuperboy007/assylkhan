import "./Otziv.css"

function Otziv() {
  return (
    <div className="main">
        <h1>Отзыв</h1>
      <div className="otziv">
        <p>Напишите пожалуйста ваше мнение о вашей покупки!</p>
        <input type="textarea" placeholder="Ваше мнение*" />
        <p>Напишите пожалуйста отзыв!</p>
        <input type="textarea" placeholder="Ваш отзыв*" />
        <p>Напишите пожалуйста обзор на товар!</p>
        <input type="textarea" placeholder="Ваше обзор*" />
        <p>Напишите минусы товара!</p>
        <input type="textarea" placeholder="Напишите минусы*" />
        <p>Что вы хотели бы изменить?</p>
        <input type="textarea" placeholder="Ваше мнение*" />
      </div>
        <div className="otziv-btn">
          <button className="animated-button">Отправить</button>
        </div>
    </div>
  );
}

export default Otziv;
