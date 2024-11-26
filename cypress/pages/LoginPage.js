export class LoginPage{
    //Opjects
    btn_login = '#login2'
    txt_username = '#loginusername'
    txt_password = '#loginpassword'
    btn_submit = '*[onclick="logIn()"]'
    txt_nameOfUser = '#nameofuser'


    //Actions
    login(username, password){
        cy.get(this.btn_login).click()
        cy.wait(500)
        cy.get(this.txt_username) //automatedUser26@example.com
            .type(username)
        cy.get(this.txt_password)//4r4nd0mp4ssw0rd
            .type(password)
        cy.get(this.btn_submit).click()
        cy.get(this.txt_nameOfUser).should('contain', username)
    }
}