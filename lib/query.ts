import { Client } from "pg";

const query = async (query: string, parameters: string[]) => {
  // Connect to the db
  const client = new Client({
    ssl: true,
  });
  await client.connect();

  // Run the query
  const res = await client.query(
    query,
    parameters.length == 0 ? undefined : [parameters]
  );

  // Disconnect from the db
  (async () => {
    await client.end();
  })();

  return res.rows;
};

export default query;
