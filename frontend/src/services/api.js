const HOST = process.env.REACT_APP_API_HOST || 'localhost:3000';
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';
const baseUrl = `${PROTOCOL}://${HOST}`

export async function getAll() {
  const ENDPOINT = `${baseUrl}/convidados`;
  const data = await (await fetch(ENDPOINT)).json();
  return data;
}

export async function confirmar(id, ) {
  if (id) {
    try {
      const url = `${baseUrl}/convidados/confirmar/${id}`;
      await fetch(url, { method: 'PUT' });
      return false;
    } catch (error) {
      return error.message;
    }
  }
}

export async function esconder(id) {
  if (id) {
    try {
      const url = `${baseUrl}/convidados/esconder/${id}`;
      await fetch(url, { method: 'PUT' });
      return false;
    } catch (error) {
      return error.message;
    }
  }
}
