import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';

const UserProfileImage = props => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        style={{width: props.imageDimensions, height: props.imageDimensions}}
        source={props.profileImage}
      />
    </View>
  );
};
UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};
export default UserProfileImage;