import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";

// console.log(Tabela.arrayLinhas)






 const arrayObjeto = [
	{
		habit_title: "bater ponto corretamente",
		habit_description: "bater ponto todos os dias nos horários corretos",
		habit_category: "trabalho"
	},
	{
		habit_title: "Estudar 4 horas por dia",
		habit_description: "focar nos estudos durante no mínimo 4 horas por dia",
		habit_category: "trabalho"
	},
	{
		habit_title: "Jogar vôlei aos domingos",
		habit_description: "Jogar vôlei todo domingo",
		habit_category: "lazer"
	}
]

Requisicoes.realAll()

// arrayObjeto
