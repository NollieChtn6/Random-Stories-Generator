import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { initializeDataSource } from "./config/dbConfig";
import { ComplementResolver } from "./resolvers/ComplementResolver";
import { PlaceResolver } from "./resolvers/PlaceResolver";
import { SubjectResolver } from "./resolvers/SubjectResolver";
import { VerbResolver } from "./resolvers/VerbResolver";

const PORT = 4000;

const startServer = async () => {
  await initializeDataSource();
  const schema = await buildSchema({
    resolvers: [ComplementResolver, PlaceResolver, SubjectResolver, VerbResolver],
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`Server ready at ${url}`);
};

startServer();
