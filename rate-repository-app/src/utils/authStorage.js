import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem(
      `${this.namespace}:accesstoken`
    );

    return rawAccessToken ? JSON.parse(rawAccessToken) : undefined;
  }

  // Add the access token to the storage
  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:accesstoken`,
      JSON.stringify(accessToken)
    );
  }

  // Remove the access token from the storage
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accesstoken`);
  }
}

export default AuthStorage;
