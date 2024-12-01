import { graphql } from "../graphQL";

export const RANDOM_STORY_QUERY = graphql(`
  query randomStory {
    randomStory
  }
`);
