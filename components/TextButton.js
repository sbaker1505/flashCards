import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, blue } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: white,
  }
})
