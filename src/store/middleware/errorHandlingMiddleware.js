// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/09/30
// Modified-Date: 


import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!');
      console.log('api', api)
      console.log('next', next)
      console.log('action', action)

      toast.warn(
          'data' in action.error
            ? (action.error.data.message)
            : action.error.message,
      );
    }
  
    return next(action);
  };