import { PluginContext, PluginHandler, PluginParameters } from '../types';
import { getText } from '../utils';

export const handler: PluginHandler = async (
  context: PluginContext,
  parameters: PluginParameters
) => {
  let error = null;
  let verdict = false;
  let data = null;

  // The following code is an example of a plugin that uses regex to match a string in the response body.
  // The plugin will return true if the regex matches the string, and false otherwise.
  try {
    const regex = parameters.regex;
    let textToMatch = getText(context);

    if (regex && textToMatch && !error) {
      const match = textToMatch.match(regex);
      verdict = match ? true : false;
    } else {
      error = new Error('Missing regex or text');
    }
  } catch (e) {
    error = e as Error;
  }

  return { error, verdict, data };
};
