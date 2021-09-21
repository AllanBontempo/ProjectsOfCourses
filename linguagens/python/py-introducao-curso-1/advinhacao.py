print('********************************')
print("Bem vindo ao jogo de Advinhação!")
print('********************************\n')

numero_secreto = 5
total_de_tentativas = 3

while total_de_tentativas > 0:

    print("Você tem {} tentativas".format(total_de_tentativas))

    chute = int(input("Digite o seu número: "))

    print("Você digitou:", chute)

    if numero_secreto == chute:
        print("Parabéns! O número está correto!\n")
        break
    else:
        if chute > numero_secreto:
            print("Você errou! Seu número é maior que o número secreto!\n")
        elif chute < numero_secreto:
            print("Você errou! O seu chute foi menor que o número secreto!\n")

    total_de_tentativas = total_de_tentativas - 1

print("Fim de jogo!")
