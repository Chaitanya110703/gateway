import { ProviderAPIConfig } from '../types';

const FireworksAIAPIConfig: ProviderAPIConfig = {
  getBaseURL: () => 'https://api.fireworks.ai/inference/v1',
  headers: ({ providerOptions }) => {
    return { Authorization: `Bearer ${providerOptions.apiKey}` };
  },
  getEndpoint: ({ fn, gatewayRequestBody }) => {
    const model = gatewayRequestBody?.model;
    switch (fn) {
      case 'chatComplete':
        return '/chat/completions';
      case 'embed':
        return '/embeddings';
      case 'imageGenerate':
        return `/image_generation/accounts/fireworks/models/${model}`;
      default:
        return '';
    }
  },
};

export default FireworksAIAPIConfig;
