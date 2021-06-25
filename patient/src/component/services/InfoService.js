import http from "../http-common.js";

export const create = (data) => {
  return http.post("/users", data);
};

export const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};


export default{
  create,
  update
};
