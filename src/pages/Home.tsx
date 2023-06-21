import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<string[]>([])

  function handleAddNewSkill() {
    if (newSkill !== '') setMySkills((oldState) => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo, Felipe</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova Habilidade"
        placeholderTextColor="#555"
        onChangeText={(value) => setNewSkill(value)}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 40 }]}>
        Minhas Habilidades
      </Text>

      {mySkills.map((skill, index) => (
        <TouchableOpacity
          style={styles.buttonSkill}
          activeOpacity={0.8}
          key={index}
        >
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
})
