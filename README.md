## @Vooban/react-native-network-logger

Forked from [@alexbrazier/react-native-network-logger](https://github.com/alexbrazier/react-native-network-logger)

- Branch `Vooban` contains our changes.   
- Branch `Master` follows the `@alexbrazier`    

All changes made in this edition were pushed to the main repository as a Pull Request

### Features
- [ ] Added `maxRows` to `<NetworkLogger />` to increase the list performance https://github.com/alexbrazier/react-native-network-logger/pull/91
- [ ] Added `compact` to `<NetworkLogger />` to display more rows on the screen https://github.com/alexbrazier/react-native-network-logger/pull/92
- [ ] Added `stopNetworkLogging()` to disable the logger when needed https://github.com/alexbrazier/react-native-network-logger/pull/93
- [x] Added `Pause/Resume` option to be able to prevent new requests to be added to the list https://github.com/alexbrazier/react-native-network-logger/pull/77

### Improvements
- [ ] Prevented the list to slow down by debouncing all requests updates https://github.com/alexbrazier/react-native-network-logger/pull/90
- [ ] `Pause/Resume` option will apply all logs that were not printed while paused https://github.com/alexbrazier/react-native-network-logger/pull/89
- [x] Optimized the list performance by reducing the data sent to the list using `.toRow()` for the `NetworkRequestInfo` https://github.com/alexbrazier/react-native-network-logger/pull/78

### Bug fixes
- [ ] Fixed requests not being updated when `maxRequests` is reached https://github.com/alexbrazier/react-native-network-logger/pull/88
- [x] Fixed copy-paste of Network details on Android https://github.com/alexbrazier/react-native-network-logger/pull/79