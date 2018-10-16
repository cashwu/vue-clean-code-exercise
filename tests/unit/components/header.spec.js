import header from '@/components/Header.vue'
import {shallowMount} from '@vue/test-utils'

describe('header', () => {
    // let wrapper
    // beforeEach(() => {
    //     wrapper = shallowMount(header, {
    //         methods : {
    //             getDate() {
    //                 return new Date();
    //             }
    //         }
    //     })
    // })

    function wrapper() {
        return shallowMount(header)
    }

    function wrapperInject(date){
            return shallowMount(header, {
                methods : {
                    getDate() {
                        return date;
                    }
                }
            })
    }

    it('default value', () => {
        expect(wrapper().vm.profile).toEqual({name : 'Jackson', birthday : {month : 10, day : 18}})
    })

    it('not birthday', () => {
        expect(wrapper().vm.profileCaption).toEqual('Jackson')
    })

    it('is birthday', () => {
        var wapper = wrapperInject(new Date(2018, 9, 18))
        expect(wapper.vm.profileCaption).toEqual('Jackson🎂')
    })

})
