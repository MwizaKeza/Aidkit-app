import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ExitQuiz from '../src/ExitQuiz.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firstAidData from './firstAidData';

const StepDetailScreen = ({ route }) => {
  const { step } = route.params;
  const navigation = useNavigation();
  const [showExitQuiz, setShowExitQuiz] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    loadScore();
  }, []);

  const loadScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem(`score_${step.id}`);
      if (savedScore !== null) {
        setScore(parseInt(savedScore));
      }
    } catch (error) {
      console.error('Error loading score:', error);
    }
  };

  const saveScore = async (newScore) => {
    try {
      await AsyncStorage.setItem(`score_${step.id}`, newScore.toString());
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  const handleQuizComplete = (selectedAnswers) => {
    const stepData = firstAidData.find((data) => data.id === step.id);

    if (!stepData || !stepData.questions) {
      console.error('Step or questions not found');
      return;
    }

    let newScore = 0;

    for (let i = 0; i < stepData.questions.length; i++) {
      if (selectedAnswers[i] === stepData.questions[i].correctIndex) {
        newScore++;
      }
    }

    console.log('Selected Answers:', selectedAnswers);
    console.log('Score:', newScore);

    saveScore(newScore); // Saves the new score to Storage

    setScore(newScore);
    setShowExitQuiz(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/imgs/right-arrow.png')}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>

        <Text style={styles.stepTitle}>{step.title}</Text>
      </View>

      <ScrollView>
        <Image source={step.instructionImage} style={styles.image} />
        {step.steps.map((s, index) => (
          <Text key={index} style={styles.stepText}>{`${index + 1}. ${s}`}</Text>
        ))}

        {showExitQuiz && (
          <ExitQuiz
            courseId={step.id}
            questions={step.questions}
            onComplete={handleQuizComplete}
          />
        )}

        {!showExitQuiz && step.questions && step.questions.length > 0 && (
          <TouchableOpacity
            style={styles.quizButton}
            onPress={() => setShowExitQuiz(true)}
          >
            <Text style={styles.quizButtonText}>Take Quiz</Text>
          </TouchableOpacity>
        )}

        {score !== null && (
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Your Score: {score}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,    
  },
  
  backButton: {
    position: 'absolute',
    top: 35,
    left: 5,
    zIndex: 2,
    

  },
  backButtonImage: {
    width: 17,
    height: 26,
    resizeMode: 'contain',
  },

  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 14,
    marginLeft: 40,
  },
  stepText: {
    fontSize: 18,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 8,
  },

  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 20,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },

  quizButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  quizButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  userScore: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default StepDetailScreen;


