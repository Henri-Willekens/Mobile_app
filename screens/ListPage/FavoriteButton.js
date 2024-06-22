import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FavoriteButton = ({ onPress, isFavorite }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name={isFavorite ? 'star' : 'staro'} size={24} color="gold" />
       </TouchableOpacity>
  );
};

export default FavoriteButton;