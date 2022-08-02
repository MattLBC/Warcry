/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUnits = /* GraphQL */ `
  subscription OnCreateUnits($Name: String) {
    onCreateUnits(Name: $Name) {
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
export const onUpdateUnits = /* GraphQL */ `
  subscription OnUpdateUnits($Name: String) {
    onUpdateUnits(Name: $Name) {
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
export const onDeleteUnits = /* GraphQL */ `
  subscription OnDeleteUnits($Name: String) {
    onDeleteUnits(Name: $Name) {
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
