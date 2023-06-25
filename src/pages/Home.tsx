import { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<string[]>([])
  const [greeting, setGreeting] = useState('')

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
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 40 }]}>
        Minhas Habilidades
      </Text>

      <FlatList
        data={mySkills}
        renderItem={({ item }) => <SkillCard skill={item} />}
        keyExtractor={(item) => item}
      />
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
})
