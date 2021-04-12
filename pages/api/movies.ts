import { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/query";

const movies = async (req: NextApiRequest, res: NextApiResponse) => {
  const movies = await query("select * from movies", []);

  res.status(200).json(movies);
};

export default movies;
