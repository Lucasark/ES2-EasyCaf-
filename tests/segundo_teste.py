import teste as t

# Teste que simula o cadastro de paciente

def processar_cadastro_paciente():
    t.processar_entrada_app()
    paciente = t.driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[2]/a/p')
    paciente.click()

    cadastro_paciente = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[1]/button[2]')
    cadastro_paciente.click()

    cpf = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[1]')
    cpf.send_keys('4563434343')

    nome = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[2]')
    nome.click()
    nome.send_keys('Fulana')
    
    email = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[3]')
    email.click()
    email.send_keys('fulana.silva@gmail.com')
    
    data = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[4]')
    data.click()
    data.send_keys('03051995')
    data.click()
    
    peso = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[5]')
    peso.click()
    peso.send_keys('25')
    
    altura = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[6]')
    altura.click()
    altura.send_keys('1,70')
    
    sexo = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[7]')
    sexo.click()
    sexo.send_keys('Feminino')

    botao = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/button')
    botao.click()

def main():
    ''' executa segundo caso'''
    processar_cadastro_paciente()
    
    
if __name__ == '__main__':
    main()

