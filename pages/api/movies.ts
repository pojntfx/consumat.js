import { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/query";
import { getSession } from "next-auth/client";

const movies = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    const movies = await query("select * from movies", []);

    res.status(200).json(movies);
  } else {
    res.status(401);
  }
};

export default movies;
