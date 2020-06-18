import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Logger from './Logger';
import ResultItem from './ResultItem';
import { colors } from './theme';
import RequestDetails from './RequestDetails';
import NetworkRequestInfo from './NetworkRequestInfo';

const logger = new Logger();

const NetworkMonitor = () => {
  const [requests, setRequests] = useState(logger.getRequests());
  const [request, setRequest] = useState<NetworkRequestInfo>();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    logger.setCallback((updatedRequests: NetworkRequestInfo[]) => {
      setRequests(updatedRequests);
    });

    logger.enableXHRInterception();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={requests}
        renderItem={({ item }) => {
          return (
            <ResultItem
              request={item}
              onPress={() => {
                setRequest(item);
                setShowDetails(true);
              }}
            />
          );
        }}
      />
      {showDetails && request && (
        <RequestDetails
          onClose={() => setShowDetails(false)}
          request={request}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
  },
});

export default NetworkMonitor;
