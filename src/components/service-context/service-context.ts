import React from "react";
import BookStoreService from "../../types/service";

const service: BookStoreService = {
  data: [],
  getBooks() {
    return new Promise(resolve => {
      resolve(new Error('Context was not provided'));
    });
  }
};

const ServiceContext = React.createContext(service)

export default ServiceContext;