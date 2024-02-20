import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextjsmobile.app',
  appName: 'nextjs-mobile',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
