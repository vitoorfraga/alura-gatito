import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, FlatList, Platform } from "react-native";

import Item from "../../telas/Carrinho/Item";
import estilosGlobais, {cores} from "./../../estilos"
import estilos from "./estilos";

export default function TelaPadrao({children}){
  return (
  <>
    <SafeAreaView style={estilos.ajustesTela}>
      <StatusBar backgroundColor={cores.roxo}/>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobais.preencher}
        // style={{ flex: 1 }}
        >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajustesTelaBaixo}/>
  </>
  )
}