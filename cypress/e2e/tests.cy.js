describe('Проверка авторизации', function () {

  const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/tests.cy.{js,jsx,ts,tsx}',
  },
});


    beforeEach('Начало теста', function () {
          cy.visit('/');
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            });
 
    it('Верный пароль и верный логин', function () {
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })
 
    it('Верный логин и неверный пароль', function () {
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio2');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     
    it('Неверный логин и верный пароль', function () {
            cy.get('#mail').type('germannn@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio2');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })
       it('Валидация на наличие @', function () {
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })
 
        it('Восстановление пароля', function () {
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })

     it('Приведение к строчным буквам', function () {
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
 })
 