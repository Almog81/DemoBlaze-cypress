export class HomePage{
    //Opjects
    btn_login = '#login2'

    //Actions
    navigate(url){
        cy.visit(url)
    }
    

}