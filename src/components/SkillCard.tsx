import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.8} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
