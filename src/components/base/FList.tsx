import React, { forwardRef } from 'react';
import { FlatList, FlatListProps } from 'react-native';

const FList = forwardRef((props: FlatListProps<any>, ref: any) => {
  return (
    <FlatList
      ref={ref}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      decelerationRate={props.pagingEnabled ? 'fast' : 'normal'}
      {...props}
      keyExtractor={(_, index) => index.toString()}
    />
  );
});

export default FList;
