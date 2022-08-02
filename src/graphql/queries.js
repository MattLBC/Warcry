/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUnits = /* GraphQL */ `
  query GetUnits($Name: String!) {
    getUnits(Name: $Name) {
      Name
      Faction
      Move
      Points
      Toughness
      Wounds
      Runemarks
      Attacks
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: TableUnitsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Name
        Faction
        Move
        Points
        Toughness
        Wounds
        Runemarks
        Attacks
      }
      nextToken
    }
  }
`;
