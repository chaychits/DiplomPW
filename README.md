# 🎓 DiplomPW

### 🚀 Масштабируемый фреймворк автоматизированного тестирования UI + API

## 📌 О проекте

**DiplomPW** — дипломный проект по автоматизации тестирования веб-приложения с использованием **JavaScript + Playwright**.
Основная цель проекта — создать не набор отдельных тестов, а **масштабируемый тестовый фреймворк**, который можно расширять новыми UI и API сценариями без дублирования кода.

---

# 🎯 Цели проекта

В рамках проекта реализованы:

* ✅ UI автоматизация;
* ✅ API автоматизация;
* ✅ Page Object Model;
* ✅ Facade Pattern;
* ✅ Fixture-based архитектура;
* ✅ Builder Pattern;
* ✅ генерация тестовых данных через Faker;
* ✅ Allure Report;
* ✅ Allure TestOps;
* ✅ GitHub Actions;
* ✅ Jenkins;
* ✅ Telegram Notifications;
* ✅ хранение секретов через environment variables;
* ✅ разделение UI и API тестов;
* ✅ единая структура проекта для дальнейшего расширения.

---

# 🧪 Тестируемое приложение

### 🖥️ UI

Для UI-тестов используется веб-приложение:

[**RealWorld QA Guru**][https://realworld.qa.guru/]

Тестируются пользовательские сценарии регистрации, авторизации и работы со статьями.

### 🔌 API

Для API-тестирования используется:

**[API Challenges — EvilTester](https://apichallenges.eviltester.com)**

---

# 📁 Структура проекта

DiplomProject_PW/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── notifications/
│   ├── allure-notifications-5.0.2.jar
│   └── config.json
│
├── src/
│   ├── builders/
│   │
│   ├── fixtures/
│   │
│   ├── pages/
│   │
│   ├── services/
│   │
│   └── index.js
│
├── tests/
│   ├── api_tests/
│   │   ├── Challenger.spec.js
│   │   ├── Challenges.spec.js
│   │   └── Todos.spec.js
│   │
│   └── ui_tests/
│       ├── article.spec.js
│       ├── auth.spec.js
│       └── favorite.spec.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md


---

# ⚙️ Установка

## 1. Клонирование проекта

git clone https://github.com/chaychits/DiplomProject_PW.git


## 2. Установка зависимостей

npm ci

## 3. Установка браузера Chromium

npx playwright install chromium


# 🔐 Переменные окружения

Секретные данные не хранятся непосредственно в исходном коде.

Для локального запуска используется файл:

.env

Пример переменных находится в:

.env.example


Секреты CI/CD хранятся в соответствующих настройках GitHub Actions и Jenkins.

---

# ▶️ Запуск тестов

## Все тесты

npx playwright test

---

## UI-тесты

npx playwright test tests/ui_tests

---

## API-тесты

npx playwright test tests/api_tests

---

## Запуск в UI Mode

npm run ui

---

## Запуск с HTML Report

npx playwright show-report

---

# 📊 Allure Report
![Allure Report](AllureSuitesDiplom.png)


# ☁️ Allure TestOps
![Allure TestOps](TestopsDiplom.png)

Результаты автоматизированного тестирования автоматически отправляются в **Allure TestOps**. 

Результаты запуска доступны в Allure TestOps после выполнения CI/CD.

---

# 🤖 Telegram Notifications

После выполнения тестов формируется уведомление в Telegram.
![Telegram](TelegramDiplom.png)
---

# 🔄 CI/CD

В проекте реализована интеграция с двумя CI/CD системами.

## 🐙 GitHub Actions

![Git hub](GithubaActionsDiplom.png)

## 🔧 Jenkins

![Jenkins](JenkinsDiplom.png)

---