import { type MiddlewareFactory } from './compose-middlewares';
import { geolocation } from '@vercel/functions';

export const withGeoip: MiddlewareFactory = (next) => {
  return async (request, event) => {
    const { country } = geolocation(request);
    console.log('COUNTRY :::::: ', country);

    return next(request, event);
  };
};
