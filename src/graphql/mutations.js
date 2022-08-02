/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUnits = /* GraphQL */ `
  mutation CreateUnits($input: CreateUnitsInput!) {
    createUnits(input: $input) {
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
export const updateUnits = /* GraphQL */ `
  mutation UpdateUnits($input: UpdateUnitsInput!) {
    updateUnits(input: $input) {
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
export const deleteUnits = /* GraphQL */ `
  mutation DeleteUnits($input: DeleteUnitsInput!) {
    deleteUnits(input: $input) {
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
