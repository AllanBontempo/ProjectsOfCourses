class Programa:
    def __init__(self, nome, ano):
        self.__nome = nome.title()
        self.__ano = ano
        self.__likes = 0

    @property
    def likes(self):
        return self.__likes

    def dar_like(self):
        self.__likes += 1

    @property
    def nome(self):
        return self.__nome

    @nome.setter
    def nome(self, novo_nome):
        self.__nome = novo_nome.title()

    @property
    def ano(self):
        return self.__ano

    @ano.setter
    def ano(self, novo_ano):
        self.__ano = novo_ano

    def __str__(self):
        return f'Nome: {self.nome}, Ano: {self.ano}, Likes: {self.likes}'


class Filme(Programa):
    def __init__(self, nome, ano, duracao):
        super().__init__(nome, ano)
        self.duracao = duracao

    def __str__(self):
        return f'Nome: {self.nome}, Ano: {self.ano}, Duração: {self.duracao}, Likes: {self.likes}'


class Serie(Programa):
    def __init__(self, nome, ano, temporadas):
        super().__init__(nome, ano)
        self.temporadas = temporadas

    def __str__(self):
        return f'Nome: {self.nome}, Ano: {self.ano}, Duração: {self.temporadas}, Likes: {self.likes}'


class PlayList:
    def __init__(self, nome, programas):
        self.nome = nome
        self.__programas = programas

    @property
    def listagem(self):
        return self.__programas

    @property
    def tamanho_lista(self):
        return len(self.__programas)


vingadores = Filme("Vingadores", 2012, "1h30m")
tmep = Filme("Todo mundo em pânico", 2008, "2h")
atlanta = Serie("Atlanta", 2018, 2)

vingadores.dar_like()
vingadores.dar_like()
atlanta.dar_like()
vingadores.dar_like()
tmep.dar_like()

filmes_e_series = [vingadores, atlanta, tmep]

playlist_fim_de_semana = PlayList("Playlist de fim de semana", filmes_e_series)

print(f'Tamanho da playlist: {len(playlist_fim_de_semana.listagem)}')

for programa in playlist_fim_de_semana.listagem:
    print(programa)


