
export type PageProps = {
  postId: string
  commentId: string
  searchQuery?: string
}





export type RequiredKeys<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? never : K
}[keyof T]


export  type Equals<X, Y> =
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2) ? true : false