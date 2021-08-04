import { useRef, useState } from "react";
import "./Form.css";

function Form() {
  const siteContext = {
    uz: {
      btn_login: "Kirish",
      form_titel:
        "Biz har doim sizning ma'lumotlaringizni maxfiy saqliymiz javob !",
      first_name: "Ism:",
      first_name_placeholder: "Ismingiz",
      last_name: "Familiya:",
      last_name_placeholder: "Familiyangiz",
      email: "Email:",
      email_placeholder: "Emailingiz",
      password: "Parol:",
      password_placeholder: "Parolingiz",
      checkbox: "Man robot emasman !",
      btn_submit: "Ro'yxatdan o'tish",
    },
    en: {
      btn_login: "Log in",
      form_titel: "We will always keep your information confidential !",
      first_name: "First Name:",
      first_name_placeholder: "Your First Name",
      last_name: "Last Name:",
      last_name_placeholder: "Your Last Name",
      email: "Email:",
      email_placeholder: "Your Email",
      password: "Password:",
      password_placeholder: "Your Password",
      checkbox: "I'm not robot !",
      btn_submit: "Sign Ap",
    },
    ru: {
      btn_login: "Войти",
      form_titel: "Мы всегда сохраняем конфиденциальность вашей информации !",
      first_name: "Имя:",
      first_name_placeholder: "Ваше Имя",
      last_name: "Фамилия:",
      last_name_placeholder: "Ваша фамилия",
      email: "Эмаил:",
      email_placeholder: "Ваша Почта",
      password: "Код:",
      password_placeholder: "Ваш Пароль",
      checkbox: "Я не робот !",
      btn_submit: "Регистрация",
    },
  };

  const [lang, setLang] = useState("uz");
  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);
  const span4 = useRef(null);
  const form = useRef(null);
  const darkLight = useRef(null);
  const body = useRef(null);

  return (
    <div className="root" ref={body}>
      <div className="buttons">
        <select
          className="select"
          defaultValue={lang}
          onChange={(event) => setLang(event.target.value)}
        >
          <option className="select__option" value="uz">
            Uzbek
          </option>
          <option className="select__option" value="en">
            English
          </option>
          <option className="select__option" value="ru">
            Русский
          </option>
        </select>

        <button
          className="log_in"
          onClick={() => {
            form.current.classList.toggle("form-active");
          }}
        >
          {siteContext[lang].btn_login}
        </button>

        <button
          className="btn_fon"
          ref={darkLight}
          onClick={() => {
            darkLight.current.classList.toggle("btn_fon-active");
            body.current.classList.toggle("root-active");
          }}
        ></button>
      </div>

      <form className="form" ref={form}>
        <h1 className="form__titel">{siteContext[lang].form_titel}</h1>

        <label className="label first_name" htmlFor="first-name">
          <input
            className="input first_name__input"
            id="first-name"
            type="text"
            name="first_name"
            onChange={(e) => {
              if (e.target.value) {
                span1.current.style.bottom = "90%";
              } else {
                span1.current.style.bottom = "5px";
              }
            }}
            // placeholder={siteContext[lang].first_name_placeholder}
            required
            autoComplete="off"
          />
          <span className="span first_name__text" ref={span1}>
            {siteContext[lang].first_name_placeholder}
          </span>
        </label>

        <label className="label last_name" htmlFor="last-name">
          <input
            className="input last_name__input"
            id="last-name"
            type="text"
            name="last_name"
            onChange={(e) => {
              if (e.target.value) {
                span2.current.style.bottom = "90%";
              } else {
                span2.current.style.bottom = "5px";
              }
            }}
            // placeholder={siteContext[lang].last_name_placeholder}
            required
            autoComplete="off"
          />
          <span className="span last_name__text" ref={span2}>
            {siteContext[lang].last_name_placeholder}
          </span>
        </label>

        <label className="label email" htmlFor="email">
          <input
            className="input email__input"
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              if (e.target.value) {
                span3.current.style.bottom = "90%";
              } else {
                span3.current.style.bottom = "5px";
              }
            }}
            // placeholder={siteContext[lang].email_placeholder}
            required
            autoComplete="off"
          />
          <span className="span email__text" ref={span3}>
            {siteContext[lang].email_placeholder}
          </span>
        </label>

        <label className="label password" htmlFor="password">
          <input
            className="input password__input"
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              if (e.target.value) {
                span4.current.style.bottom = "90%";
              } else {
                span4.current.style.bottom = "5px";
              }
            }}
            // placeholder={siteContext[lang].password_placeholder}
            required
            autoComplete="off"
          />
          <span className="span password__text" ref={span4}>
            {siteContext[lang].password_placeholder}
          </span>
        </label>

        <label className="checkbox" htmlFor="check">
          <input className="check" type="checkbox" id="check" required />
          <span className="check-span"></span>
          <span className="check__text">{siteContext[lang].checkbox}</span>
        </label>

        <button className="btn" type="submit">
          {siteContext[lang].btn_submit}
        </button>
      </form>
    </div>
  );
}

export default Form;
