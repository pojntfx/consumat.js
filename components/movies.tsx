import * as React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const Movies = () => {
  const { data, error } = useSWR("/api/movies", fetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Movies;
