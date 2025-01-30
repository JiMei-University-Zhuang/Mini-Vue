import { track, trigger } from './effect'

// 实现最基础的响应式系统
export function reactive<T extends object>(target: T): T {
    return new Proxy(target, {
        get(target, key) {
            const res = Reflect.get(target, key)
            track(target, key) // 依赖收集
            return res
        },
        set(target, key, value) {
            const res = Reflect.set(target, key, value)
            trigger(target, key) // 触发更新
            return res
        }
    })
}