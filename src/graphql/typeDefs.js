import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

//Adding a path that find all those files "modules", "**", "*.gql"
const typesArray = fileLoader(path.join(__dirname, "modules", "**", "*.gql"));
const typeDefs = mergeTypes(typesArray);

//Return the typeDefs with type Users and Posts
console.log(typeDefs);

export default typeDefs;
