export const changeUsersName = (name) => {
    return {
      type: "CHANGEUSERNAME",
      payload: name,
    };
  };

  export const changeUsersAge = (age) => {
    return {
      type: "CHANGEAGE",
      payload: age,
    };
  };