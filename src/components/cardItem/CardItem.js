

import { styles } from './CardItemStyle'


import React, { useState } from 'react';
import { View, Switch, } from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#F2F2F2', true: '#E0E0E0' }}
        thumbColor={isEnabled ? 'blue' : '#E0E0E0'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};



export default App;