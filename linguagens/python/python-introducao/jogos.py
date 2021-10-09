import forca
import advinhacao


def escolherJogo():
        
    print('********************************')
    print("*****Escolha o jogo desejado:***")
    print('********************************\n')


    print("(1) Para Advinhação\n(2) Para a Forca")

    jogo = int(input("Qual jogo?"))

    if jogo == 1:
        advinhacao.jogar()
    elif jogo == 2:
        forca.jogar()

if __name__ == "__main__":
    escolherJogo()