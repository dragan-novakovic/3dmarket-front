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
  email: "ff@ff.com",
  accessToken: "",
  refreshToken: "",
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    login: async (email, password) => {
      console.log("login");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set((state) => ({
        email: "tt@tt.com",
        accessToken: "no",
        refreshToken: "no",
      }));
    },
    register: async (userDto) => {
      // register logic
    },
  }));
};
