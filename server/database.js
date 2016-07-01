/**
 * Created by jevgenir on 01/07/2016.
 */


const todosCollection = [
  {id: 1, title: "Wash the dishes!!", description: 'But what if we don’t have a CSS or HTML, like in React Native? Then we have a problem. There are multiple ways to include images and SVG’s into a native application but this requires some knowledge of the native platform and is also very labor intensive because every time you want to an icon you will need to import it into your project.', color: "coral"},
  {id: 2, title: "Eat the cake", description: 'But what if we don’t have a CSS or HTML, like in React Native? Then we have a problem. There are multiple ways to include images and SVG’s into a native application but this requires some knowledge of the native platform and is also very labor intensive because every time you want to an icon you will need to import it into your project.', color: "skyblue"},
  {id: 3, title: "Train to burn calories from cake", description: 'But what if we don’t have a CSS or HTML, like in React Native? Then we have a problem. There are multiple ways to include images and SVG’s into a native application but this requires some knowledge of the native platform and is also very labor intensive because every time you want to an icon you will need to import it into your project.', color: "lime"}
];

function getAll() {
  return todosCollection;
}

function getById(id) {
  return todosCollection.filter(item => item.id === id)[0];
}

export {
  getAll,
  getById
};