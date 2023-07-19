export async function getAll() {
  const ENDPOINT = 'http://localhost:3000/convidados';
  const data = await (await fetch(ENDPOINT)).json();
  return data;
}

export async function confirmar(id, ) {
  if (id) {
    try {
      const url = `http://localhost:3000/convidados/confirmar/${id}`;
      await fetch(url, { method: 'PUT' });
      return false
    } catch (error) {
      return error.message
    }
  }
}

export async function esconder(id) {
  if (id) {
    try {
      const url = `http://localhost:3000/convidados/esconder/${id}`;
      await fetch(url, { method: 'PUT' });
      return false;
    } catch (error) {
      return error.message;
    }
  }
}