import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReportMissing from './components/ReportMissing';
import MarkFound from './components/MarkFound';
import NewsFeed from './components/NewsFeed';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Report Missing" component={ReportMissing} />
        <Tab.Screen name="Mark Found" component={MarkFound} />
        <Tab.Screen name="News Feed" component={NewsFeed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;