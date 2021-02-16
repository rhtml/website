import { GitHubJumplist } from '../../types/GitHub';

interface IDeepFindByPath {
  index: number,
  parentIndex: number,
  label: string,
  path: string,
  isFirst: boolean,
  isLast: boolean,
}

const deepFindByPath = (array: GitHubJumplist, currentPath: string): IDeepFindByPath => {
  let foundPath = {
    index: -1,
    parentIndex: undefined,
    label: '',
    path: '',
    isFirst: undefined,
    isLast: undefined,
  };

  const recursiveFind = (nestedArray, parentIndex?: number) => {
    if (Array.isArray(nestedArray) && nestedArray.length > 0) {
      nestedArray.forEach((item, index) => {
        const {
          list,
          path,
        } = item;

        if (list) {
          recursiveFind(list, index);
        }

        if (currentPath.startsWith(path)) {
          foundPath = {
            parentIndex,
            index,
            isFirst: index === 0,
            isLast: index === nestedArray.length - 1,
            ...item,
          };
        }
      });
    }
  };

  recursiveFind(array);

  return foundPath;
};

export default deepFindByPath;
