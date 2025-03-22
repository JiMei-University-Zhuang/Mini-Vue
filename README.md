# Mini-Vue3(暂时停更

一个基于 Vue3 核心逻辑的最小实现，用于深入学习 Vue3 原理。

## 项目介绍

本项目是一个简化版的 Vue3 实现，主要用于学习和理解 Vue3 的核心原理。通过实现核心功能，我们可以更好地理解 Vue3 的工作方式。

## 项目结构 
```
mini-vue/
├── packages/
│ └── reactivity/ # 响应式系统
│ ├── src/
│ │ ├── reactive.ts # 响应式对象实现
│ │ └── effect.ts # 副作用函数实现
│ └── tests/ # 测试用例
│ └── reactive.spec.ts
```

## 核心功能实现

### 1. 响应式系统 (Reactivity)

响应式系统是 Vue3 的核心特性之一，主要包含以下部分：

#### reactive
- 使用 Proxy 创建响应式对象
- 拦截对象的 get/set 操作
- 实现依赖收集和触发更新

```typescript
const observed = reactive({ count: 0 })
```

#### effect
- 创建副作用函数
- 自动收集依赖
- 数据变化时自动执行

```typescript
effect(() => {
    console.log(observed.count)
})
```

### 2. 依赖收集和触发更新

#### track (依赖收集)
- 使用 WeakMap + Map + Set 的数据结构
- 建立响应式对象、属性和副作用函数之间的映射关系

#### trigger (触发更新)
- 当响应式数据发生变化时
- 查找并执行相关的副作用函数

## 使用示例

```typescript
const observed = reactive({ count: 0 })
let dummy
effect(() => {
  dummy = observed.count
})
console.log(dummy) // 0
observed.count = 1
console.log(dummy) // 1
```


## 进行中的功能

- [x] 基础响应式系统
- [ ] ref 实现
- [ ] computed 实现
- [ ] 虚拟 DOM
- [ ] 组件系统
- [ ] 模板编译

## 学习要点

1. **响应式原理**
   - Proxy 的使用
   - 依赖收集的实现
   - 响应式更新的触发机制

2. **设计模式**
   - 发布订阅模式
   - 代理模式

3. **数据结构**
   - WeakMap 的使用及其优势
   - 依赖图的构建

## 本地开发
```bash
安装依赖
npm install
运行测试
npm test
```

## 参考资料

- [Vue3 官方文档](https://v3.vuejs.org/)
- [Vue3 源码](https://github.com/vuejs/core)

## License

[MIT](LICENSE)
