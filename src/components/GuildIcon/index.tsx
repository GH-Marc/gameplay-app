import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = "https://tm.ibxk.com.br/2021/04/20/20155633841152.jpg";

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
