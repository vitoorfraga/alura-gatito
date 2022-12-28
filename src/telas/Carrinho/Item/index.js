import React, { useState } from "react";

import { Text, View,} from "react-native";
import Botao from "../../../componentes/Botao";
import Campointeiro from "../../../componentes/Campointeiro";

import estilos from "./estilos";


export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}){

    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);


    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade)
        calculaTotal(novaQuantidade)
    }


    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    }

    const invertExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1)
    }

    return(
        <>
        <View style={estilos.informacao}
            onPress={invertExpandir}
        >
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
                }
            </Text>
        </View>

        
        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <Campointeiro
                        estilos={estilos.quantidade}
                        valor={quantidade}
                        acao={atualizaQuantidadeTotal}
                        />
                </View>

                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Total:</Text>
                    <Text style={estilos.preco}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)}
                    </Text>
                </View>
            </View>

            <Botao 
                valor="Remover do Carrinho"
                />
        </View>

        <View style={estilos.divisor} />
        </>
    )
}