# description

1、树结构转换为扁平化的数组结构
2、扁平化的数组转化为树结构

# thinking

1、树结构一般是嵌套性质，根节点一般约定为 id:0，思路就是深度遍历树结构，声明一个数组，判断是否有 children，如果有，则继续往数组后拼接
2、数组转化为树，首先基于原数据，遍历构造每一个对象的 children，另外利用一个对象，存储下每一个对象的 key 和 value 的映射，然后再遍历原数组，如果遇到节点的 id 为 0，则表示为根节点，则推入数组，否则利用 map 进行 children 的操作