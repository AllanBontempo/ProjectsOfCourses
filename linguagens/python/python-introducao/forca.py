def jogar():

    print('********************************\n')
    print("   Bem vindo ao jogo de Forca!  ")
    print('********************************\n')


    palavra_secreta = "banana"
    letras_acertadas = ["_","_","_","_","_","_"]



    enforcou = False
    acertou = False

    while (not enforcou and not acertou):
        print("{}\n".format(letras_acertadas))
        # print("  ____")
        # print(" |    |")
        # print(" |")
        # print(" |")
        # print(" |")
        chute = input("Qual a letra? \n")
        chute = chute.lower()
        chute = chute.strip()

        index = 0

        for letra in palavra_secreta:
            if chute == letra.lower():
               letras_acertadas[index] = letra
            index = index + 1




    print("Fim de jogo!")

if __name__ == "__main__":
    jogar()