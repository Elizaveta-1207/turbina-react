# **Turbina**

[**visit site**](https://alex-kurkov.github.io/turbina-react/)
### tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/053db1e58e79fc70e86f/maintainability)](https://codeclimate.com/github/alex-kurkov/turbina-react/maintainability)
[![Linter CI](https://github.com/alex-kurkov/turbina-react/workflows/Linter%20CI/badge.svg)](https://github.com/alex-kurkov/turbina-react/actions)

[En](#Content) [Ru](#Содержание)  
---

### **Content**
  - [About](#About-Turbina-web-project)
  - [Cofiguring app](#Cofiguring-app)
  - [Form Validation](#Form-Validation)
  - [Features](#Features)


## About Turbina web project
A non-commercial project by [Marshak](https://marshakbooks.ru/) publishing House and [Yandex.Praktikum](https://praktikum.yandex.ru/)

## Cofiguring app
The app can be configured by changing data of `turbinaconfig.js` in `/src/` directory

### You can: ###
- Set color of logos, player texts and buttons, streamings menu buttons by changing `header.style.color` value 
```js
  header: {
    style: {
      color: '#fff',
    },
  },
```
- Customize background image by changing `customBackground` key and providing custom image url in `background` key
```js
  background: {
    customBackground: false,
    style: {
      background: 'url([your url here])',
    },
  },
```
- define publishing logo link

- set Streamings menu links and button-titles 

- Provide your custom texts and titles for as many as you want InfoBlocks in subsequent article keys

## Form Validation
  The provided submit form enables live validation and disables submit button while any of inputs is invalid.
  The validated parameters are partially tested by regular Expressions and partially by text length.
  While live validation indicates error messages of only the active input field, other invalid inputs are highlighted by red asterisks.
  *Still waiting for the backend readiness to develop server interaction*

## Features
  - live gradient Background
  - music-dependant Logo live color filling
  - colors configuered
  - running-line (ticker) in player's song title adapting to window size
  - default cover for unsupplied covers
  - adaptive disign
  - loader upon api fetch requests
  - song playback position change by click or grag&drop on the player timeline (progress-bar)
  - smaller UX/UI features:
> clip button disabled, but shown, if no clip is provided to trigger user interest to other tracks
>
> red asterisk indication of invalid input forms
>
> svg and other images compressed to boost loading
>
> as of Nov, 14, 2020, server-responses are imitated
>
> default cover for unsupplied covers

  made with React framework & styled-components
**Developers: Alex Kurkov, Elizabeth Timonina, Grigory Abramov**

### **Содержание**
  - [О проекте](#О-проекте)
  - [Конфигурация приложения](#Конфигурация-приложения)
  - [Валидация формы](#Валидация-формы)
  - [Особенности](#Особенности)


## О проекте
Некоммерческий проект издательства Маршак и Яндекс.Практикум

## Конфигурация приложения
Приложение может быть сконфигурировано путем изменения полей в файле `turbinaconfig.js` в директории `/src/` перед деплой-сборкой, также предполагается дальнейшая настройка через страницу администратора

### Вы можете: ###
- Установить цвет всех логотипов, кнопок и текстов меню, кнопок, текстов, бегунка времени в плеере, поменяв это свойство: 
```js
  header: {
    style: {
      color: '#fff',
    },
  },
```
- Также возможна установка любого изображения на статичный фон страницы путем установки ключа `customBackground` в true и записи ссылки на изображение в `background`
```js
  background: {
    customBackground: false,
    style: {
      background: 'url([your url here])',
    },
  },
```
Также можно сконфигурировать через `turbinaconfig.js`:
- ссылку на сайт издательства

- названия и ссылки кнопок меню Стриминги 

- тексты и заголовки неограниченного количества статей в инфоблоке

## Валидация формы
Форма отправки использует "живую валидацию" активного поля, показывая пользователю возможные ошибки, при этом другие невалидные поля не отображают ошибки, но помечаются небольшим красным индикатором. Кнопка "Отправить" до тех пор, пока все поля не валидны. *В настоящее время серверная часть приложения находится в процессе разработки, поэтому применена кодовая имитация обмена данными с сервером с рандомной выдачей результата обмена.*


## Особенности
  - живой градиентный фон по-умолчанию
  - градиентная заливка логотипа в зависимости от частот музыкального трека
  - конфигурационный файл (см [выше](#Конфигурация-приложения))
  - Бегущая строка названия трека, адаптирующаяся к размеру окна 
  - адаптивный дизайн
  - индикация загрузки
  - перемотка трека путем клика либо перетаскивания бегунка на индикаторе проигрывания плеера 
  - небольшие фишки UX/UI:
> затемнение и отключение кнопки клип, при отсутсвии клипа (рендер кнопки сохранен для пробуждения внимания к другим трекам, у которых есть клип)
>
> живая индикация валидности формы в режимах активного и неактивного ввода
>
> компрессия изображений, где возможно - применена легкая векторная графика
>
> имитация работы сервера (до готовности бэкэнда)
>
> дефолтная обложка музыкального трека при невозможности загрузить оригинал

сделано на React с использованием styled-components

**Разработчики: Курков Алексей, Тимонина Елизавета, Абрамов Григорий**

--------
[connect me / напишите мне](mailto:alexkourkov@yandex.ru "Email")
