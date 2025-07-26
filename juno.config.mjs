import {defineConfig} from '@junobuild/config';

/** @type {import('@junobuild/config').JunoConfig} */
export default defineConfig({
  satellite: {
    ids: {
      development: '7suu2-zyaaa-aaaal-asivq-cai',
      production: '7suu2-zyaaa-aaaal-asivq-cai'
    },
    source: 'dist',
    predeploy: ['npm run build']
  }
});
