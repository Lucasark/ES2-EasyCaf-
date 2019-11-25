import teste as t


# Quarto teste que simula o cadastro de um exame em sua fase inicial

def processar_cadastro_exame():
    t.processar_entrada_app()
    realizar_exame = t.driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[4]/a/p')
    realizar_exame.click()

    opcao_motivo = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[3]/div[1]/div/div[1]/label[1]')
    opcao_motivo.click()

    opcao_hda = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[3]/div[2]/div[2]/label[2]')
    opcao_hda.click()

    fatores_risco = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[4]/div/div[2]/div[1]/label[2]')
    fatores_risco.click()

    dac = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[4]/div/div[2]/div[3]/div/label[1]')
    dac.click()

    comorbidades = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[4]/div/div[2]/div[4]/div/label[3]')
    comorbidades.click()

    eco = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[1]/label[2]')
    eco.click()

    te = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[3]/label[3]')
    te.click()

    cat = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[4]/label[1]')
    cat.click()

    cm = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[5]/label[2]')
    cm.click()

    bloq_calcio = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[6]/div/div[1]/div[1]/input')
    bloq_calcio.send_keys('45ml')

    finalizar = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[6]/button')
    finalizar.click()

    voltar = t.driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[3]/a/p')
    voltar.click()



def main():
    ''' executar quarto caso '''
    processar_cadastro_exame()
    
if __name__ == '__main__':
    main()

