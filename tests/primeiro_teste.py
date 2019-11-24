import teste as t

#Teste que simula o acesso a home juntamente com o login na aplicacao

def processar_home():
    t.processar_entrada_app()
    home = t.driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[1]/a/p')
    home.click()



def main():
    '''executa primeiro caso'''
    processar_home()

    
if __name__ == '__main__':
    main()

