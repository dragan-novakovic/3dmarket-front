import localForage from "localforage";

const baseUrl = "http://localhost:5280/";

type RegisterError = {
  errors: {
    [key: string]: string[];
  };
  status: number;
  title: string;
};

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export const loginAsync = async (email: string, password: string) => {
  try {
    const response = await fetch(baseUrl + "login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data: LoginResponse = await response.json();

      await localForage.setItem("accessToken", data.accessToken);
      await localForage.setItem("refreshToken", data.refreshToken);
      return { success: true };
      //
    } else {
      const e: RegisterError = await response.json();
      return { success: false, errors: [e.title, e.errors] };
    }
  } catch (error) {
    console.log("Fetch Failed", error);
  }
};

export const registerAsync = async (email: string, password: string) => {
  try {
    const response = await fetch(baseUrl + "register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const e: RegisterError = await response.json();
      return { success: false, errors: [e.title, e.errors] };
    }
  } catch (error) {
    console.log("Fetch Failed", error);
  }
};
