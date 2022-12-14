import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },

  {
    _id: uuid(),
    categoryName: "HTML & CSS",
  },
  {
    _id: uuid(),
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    categoryName: "ReactJS",
  },
  {
    _id: uuid(),
    categoryName: "Others",
  },
];
