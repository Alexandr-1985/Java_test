export const DIGITS_ID = 5; //количество id, где id будет контролируемое поле
export const MIN_COST = 5000; //мин цена, где cost будет контролируемое поле
export const MAX_COST = 15000; //макс цена
export const LECTURES = ['Abraham', 'Izhak', 'Yaakob', 'Yosef', 'Mozes', 'Aharon']; //Лекторы, где Лекторы - бужет опции
//Будут учавствовать в генерации случайных курсов и курсФорм где Title будет опции
export const TITLES = ['React', 'HTML CSS', 'JavaScript', 'Java', 'Spring', 'Microservices Architecture'];
//Создаем 5ть констант, которые в ряду синих прямоугольников,
export const PATH_COURSES = '/courses'; //все пути к константам пишутся через /
export const PATH_TITLE_STATISTICS = '/title/statistics';
export const PATH_COST_STATISTICS ='/cost/statistics';
export const PATH_COURSES_SEARCH = '/search';
export const PATH_COURSES_GENERATION = '/generation';
export const PATH_COURSES_COURSES_FORM = '/courses/form';
export const PATH_COURSES_COURSES_TABLE = '/courses/table';
export const PATH_COURSES_SEARCH_COURSES_TABLE = '/courses/search/courses/table';

//строим массив из объектов которые позволяют написать навигатор и при добавлении функ-ий, в нем добавляем
//он представляет из себя массив объектов, каждый объект описывает о навигационном пункте
//порядок будет отображен в меню. Path - св-во : PATH...-  значение
export const LINKS = [
    {path: PATH_COURSES, label: 'Courses'}, //описывает информацию о link (путь : метка : значение)
    {path: PATH_COURSES_COURSES_FORM, label: 'Courses Form'},
    {path: PATH_COURSES_COURSES_TABLE, label: 'Courses Table'},
    {path: PATH_TITLE_STATISTICS, label: 'Title Statistics'},
    {path: PATH_COURSES_GENERATION, label: 'Courses Generation'},
    {path: PATH_COURSES_SEARCH, label: 'Searching'},
    {path: PATH_COURSES_SEARCH_COURSES_TABLE, label: 'Courses Table'},
    {path: PATH_COST_STATISTICS, label: 'Cost Statistics'},
]
