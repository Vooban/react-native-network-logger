import React, { useMemo, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NetworkRequestInfo from '../NetworkRequestInfo';
import { useThemedStyles, Theme } from '../theme';
import ResultItem from './ResultItem';
import Button from './Button';
import SearchBar from './SearchBar';
import { NetworkRequestInfoRow } from '../types';

interface Props {
  requestsInfo: NetworkRequestInfoRow[];
  onPressItem: (item: NetworkRequestInfo['id']) => void;
  onShowMore: () => void;
  showDetails: boolean;
}

const RequestList: React.FC<Props> = ({
  requestsInfo,
  onPressItem,
  onShowMore,
  showDetails,
}) => {
  const styles = useThemedStyles(themedStyles);

  const [searchValue, onChangeSearchText] = useState('');

  const filteredRequests = useMemo(() => {
    return requestsInfo.filter((request) => {
      const value = searchValue.toLowerCase().trim();
      return (
        request.url.toLowerCase().includes(value) ||
        request.gqlOperation?.toLowerCase().includes(value)
      )});
  }, [requestsInfo, searchValue]);

  return (
    <View style={styles.container}>
      {!showDetails && (
        <SearchBar value={searchValue} onChangeText={onChangeSearchText} />
      )}
      <FlatList
        keyExtractor={(item) => item.id}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => (
          <Button onPress={onShowMore} style={styles.more}>
            More
          </Button>
        )}
        data={filteredRequests}
        renderItem={({ item }) => (
          <ResultItem request={item} onPress={() => onPressItem(item.id)} />
        )}
      />
    </View>
  );
};

const themedStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    more: {
      marginLeft: 10,
    },
  });

export default RequestList;
