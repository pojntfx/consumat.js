import { Client } from "pg";

const query = async (query: string, parameters: string[]) => {
  const client = new Client();
  await client.connect();

  const res = await client.query(query, [parameters]);
  await client.end();

  return res;
};

export default query;
