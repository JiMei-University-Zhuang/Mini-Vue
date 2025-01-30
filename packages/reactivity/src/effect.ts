// 实现effect
export let activeEffect: any

// 存储依赖关系的 WeakMap
const targetMap = new WeakMap()

export function track(target: object, key: string | symbol) {
    if (!activeEffect) return
    
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    
    let dep = depsMap.get(key)
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    
    dep.add(activeEffect)
}

export function trigger(target: object, key: string | symbol) {
    const depsMap = targetMap.get(target)
    if (!depsMap) return
    
    const dep = depsMap.get(key)
    if (dep) {
        dep.forEach((effect: any) => effect())
    }
}

export function effect(fn: Function) {
    // 包装原始函数
    const _effect = function() {
        // 1. 标记当前正在执行的 effect
        activeEffect = _effect
        // 2. 执行原始函数
        fn()
    }
    // 3. 立即执行一次，进行初始化
    _effect()
    return _effect
}