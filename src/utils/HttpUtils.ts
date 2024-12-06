const BASE_URL = "http://localhost:5280/";

export class HttpUtils {
  public static getBaseUrl(): string {
    return BASE_URL;
  }

  public static getBearerToken(): string {
    return `Bearer ${localStorage.getItem("accessToken")}`;
  }
}
