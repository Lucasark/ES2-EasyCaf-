import teste as t


# Teste de consulta de listagem de exame

def processar_consulta_exame():
    t.processar_entrada_app()
    exame = t.driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[3]/a/p')
    exame.click()

    table = t.driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/table')
    try:    
        rows = table.find_element_by_xpath('//*[@id="main-panel"]/div/div/table/tbody/tr[2]')
    except:
        print('TODO resolver processar consulta exame')
    ''' botao que nao consigo acessar'''
    # button = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/table/tbody/tr[1]/td[5]').text



def main():
    ''' executa terceiro caso'''
    processar_consulta_exame()
    
if __name__ == '__main__':
    main()

