import Buyable from './Buyable'

export default class Gadget implements Buyable {
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly manufacturer: string,
        readonly parameters: string[],
        readonly price: number
    ) {        
    }
}