import startServer from "./startServer";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

//Running the function startServer();
startServer({ typeDefs, resolvers });
