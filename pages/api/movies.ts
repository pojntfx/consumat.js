import { NextApiRequest, NextApiResponse } from "next";

const movies = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      id: 1,
      name: "2001",
      description: "voluptatem dolor est",
    },
  ]);
};

export default movies;
