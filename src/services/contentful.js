import { createClient } from "contentful";

// Initialise contentful client
const client = createClient({
  space: "r62v13wsfg0x",
  accessToken: "v1jWRnRaEDzsbNNXwx7yeHxz6NoInSKnmfKh3oai5IQ",
});

/**
 * Returns a single content entry using the id and optional query object
 * @param {*} entryId entry ID to return
 * @param {*} query optional  query object
 */
export const getEntry = async (entryId = "", query = {}) =>
  client
    .getEntry(entryId, query)
    .then((res) => ({ success: true, item: res.fields }))
    .catch(() => ({ success: false, item: null }));

/**
 * Returns multiple content entries as an ID keyed object based on query object passed
 * @param {*} query query object to specify entries to return
 */
export const getEntries = async (query = {}) =>
  client
    .getEntries(query)
    .then((res) => ({
      success: true,
      items: res.items,
    }))
    .catch(() => ({ success: false, items: null }));
