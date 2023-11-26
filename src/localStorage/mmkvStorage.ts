import { MMKVInstance, MMKVLoader } from "react-native-mmkv-storage";
import mmkvFlipper from 'rn-mmkv-storage-flipper';

export const mmkvStorage: MMKVInstance = new MMKVLoader().withInstanceID('lolo-storage').initialize();

mmkvFlipper(mmkvStorage);
