export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch("/users.json");
    const data = await response.json();
    const user = data.users.find(
      (user) => user.username === username && user.password === password,
    );
    console.log(user);
    return user || null;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};
