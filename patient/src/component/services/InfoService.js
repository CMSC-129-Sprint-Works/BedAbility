import http from "../http-common.js";

export const get = (id) => {
  return http.get(`/users/${id}`);
};

export const create = (data) => {
  return http.post("/users", data);
};

export const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

export const remove = (id) => {
  return http.delete(`/users/${id}`);
};

export default{
  get,
  create,
  update,
  remove
};
