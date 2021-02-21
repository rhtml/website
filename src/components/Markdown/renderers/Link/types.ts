type LinkNode = {
  type: string,
  value: string
}

type NodeObj = {
  children: LinkNode[],
}

export type LinkProps = {
  href?: string,
  node: NodeObj
}
