import { graphql } from "../graphql";

export const RANDOM_STORY_QUERY = graphql(`
  query randomStory {
    randomStory
  }
`);
