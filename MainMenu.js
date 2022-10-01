import { View, Text } from "react-native";
import React from "react";

export default function MainMenu() {
  const {isLoading, popular} = usePopular();

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <AnimationComponent imgName="loading" width={300} height={300} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerT}>
      <View style={styles.header}>
        <Text style={styles.headerTopic}>My Movies</Text>
      </View>
      <SearchComponent />
      <View style={styles.containerMovies}>
        <Text style={styles.MovieTopic}>Popular Movies</Text>
        <RenderMovies movie={popular} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E61',
  },
  containerT: {
    flex: 1,
    backgroundColor: '#141E61',
  },
  header: {
    marginTop: 10,
    height: Platform.OS === 'ios' ? 30 : 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTopic: {
    color: '#14C38E',
    fontSize: 23,
    fontWeight: 'bold',
  },
  containerMovies: {
    flex: 1,
    marginTop: 20,
  },
  MovieTopic: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 20,
    marginBottom: 20,
  },
});
