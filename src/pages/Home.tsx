import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native'

interface ISkill {
  id: string
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<ISkill[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    if (newSkill !== '') setMySkills((oldState) => [...oldState, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGreeting('Bom dia!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde!')
    } else {
      setGreeting('Boa noite!')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo, Felipe</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova Habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Adicionar" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 40 }]}>
        Minhas Habilidades
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
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
  greetings: {
    color: '#fff',
  },
})
