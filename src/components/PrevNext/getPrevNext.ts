import { useRouter } from 'next/router';
import { GitHubJumplist, GitHubJumplistItem } from '../../types/GitHub';
import deepFindByPath from './deepFindByPath';

interface IGetPrevNext {
  prev: GitHubJumplistItem,
  next: GitHubJumplistItem
}

const getPrevNext = (jumplist: GitHubJumplist): IGetPrevNext => {
  const {
    asPath,
  } = useRouter();

  const currentPath = deepFindByPath(jumplist, asPath);

  const {
    index,
    parentIndex,
    isFirst,
    isLast,
  } = currentPath;

  const isNested = parentIndex !== undefined;

  // GET PREVIOUS

  let prev;

  if (isNested) {
    const prevInParent = jumplist[parentIndex - 1];
    if (!isFirst) {
      prev = jumplist[parentIndex].list[index - 1]; // get previous sibling in current nested list
    }
    if (isFirst && prevInParent.list) {
      prev = prevInParent.list[prevInParent.list.length - 1]; // get last item in the previous nested list
    }
    if (isFirst && !prevInParent.list) {
      prev = prevInParent; // get previous parent item, which has no nested list
    }
  }

  if (!isNested && !isFirst) {
    const prevItem = jumplist[index - 1];
    if (prevItem.list) {
      prev = prevItem.list[prevItem.list.length - 1];
    }
    if (!prevItem.list) {
      prev = prevItem; // if not nested, and not the last, get the next sibling in current parent list
    }
  }

  // GET NEXT

  let next;

  if (isNested) {
    const nextInParent = jumplist[parentIndex + 1];
    if (!isLast) {
      next = jumplist[parentIndex].list[index + 1]; // get next sibling in current nested list
    }
    if (isLast && nextInParent.list) {
      next = nextInParent.list[nextInParent.list.length - 1]; // get last item in the next nested list
    }
    if (isLast && !nextInParent.list) {
      next = nextInParent; // get next parent item, which has no nested list
    }
  }

  if (!isNested && !isLast) {
    const nextItem = jumplist[index + 1];
    if (nextItem.list) {
      [next] = nextItem.list;
    }
    if (!nextItem.list) {
      next = nextItem; // if not nested, and not the last, get the next sibling in current parent list
    }
  }

  return {
    prev,
    next,
  };
};

export default getPrevNext;
