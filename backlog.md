# Backlog "Random Story Generator"

Last updated on: December, 3, 2024

## Backend

- [ ] Generate stories by topic:
  - [x] Create table "topics"
  - [ ] Create TopicResolver
  - [ ] Create query: randomStoryByTopic

- [ ] Store stories in database:
  - [ ] Create table "stories"
  - [ ] Each time a story is generated, save it into database

- [ ] Implement votes
  - [ ] Create query: story (fecth a story from table "stories")
  - [ ] Create mutation: likeStory

## Frontend

### Features

- [ ] Select a topic from a dropdown menu to generate a story based on this topic
- [ ] Votes:
  - [ ] Display a random story (from database)
  - [ ] Allow user to 'like' story
  - [ ] Display leaderboard with "top ten most liked stories"

### Design

- [x] Import favicon
- [ ] Update app style (colors, layout, etc.)

### Fix

- [ ] Content flickering on story refresh

### Nice-to-Have
