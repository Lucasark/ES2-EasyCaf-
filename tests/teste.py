from selenium import webdriver

#configurando driver
driver = webdriver.Chrome("chromedriver.exe")

#inicializando busca com o selenium
driver.get("https://frontend-es2.herokuapp.com/menu/inicio")

def processar_entrada_app():
    botao_inicio = driver.find_element_by_xpath('//*[@id="root"]/div/nav/div/div[2]/a')
    botao_inicio.click()

    nome = driver.find_element_by_xpath('//*[@id="formGridReg"]')
    nome.send_keys('ygor')

    senha = driver.find_element_by_xpath('//*[@id="formGridSenha"]')
    senha.click()
    senha.send_keys('*****')

    entrar = driver.find_element_by_xpath('//*[@id="root"]/div/div/form/button')
    entrar.click()

def processar_cadastro_paciente():
    paciente = driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[2]/a/p')
    paciente.click()

    cadastro_paciente = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[1]/button[2]')
    cadastro_paciente.click()

    cpf = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[1]')
    cpf.send_keys('4563434343')

    nome = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[2]')
    nome.click()
    nome.send_keys('Fulana')
    
    email = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[3]')
    email.click()
    email.send_keys('fulana.silva@gmail.com')
    
    data = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[4]')
    data.click()
    data.send_keys('03051995')
    data.click()
    
    peso = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[5]')
    peso.click()
    peso.send_keys('25')
    
    altura = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[6]')
    altura.click()
    altura.send_keys('1,70')
    
    sexo = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/input[7]')
    sexo.click()
    sexo.send_keys('Feminino')
    
    confirmar = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[2]/form/div/button')
    confirmar.click()

def processar_consulta_exame():
    processar_entrada_app()
    exame = driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[3]/a/p')
    exame.click()

    table = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/table')
    try:    
        rows = table.find_element_by_xpath('//*[@id="main-panel"]/div/div/table/tbody/tr[2]')
    except:
        print('TODO resolver processar consulta exame')
    ''' botao que nao consigo acessar'''
    # button = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/table/tbody/tr[1]/td[5]').text

def processar_home():
    processar_entrada_app()
    home = driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[1]/a/p')
    home.click()


def processar_cadastro_exame():
    processar_entrada_app()
    realizar_exame = driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[4]/a/p')
    realizar_exame.click()

    opcao_motivo = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[3]/div[1]/div/div[1]/label[1]')
    opcao_motivo.click()

    opcao_hda = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[3]/div[2]/div[2]/label[2]')
    opcao_hda.click()

    fatores_risco = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[4]/div/div[2]/div[1]/label[2]')
    fatores_risco.click()

    dac = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[4]/div/div[2]/div[3]/div/label[1]')
    dac.click()

    comorbidades = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[4]/div/div[2]/div[4]/div/label[3]')
    comorbidades.click()

    eco = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[1]/label[2]')
    eco.click()

    te = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[3]/label[3]')
    te.click()

    cat = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[4]/label[1]')
    cat.click()

    cm = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[5]/div/div[2]/div[5]/label[2]')
    cm.click()

    bloq_calcio = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[6]/div/div[1]/div[1]/input')
    bloq_calcio.send_keys('45ml')

    finalizar = driver.find_element_by_xpath('//*[@id="main-panel"]/div/div/div[6]/button')
    finalizar.click()

    voltar = driver.find_element_by_xpath('//*[@id="sidebar"]/div[2]/ul/li[3]/a/p')
    voltar.click()
    
    
    
def main():
    '''executa primeiro caso'''
    #processar_home()
    ''' executa segundo caso'''
    #processar_cadastro_paciente()
    ''' executa terceiro caso'''
    #processar_consulta_exame()
    ''' executar quarto caso '''
    processar_cadastro_exame()
    
if __name__ == '__main__':
    main()

