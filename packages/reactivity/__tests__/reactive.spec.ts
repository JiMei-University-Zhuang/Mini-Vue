import { reactive } from '../src/reactive'
import { effect } from '../src/effect'

describe('reactive', () => {
    test('basic reactive', () => {
        const original = { count: 0 }
        const observed = reactive(original)
        
        let dummy
        effect(() => {
            dummy = observed.count
        })
        
        expect(dummy).toBe(0)
        observed.count = 1
        expect(dummy).toBe(1)
    })
}) 