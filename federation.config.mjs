import { withNativeFederation, shareAll } from '@angular-architects/native-federation/config';

export default withNativeFederation({
  name: 'farmOperations',

  exposes: {
    './fieldsModule': './src/app/fields-component/fields-component.ts',
    './cropModule': './src/app/crop-component/crop-component.ts',
  },

  shared: {
    ...shareAll(
      { singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' },
    
    ),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // ignoreUnusedDeps is enabled by default now
    // ignoreUnusedDeps: true,

    // Opt-in: groups chunks in remoteEntry.json for smaller metadata file
    denseChunking: true,
  },
});
