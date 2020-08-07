const API_ROOT = "https://localhost:3000";

export async function client(endpoint, method, body, token) {
  const reponse = await fetch(`${API_ROOT}/${endpoint}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "appplication/json",
    },
  });
  let data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.errors.message);
  }
}
