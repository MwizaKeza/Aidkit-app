import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const ExitQuiz = ({ questions, onComplete }) => {
    const limitedQuestions = questions.slice(0, 3); // Only allow the first 3 questions
    const [selectedAnswers, setSelectedAnswers] = useState(Array(limitedQuestions.length).fill(null));
  
    const handleAnswerSelect = (questionIndex, answerIndex) => {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      setSelectedAnswers(updatedAnswers);
    };
  
    const handleQuizSubmit = () => {
      onComplete(selectedAnswers);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.quizTitle}>Exit Quiz</Text>
        {limitedQuestions.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.text}</Text>
            {question.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.optionButton,
                  selectedAnswers[questionIndex] === optionIndex
                    ? styles.selectedOption
                    : null,
                ]}
                onPress={() => handleAnswerSelect(questionIndex, optionIndex)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleQuizSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExitQuiz;
