import { createStore } from "zustand/vanilla";

export type UserState = {
  email: string;
  accessToken: string;
  refreshToken: string;
};

type UserDto = {
  email: string;
  password: string;
};

export type UserActions = {
  login: (email: string, password: string) => void;
  register: (userDto: UserDto) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  email: "",
  accessToken: "",
  refreshToken: "",
};

export const createCounterStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    login: async (email, password) => {
      // login logic
    },
    register: async (userDto) => {
      // register logic
    },
  }));
};
