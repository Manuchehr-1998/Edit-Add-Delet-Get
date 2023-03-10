import render from "./dom.js";
import { idx } from "./dom.js";
// async get Users
export default async function getUsers() {
  try {
    const { data } = await axios.get(
      `https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department`
    );

    render(data);
  } catch (error) {}
}
//async add
async function addUser(user) {
  try {
    const { data } = await axios.post(
      `https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department`,
      user
    );

    getUsers();
  } catch (error) {
    console.log(error);
  }
}
// async edit users
async function editUser(user) {
  try {
    const { data } = await axios.put(
      `https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department/${idx}`,
      user
    );
    getUsers();
  } catch (error) {}
}
// async delete User
async function deletUSer(id) {
  try {
    const { data } = await axios.delete(
      `https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department/${id}`
    );
    getUsers();
  } catch (error) {}
}

export { addUser, editUser, deletUSer };
