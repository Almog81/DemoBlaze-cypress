/// <reference types="cypress" />

import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
let homePage = new HomePage()
let loginPage = new LoginPage()

describe('Test DemoBlaze Web', () => {
  it('Test 01: login', () => {
    homePage.navigate('https://www.demoblaze.com/')
    loginPage.login('automatedUser26@example.com','4r4nd0mp4ssw0rd')
  })
})