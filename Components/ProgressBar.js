import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const ProgressBar = ({ status }) => {
  const getStatusLabel = () => {
    switch (status) {
      case 0:
        return 'समीक्षा के अंतर्गत';
      case 1:
        return 'कक्षा शिक्षक द्वारा समीक्षा की गई';
      case 2:
        return 'प्राचार्य द्वारा समीक्षा की गई';
      case 3:
        return 'शिकायत का समाधान हो गया';
      default:
        return 'अज्ञात स्थिति';
    }
  };

  const getProgressColors = () => {
    switch (status) {
      case 0:
        return ['#6495ED', '#e2e2e2'];
      case 1:
        return ['#6495ED', '#e2e2e2'];
      case 2:
        return ['#6495ED', '#e2e2e2'];
      case 3:
        return ['#6495ED', '#e2e2e2'];
      default:
        return ['#6495ED', '#e2e2e2'];
    }
  };

  const renderCircles = () => {
    const circles = [];

    for (let i = 0; i < 4; i++) {
      circles.push(
        <View
          key={i}
          style={[
            styles.circle,
            { backgroundColor: getProgressColors()[i <= status ? 0 : 1] },
          ]}
        />
      );
    }

    return circles;
  };

  return (
    <View style={styles.progressBarContainer}>
      <LinearGradient
        colors={getProgressColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.progressBackground}
      >
        {renderCircles()}
      </LinearGradient>
      <Text style={styles.statusText}>{getStatusLabel()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: '100%',
  },
  progressBackground: {
    flexDirection: 'row',
    height: 2,
    borderRadius: 5,
    alignItems : "center",
    justifyContent: 'space-between',
    width :"65%",
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 15,
  },
  statusText: {
    fontSize: width * 0.035,
    color: '#6495ED',
    fontWeight: 'bold',
    textAlign: 'right',
    width: '30%',
  },
});

export default ProgressBar;