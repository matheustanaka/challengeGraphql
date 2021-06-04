import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

//Adding a path that find all those files "modules", "**", "resolvers.js"
const resolversArray = fileLoader(
  path.join(__dirname, "modules", "**", "resolvers.js")
);
const resolvers = mergeResolvers(resolversArray);

export default resolvers;
