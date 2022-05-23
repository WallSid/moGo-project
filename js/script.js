// Получаем объект body

const bodyElement = document.body;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Перебор коллекции с помощью for...of

// for(let node of bodyChildren) {
//     console.log(node);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Получение соседнего(previousSibling), родительского(parentNode) и следующего(nextSibling) узла

const previusSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

// console.log(previusSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Получаем коллекцию всех дочерних элементов (children(только элементы, только HTML-тэги)) 

const bodyChildrenNodes = bodyElement.childNodes;
// console.log(bodyChildrenNodes);

// и коллекцию всех дочерних узлов(childNodes(с .text и т.д.)).

const bodyElementChildrens = bodyElement.children;
// console.log(bodyElement.children);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Первый(firstElementChild) и последний(lastElementChild) элемент объекта

const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Сосние и родительский элементы

const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;
// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentElement);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Получение произвольных элементов дерева DOM

// Самый универсальный методо поиска - elem.querySelectorAll(CSS);
// Можно использовать любой CSS селектор.

// selector Class
const elemsOne = document.querySelectorAll('.Services__list-block');
// console.log(elemsOne);

// selector Tag
const elemsTwo = document.querySelectorAll('section');
// console.log(elemsTwo);

// mixed Tag and Class selector
const elemsThree = document.querySelectorAll('h2.Services__title');
console.log(elemsThree);

// 1st nesting level selector
const elemsFour = document.querySelectorAll('.Services__list-block>div');
// console.log(elemsFour);