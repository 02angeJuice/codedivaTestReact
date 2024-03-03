import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {bearSlice} from './bearSlice';
import {langSlice} from './langSlice';
import {pinSlice} from './pinSlice';
// import {bearSlice, langSlice} from './SliceStore';

export const useBoundStore = create(
  persist(
    (...a) => ({
      ...bearSlice(...a),
      ...langSlice(...a),
      ...pinSlice(...a),
    }),
    {name: 'bound-store', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
